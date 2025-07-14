import { useEffect, useState } from "react";

import TableHeader from "../../Components/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import ClassSectionManager from "./ClassSectionManager";
import {
  activateSection,
  deactivateSection,
  getAllSections,
} from "../../AppStore/Slices/classSectionSlice";

export default function ClassSection() {
  return (
    <section className="p-3">
      <ClassSectionManager />
      <SectionList />
    </section>
  );
}

function SectionList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();

  const { allsections, isFetchingSections, successMessage, error } =
    useSelector((state) => state.classSection);

  const refresh = () => dispatch(getAllSections());

  useEffect(() => {
    refresh();
  }, [dispatch]);

  const filteredData = allsections?.filter((item) =>
    item.section_name?.toLowerCase().includes(search.toLowerCase())
  );
  console.log("sections", filteredData);

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
              <th>class</th>
              <th>section</th>
              <th>active</th>
              <th className="action-label">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr
                  key={item._id}
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
                  <td>{item?.class_id?.class_name}</td>
                  <td>{item?.section_name}</td>
                  <td className="mx-auto ml-4  ">
                    <input
                      type="checkbox"
                      checked={item?.is_active}
                      onChange={() => {
                        const action = item?.is_active
                          ? dispatch(deactivateSection(item?._id)).then(
                              (res) => {
                                if (!res.error) refresh();
                              }
                            )
                          : dispatch(activateSection(item?._id)).then((res) => {
                              if (!res.error) refresh();
                            });
                      }}
                      disabled={isFetchingSections}
                      className="!w-4 !h-4  !m-0 accent-green-600 cursor-pointer disabled:opacity-50"
                    />
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
