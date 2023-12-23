export function Button({ type, children, className, disabled = false }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-primary hover:bg-primary-dark text-white font-gothic py-2 text-xl font-bold rounded-2xl w-32 ${className}`}
    >
      {children}
    </button>
  );
}
