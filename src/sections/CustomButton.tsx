import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  label: string;
  icon?: string;
  iconPosition?: "left" | "right";
  color?: string;
  disabled?: boolean;
  borderColor?: string;
  href?: string; // Optional URL to navigate to
  target?: string; // Optional target (_blank, _self, etc.)
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  icon,
  iconPosition = "left",
  color = "#1C1C1C",
  disabled = false,
  borderColor = "#3B3B3B",
  href,
  target = "_self",
}) => {
  // Handle both onClick and href navigation
  const handleClick = () => {
    if (href) {
      window.open(href, target);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`flex flex-row justify-between items-center gap-1 px-[16px] py-[5px] rounded-[12px] font-semibold whitespace-nowrap
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      style={{
        backgroundColor: color,
        border: `2px solid ${borderColor}`,
      }}
    >
      {icon && iconPosition === "left" && <img src={icon} alt="icon" />}
      <span>{label}</span>
      {icon && iconPosition === "right" && <img src={icon} alt="icon" />}
    </button>
  );
};

export default CustomButton;
