import React from "react";
import Inputfield from "../../../Components/InputField";
import Button from "../../../Components/Button";

const DataPickerComponent = () => {
  return (
    <div className="pt-6 flex sm:flex-row flex-col sm:items-center md:gap-4 gap-2">
      <div
      onClick={() => {
        document.getElementById("datepicker").showPicker();
      }}
        className="w-full md:w-[90%] flex items-center justify-between pr-2 bg-whiteColor 
   shadow-lg rounded-md cursor-pointer"
      >
        <Button
          btnname="Shedule Uploads"
          btnStyle="bg-lightblueColor dark:bg-cgreen text13 text-whiteColor rounded-md sm:px-6 px-2 py-3"
        />
        <Inputfield type="date" id="datepicker" inputStyle="text11" />
      </div>
      <Button
        btnname="Edit"
        btnStyle="bg-primaryColor dark:bg-cgreen text13 text-whiteColor rounded-md sm:px-10 px-6 py-3"
      />
    </div>
  );
};

export default DataPickerComponent;
