import React, { useEffect, useState } from "react";
import axiosInstance from "../../Api/axiosInstance";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddClassSection({ setShowModal }) {
  const [formData, setFormData] = useState({
    class_id: "",
    section_name: "",
  });
  const [classList, setClassList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch classes on mount
  // useEffect(() => {
  //   const fetchClasses = async () => {
  //     try {
  //       const res = await axiosInstance.get("/api/class-section/get-classes");
  //       setClassList(res.data.data || []);
  //     } catch (err) {
  //       showErrorToast("Failed to load classes.");
  //     }
  //   };
  //   fetchClasses();
  // }, []);

  useEffect(() => {

  const fetchClasses = async () => {
  try {
    const res = await axiosInstance.get("/api/class-section/get-classes");

    // Sort the class list by class_name (numeric + string safe)
    const sortedClasses = [...(res.data.data || [])].sort((a, b) => {
      const nameA = a.class_name.toLowerCase();
      const nameB = b.class_name.toLowerCase();

      // If both are numbers, sort numerically
      const numA = parseInt(nameA);
      const numB = parseInt(nameB);
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;

      // Fallback to string comparison
      return nameA.localeCompare(nameB);
    });

    setClassList(sortedClasses);
  } catch (err) {
    showErrorToast("Failed to load classes.");
  }
};
 fetchClasses();
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const { class_id, section_name } = formData;

  if (!class_id) {
    return showErrorToast("Please select a class.");
  }

  if (!section_name.trim()) {
    return showErrorToast("Please enter a section name.");
  }

  try {
    setLoading(true);

    const payload = new URLSearchParams();
    payload.append("class_id", class_id);
    payload.append("section_name", section_name.trim());

    const response = await axiosInstance.post(
      "/api/class-section/add-section",
      payload,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // ✅ Use the API response message
    showSuccessToast(response.data.message || "Section added successfully!");

    setFormData({ class_id: "", section_name: "" });

    // ✅ Optionally close modal after short delay
    if (setShowModal) {
      setTimeout(() => setShowModal(false), 500);
    }

    // You can also use response.data.data or response.data.section_id if needed
    console.log("New Section Data:", response.data.data);
  } catch (error) {
    const errMsg =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      "Failed to add section.";
    showErrorToast(errMsg);
  } finally {
    setLoading(false);
  }
};


  const handleReset = () => {
    setFormData({ class_id: "", section_name: "" });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <ToastContainer />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[17px] font-semibold uppercase">Class & Section</h2>
        <button
          onClick={() => setShowModal?.(true)}
          className="bg-[#0b1d6e] text-white px-4 py-2 text-sm rounded hover:bg-[#1e2e89]"
        >
          + Add Class
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Class Dropdown */}
          <div>
            <label className="uppercase block text-[14px] font-[500] text-[#666666] mb-2">
              CLASS
            </label>
            <select
              name="class_id"
              value={formData.class_id}
              onChange={handleChange}
              className="w-full bg-white text-[14px] font-[500] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select Class</option>
              {classList.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.class_name}
                </option>
              ))}
            </select>
          </div>

          {/* Section Input */}
          <div>
            <label className="uppercase block text-[14px] font-[500] text-[#666666] mb-2">
              SECTION
            </label>
            <input
              type="text"
              name="section_name"
              value={formData.section_name}
              onChange={handleChange}
              className="w-full bg-white text-[14px] font-[500] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Enter Section"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full">
          <button
            type="button"
            onClick={handleReset}
            className="bg-[#0b1d6e] border border-[#0b1d6e] text-[#0b1d6e] px-6 py-2 text-sm rounded w-full sm:w-auto"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            } bg-[#0b1d6e] text-white px-6 py-2 text-sm rounded hover:bg-[#1e2e89] w-full sm:w-auto`}
          >
            {loading ? "Adding..." : "Add Section"}
          </button>
        </div>
      </form>
    </div>
  );
}
