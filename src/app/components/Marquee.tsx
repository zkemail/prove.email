import { Fragment } from "react";
import Image from "next/image";

const Marquee = ({ items }: { items: string[] }) => (
  <div className="marquee">
    <div className="marquee-container">
      <div className="marquee-inner">
        {[...items, ...items, ...items].map((item, index) => (
          <Fragment key={index}>
            <span className="marquee-item">{item}</span>
            <Image
              height={20}
              width={20}
              src={"/assets/MarqueeSeparator.svg"}
              alt="◆"
            />
          </Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default Marquee;
