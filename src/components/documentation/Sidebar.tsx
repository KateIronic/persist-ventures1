import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-[370px] text-white p-4 flex flex-col border-[#808080] border-t-[1px] border-r-[1px] rounded-tr-3xl mt-10 relative">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-xl text-white focus:outline-none bg-[#212121] border-white border-2"
        />
      </div>
      <div className="flex flex-col space-y-2 overflow-y-scroll">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="p-2 rounded cursor-pointer">
            Overview
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
