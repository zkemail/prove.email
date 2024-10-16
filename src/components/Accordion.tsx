import { useRef, useState } from "react";
import ChevronDown from "../assets/ChevronDown.svg";

interface Faq {
  question: string;
  answer: string;
}

const AccordionItem = ({
  faq,
  index,
  handleToggle,
  open,
}: {
  faq: Faq;
  index: number;
  handleToggle: (index: number) => void;
  open: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div key={faq.question}>
      <button
        className="flex items-center justify-between w-full py-3 text-left text-lg font-medium focus:outline-none"
        onClick={() => handleToggle(index)}
      >
        <div className="flex gap-3 items-center">
          <div className="w-3 h-3 rotate-[-45deg] rounded-[2px] border border-[#2962A5] bg-[#062E5D]"></div>
          <span className="text-[#F5F3EF]">{faq.question}</span>
        </div>
        <span>
          <img
            src={ChevronDown}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
            alt="chevron-icon"
          />
        </span>
      </button>
      <div
        className="subtitle1 overflow-y-hidden transition-all ml-6 m-2"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div ref={ref}>{faq.answer}</div>
      </div>
    </div>
  );
};

const Accordion = ({ faqs }: { faqs: Faq[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 text-white rounded-md text-left">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          index={index}
          handleToggle={handleToggle}
          open={openIndex === index}
        />
      ))}
    </div>
  );
};

export default Accordion;
