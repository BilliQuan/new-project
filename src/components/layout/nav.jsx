

function Nav() {
  return (
    <div className="bg-[#dc3491] w-full sticky z-20 top-0 shadow-lg">
      <div className="max-w-7xl  mx-auto">
        <div className="px-6 py-5 flex justify-between items-center text-sm">
          <div className="text-2xl font-bold text-white">MOBAPP</div>
          <div className="flex gap-8 items-center">
            <a href="#" className="text-white hover:text-gray-200 transition">HOME</a>
            <a href="#" className="text-white hover:text-gray-200 transition">FEATURES</a>
            <a href="#" className="text-gray-400 hover:text-white transition">GALLERY</a>
            <a href="#" className="text-white hover:text-gray-200 transition">PRICING</a>
            <a href="#" className="text-white hover:text-gray-200 transition">CONTACT</a>
            <button className="border border-white bg-transparent text-white px-6 py-2 rounded cursor-pointer font-semibold hover:bg-white hover:text-[#dc3491] transition">
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
