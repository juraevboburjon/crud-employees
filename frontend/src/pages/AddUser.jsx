import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddUser() {
  const host = import.meta.env.VITE_HOST;

  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${host}/create/user`, user);
      toast.success(res.data.message, { position: "top-center" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <div className="flex">
        <h1 className="text-3xl font-bold py-5">Add Employee</h1>
      </div>
      <form className="w-96" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="pb-2 font-medium text-blue-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={inputHandle}
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
            onChange={inputHandle}
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
            onChange={inputHandle}
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
