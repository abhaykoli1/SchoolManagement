import React from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

const InventoryHeader = ({ title, search, setSearch }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-3">
      <h2 className="text-[17px] font-semibold uppercase">{title}</h2>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
        <div className="hidden sm:block relative ml-2">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="table-search-input"
          />
        </div>
      </div>
    </div>
  );
};

InventoryHeader.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default InventoryHeader;
