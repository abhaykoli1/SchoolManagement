import { useState, useEffect } from "react";
import profile1 from "../../../assets/student/profile1.svg";
import profile2 from "../../../assets/student/profile2.svg";
import profile3 from "../../../assets/student/profile3.svg";
import profile4 from "../../../assets/student/profile4.svg";
import profile5 from "../../../assets/student/profile5.svg";
import profile6 from "../../../assets/student/profile6.svg";
import profile7 from "../../../assets/student/profile7.svg";
import profile8 from "../../../assets/student/profile8.svg";
import { FiPhone, FiMessageSquare, FiMail } from "react-icons/fi";
import StudentFormFilter from "./StudentFormFilter";
import TableHeader from "../../../Components/TableHeader";

const students = [
  {
    id: "703703",
    name: "Eneh Mercy",
    email: "michelle.rivera@example.com",
    class: "JSS 2",
    gender: "Female",
    avatar: profile1,
  },
  {
    id: "877037",
    name: "Marvin McKinney",
    email: "kenzi.lawson@example.com",
    class: "JSS 3",
    gender: "Female",
    avatar: profile2,
  },
  {
    id: "370357",
    name: "Brooklyn Simmons",
    email: "nathan.roberts@example.com",
    class: "SS 3",
    gender: "Female",
    avatar: profile3,
  },
  {
    id: "870316",
    name: "Dianne Russell",
    email: "felicia.reid@example.com",
    class: "SS 3",
    gender: "Male",
    avatar: profile4,
  },
  {
    id: "547030",
    name: "Cody Fisher",
    email: "tim.jennings@example.com",
    class: "SS 3",
    gender: "Female",
    avatar: profile5,
    age: 17,
    about: "Science student",
  },
  {
    id: "270374",
    name: "Guy Hawkins",
    email: "alma.lawson@example.com",
    class: "JSS 1",
    gender: "Male",
    avatar: profile6,
  },
  {
    id: "970322",
    name: "Devon Lane",
    email: "debra.holt@example.com",
    class: "JSS 3",
    gender: "Female",
    avatar: profile7,
  },
  {
    id: "570336",
    name: "Ronald Richards",
    email: "deanna.curtis@example.com",
    class: "JSS 4",
    gender: "Male",
    avatar: profile8,
  },
  {
    id: "157034",
    name: "Bessie Cooper",
    email: "georgia.young@example.com",
    class: "JSS 4",
    gender: "Female",
    avatar: profile1,
  },
  {
    id: "570356",
    name: "Eleanor Pena",
    email: "jackson.graham@example.com",
    class: "JSS 5",
    gender: "Male",
    avatar: profile2,
  },
  {
    id: "177037",
    name: "Savannah Nguyen",
    email: "dolores.chambers@example.com",
    class: "JSS 1",
    gender: "Female",
    avatar: profile3,
  },
];

export default function StudentListFilter() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedStudent = students.find((s) => s.id === selectedId);

  useEffect(() => {
    if (window.innerWidth >= 1024 && students.length > 0) {
      setSelectedId(students[0].id);
    }
  }, [students]);
  const [search, setSearch] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
      {/* Table: 75% width */}

      <div className="bg-white rounded-xl p-4 shadow-sm relative w-full lg:col-span-3">
        <TableHeader title="Inventory" search={search} setSearch={setSearch} />

        <div className="overflow-x-auto">
          <table className="custom-table">
            <thead className="custom-thead">
              <tr className="custom-thead-row">
                <th>Name</th>
                <th>Student ID</th>
                <th>Email address</th>
                <th>Class</th>
                <th>Gender</th>
                <th className="action-label">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr
                  key={s.id}
                  className={`custom-row ${
                    s.id === selectedId
                      ? "selected-row"
                      : index % 2 === 0
                      ? "even-row"
                      : "odd-row"
                  }`}
                  onClick={() => {
                    setSelectedId(s.id);
                    if (window.innerWidth < 1024) {
                      document.body.style.overflow = "hidden";
                    }
                  }}
                >
                  <td className="name-cell">
                    <img
                      src={s.avatar || "/default.png"}
                      alt="avatar"
                      className="avatar"
                    />
                    {s.name}
                  </td>
                  <td>{s.id}</td>
                  <td>{s.email}</td>
                  <td>{s.class}</td>
                  <td>{s.gender}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Profile Card: 25% width (only visible on lg+) */}
      <div className="bg-white rounded-xl p-4 shadow-sm relative w-full lg:col-span-1 hidden lg:block">
        {selectedStudent ? (
          <>
            <div className="text-sm text-center font-semibold">
              {selectedStudent.id}
            </div>
            <img
              src={selectedStudent.avatar}
              className="w-30 h-30 rounded-full mx-auto"
              alt="Profile"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">{selectedStudent.name}</h3>
              <p className="text-sm font-semibold text-gray-500">
                {selectedStudent.about || "Student"}
              </p>
            </div>
            <div className="flex justify-center gap-4 text-gray-500 my-2">
              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <FiPhone className="w-5 h-5" />
              </button>
              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <FiMessageSquare className="w-5 h-5" />
              </button>
              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <FiMail className="w-5 h-5" />
              </button>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">About</h4>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Age</span>
                <span>{selectedStudent.age || "N/A"}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Gender</span>
                <span>{selectedStudent.gender}</span>
              </div>
            </div>
            <div className="flex -space-x-2 items-center mt-2">
              {students
                .filter(
                  (s) =>
                    s.class === selectedStudent.class &&
                    s.id !== selectedStudent.id
                )
                .slice(0, 5)
                .map((s) => (
                  <img
                    key={s.id}
                    src={s.avatar}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt={s.name}
                    title={s.name}
                  />
                ))}
              <span className="text-sm text-blue-600 ml-2">
                +
                {Math.max(
                  0,
                  students.filter(
                    (s) =>
                      s.class === selectedStudent.class &&
                      s.id !== selectedStudent.id
                  ).length - 5
                )}{" "}
                more
              </span>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Select a student to view details.</p>
        )}
      </div>

      {/* Modal for Mobile */}
      {selectedStudent && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center lg:hidden"
          onClick={() => {
            setSelectedId(null);
            document.body.style.overflow = "auto";
          }}
        >
          <div
            className="bg-white rounded-xl p-4 shadow-md w-11/12 max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-sm text-center font-semibold">
              {selectedStudent.id}
            </div>
            <img
              src={selectedStudent.avatar}
              className="w-24 h-24 rounded-full mx-auto mb-3"
              alt="Profile"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{selectedStudent.name}</h3>
              <p className="text-xs text-gray-500">
                {selectedStudent.about || "Student"}
              </p>
            </div>
            <div className="flex justify-center gap-4 text-gray-500 my-2">
              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <FiPhone className="w-4 h-4" />
              </button>
              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <FiMessageSquare className="w-4 h-4" />
              </button>
              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <FiMail className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>Age</span>
                <span>{selectedStudent.age || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span>Gender</span>
                <span>{selectedStudent.gender}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
