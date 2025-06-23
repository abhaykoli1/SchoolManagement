import { useState } from "react";
import AddEvent from "./AddEvent";
import TableHeader from "../../Components/TableHeader";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function Event() {
  return (
    <>
      <AddEvent />
      <EventList />
    </>
  );
}

function EventList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const eventData = [
    {
      id: 1,
      author: "Robert Jackson",
      comment: "Title name whichever should be",
      response: "In response to event title",
      submitted: "Jan 30, 2024",
    },
    {
      id: 2,
      author: "John Doe",
      comment: "Important Announcement for Students",
      response: "Annual Sports Day",
      submitted: "Feb 12, 2024",
    },
  ];

  const filteredData = eventData.filter(
    (item) =>
      item.author.toLowerCase().includes(search.toLowerCase()) ||
      item.comment.toLowerCase().includes(search.toLowerCase()) ||
      item.response.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      <TableHeader title="Event List" search={search} setSearch={setSearch} />

      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>AUTHOR</th>
              <th>COMMENT</th>
              <th>IN RESPONSE TO</th>
              <th>SUBMITTED ON</th>
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
                  <td>{item.author}</td>
                  <td>{item.comment}</td>
                  <td>{item.response}</td>
                  <td>{item.submitted}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 px-3 text-center text-gray-500">
                  No matching events found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
