import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import AnalyticsDetails from "./AnalyticsDetails";
const SelectedCards = () => {
  const [selected, setSelected] = useState("User Engagement");

  const handleChange = (selectedTab) => {
    setSelected(selectedTab);
  };
  return (
    <div className="md:mb-6">

      <div className="flex md:items-center md:justify-center lg:gap-4 md:gap-2 gap-1 overflow-x-auto scroll-snap-x md:py-4 py-2 snap-mandatory">
        <div
          onClick={() => handleChange("User Engagement")}
          className="min-w-full lg:min-w-[49%] md:min-w-[48%] sm:min-w-[49%] bg-whiteColor flex items-center justify-between p-6 cursor-pointer rounded-lg shadow-md snap-center"
        >
          <span className="text12 font-medium">User Engagement</span>
          <span>
            {selected === "User Engagement" ? (
              <MdKeyboardArrowUp size={24} />
            ) : (
              <MdKeyboardArrowDown size={24} />
            )}
          </span>
        </div>

        <div
          onClick={() => handleChange("Follower Analysis")}
          className="min-w-full lg:min-w-[49%] md:min-w-[48%] sm:min-w-[49%] bg-whiteColor flex items-center justify-between p-6 cursor-pointer rounded-lg shadow-md snap-center"
        >
          <span className="text12 font-medium">Follower Analysis</span>
          <span>
            {selected === "Follower Analysis" ? (
              <MdKeyboardArrowUp size={24} />
            ) : (
              <MdKeyboardArrowDown size={24} />
            )}
          </span>
        </div>
      </div>

      <AnalyticsDetails selected={selected} />
    </div>
  );
};

export default SelectedCards;
