export default function StudentFormFilter() {
  return (
    <div className="bg-[#f9f8f5] flex items-center justify-cente">
      <form className="bg-white p-4 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-6">
          Student Information Panel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              NAME
            </label>
            <input
              type="text"
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              CLASS
            </label>
            <select className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3">
              <option>Select Class</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              GENDER
            </label>
            <select className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              PHONE NUMBER
            </label>
            <input
              type="tel"
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>
          <div className="flex justify-start mt-6">
            <button
              type="submit"
              className="bg-[#0b1d6e] text-white text-sm font-semibold px-8 py-1.5 rounded-md hover:bg-[#1e2e89] transition"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}


