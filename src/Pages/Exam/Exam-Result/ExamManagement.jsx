import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AddExam from "./AddExam";
import TableHeader from "../../../Components/TableHeader";

export default function ExamManagement() {
  return (
    <>
      <AddExam />
      <ExamList />
    </>
  );
}

function ExamList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const examData = [
    {
      id: 1,
      exam: "Annual Exam",
      class: "10th",
      subject: "Science",
      date: "Jan 30, 2024",
      time: "10am to 1pm",
      totalMarks: "100",
      passingMarks: "36",
    },
    {
      id: 2,
      exam: "Half-Yearly",
      class: "9th",
      subject: "Math",
      date: "Feb 15, 2024",
      time: "11am to 2pm",
      totalMarks: "80",
      passingMarks: "28",
    },
  ];

  const filteredData = examData.filter((item) =>
    item.exam.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <TableHeader
        title="Exam Management"
        search={search}
        setSearch={setSearch}
      />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>EXAM NAME</th>
              <th>CLASS</th>
              <th>SUBJECT</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>TOTAL MARKS</th>
              <th>PASSING MARKS</th>
              <th className="action-label">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            {filteredData.length > 0 ? (
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
                  <td>{item.exam}</td>
                  <td>{item.class}</td>
                  <td>{item.subject}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.totalMarks}</td>
                  <td>{item.passingMarks}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="py-4 px-3 text-center text-gray-500">
                  No matching exams found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
