export default function AuthHeader({ subtitle }) {
  return (
    <div className="auth-header">
      <h1 className="auth-logo">
        <span className="auth-logo-icon">⚡</span>
        NIXED
      </h1>
      <p className="auth-subtitle">{subtitle}</p>
    </div>
  );
}
