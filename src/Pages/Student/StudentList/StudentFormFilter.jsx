export default function StudentFormFilter() {
  return (
    <div className="bg-[#f9f8f5] flex items-center justify-cente">
      <form className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-[17px] font-semibold uppercase mb-6">
          Student Information Panel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              NAME
            </label>
            <input
              placeholder="Enter Student Name"
              type="text"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Class */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              CLASS
            </label>
            <select className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3">
              <option>Select Class</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              GENDER
            </label>
            <select className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              EMAIL ADDRESS
            </label>
            <input
              placeholder="Enter Email Address"
              type="email"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              PHONE NUMBER
            </label>
            <input
              placeholder="Enter Phone Number"
              type="tel"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>
          <div className="flex justify-start mt-6">
            <button
              type="submit"
              className="bg-[#0b1d6e] cursor-pointer text-white px-6 py-2 text-sm rounded hover:bg-[#1e2e89] w-full sm:w-auto"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
