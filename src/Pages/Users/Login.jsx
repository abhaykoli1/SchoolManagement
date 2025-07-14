import React, { useState, useEffect } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../Api/axiosInstance";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // install react-icons if not already

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    client_id: "",
    client_secret: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  console.log(formData);

  const [agreed, setAgreed] = useState(false);
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
    <div className="h-full  flex flex-col md:flex-row">
      <div className=" w-full p-6 flex items-center justify-center">
        <div className="w-full ">
          <h2 className="text-3xl font-bold text-cente text-gray-900">
            Log In
          </h2>

          <p className="text-sm text-cente text-gray-600 mt-2  mb-4">
            Create a new account ?{" "}
            <a href="/signup" className="underline">
              Sign up
            </a>
          </p>

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
            <div>
              <label>Username *</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative">
              <label className="block mb-1">Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute top-6 right-0 !text-[#494949]"
              >
                {showPassword ? <FaEyeSlash size={21} /> : <FaEye size={21} />}
              </button>
            </div>

            {/* Hidden Inputs for Client ID & Secret */}
            <input type="hidden" name="client_id" value={formData.client_id} />
            <input
              type="hidden"
              name="client_secret"
              value={formData.client_secret}
            />

            <div className="space-y-4 mt-4">
              <div className="!flex !items-center space-x-3 cursor-pointer">
                <div>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    required
                    className="!w-5 !h-5 accent-black mt-1"
                  />
                </div>
                <span className="!text-[13px] text-gray-700 font-medium">
                  Agree to our{" "}
                  <a href="#" className="underline">
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={!agreed || loading || credentialsLoading}
                className={`w-full mt-4 ${
                  agreed || loading || credentialsLoading
                    ? "bg-gray-900 hover:bg-black cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white font-semibold py-3 rounded-full transition-all`}
              >
                {loading ? (
                  <>
                    <FaCircleNotch className="animate-spin h-4 w-4" />
                    Saving...
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
