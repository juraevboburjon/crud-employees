import React from "react";
import { Link } from "react-router-dom";

function UpdateForm({ employeeInfo, setEmployeeInfo, handleUpdate }) {
  return (
    <>
      <form onSubmit={handleUpdate} className="w-96">
        <div className="flex flex-col">
          <label htmlFor="name" className="pb-2 font-medium text-blue-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={handleUpdate.name}
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
    </>
  );
}

export default UpdateForm;
