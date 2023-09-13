export default function Toast({ status, message }) {
  let classNames = "text-center py-2 border text-xl px-2 rounded-lg ";

  if (status === "success") {
    classNames += "text-green-700 bg-green-200 border-green-400";
  } else if (status === "error") {
    classNames += "text-red-700 bg-red-200 border-red-400";
  }

  return <div className={classNames}>{message}</div>;
}
