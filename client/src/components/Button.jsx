export default function Button({ type, children, className }) {
  return (
    <button
      type={type}
      className={`bg-primary hover:bg-primary-dark text-white font-gothic py-2 text-xl font-bold rounded-md w-32 ${className}`}
    >
      {children}
    </button>
  );
}
