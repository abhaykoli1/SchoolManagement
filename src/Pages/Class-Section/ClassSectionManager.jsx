import React, { useEffect, useState } from "react";
import {
  addClass,
  addSection,
  getClasses,
  getSections,
  clearClassSectionMessages,
  getAllSections,
} from "../../AppStore/Slices/classSectionSlice";
import { useDispatch, useSelector } from "react-redux";

const ClassSectionManager = () => {
  const schoolId = localStorage.getItem("schoolId");
  const dispatch = useDispatch();

  const {
    classes,
    allsections,
    sections,
    isAddingClass,
    isAddingSection,
    isFetchingClasses,
    isFetchingSections,
    successMessage,
    error,
  } = useSelector((state) => state.classSection);

  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [className, setClassName] = useState("");
  const [selectedClassId, setSelectedClassId] = useState("");
  const [sectionName, setSectionName] = useState("");

  useEffect(() => {
    if (schoolId) dispatch(getClasses(schoolId));
    return () => dispatch(clearClassSectionMessages());
  }, [dispatch, schoolId]);

  useEffect(() => {
    if (selectedClassId) dispatch(getSections(selectedClassId));
  }, [dispatch, selectedClassId]);

  const handleAddClass = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("class_name", className);
    formData.append("school_is", schoolId);
    dispatch(addClass(formData)).then(() => {
      setClassName("");
      setShowAddClassModal(false);
    });
  };

  useEffect(() => {
    const refresh = () => {
      dispatch(getAllSections());
    };

    refresh();
  }, [dispatch]);

  const handleAddSection = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("class_id", selectedClassId);
    formData.append("section_name", sectionName);

    dispatch(addSection(formData)).then((res) => {
      if (!res.error) {
        setSelectedClassId("");
        setSectionName("");
        dispatch(getAllSections());
      }
    });
  };

  return (
    <div className="space-y-10 ">
      <div className="flex items-center justify-between mb-4">
        <h1>Class & Section Manager</h1>

        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          onClick={() => setShowAddClassModal(true)}
        >
          + Add Class
        </button>
      </div>

      {/* Add Class Modal  */}
      {showAddClassModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
            <h3 className="text-xl font-bold mb-4">Add New Class</h3>
            <form onSubmit={handleAddClass} className="space-y-4">
              <div>
                <label className="block mb-1">Class Name</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Enter Class Name"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddClassModal(false)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  disabled={isAddingClass}
                >
                  {isAddingClass ? "Adding..." : "Add Class"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/*  Add Section  */}
      <form
        onSubmit={handleAddSection}
        className="bg-white p-6 shadow rounded-lg space-y-4"
      >
        <h3 className="text-lg font-bold">Add Section</h3>
        <div className="flex items-center w-full gap-4">
          <div className="w-full">
            <label>Select Class</label>
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.class_name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label>Section</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter Section Name (e.g., A)"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          disabled={isAddingSection}
        >
          {isAddingSection ? "Adding..." : "Add Section"}
        </button>
      </form>
    </div>
  );
};

export default ClassSectionManager;
