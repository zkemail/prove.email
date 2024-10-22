const Chip = ({
  label,
}: {
  clickable?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  variant: "filled" | "outlined";
}) => {
  return (
    <div
      className="body1"
      style={{
        borderRadius: 16,
        border: "1px solid var(--Grey-800, #3B3B3B)",
        padding: "0.375rem 1rem",
      }}
    >
      {label}
    </div>
  );
};

export default Chip;
