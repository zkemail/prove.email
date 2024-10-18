import Accordion from "../components/Accordion"; // Import the new Accordion component
import ChevronRight from "../assets/ChevronRight.svg";
import CustomButton from "./CustomButton";

const Faq = () => {
  const faqs = [
    {
      question: "How do you selectively reveal content in an email?",
      answer:
        "We can hide any information or selectively reveal any text, whether that’s the sender, receiver, subject, body, etc., using Regex. Regex stands for regular expression, which represents a sequence of characters that forms a search pattern commonly used for string matching within text...",
    },
    {
      question: "How can I do it anonymously?",
      answer:
        "ZK Email leverages the principles of Zero Knowledge proofs and serverless execution within the browser to provide a verifiable yet anonymous way to confirm an email’s contents and recipients...",
    },
    {
      question: "Why don’t I need to trust you?",
      answer:
        "The DKIM email signatures do not contain information we can use to sign other emails, all our code is open source and being audited.",
    },
    {
      question: "How do you verify the email contents?",
      answer:
        "We use the existing DKIM Signature. Almost all emails are signed by the sending domain server using an algorithm called DKIM...",
    },
  ];

  return (
    <section>
      <div className="w-full mt-10 z-10 container-width">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-3xl font-semibold mb-6 h3" style={{textAlign:'left'}}>FAQs</h1>
            <p className="text-left mb-4 subtitle1">
              Quick answers to the common questions you might have.{" "}
              <br className="hidden md:inline" />
              Can’t find what you’re looking for? Read our docs or{" "}
              <a href="/contact" className="underline text-[#F5F3EF]">
                contact us
              </a>
            </p>
          </div>
          <div style={{minWidth:'9rem'}}>
            <CustomButton
              label="Read Docs"
              icon={ChevronRight}
              iconPosition="right"
              disabled={false}
              href="https://zkemail.gitbook.io/zk-email"
            />
          </div>
        </div>

        {/* Use Accordion component */}
        <Accordion faqs={faqs} />
      </div>
    </section>
  );
};

export default Faq;
