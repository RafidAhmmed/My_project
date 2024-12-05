import 'tailwindcss/tailwind.css';

export function CustomTable({ data }) {
    return (
        <div id="table-container" className="bg-slate-100 pt-6 md:pt-10 px-1 md:px-3 pb-10 md:pb-16">
            <p className="font-bold text-2xl md:text-4xl pb-7 md:pb-10 text-center">Dynamic Table</p>
            <div className="md:px-20 border-collapse">
                <table className="w-full text-xl shadow-lg rounded-2xl m-3">
                    <thead className="bg-blue-700 text-white text-center font-bold">
                        <tr>
                            {data[0]?.map((header, index) => (
                                <th key={index} className={index === 0 ? "rounded-tl-3xl" : index === 2 ? "rounded-tr-3xl" : "font-extrabold px-4 py-2"}>
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border px-4 py-2">
                                        {cell.split("\n").map((line, lineIndex) => (
                                            <span key={lineIndex}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

CustomTable.defaultProps = {
    data: [
        ["Column 1", "Column 2", "Column 3"],
        ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3"],
        ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3"],
    ],
};
