"use client";
import { useState, useEffect, useRef } from "react";

const BsTabs = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className=" flex justify-center items-center py-2">
      <div className=" flex flex-col gap-y-2 w-full">
        <div className="bg-green-800 p-1  rounded-l flex justify-between items-center gap-x-2 font-bold text-white">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 hover:bg-green-300 rounded-l text-cneter focus:ring-2 focus:bg-white focus:text-blue-600 ${
                selectedTab === index ? "ring-2 bg-white text-blue-600" : ""
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-1 rounded-l">
          {items.map((item, index) => (
            <div className={`${selectedTab === index ? "" : "hidden"}`}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BsTabs;
