import React from "react";
import { CardTracker1 } from "../../../Utils/DummyData";
import SocialActivity from "./SocialActivity";
import CardDetail from "./CardDetail";
const CardTracker = () => {
  return (
    <div className=" md:py-8 py-4">
      {CardTracker1 &&
        CardTracker1.map((data, ind) => (
          <div
            key={ind}
            className="flex lg:gap-5 md:mt-4 sm:flex-row sm:gap-4 flex-col  mt-2 w-full rounded-lg shadow-custom p-3 bg-whiteColor"
          >
            <CardDetail data={data} />
            <div className="w-full border sm:w-[1px] sm:h-auto h-[1px] bg- sm:mx-0 mx-auto sm:my-0 my-2"></div>
            <SocialActivity data={data} />
          </div>
        ))}
    </div>
  );
};

export default CardTracker;
