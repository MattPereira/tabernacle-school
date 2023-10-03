function Table({ children, className = "" }) {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className={`border-collapse w-full table ${className}`}>
        {children}
      </table>
    </div>
  );
}

function TableHead({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, idx) => (
          <th
            key={idx}
            className={`bg-dark text-white ${
              idx === headers.length - 1 ? "" : "border-r border-neutral-700"
            }`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableRow({ data }) {
  return (
    <tr className="hover:bg-alternate">
      {data.map((cell, idx) => (
        <td key={idx} className="border py-2 px-2">
          {cell}
        </td>
      ))}
    </tr>
  );
}

export { Table, TableHead, TableRow };
