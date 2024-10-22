const Button = ({
  onClick,
  href,
  disabled = false,
  children,
  startIcon,
  endIcon,
  color = "primary",
}: {
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
  startIcon?: string;
  endIcon?: string;
  color?: "primary" | "secondary";
}) => {
  return (
    <button
      onClick={() => {
        if (href) {
          return window.open(href, "_blank");
        }

        onClick();
      }}
      disabled={disabled}
      className={`flex flex-row justify-between items-center gap-1 border-solid border-[2px] rounded-[12px] px-[16px] py-[5px] font-semibold ${
        color === "primary"
          ? "border-[#3B3B3B] bg-[#1C1C1C]"
          : "bg-[#CCE0EA] border-[#F5F3EF] text-[#161819]"
      }`}
      style={{
        fill: disabled ? "#3B3B3B" : "#F5F3EF",
        color:
          color === "primary" ? (disabled ? "#3B3B3B" : "#F5F3EF") : "#161819",
      }}
    >
      {startIcon ? <img src={startIcon} alt={startIcon} /> : null}
      {children}
      {endIcon ? <img src={endIcon} alt={endIcon} /> : null}
    </button>
  );
};

export default Button;
