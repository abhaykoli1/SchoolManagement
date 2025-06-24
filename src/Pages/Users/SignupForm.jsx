import React, { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    school_name: "",
    email: "",
    phone: "",
    principal_name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    number_of_students: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] flex flex-col md:flex-row overflow-hidden">
      {/* Left Side - Fixed Image */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white p-6">
        <img
          src="https://img.freepik.com/free-vector/back-school-concept-illustration_114360-12375.jpg"
          alt="Children Class"
          className="h-[500px] w-auto object-contain"
        />
      </div>

      {/* Right Side - Scrollable Form */}
      <div className="md:w-1/2 w-full p-6 overflow-y-auto">
        <div className="w-[90%] mx-auto">
          <h2 className="text-2xl text-center font-semibold mb-6 text-[#1F2A44]">
            School Registration Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="col-span-1">
              <label className="block mb-1 text-sm font-medium">
                School Name *
              </label>
              <input
                type="text"
                name="school_name"
                value={formData.school_name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="col-span-1">
              <label className="block mb-1 text-sm font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="col-span-1">
              <label className="block mb-1 text-sm font-medium">Phone *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="col-span-1">
              <label className="block mb-1 text-sm font-medium">
                Principal Name *
              </label>
              <input
                type="text"
                name="principal_name"
                value={formData.principal_name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block mb-1 text-sm font-medium">
                Number of Students
              </label>
              <input
                type="number"
                name="number_of_students"
                value={formData.number_of_students}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Image *</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#9B594F] text-white py-2 rounded-md hover:bg-[#874d45] transition"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
