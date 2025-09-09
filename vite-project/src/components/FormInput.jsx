export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
}) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`form-input ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
