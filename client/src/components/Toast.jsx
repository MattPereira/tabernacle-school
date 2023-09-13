export default function Toast({ variant, message }) {
  let classNames = "text-center py-2 border text-xl px-2 rounded-lg ";

  if (variant === "success") {
    classNames += "text-green-700 bg-green-200 border-green-400";
  } else if (variant === "error") {
    classNames += "text-red-700 bg-red-200 border-red-400";
  } else if (variant === "info") {
    classNames += "text-blue-700 bg-blue-200 border-blue-400";
  }

  return <div className={classNames}>{message}</div>;
}
