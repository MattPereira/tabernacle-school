function Table({ children, className = "" }) {
  return (
    <table className={`border-collapse w-full ${className}`}>{children}</table>
  );
}

function TableHead({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, idx) => (
          <th
            key={idx}
            className="border border-neutral-700 py-2 px-4 bg-dark text-white"
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
    <tr>
      {data.map((cell, idx) => (
        <td key={idx} className="border py-2 px-2">
          {cell}
        </td>
      ))}
    </tr>
  );
}

export { Table, TableHead, TableRow };
