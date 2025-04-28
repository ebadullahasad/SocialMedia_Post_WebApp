import React from "react";
import { bulkPostData } from "../../../Utils/DummyData";
import Button from "../../../Components/Button";

const PostCard = () => {
  return (
    <div className="text-center ">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:my-10 my-5">
        {bulkPostData.map((member, ind) => (
          <div
            key={ind}
            className="rounded-2xl shadow-custom bg-white overflow-hidden lg:p-3 p-2"
          >
            {/* ImageSection */}
            <div className="relative h-[180px]">
              <img
                src={member.img1}
                alt="Main"
                className="w-full h-full md:object-fill object-cover relative rounded-2xl"
              />
              <img
                src={member.img3}
                alt="Icon"
                className="absolute left-4 -bottom-4 w-[40px] h-[40px]"
              />
            </div>

            {/* Text1 */}
            <div className="flex flex-row justify-end mt-4">
              <img
                src={member.img2}
                alt={member.img2}
                className="sm:w-[18px] sm:h-[18px] w-[16px] h-[16px]"
              />
            </div>

            {/* Text2 */}
            <div className="flex flex-row items-center justify-between mt-4">
              <p className="text-black text14 font-Barlow font-semibold">
                {member.heading}
              </p>
              <div className="flex flex-row items-center justify-center">
                <p className="text-black text15 font-medium">{member.day}</p>
                <span className="px-1 text14 text-gray1">|</span>
                <p className="text-black text15">{member.date}</p>
              </div>
            </div>
            {/* Text3 */}
            <p className="text15 text-primaryColor text-left mt-2">
              {member.para}
            </p>
          </div>
          // </div>
        ))}
      </div>
      <Button
        btnname="Upload"
        btnStyle="bg-primaryColor px-10 text14 py-2 rounded-md text-whiteColor dark:text-primaryColor dark:bg-whiteColor"
      />
    </div>
  );
};

export default PostCard;
