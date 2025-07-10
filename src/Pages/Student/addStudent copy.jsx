import { useState, useEffect } from "react";
import axiosInstance from "../../Api/axiosInstance";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";
import { ToastContainer } from "react-toastify";
import { FaCircleNotch } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function AddStudentForm() {
  const [formData, setFormData] = useState({
    school_id: "",
    class_id: "",
    section_id: "",
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    roll_number: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    guardian_name: "",
    guardian_email: "",
    guardian_phone: "",
    guardian_relation: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [classList, setClassList] = useState([]);
  const [sectionList, setSectionList] = useState([]);

  useEffect(() => {
    const storedSchoolId = localStorage.getItem("schoolId");
    if (storedSchoolId) {
      setFormData((prev) => ({
        ...prev,
        school_id: storedSchoolId,
      }));
    }
  }, []);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axiosInstance.get("/api/class-section/get-classes");
        const sortedClasses = [...(res.data.data || [])].sort((a, b) => {
          const nameA = a.class_name.toLowerCase();
          const nameB = b.class_name.toLowerCase();
          const numA = parseInt(nameA);
          const numB = parseInt(nameB);
          if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
          return nameA.localeCompare(nameB);
        });
        setClassList(sortedClasses);
      } catch (err) {
        showErrorToast("Failed to load classes.");
      }
    };
    fetchClasses();
  }, []);

  useEffect(() => {
    const fetchSections = async () => {
      if (!formData.class_id) return;
      try {
        const res = await axiosInstance.get(
          `/api/class-section/get-sections/${formData.class_id}`
        );
        setSectionList(res.data.data || []);
      } catch (err) {
        showErrorToast("Failed to load sections.");
      }
    };
    fetchSections();
  }, [formData.class_id]);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "school_id",
      "class_id",
      "section_id",
      "first_name",
      "last_name",
      "gender",
      "roll_number",
      "guardian_name",
      "guardian_phone",
      "image"
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        showErrorToast(`${field.replace("_", " ")} is required.`);
        return;
      }
    }

    setLoading(true);
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axiosInstance.post("/api/fees/add-student", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showSuccessToast(response?.data?.message);
      setFormData({
        school_id: localStorage.getItem("schoolId") || "",
        class_id: "",
        section_id: "",
        first_name: "",
        last_name: "",
        gender: "",
        dob: "",
        email: "",
        phone: "",
        roll_number: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        guardian_name: "",
        guardian_email: "",
        guardian_phone: "",
        guardian_relation: "",
        image: null,
      });
    } catch (error) {
      const errMsg =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Failed to add student.";
      showErrorToast(errMsg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#f9f8f5] min-h-screen flex items-center justify-center p-4">
      <ToastContainer />
      <form className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-[17px] font-semibold uppercase mb-6">
          Add Student Panel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="uppercase text-sm mb-2 block">
              School ID <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="school_id"
              value={formData.school_id}
              placeholder="Enter School ID"
              className="w-full border border-gray-300 p-2 rounded"
              readOnly
            />
          </div>

          <div>

            <label className="uppercase block text-[14px] font-[500] text-[#666666] mb-2">
              CLASS <span className="text-red-600">*</span>
            </label>
            <select
          name="class_id"
          value={formData.class_id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Class</option>
          {classList.map((cls) => (
            <option key={cls._id} value={cls._id}>
              {cls.class_name}
            </option>
          ))}
        </select>
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              Section <span className="text-red-600">*</span>
            </label>
            <select
          name="section_id"
          value={formData.section_id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Section</option>
          {sectionList.map((sec) => (
            <option key={sec._id} value={sec._id}>
              {sec.section_name}
            </option>
          ))}
        </select>
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              Gender <span className="text-red-600">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              Roll Number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="roll_number"
              value={formData.roll_number}
              onChange={handleChange}
              placeholder="Enter Roll Number"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter City"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter State"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter Pincode"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              Guardian Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="guardian_name"
              value={formData.guardian_name}
              onChange={handleChange}
              placeholder="Enter Guardian Name"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              Guardian Email
            </label>
            <input
              type="email"
              name="guardian_email"
              value={formData.guardian_email}
              onChange={handleChange}
              placeholder="Enter Guardian Email"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              Guardian Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="guardian_phone"
              value={formData.guardian_phone}
              onChange={handleChange}
              placeholder="Enter Guardian Phone"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">
              Guardian Relation
            </label>
            <input
              type="text"
              name="guardian_relation"
              value={formData.guardian_relation}
              onChange={handleChange}
              placeholder="Enter Guardian Relation"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="uppercase text-sm mb-2 block">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`flex items-center gap-2 justify-center bg-[#0b1d6e] text-white px-6 py-2 rounded hover:bg-[#1e2e89] w-32 ${
              loading ? "cursor-not-allowed opacity-80" : ""
            }`}
          >
            {loading ? (
              <>
                <FaCircleNotch className="animate-spin h-4 w-4" /> Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
