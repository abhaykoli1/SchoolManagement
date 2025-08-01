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
    client_id: "",
    client_secret: "",
  });

  console.log(formData);

  const [loading, setLoading] = useState(false);
  const [credentialsLoading, setCredentialsLoading] = useState(true);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        const params = new URLSearchParams();
        params.append("ip", ip);

        const res = await axiosInstance.post("/auth/client-init", params, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        const { client_id, client_secret } = res.data;

        setFormData((prev) => ({
          ...prev,
          client_id,
          client_secret,
        }));
      } catch (err) {
        showErrorToast("Client init failed.");
      } finally {
        setCredentialsLoading(false);
      }
    };

    fetchClientData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trimStart(),
    }));
  };

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

      const res = await axiosInstance.post("/auth/login", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log("res", res);

      const { access_token, type, id, message } = res.data;

      localStorage.setItem("authToken", access_token);
      localStorage.setItem("schoolType", type);
      localStorage.setItem("schoolId", id);
      sessionStorage.setItem("authToken", access_token);

      showSuccessToast(message || "Login successful!");
      // setTimeout(() => {
      //   window.location.href = "/";
      // }, 1000);
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

      {/* Right form */}
      <div className=" w-full p-6 flex items-center justify-center">
        <div className="w-[90%] mx-auto max-w-xl">
          <h2 className="text-2xl text-center font-semibold mb-6 text-[#1F2A44]">
            Login Form
          </h2>

          {/* Credentials status indicator */}
          <div className="mb-4 flex justify-end">
            {credentialsLoading ? (
              <p className="text-xs text-gray-500 italic">
                Initializing credentials...
              </p>
            ) : formData.client_id && formData.client_secret ? (
              <p className="text-green-600 text-xs font-medium flex items-center gap-2">
                <span className="h-2 w-2 bg-green-600 rounded-full animate-pulse"></span>
                Client credentials ready
              </p>
            ) : (
              <p className="text-red-500 text-xs font-medium">
                Failed to load client credentials
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label>Username *</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 !rounded-md !border !border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Password */}
            <div>
              <label>Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 !rounded-md !border !border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Hidden Inputs for Client ID & Secret */}
            <input type="hidden" name="client_id" value={formData.client_id} />
            <input
              type="hidden"
              name="client_secret"
              value={formData.client_secret}
            />

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading || credentialsLoading}
                className={`w-full text-white py-2 rounded-md flex items-center justify-center gap-2 transition ${
                  loading || credentialsLoading
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
