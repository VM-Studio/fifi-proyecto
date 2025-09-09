export default function AuthLink({ text, linkText, href }) {
  return (
    <div className="auth-link-container">
      <span className="auth-link-text">{text} </span>
      <a href={href} className="auth-link-button">
        {linkText}
      </a>
    </div>
  );
}
