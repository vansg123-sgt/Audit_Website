type InputProps = {
  label: string;
  type: string;
  placeholder: string;
};

function Input({
  label,
  type,
  placeholder,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 p-4 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}

export default Input;