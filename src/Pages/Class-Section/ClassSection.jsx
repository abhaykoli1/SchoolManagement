import { useState } from "react";
import AddClassSection from "./AddClassSection";
import TableHeader from "../../Components/TableHeader";

export default function ClassSection() {
  return (
    <>
      <AddClassSection />
      <SectionList />
    </>
  );
}

function SectionList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const sectionData = [
    {
      id: 1,
      title: "Title name whichever should be",
      publishDate: "Jan 30, 2024",
      fileLink: "https://deeniyatynr.com/home-slider",
    },
    {
      id: 2,
      title: "Another section title",
      publishDate: "Feb 12, 2024",
      fileLink: "Attachment.pdf",
    },
  ];

  const filteredData = sectionData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      <TableHeader
        title="Class Section"
        search={search}
        setSearch={setSearch}
      />

      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>TITLE</th>
              <th>PUBLISH DATE</th>
              <th>FILE / LINK</th>
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
                  <td>{item.title}</td>
                  <td>{item.publishDate}</td>
                  <td>
                    {item.fileLink.startsWith("http") ? (
                      <a
                        href={item.fileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    ) : (
                      item.fileLink
                    )}
                  </td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-3 text-center text-gray-500">
                  No matching results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
