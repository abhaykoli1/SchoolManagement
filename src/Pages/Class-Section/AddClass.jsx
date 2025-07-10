import React, { useState } from "react";
import axiosInstance from "../../Api/axiosInstance";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddClass() {
  const [formData, setFormData] = useState({ class_name: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic front-end validation
    if (!formData.class_name.trim()) {
      return showErrorToast("Class field is required.");
    }

    // Separate payload object (can also transform keys here if needed)
    const payload = {
      class_name: formData.class_name.trim(),
    };

    try {
      setLoading(true);
      const response = await axiosInstance.post(
        "/api/class-section/add-class",
        payload,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      showSuccessToast(response?.data?.message);
      setFormData({ class_name: "" });
      setTimeout(() => {
        setShowModal(false);
      }, 300);
    } catch (error) {
      const errMsg =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Failed to add class.";
      showErrorToast(errMsg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="w-full">
        <h2 className="text-[17px] font-semibold uppercase mb-6">Add Class</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-1">
            <div>
              <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
                CLASS
              </label>
              <input
                type="text"
                name="class_name"
                value={formData.class_name}
                onChange={handleChange}
                className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
                placeholder="Enter Class"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              } bg-[#0b1d6e] text-white px-6 py-2 text-sm rounded hover:bg-[#1e2e89] w-full sm:w-auto`}
            >
              {loading ? "Adding..." : "Add Class"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
