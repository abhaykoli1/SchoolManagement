export default function Navbar() {
  return (
    <div className="text-center space-y-4">
      <div className="inline-block px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
        Abhay Koli
      </div>
      <h1 className="text-4xl font-bold text-purple-700">
        Unlock all our features
      </h1>
      <button className="bg-yellow-400 px-4 py-2 rounded-lg font-semibold">
        Upgrade your plan
      </button>
      <div className="mt-4 flex justify-center gap-4">
        <button className="px-3 py-1 border border-gray-300 rounded-full">
          Your designs
        </button>
        <button className="px-3 py-1 border border-purple-600 rounded-full bg-purple-100 text-purple-700">
          Templates
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-full">
          Canva AI
        </button>
      </div>
    </div>
  );
}
