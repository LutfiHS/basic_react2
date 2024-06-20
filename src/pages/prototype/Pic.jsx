import { DataKaryawan as uDataKaryawan } from "./dummy";
import "./Pic.css";
import { useState, useEffect } from "react";

// let uDataKaryawan = [...DataKaryawan];

const Pic = () => {
  const columnNames = Object.keys(uDataKaryawan[0]);
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("dataKaryawan");
    return savedData ? JSON.parse(savedData) : uDataKaryawan;
  });

  //   const [form, setForm] = useState({
  //     id: "",
  //     nik: "",
  //     name: "",
  //     posisi: "",
  //     isentif_reguler: "",
  //     saving: "",
  //     cp: "",
  //     total: "",
  //     tanggal_pengajuan: "",
  //     status_pengajuan: "",
  //     keterangan: "",
  //     Notes: "",
  //   });

  const handleChange = (e, rowIndex) => {
    const { name, value } = e.target;
    const updatedData = data.map((item, index) =>
      index === rowIndex ? { ...item, [name]: value } : item
    );
    setData(updatedData);
  };

  const handleSave = () => {
    localStorage.setItem("dataKaryawan", JSON.stringify(data));
    console.log("Data saved:", data);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("dataKaryawan");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="pic-wrapper">
      <div className="pic-container">
        <h2>menu pic</h2>
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {columnNames.map((item, index) => (
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        key={index}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {uDataKaryawan.map((item, rowindex) => (
                    <tr key={rowindex}>
                      {columnNames.map((col, colindex) => (
                        <td
                          className={
                            col === "name"
                              ? "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                              : "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-700"
                          }
                          key={colindex}
                        >
                          {col === "keterangan" ? (
                            <select
                              type="text"
                              defaultValue={item[col]}
                              name="keterangan"
                              onChange={(e) => handleChange(e, colindex)}
                            >
                              <option value="funding">funding</option>
                              <option value="hold">hold</option>
                              <option value="hak">hak</option>
                            </select>
                          ) : col === "notes" ? (
                            <input
                              type="text"
                              defaultValue={item[col]}
                              name="notes"
                              onChange={(e) => handleChange(e, colindex)}
                            />
                          ) : (
                            item[col]
                          )}
                        </td>
                      ))}
                      <td>
                        <button className="bg-gray-300 hover:bg-gray-400 text-sm m-2 text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center">
                          <svg
                            className="fill-current w-3 h-3 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                          </svg>
                          <span>Download</span>
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 m-2"
                          onClick={handleSave(rowindex)}
                        >
                          Simpan Perubahan
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pic;
