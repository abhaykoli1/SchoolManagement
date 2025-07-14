import React, { useEffect, useState } from "react";
import { addSubject } from "../../AppStore/Slices/subjectSlice";
import { useDispatch, useSelector } from "react-redux";
import { getClasses } from "../../AppStore/Slices/classSectionSlice";

export default function AddSubject() {
  const dispatch = useDispatch();
  const schoolId = localStorage.getItem("schoolId");
  const { classes } = useSelector((state) => state.classSection);

  useEffect(() => {
    if (schoolId) {
      dispatch(getClasses(schoolId));
    }
  }, [dispatch, schoolId]);

  const [formData, setFormData] = useState({
    school_id: localStorage.getItem("schoolId"),
    class_id: "",
    section_id: "",
    subject_name: "",
    subject_code: "",
    assigned_teachers: [],
    syllabus: "",
  });

  console.log("formData", formData);

  const [teacherInput, setTeacherInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTeacher = () => {
    if (teacherInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        assigned_teachers: [...prev.assigned_teachers, teacherInput.trim()],
      }));
      setTeacherInput("");
    }
  };

  const handleRemoveTeacher = (index) => {
    const updated = [...formData.assigned_teachers];
    updated.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      assigned_teachers: updated,
    }));
  };

  const handleReset = () => {
    setFormData({
      school_id: localStorage.getItem("schoolId"),

      class_id: "",
      section_id: "",
      subject_name: "",
      subject_code: "",
      assigned_teachers: [],
      syllabus: "",
    });
    setTeacherInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSubject(formData)).then(() => {
      setFormData({
        school_id: localStorage.getItem("schoolId"),
        class_id: "",
        section_id: "",
        subject_name: "",
        subject_code: "",
        assigned_teachers: [],
        syllabus: "",
      });
      setTeacherInput("");
    });
  };

  useEffect(() => {
    if (classes.length > 0 && !formData.class_id) {
      setFormData((prev) => ({ ...prev, class_id: classes[0]._id }));
    }
  }, [classes]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-[17px] font-semibold uppercase mb-6">Add Subject</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Class ID */}

          <div>
            <label className="label">Class</label>
            <select
              name="class_id"
              value={formData.class_id}
              onChange={handleChange}
              className="input"
              required
            >
              {classes.length === 0 ? (
                <option value="">Loading classes...</option>
              ) : (
                classes.map((cls) => (
                  <option key={cls._id} value={cls._id}>
                    {cls.class_name}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Section ID (Optional) */}
          <div>
            <label className="label">Section ID (optional)</label>
            <input
              type="text"
              name="section_id"
              value={formData.section_id}
              onChange={handleChange}
              className="input"
              placeholder="Enter Section ID"
            />
          </div>

          {/* Subject Name */}
          <div>
            <label className="label">Subject Name</label>
            <input
              type="text"
              name="subject_name"
              value={formData.subject_name}
              onChange={handleChange}
              className="input"
              placeholder="Enter Subject Name"
              required
            />
          </div>

          {/* Subject Code */}
          <div>
            <label className="label">Subject Code</label>
            <input
              type="text"
              name="subject_code"
              value={formData.subject_code}
              onChange={handleChange}
              className="input"
              placeholder="Enter Subject Code"
            />
          </div>

          {/* Assigned Teachers */}
          <div>
            <label className="label">Assigned Teachers</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={teacherInput}
                onChange={(e) => setTeacherInput(e.target.value)}
                className="input w-full"
                placeholder="Enter Teacher ID"
              />
              <button
                type="button"
                className="px-3 py-1 bg-blue-600 text-white rounded"
                onClick={handleAddTeacher}
              >
                Add
              </button>
            </div>
            <ul className="mt-2 space-y-1 text-sm">
              {formData.assigned_teachers.map((teacher, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between bg-gray-100 px-2 py-1 rounded"
                >
                  {teacher}
                  <button
                    type="button"
                    onClick={() => handleRemoveTeacher(idx)}
                    className="text-red-600 ml-4"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Syllabus */}
          <div className="md:col-span-2">
            <label className="label">Syllabus</label>
            <textarea
              name="syllabus"
              value={formData.syllabus}
              onChange={handleChange}
              rows={4}
              className="input"
              placeholder="Enter Syllabus Details"
            ></textarea>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full">
          <button
            type="button"
            onClick={handleReset}
            className="!border !border-[#0b1d6e] cursor-pointer !text-[#0b1d6e] px-6 py-2 text-sm rounded w-full sm:w-auto"
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="bg-[#0b1d6e] cursor-pointer text-white px-6 py-2 text-sm rounded hover:bg-[#1e2e89] w-full sm:w-auto"
          >
            Add Subject
          </button>
        </div>
      </form>
    </div>
  );
}

// Tailwind short class
const labelClass = "uppercase block font-[500] text-[14px] text-[#666666] mb-2";
const inputClass =
  "w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3";

// Optional for reuse
AddSubject.label = labelClass;
AddSubject.input = inputClass;
