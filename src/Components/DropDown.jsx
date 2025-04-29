import React from "react";
import { IMAGES } from "../Utils/images";

function DropDown({
  selectValue,
  onSelect,
  className,
  optionStyle,
  onPress,
  divStyle,
  value,
  selected,
}) {
  return (
    <div className={divStyle ? `relative  ${divStyle}` : `relative`}>
      <select
        onChange={onPress}
        value={value}
        className={
          className
            ? className
            : `w-full border border-primaryColor text-primaryColor
      font-medium py-2 text12 rounded-md focus:outline-none mb-2 px-2`
        }
      >
        {selected && (
          <option value="" selected={true} disabled>
            {selected}
          </option>
        )}
        {selectValue?.map((value, index) => (
          <option
            className={`${
              optionStyle ? optionStyle : "bg-secondaryColor text-black"
            }`}
            key={index}
            value={value}
          >
            {value}
          </option>
        ))}
      </select>
      <div class="absolute inset-y-0 right-[15px] flex items-center pointer-events-none">
        <img src={IMAGES.DROPDOWN} className="md:w-3 md:h-2 w-2 h-1.5" />
      </div>
    </div>
  );
}

export default DropDown;
