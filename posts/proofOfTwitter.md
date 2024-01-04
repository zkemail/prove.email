---
title: "Building Proof of Twitter using ZK Email"
date: 2023-08-18T22:12:03.284Z
type: Post
draft: false
recommanded: false
slug: "tutorial"
category: "10 min read"
tags: ["intro"]
description: "This tutorial guides you through creating a Twitter circom circuit using ZK Email's libraries.
---

# Building Proof of Twitter using ZK Email

## Introduction

Emails serve as our gateway to various online services and platforms. ZK Email uses ZK proofs to authenticate these interactions while preserving privacy.

 This guide will walk you through setting up a circuit that enables you to verify your Twitter username on-chain, without disclosing any information beyond the username itself. This process uses ZK Email libraries and regex verification to ensure the authenticity and privacy of your Twitter username, allowing you to mint an NFT upon completion.

## ZK Email Library

The ZK Email library contains 3 packages. 

- **zk-email/helpers** - helper functions to help generate and verify the inputs of the circuit

- **zk-email/contracts** - contains the DKIM Registry for public domains (google, yahoo, etc)

- **zk-email/circuits** - circuit templates that are used in creating your circuit

## Setting up the Repository

Create a new folder and initiate your repository:

```
npm init -y
```

Install all three packages by running:

```bash
npm install @zk-email/circuits @zk-email/helpers @zk-email/contracts
```

## Preparing the Email

What we are trying to get is the "Forgot your password" email from Twitter. This email contains a unique link that allows the user to reset their password. By verifying this email, we can ensure that the user has access to the associated Twitter account.


Let's start by obtaining the raw email file:

1. Initiate a password reset process on Twitter to send yourself a reset email.

2. Locate the email from Twitter in your inbox and download its headers. You can usually find this option under a menu represented by three dots, then select 'Download Message'.

For different email clients, the process varies slightly:

### Outlook
If you're using Outlook, switch to plain text mode. Then, copy and paste the 'full email details' into the textbox on the client-side webpage.

### Gmail and Yahoo
For Gmail and Yahoo users, select 'Download Original Message', then copy and paste the contents into the textbox.

3. Finally, copy and paste the entire contents of the file into your .eml file.


## Generating the Input for ZKRegex

Now, let's generate the input for a zkregex using zkregex.com. This tool will help us create a regular expression (regex) that matches the pattern of a Twitter username in the email body.

