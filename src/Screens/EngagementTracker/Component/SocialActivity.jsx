import React from "react";

const SocialActivity = ({data}) => {
  return (
    <div className="flex xl:gap-16 lg:gap-10 flex-row md:w-[50%] md:gap-7 justify-center items-center gap-5 w-full py-2">
      <div className="flex flex-col items-center justify-center">
        <img
          className="lg:w-11 md:w-8 w-6"
          src={data.img2}
          alt={data.img2}
        />
        <p className="text13 font-semibold mt-2">
          {data.likes[0].like}
        </p>
        <p className="text13  pr-2 text-lightblueColor">
          {data.rating[0].rat}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="lg:w-11 md:w-8 w-6"
          src={data.img3}
          alt={data.img3}
        />
        <p className="text13 text-black font-semibold mt-2">
          {data.likes[1].like}
        </p>
        <p className="text13  pr-2 text-lightblueColor">
          {data.rating[1].rat}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="lg:w-11 md:w-8 w-6"
          src={data.img4}
          alt={data.img4}
        />
        <p className="text13 text-black font-semibold mt-2">
          {data.likes[2].like}
        </p>
        <p className="text13  pr-2 text-lightblueColor">
          {data.rating[2].rat}
        </p>
      </div>
    </div>
  );
};

export default SocialActivity;
