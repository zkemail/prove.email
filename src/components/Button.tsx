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
    >
      {startIcon ? <img src={startIcon} /> : null}
      {children}
      {endIcon ? <img src={endIcon} /> : null}
      {/* Next
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M9.93389 7.30936L5.55889 11.6844C5.51824 11.725 5.46998 11.7573 5.41688 11.7793C5.36377 11.8013 5.30684 11.8126 5.24936 11.8126C5.19187 11.8126 5.13495 11.8013 5.08184 11.7793C5.02873 11.7573 4.98048 11.725 4.93983 11.6844C4.89918 11.6437 4.86693 11.5955 4.84494 11.5423C4.82294 11.4892 4.81161 11.4323 4.81161 11.3748C4.81161 11.3173 4.82294 11.2604 4.84494 11.2073C4.86693 11.1542 4.89918 11.1059 4.93983 11.0653L9.00584 6.99983L4.93983 2.93436C4.85773 2.85227 4.81161 2.74093 4.81161 2.62483C4.81161 2.50873 4.85773 2.39739 4.93983 2.3153C5.02192 2.23321 5.13326 2.18709 5.24936 2.18709C5.36545 2.18709 5.4768 2.23321 5.55889 2.3153L9.93389 6.6903C9.97457 6.73093 10.0068 6.77918 10.0289 6.83229C10.0509 6.88541 10.0622 6.94234 10.0622 6.99983C10.0622 7.05733 10.0509 7.11426 10.0289 7.16737C10.0068 7.22048 9.97457 7.26873 9.93389 7.30936Z"
          fill="#F5F3EF"
        />
      </svg> */}
    </button>
  );
};

export default Button;
