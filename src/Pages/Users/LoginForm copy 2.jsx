import React, { useState, useEffect } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../Api/axiosInstance";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    scope: "",
    client_id: "",
    client_secret: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔄 Fetch client_id and client_secret based on IP
  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        const params = new URLSearchParams();
        params.append("ip", ip);

        const res = await axiosInstance.post("/api/auth/client-init", params, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        const { client_id, client_secret } = res.data;
        if (client_id && client_secret) {
          setFormData((prev) => ({
            ...prev,
            client_id,
            client_secret,
          }));
        } else {
          showErrorToast("Client initialization failed.");
        }
      } catch (err) {
        showErrorToast("Failed to get client data. Check your network.");
      }
    };

    fetchClientData();
  }, []);

  // 🧾 Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trimStart(),
    }));
  };

  // 🔐 Submit login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const params = new URLSearchParams();
      params.append("username", formData.username);
      params.append("password", formData.password);
      params.append("scope", formData.scope);
      params.append("client_id", formData.client_id);
      params.append("client_secret", formData.client_secret);

      const res = await axiosInstance.post("/api/auth/login", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const { access_token, type, id, message } = res.data;

      localStorage.setItem("authToken", access_token);
      localStorage.setItem("userType", type);
      localStorage.setItem("userId", id);
      sessionStorage.setItem("authToken", access_token);

      showSuccessToast(message || "Login successful!");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      const errorData = err?.response?.data;

      if (Array.isArray(errorData?.detail)) {
        const messages = errorData.detail.map((e) => e.msg).join(", ");
        showErrorToast(messages);
      } else {
        showErrorToast(errorData?.message || "Login failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] flex flex-col md:flex-row">
      <ToastContainer />
      {/* Left Image */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white p-6">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
          alt="Login"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 w-full p-6 flex items-center justify-center">
        <div className="w-[90%] mx-auto max-w-xl">
          <h2 className="text-2xl text-center font-semibold mb-6 text-[#1F2A44]">
            Login Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
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

            {/* Password */}
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

            {/* Scope (Optional) */}
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

            {/* Client ID */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Client ID
              </label>
              <input
                type="text"
                name="client_id"
                value={formData.client_id}
                readOnly
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100"
              />
            </div>

            {/* Client Secret */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Client Secret
              </label>
              <input
                type="text"
                name="client_secret"
                value={formData.client_secret}
                readOnly
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white py-2 rounded-md flex items-center justify-center gap-2 transition ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#9B594F] hover:bg-[#874d45]"
                }`}
              >
                {loading ? (
                  <>
                    <FaCircleNotch className="animate-spin h-4 w-4" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
