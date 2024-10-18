import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  highlighted?: boolean;
  label: string;
  icon?: string;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  href?: string; // Optional URL to navigate to
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  highlighted,
  label,
  icon,
  iconPosition = "left",
  disabled = false,
  href
}) => {
  // Handle both onClick and href navigation
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`flex justify-between items-center gap-1 px-[16px] py-[5px] rounded-[12px] font-semibold whitespace-nowrap
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      style={{
        backgroundColor: `${highlighted ? '#CCE0EA' : '#1C1C1C'}`,
        border: `2px solid ${highlighted ? '#F5F3EF' : '#3B3B3B'}`,
        color: `${highlighted ? '#161819' : '#F5F3EF'}`,
        boxShadow: `${highlighted ? '0px -4px 0px 0px rgba(104, 163, 233, 0.36) inset' : '0px -4px 0px 0px rgba(0, 0, 0, 0.25) inset'}`,
        flexDirection: iconPosition === "right" ? "row-reverse" : "row"
      }}
    >
      {icon && <img src={icon} alt="icon" />}
      <span>{label}</span>
    </button>

  );
};

export default CustomButton;
