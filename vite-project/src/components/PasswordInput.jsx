export default function PasswordInput({
  label,
  value,
  onChange,
  placeholder = "••••••••",
  showPassword,
  onTogglePassword,
  ariaLabel,
}) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="input-with-button">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="form-input"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={onTogglePassword}
          className="password-toggle-btn"
          tabIndex={-1}
          aria-label={ariaLabel}
        >
          {showPassword ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 1L23 23" />
              <path d="M10.73 5.08A10.94 10.94 0 0 1 12 5c7 0 11 7 11 7a16.29 16.29 0 0 1-3.17 4.73" />
              <path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5c1.93 0 3.5-1.57 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5c-.47 0-.92.09-1.34.26" />
              <path d="M6.73 6.73A16.29 16.29 0 0 0 1 12s4 8 11 8a10.94 10.94 0 0 0 4.73-1.02" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
