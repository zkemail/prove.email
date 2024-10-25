import Image from "next/image";
import { Dispatch, SetStateAction, useRef, useState } from "react";

const ProjectCard = ({
  title,
  description,
  imgSrc,
  hoveredCardIdx,
  index,
  setHoveredCardIdx,
}: {
  title: string;
  description: string;
  hoveredCardIdx: number | null;
  imgSrc: string;
  index: number;
  setHoveredCardIdx: Dispatch<SetStateAction<number | null>>; // Correct type
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
    setScale(1.07);
    setHoveredCardIdx(index);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
    setScale(1);
    setHoveredCardIdx(null);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    setScale(1.07);
    setHoveredCardIdx(index);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setScale(1);
    setHoveredCardIdx(null);
  };

  return (
    <div
      className="transition-all ease-in-out project-card"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <div
        className="projectPins"
        style={{
          position: "absolute",
          zIndex: 10,
          left: "0",
          top: "0",
          translate: "-50% -50%",
        }}
      />
      <div
        className="projectPins"
        style={{
          position: "absolute",
          zIndex: 10,
          right: "0",
          top: "0",
          translate: "50% -50%",
        }}
      />
      <div
        className="projectPins"
        style={{
          position: "absolute",
          zIndex: 10,
          right: "0",
          bottom: "0",
          translate: "50% 50%",
        }}
      />
      <div
        className="projectPins"
        style={{
          position: "absolute",
          zIndex: 10,
          left: "0",
          bottom: "0",
          translate: "-50% 50%",
        }}
      />
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card-spotlight-effect"
      >
        <div
          className="transition-all ease-in-out"
          style={{
            background: "#161819",
            height: "100%",
            width: "100%",
            position: "absolute",
            opacity:
              hoveredCardIdx !== index && hoveredCardIdx !== null ? 0.5 : 0,
          }}
        />
        <div
          className="spotlight"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
          }}
        />
        <div
          style={{
            height: "13.8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Image
            width={280}
            height={220}
            layout="responsive"
            src={imgSrc}
            alt={`${title}-image`}
          />
        </div>
        <div
          className=" lg:h-40 h-max"
          style={{
            borderTop: "2px solid",
            borderImage:
              "linear-gradient(to right, #161819, #3B3B3B, #161819) 1",
            background: "var(--Grey-900, #161819)",
            display: "flex",
            padding: "16px",
            flexDirection: "column",
            textAlign: "left",
            gap: "8px",
          }}
        >
          <div className="h5" style={{ fontWeight: 700 }}>
            {title}
          </div>
          <div
            className="subtitle2"
            style={{ color: "var(--Grey-500, #D4D4D4)" }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
