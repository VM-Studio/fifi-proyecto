export default function AuthButton({ onClick, children, className = "" }) {
  return (
    <button onClick={onClick} className={`auth-button ${className}`}>
      {children}
    </button>
  );
}
