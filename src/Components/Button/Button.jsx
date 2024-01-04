import "./Button.module.css";

export default function Button({ type, className, children }) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
