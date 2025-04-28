import React, { useState, useEffect } from "react";
import Inputfield from "../../../Components/InputField";
import { carddata } from "../../../Utils/DummyData";
import moment from "moment";
import CardCalendar from "./CardCalendar";
import { IMAGES } from "../../../Utils/Images";

const Calendar = () => {
  const today = moment();
  const [userDate, setUserDate] = useState(today.format("YYYY-MM-DD"));
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(today.format("ddd"));

  const filterData = (selectedDate) => {
    const formattedDate = moment(selectedDate, "YYYY-MM-DD").format("ddd / D");
    const filtered = carddata.filter((item) => {
      const cardDate = `${item.day} / ${item.date}`;
      return cardDate === formattedDate;
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData(userDate);
  }, [userDate]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    console.log(newDate);
    const dayOfWeek = moment(newDate, "YYYY-MM-DD").format("ddd");

    setSelectedDay([dayOfWeek]);
    setUserDate(newDate);
  };
  console.log(userDate);

  return (
    <div className="p-4">
      <div
        className="w-fit flex flex-rows gap-4 shadow-custom md:p-5 p-3 rounded-lg cursor-pointer bg-white"
        onClick={() => {
          document.getElementById("datepicker").showPicker();
        }}
      >
        <p className="text12 ">{selectedDay}</p>
        <span className="text12 text-gray1">|</span>
        <p className="text12 ">{userDate}</p>
        <div className="relative flex items-center">
          <input
          id="datepicker"
            type="date"
            value={userDate}
            onChange={handleDateChange}
            className="cursor-pointer border rounded-md shadow-sm w-full opacity-0 absolute inset-0 z-10"
          />
          <img
            src={IMAGES.DROPDOWN}
            alt="dropdown"
            className="cursor-pointer md:w-3 w-2"
          />
        </div>
      </div>

      <div className="md:mt-6 mt-3">
        {filteredData.length > 0 ? (
          <CardCalendar card={filteredData} />
        ) : (
          <p className="text-gray-500 text13 dark:text-white">
            No cards available for the selected date.
          </p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
