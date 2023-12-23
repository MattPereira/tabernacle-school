export default function ButtonGroup({ setSelection, options, classNames }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {options.map((option) => {
        return (
          <div key={option}>
            <button
              onClick={() => setSelection(option)}
              className={`py-6 rounded-xl text-2xl w-full hover:bg-primary hover:text-white ${classNames}`}
            >
              {option}
            </button>
          </div>
        );
      })}
    </div>
  );
}
