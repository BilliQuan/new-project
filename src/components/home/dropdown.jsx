


function Dropdown() {
  return (
    <div  className="bg-[#dc3491] w-full  top-0 shadow-lg">
       <div className="px-6 py-15 text-center pb-2">
          <h1 className="text-white text-5xl">Mobile App Landing Page Template</h1>
          <p className="text-[#e38cb7] px-16 py-7 text-xl">The one and only solution for any kind of mobila app landing needs. Just <br /> change the screenshots and texts and you are good to go.</p>
        </div>
        <div className="overflow-hidden h-96 w-full flex justify-center ">
          <img src='/images/iphonex.png' alt="Phone mockup" className="w-full max-w-122 object-cover object-top" />
        </div>
        <div className='bg-[#FFFFFF] py-10'>
            <img src='/images/client-logos.png' alt="" />
        </div>
    </div>
  )
}

export default Dropdown
