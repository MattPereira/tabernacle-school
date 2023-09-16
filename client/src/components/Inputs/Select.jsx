/**
 * NOTE: the register function automatically applies input "name" based on id prop value
 */

export default function Select({
  label,
  id,
  type,
  register,
  validations,
  placeholder = "Select an option",
  errors,
  options,
  handleChange,
  defaultValue = "",
  ...props
}) {
  let classNames =
    "h-14 w-full px-4 py-2 border rounded-md text-xl cursor-pointer bg-white";

  if (errors) {
    classNames += " border-red-500";
  } else {
    classNames += " border-gray-400";
  }

  // handles if no register function is passed
  const registrationProps = register ? { ...register(id, validations) } : {};

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1 ml-1 text-xl">
          <label className="font-bold" htmlFor={id}>
            {label}
          </label>
        </div>
      )}

      <select
        onChange={handleChange}
        defaultValue={defaultValue}
        className={classNames}
        id={id}
        {...registrationProps}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="ml-2 text-red-500 font-gothic h-6">
        {errors && errors.message}
      </p>
    </div>
  );
}