1. Go to [zkregex.com](https://tool.zkregex.com/).

2. Enter the regex for a Twitter username in the "Regex Pattern" field. We'll use `@([a-zA-Z0-9_]+).`

3. Input example Twitter usernames in the "Input 1", "Input 2", and "Input 3" fields, like `@zkemail`, `@zkregex`, and `@zk_circuit`.

4. Click "Test" to generate and test the Circom and Halo2 circuits.

![ZkRegex Tool](/public/zkTool.png)

5. In the "Select which states to be revealed" step, choose the states that correspond to the Twitter username.

6. Click "Generate" to get the Circom code for your circuit.

This circuit verifies a Twitter username without revealing any other information. Use it in your zkEmail application to authenticate Twitter usernames on-chain. For this tutorial we will name it `twitter_reset_regex`

## Creating Inputs for Your Circuit

Next, we generate inputs for your circuit using the ZK Email helpers SDK. This example uses a Twitter verification circuit, but the principles can be applied to any circuit you're working with.

Code Example

You can create a `inputs.ts` file and place this code inside:
``` typescript
import { bytesToBigInt, fromHex } from "@zk-email/helpers";
import { generateCircuitInputs } from "@zk-email/helpers";
import { verifyDKIMSignature } from "@zk-email/helpers"
import fs from "fs"
import path from "path"

export const STRING_PRESELECTOR = "email was meant for @";
export const MAX_HEADER_PADDED_BYTES = 1024;
export const MAX_BODY_PADDED_BYTES = 1536;

export async function generateTwitterVerifierCircuitInputs() {
    const rawEmail = fs.readFileSync(
        path.join(__dirname, "./emls/rawEmail.eml"),
        "utf8"
      );
    const dkimResult = await verifyDKIMSignature(Buffer.from(rawEmail));
    const emailVerifierInputs = generateCircuitInputs({
        rsaSignature: dkimResult.signature,
        rsaPublicKey: dkimResult.publicKey,
        body: dkimResult.body,
        bodyHash:dkimResult.bodyHash,
        message: dkimResult.message,
        shaPrecomputeSelector: STRING_PRESELECTOR,
        maxMessageLength: MAX_HEADER_PADDED_BYTES,
        maxBodyLength: MAX_BODY_PADDED_BYTES
    });

    const bodyRemaining = emailVerifierInputs.in_body_padded!.map(c => Number(c));
    const selectorBuffer = Buffer.from(STRING_PRESELECTOR);
    const usernameIndex = Buffer.from(bodyRemaining).indexOf(selectorBuffer) + selectorBuffer.length;

    const address = bytesToBigInt(fromHex("0x71C7656EC7ab88b098defB751B7401B5f6d897")).toString();

    const inputJson = {
        ...emailVerifierInputs,
        twitter_username_idx: usernameIndex.toString(),
        address,
    };
    fs.writeFileSync("./input.json", JSON.stringify(inputJson))
}

(async () => {
    await generateTwitterVerifierCircuitInputs();
}) ();

```
To create the inputs.json file run:

```
npx ts-node inputs.ts
```

This script reads your raw email file, verifies the DKIM signature, generates the circuit inputs, and writes them to an input.json file.

The generateTwitterVerifierCircuitInputs function is the main function that does all the work. It uses helper functions from the @zk-email/helpers package to generate the inputs and write them to a file.

Remember to replace the address and the path to the raw email file with your own wallet address.




## Constructing Your Twitter Circom File

To set up your Twitter circuit, follow these steps:

### Step 1: Integrate the Required Files into Your Circom File

To build your circom circuit, you need to import two files. The first one is the `email-verifier.circom` from our library. The second one is the `twitter_reset_regex.circom` file that you generated earlier in this tutorial.

```circom
include "@zk-email/circuits/email-verifier.circom";
include "/twitter_reset_regex.circom";
```

The `email-verifier.circom` file validates each of the inputs to the circuit, while the `twitter_reset_regex.circom` file scans the email body for the '@username', ensuring it adheres to the specified regex definition.

### Step 2: Start Your Circuit Template

```
template TwitterVerifier(max_header_bytes, max_body_bytes, n, k, pack_size, expose_from, expose_to) {}
```

In this step, we start the circuit template with the following arguments:

`max_header_bytes = 1024` - This is the maximum number of bytes in the header.

`max_body_bytes = 1536` - This is the maximum number of bytes in the body after the precomputed slice.

`n = 121` - This is the number of bits in each chunk of the pubkey (RSA parameter).

`k = 17` - This is the number of chunks in the pubkey (RSA parameter). Note that 121 * 17 > 2048.

`pack_size = 31` - This is the number of bytes that can fit into a 255ish bit signal (can increase later).


### Step 3: Define Your Circuit Inputs and Outputs

```circom
    signal input in_padded[max_header_bytes];
    signal input pubkey[k];
    signal input signature[k];
    signal input in_len_padded_bytes;
    signal input address;
    signal input body_hash_idx;
    signal input precomputed_sha[32];
    signal input in_body_padded[max_body_bytes];
    signal input in_body_len_padded_bytes;
    signal input twitter_username_idx;

    signal output pubkey_hash;
    signal output reveal_twitter_packed[max_twitter_packed_bytes];
```

The circuit's inputs are all private unless explicitly stated otherwise, while outputs are always public. In this example, we have several inputs and outputs.

**Inputs**

`in_padded[max_header_bytes]` - Prehashed email data.

`pubkey[k]` - RSA public key.

`signature[k]` - RSA signature.

`in_len_padded_bytes` - Length of the email, including padding.

`address` - Wallet address.

`body_hash_idx` - Index of the body hash.

`twitter_username_idx` - Index of twitter username.

**Outputs**

`pubkey_hash` - Hash of the public key, cross-referenced with the public key in our DKIM registry to authenticate the origins of the email.

`reveal_twitter_packed` - Packed Twitter username that has been verified and is ready for reveal.

### Step 3: Define the EmailVerifier Component

This part of the code defines the EmailVerifier component and assigns the necessary inputs to it. The `EmailVerifier` is a crucial part of the circuit as it validates the email inputs.

```circom
component EV = EmailVerifier(max_header_bytes, max_body_bytes, n, k, 0);
    EV.in_padded <== in_padded;
    EV.pubkey <== pubkey;
    EV.signature <== signature;
    EV.in_len_padded_bytes <== in_len_padded_bytes;
    EV.body_hash_idx <== body_hash_idx;
    EV.precomputed_sha <== precomputed_sha;
    EV.in_body_padded <== in_body_padded;
    EV.in_body_len_padded_bytes <== in_body_len_padded_bytes;

    pubkey_hash <== EV.pubkey_hash;
```

### Step 4: Add the Twitter Username Verification Component

In this part of the code, we will add the code to verify the Twitter username that is found in the email body.

 We start by defining the maximumm length of a Twitter username and calculating the maximum number of bytes it can occupy when packed.

```javascript
 var max_twitter_len = 21;
    var max_twitter_packed_bytes = count_packed(max_twitter_len, pack_size);
```

Next, we use the `TwitterResetRegex` function to compute the regex states on each character in the email body. This function is part of the circom code we generated earlier. It ensures that at least one match is found in the email body, i.e., the match count is not zero.

```circom
    signal (twitter_regex_out, twitter_regex_reveal[max_body_bytes]) <== TwitterResetRegex(max_body_bytes)(in_body_padded);
    signal is_found_twitter <== IsZero()(twitter_regex_out);
    is_found_twitter === 0;
```
Finally, we pack the Twitter username into a fixed number of bytes using the `ShiftAndPackMaskedStr` function. This packing process is necessary to ensure that the username fits into the defined output signal.
```
 reveal_twitter_packed <== ShiftAndPackMaskedStr(max_body_bytes, max_twitter_len, pack_size)(twitter_regex_reveal, twitter_username_idx);
```

For more details, refer to the following resources:

- [Twitter circom code](https://github.com/zkemail/zk-email-verify/blob/main/packages/twitter-verifier-circuits/twitter.circom)
- [DKIM Registry](https://github.com/zkemail/zk-email-verify/blob/main/packages/contracts/DKIMRegistry.sol)


## Compiling and Computing the Witness

After setting up your Twitter circuit, the next step is to compile it and compute the witness. This process involves generating the verification key (vkey) and the zk-SNARK proving keys (zkeys).

For in-browser proving, we will generate chunked zkeys. This is because the twitter.circom file is quite large, leading to extended proving times.

The detailed steps for this process are covered in the [zk-email verifier usage guide](https://zkemail.gitbook.io/zk-email/zk-email-verifier/usage-guide). It is recommended to follow the guide to ensure the correct setup and operation of your circuit.

## Conclusion

This tutorial provided just one example of a circuit you can build. For more examples and resources, you can check out the [zk-email verifier usage guide](https://zkemail.gitbook.io/zk-email/zk-email-verifier/usage-guide) and the [Twitter Circuit Code](https://github.com/zkemail/zk-email-verify/blob/main/packages/twitter-verifier-circuits/twitter.circom).

This is just the beginning of verifiable provenance data. As you continue to explore and build, you'll discover the vast potential of this technology. The power of zk-SNARKs allows for the creation of systems where data can be verified without revealing any additional information. This opens up a world of possibilities for privacy-preserving applications.