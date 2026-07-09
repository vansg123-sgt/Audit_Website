type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

function Button({
  text,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
    >
      {text}
    </button>
  );
}

export default Button;