export default function AuthContainer({ children }) {
  return (
    <div className="main-content">
      <div className="auth-container">
        <div className="auth-card">{children}</div>
      </div>
    </div>
  );
}
