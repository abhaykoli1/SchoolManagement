import React, { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    scope: "",
    client_id: "",
    client_secret: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] flex flex-col md:flex-row">
      {/* Left - Image (Only for Desktop) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white p-6">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
          alt="Login"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>

      {/* Right - Login Form */}
      <div className="md:w-1/2 w-full p-6 flex items-center justify-center">
        <div className="w-[90%] mx-auto max-w-xl">
          <h2 className="text-2xl text-center font-semibold mb-6 text-[#1F2A44]">
            Login Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Username *
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Scope</label>
              <input
                type="text"
                name="scope"
                value={formData.scope}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Client ID
              </label>
              <input
                type="text"
                name="client_id"
                value={formData.client_id}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Client Secret
              </label>
              <input
                type="text"
                name="client_secret"
                value={formData.client_secret}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#9B594F] text-white py-2 rounded-md hover:bg-[#874d45] transition"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
