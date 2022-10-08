function Input({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  error,
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold text-gray-500 mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className={`p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 ${
          error && "border-red-300"
        }`}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      />
      <span className="p-2 text-sm text-red-300">{error}</span>
    </div>
  );
}

export default Input;
