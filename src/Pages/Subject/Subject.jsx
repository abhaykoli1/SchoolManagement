import { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import TableHeader from "../../Components/TableHeader";
import AddSubject from "./AddSubject";
import { useDispatch, useSelector } from "react-redux";
import { getClasses } from "../../AppStore/Slices/classSectionSlice";
import { getSubjectsByClass } from "../../AppStore/Slices/subjectSlice";

export default function ClassSection() {
  return (
    <>
      <AddSubject />
      <SubjectList />
    </>
  );
}

function SubjectList() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [selectedClassId, setSelectedClassId] = useState("");

  console.log("selectedId", selectedId);
  console.log("selectedClassId", selectedClassId);

  const { classes } = useSelector((state) => state.classSection);
  const { subjects, loading } = useSelector((state) => state.subject);

  useEffect(() => {
    dispatch(getClasses(localStorage.getItem("schoolId")));
  }, [dispatch]);

  useEffect(() => {
    if (selectedClassId) {
      dispatch(getSubjectsByClass(selectedClassId));
    }
  }, [dispatch, selectedClassId]);

  // console.log("subjects", subjects);

  const filteredData = subjects?.filter((item) =>
    item.subject_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <TableHeader title="Subject" search={search} setSearch={setSearch} />
        <select
          className="border p-2 rounded mt-3 md:mt-0 md:ml-4"
          onChange={(e) => setSelectedClassId(e.target.value)}
          value={selectedClassId}
        >
          <option value="">Select Class</option>
          {classes.map((cls) => (
            <option key={cls._id} value={cls._id}>
              {cls.class_name}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>SUBJECT NAME</th>
              <th>CODE</th>
              <th>SECTION</th>
              <th className="action-label">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Loading subjects...
                </td>
              </tr>
            ) : filteredData?.length > 0 ? (
              filteredData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`custom-row ${
                    item.id === selectedId
                      ? "selected-row"
                      : index % 2 === 0
                      ? "even-row"
                      : "odd-row"
                  }`}
                  onClick={() => setSelectedId(item.id)}
                >
                  <td>{index + 1}</td>
                  <td>{item.subject_name}</td>
                  <td>{item.subject_code || "-"}</td>
                  <td>{item.section_id || "-"}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-3 text-center text-gray-500">
                  No matching subjects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
