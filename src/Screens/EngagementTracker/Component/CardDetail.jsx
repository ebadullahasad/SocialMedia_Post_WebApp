import React from "react";

const CardDetail = ({data}) => {
  return (
    <div className="md:w-[50%] w-full flex sm:flex-row flex-col lg:gap-8 sm:gap-4">
      {/* ImageWork */}
      <div className="sm:w-[40%] w-full">
        <img
          className="lg:h-[175px] md:h-[120px] sm:h-[130px] w-full h-[200px] rounded-lg"
          src={data.img1}
          alt={data.img1}
        />
      </div>
      {/* TextWork */}
      <div className="sm:w-[60%] flex flex-col sm:justify-normal sm:items-start justify-center items-center w-full xl:pt-10 lg:py-8 md:py-5 sm:py-6 py-2">
        <div className="flex md:justify-normal md:items-start justify-center items-center md:mt-2 sm:mt-3">
          <p className="text13 font-bold">
            {data.day}
          </p>
          <span className="text13 text-gray1 px-2 ">
            |
          </span>
          <p className="text13">{data.date}</p>
        </div>
        <p className="text12 lg:mt-2  md:mt-2 mt-1 font-semibold">
          {data.heading}
        </p>
        <p className="text13">{data.para}</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CardDetail;
