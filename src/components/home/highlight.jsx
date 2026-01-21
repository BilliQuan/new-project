



function Highlight() {
  return (
    <div className="">
      <div className="bg-[#FAF6FB]">
        <div className="text-center py-15 ">
          <p className="text-gray-500 text-sm pb-2">HIGHLIGHTS</p>
          <h2 className="text-[#633991] font-bold text-3xl">
            Features you love
          </h2>
        </div>
        <div className="flex gap-8  px-20 pb-20">
          <div className="flex  gap-4 border border-gray-200 border-l-[#dc3491] border-l-4 transition-transform duration-300 ease-in-out hover:-translate-y-1 bg-white  p-4 cursor-pointer">
            <i className="fas fa-face-smile text-4xl  text-[#dc3491] pt-1"></i>
            <div>
              <h3 className="text-xl font-bold py-2">simple</h3>
              <p className="text-gray-500 text-sm pt-2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                rutrum, urna eu pellentesque
              </p>
            </div>
          </div>
          <div className="flex  gap-4 border border-gray-300 border-l-[#dc3491] border-l-4 transition-transform duration-300 ease-in-out hover:-translate-y-1 bg-white  p-4 cursor-pointer">
            <i className="fas fa-cog text-4xl text-start  text-[#dc3491] pt-1"></i>
            <div>
              <h3 className="text-xl font-bold py-2">Customize</h3>
              <p className="text-gray-500 text-sm pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                rutrum, urna eu pellentesque
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 border border-gray-200 border-l-[#dc3491] border-l-4 transition-transform duration-300 ease-in-out hover:-translate-y-1 bg-white p-4 cursor-pointer ">
            <i className="fas fa-lock text-4xl text-[#dc3491] pt-1"></i>
            <div>
              <h3 className="text-xl font-bold py-2">Secure</h3>
              <p className="text-gray-500 text-sm pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                rutrum, urna eu pellentesque
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="relative bg-white py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

      
      <div class="flex justify-center ">
        <img
          src="/images/perspective.png"
          alt="App preview"
          class="w-70 sm:w-85 lg:w-105
                 drop-shadow-2xl transform -rotate-6"
        />
      </div>

      
      <div class="text-center lg:text-left">


        <div class="flex justify-center lg:justify-start mb-6">
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center
                   bg-linear-to-br from-pink-500 to-purple-600 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        
        <h1 class="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          Discover our App
        </h1>

        
        <p class="text-gray-500 max-w-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati vel exercitationem eveniet vero maxime ratione.
        </p>

        
        <button
          class="inline-block px-8 py-3 rounded-md text-white font-medium
                 bg-pink-500 hover:bg-pink-600
                 transition-all duration-300 ease-in-out
                 hover:-translate-y-1 shadow-md">
          READ MORE
        </button>

      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Highlight;
