import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ title, search, setSearch }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center bg-white border-b py-4 gap-3 sm:gap-4">
      <button className="!border !border-black !text-black px-3 py-2 rounded text-sm w-full sm:w-auto">
        Add filter ▼
      </button>
      <input
        type="text"
        placeholder={`Search for ${title.toLowerCase()}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border bg-gray-100 px-3 py-2 rounded text-sm w-full sm:flex-1"
      />
      <button className="bg-[#0b1d6e] text-white px-6 py-2 rounded text-sm w-full sm:w-auto">
        Search
      </button>
    </div>
  );
};

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default TableHeader;
