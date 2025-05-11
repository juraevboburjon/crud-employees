import { useEffect, useState } from "react";
import axios from "axios";
import ActionButtons from "../components/ActionButtons";
import { Link } from "react-router-dom";

function Home() {
  const [employees, setEmployees] = useState([]);
  const host = import.meta.env.VITE_HOST;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${host}/users`);
        setEmployees(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );

  return (
    <div className=" flex flex-col w-full h-screen justify-center items-center">
      <div className="flex w-[80%] h-9 justify-between items-center">
        <h1>Employees list</h1>
        <Link to={"/add"}>
          <button className="bg-blue-600 cursor-pointer p-2">
            {addIcon} Add Employee
          </button>
        </Link>
      </div>
      <div className="w-[80%]">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-green-700 border  border-white text-white">
            <tr>
              <th className="border rounded-md px-2 py-5">No.</th>
              <th className="border rounded-md px-2 py-5">Name</th>
              <th className="border rounded-md px-2 py-5">email</th>
              <th className="border rounded-md px-2 py-5">Address</th>
              <th className="border rounded-md px-2 py-5">Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td className="border border-white rounded-md px-2 py-5">
                    {index + 1}
                  </td>
                  <td className="border border-white rounded-md px-2 py-5">
                    {employee.name}
                  </td>
                  <td className="border border-white rounded-md px-2 py-5">
                    {employee.email}
                  </td>
                  <td className="border border-white rounded-md px-2 py-5">
                    {employee.address}
                  </td>
                  <td className="border border-white rounded-md px-2 py-5">
                    <ActionButtons
                      host={host}
                      employee={employee}
                      setEmployees={setEmployees}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
