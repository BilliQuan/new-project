import React from "react";
import "./App.css";

function highlight() {
  return (
    <div className="bg-[#FAF6FB]">
      <div className="text-center py-15 ">
        <p className="text-gray-500 text-sm pb-2">HIGHLIGHTS</p>
        <h2 className="text-[#633991] font-bold text-3xl">Features you love</h2>
      </div>
      <div className="flex gap-8 max-w-7xl  mx-auto px-6 pb-20">
        <div className="flex  gap-4 border border-gray-200 border-l-[#dc3491] border-l-4  p-4">
          <i className="fas fa-face-smile text-4xl  text-[#dc3491] pt-1"></i>
          <div>
            <h3 className="text-xl font-bold py-2">simple</h3>
            <p className="text-gray-500 text-sm pt-2 ">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-gray-300 border-l-[#dc3491] border-l-4  p-4">
          <i className="fas fa-cog text-4xl text-[#dc3491] pt-1"></i>
          <div>
            <h3 className="text-xl font-bold py-2">Customize</h3>
            <p className="text-gray-500 text-sm pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-gray-200 border-l-[#dc3491] border-l-4  p-4">
          <i className="fas fa-lock text-4xl text-[#dc3491] pt-1"></i>
          <div>
            <h3 className="text-xl font-bold py-2">Secure</h3>
            <p className="text-gray-500 text-sm pt-2">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default highlight;
