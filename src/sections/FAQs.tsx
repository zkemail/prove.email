import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle FAQ open/close
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ content
  const faqs = [
    {
      question: 'How do you selectively reveal content in an email?',
      answer:
        "We can hide any information or selectively reveal any text, wether that’s the sender, receiver, subject, body etc using Regex. Regex is short for regular expression, this term represents sequence of characters that forms a search pattern, commonly used for string matching within text. It consists of a sequence of characters that define a search pattern, enabling complex searches, substitutions, and string manipulations. For example, in programming and text processing, regex can identify, extract, or replace specific text patterns, such as email addresses, dates, or phone numbers, by defining these patterns through a combination of literal characters and special symbols. In the context of ZK Email it is used to parse email headers and extract relevant information."
    },
    {
      question: 'How can I do it anonymously?',
      answer: 'ZK Email leverages the principles of Zero Knowledge proofs and serverless execution within the browser to provide a verifiable yet anonymous way to confirm an emails contents and recipents . Zero Knowledge proofs allow provers to prove that they know or possess certain information without revealing the information itself to a verifer. In ZK Email, this technology is used to verify user identity and email content without exposing sensitive data to a server or other users. The serverless architecture means that all proof generation is executed entirely within the user`s browser.'
    },
    {
      question: 'Why don’t I need to trust you?',
      answer: 'The DKIM email signitures do not contain information we can use to sign other emails, all our code is open source and being audited'
    },
    {
      question: 'How do you verify the email contents?',
      answer: 'We use the existing DKIM Signiture, almost all emails are signed by the sending domain server using an algorithm called DKIM. It can be summarized as this rsa_sign(sha256(from:..., to:..., subject:..., <body hash>,...), private key). Every time an email is sent we can verify the sender, receiver, the subject, the body by checking if the corresponding public key of the email address applied on the DKIM signiture returns the sha256(from:..., to:..., subject:..., <body hash>,...) a hash of the from, to subject, email details which we can check by rehashing'
    }
  ];

  return (
    <div className="w-full mx-auto mt-10 z-10 px-8 sm:px-36">
      <div className='flex flex-row justify-between'>
        <div>
          <h1 className="text-3xl font-semibold mb-6 h3 text-left " style={{textAlign:'left'}}>FAQs</h1>
          <p className="text-left mb-4 text-[#A8A8A8]">
            Quick answers to the common questions you might have. <br className='hidden md:inline'></br>
            Can’t find what you looking for? Read our docs or <a href="/contact" className=" underline text-[#F5F3EF]">contact us</a>
          </p>
        </div>
        <div>
          <a  href='https://zkemail.gitbook.io/zk-email' target='_blank'>
            <button className='flex flex-row justify-between gap-1 items-center px-[12px] py-[8px] bg-[#1C1C1C] border-solid border-2 border-[#3B3B3B] rounded-[12px] text-[#F5F3EF] text-[16px] whitespace-nowrap'>
              Read Docs
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9.93388 7.30938L5.55888 11.6844C5.51823 11.725 5.46997 11.7573 5.41686 11.7793C5.36375 11.8013 5.30683 11.8126 5.24935 11.8126C5.19186 11.8126 5.13494 11.8013 5.08183 11.7793C5.02872 11.7573 4.98046 11.725 4.93982 11.6844C4.89917 11.6437 4.86692 11.5955 4.84492 11.5424C4.82293 11.4893 4.8116 11.4323 4.8116 11.3748C4.8116 11.3174 4.82293 11.2604 4.84492 11.2073C4.86692 11.1542 4.89917 11.106 4.93982 11.0653L9.00583 6.99985L4.93982 2.93438C4.85772 2.85228 4.8116 2.74094 4.8116 2.62485C4.8116 2.50875 4.85772 2.39741 4.93982 2.31532C5.02191 2.23322 5.13325 2.1871 5.24935 2.1871C5.36544 2.1871 5.47679 2.23322 5.55888 2.31532L9.93388 6.69032C9.97456 6.73095 10.0068 6.7792 10.0288 6.83231C10.0509 6.88542 10.0622 6.94235 10.0622 6.99985C10.0622 7.05734 10.0509 7.11427 10.0288 7.16738C10.0068 7.22049 9.97456 7.26875 9.93388 7.30938Z" fill="#F5F3EF"/>
              </svg>
            </button>
          </a>
        </div>
      </div>


      <div className=" py-6 text-white rounded-md text-left">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="mb-4">
            <button
              className="flex items-center justify-between w-full py-3 text-left text-lg font-medium focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <div className='flex gap-3 items-center'>
                {/* blue diagonal icon  */}
                <div className="w-3 h-3 rotate-[-45deg] rounded-[2.268px] border border-[#2962A5] bg-[#062E5D]"></div>

                <span className='text-[#F5F3EF]'>{faq.question}</span>
              </div>

              {/* Toggle arrow up/down */}
              <span>{openIndex === index ?
              
              //up arrow for closed question
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.30746 12.0578L9.55746 5.80777C9.61551 5.74966 9.68444 5.70356 9.76031 5.67211C9.83619 5.64065 9.91752 5.62447 9.99965 5.62447C10.0818 5.62447 10.1631 5.64065 10.239 5.67211C10.3149 5.70356 10.3838 5.74966 10.4418 5.80777L16.6918 12.0578C16.8091 12.175 16.875 12.3341 16.875 12.5C16.875 12.6658 16.8091 12.8249 16.6918 12.9421C16.5746 13.0594 16.4155 13.1253 16.2497 13.1253C16.0838 13.1253 15.9247 13.0594 15.8075 12.9421L9.99965 7.13355L4.19184 12.9421C4.13377 13.0002 4.06483 13.0463 3.98896 13.0777C3.91309 13.1091 3.83177 13.1253 3.74965 13.1253C3.66753 13.1253 3.58621 13.1091 3.51034 13.0777C3.43447 13.0463 3.36553 13.0002 3.30746 12.9421C3.2494 12.8841 3.20333 12.8151 3.17191 12.7393C3.14048 12.6634 3.1243 12.5821 3.1243 12.5C3.1243 12.4178 3.14048 12.3365 3.17191 12.2606C3.20333 12.1848 3.2494 12.1158 3.30746 12.0578Z" fill="#F5F3EF"/>
                </svg>
              : 
              //down arrow for opened question
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6925 7.94223L10.4425 14.1922C10.3845 14.2503 10.3156 14.2964 10.2397 14.3279C10.1638 14.3593 10.0825 14.3755 10.0003 14.3755C9.91821 14.3755 9.83688 14.3593 9.76101 14.3279C9.68514 14.2964 9.61621 14.2503 9.55816 14.1922L3.30816 7.94223C3.19088 7.82495 3.125 7.66589 3.125 7.50004C3.125 7.33419 3.19088 7.17513 3.30816 7.05785C3.42544 6.94058 3.5845 6.87469 3.75035 6.87469C3.9162 6.87469 4.07526 6.94058 4.19253 7.05785L10.0003 12.8664L15.8082 7.05785C15.8662 6.99979 15.9352 6.95372 16.011 6.9223C16.0869 6.89087 16.1682 6.87469 16.2503 6.87469C16.3325 6.87469 16.4138 6.89087 16.4897 6.9223C16.5655 6.95372 16.6345 6.99979 16.6925 7.05785C16.7506 7.11592 16.7967 7.18486 16.8281 7.26073C16.8595 7.3366 16.8757 7.41792 16.8757 7.50004C16.8757 7.58216 16.8595 7.66348 16.8281 7.73935C16.7967 7.81522 16.7506 7.88416 16.6925 7.94223Z" fill="#F5F3EF"/>
                </svg>
              }</span>
            </button>

            {/* Conditionally render the answer based on whether the index is open */}
            {openIndex === index && (
              
              <div className="ml-6 mt-2 text-[#A8A8A8]">
                {faq.answer}
              </div>
            )}

            {/* Divider line between FAQ items */}
            {/* {index !== faqs.length - 1 && <hr className="my-4 border-gray-500" />} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
