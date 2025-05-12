import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  const host = import.meta.env.VITE_HOST;
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeInfo, setEmployeeInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get(`${host}/user/${id}`)
      .then((res) => setEmployeeInfo(res.data))
      .catch((err) => console.log(err));
  }, [host, id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${host}/update/user/${id}`, employeeInfo);
      navigate("/");
      toast.success(res.data.message, { position: "top-center" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <div className="flex">
        <h1 className="text-3xl font-bold py-5">Update Employee Info</h1>
      </div>
      <form onSubmit={handleUpdate} className="w-96">
        <div className="flex flex-col">
          <label htmlFor="name" className="pb-2 font-medium text-blue-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={employeeInfo.name}
            onChange={(e) =>
              setEmployeeInfo({ ...employeeInfo, name: e.target.value })
            }
            placeholder="Enter employee name..."
            className="border-b focus:outline-none"
          />
          <label
            htmlFor="email"
            className="pb-2 pt-8 font-medium text-blue-600"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={employeeInfo.email}
            onChange={(e) =>
              setEmployeeInfo({ ...employeeInfo, email: e.target.value })
            }
            placeholder="Enter employee email..."
            className="border-b focus:outline-none"
          />
          <label
            htmlFor="address"
            className="pb-2 pt-8 font-medium text-blue-600"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={employeeInfo.address}
            onChange={(e) =>
              setEmployeeInfo({ ...employeeInfo, address: e.target.value })
            }
            placeholder="Enter employee adsress..."
            className="border-b focus:outline-none"
          />
        </div>
        <div className="flex justify-between py-8 ">
          <Link to={"/"}>
            <button className="px-5 py-2 rounded text-white bg-red-600 cursor-pointer">
              Back
            </button>
          </Link>
          <button
            type="submit"
            className="px-5 py-2 rounded text-white bg-blue-600 cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
