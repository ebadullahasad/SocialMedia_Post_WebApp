import React from "react";
import { engagments, insights } from "../../../Utils/DummyData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AnalyticsDetails = ({ selected }) => {
  const data = {
    labels: ["Followers", "Non Followers"],
    datasets: [
      {
        label: "# of Votes",
        data: [46.3, 60],
        backgroundColor: ["#042EFE", "#048EFE"],
      },
    ],
  };

  return (
    <div className="md:p-4 p-2 rounded-xl shadow-lg bg-whiteColor md:mb-auto mb-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-10 gap-4">
        {/* Analytics Text */}
        <div className="md:w-[80%]">
          <h2 className="text8 font-semibold">Insights</h2>
          <div className="md:space-y-6 space-y-2 mt-4">
            {selected === "User Engagement"
              ? engagments.map((insight) => ( 
                <div
                  key={insight.qyt}
                  className="flex justify-between items-center text12"
                >
                  <p className="flex-1 break-words">{insight.title}</p>
                  <div>
                    <div className="flex flex-col items-end md:gap-1">
                      <p className="text12">{insight.qyt}</p>
                      <p className="text-lightblueColor text11">
                        {insight.percent}
                      </p>
                    </div>
                  </div>
                </div>
              ))
              : insights.map((insight) => (
                <div
                  key={insight.qyt}
                  className="flex justify-between items-center text12"
                >
                  <p className="flex-1 break-words">{insight.title}</p>
                  <div>
                    <div className="flex flex-col items-end md:gap-1">
                      <p className="text11">{insight.qyt}</p>
                      <p className="text-lightblueColor text11">
                        {insight.percent}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Analytics Graph */}
        <div className="rounded-lg w-full p-3 bg-whiteColor shadow-[0px_0px_4px_2px_rgba(80,80,80,0.20)]">
          {selected === "User Engagement" ? (
            <div className="flex flex-col items-center ">
              <span className="text10 font-semibold">1000</span>
              <p className="text11">User Engagment</p>
            </div>
          ) : (
            <div className="text-center">
              <span className="text10 font-semibold">1000</span>
              <p className="text11">Users Followers</p>
            </div>
          )}

          <div className="flex flex-col xl:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center">
              <span className="text11 font-semibold">50.3%</span>
              <div className="flex items-center gap-2">
                {selected === "User Engagement" ? (
                  <p className="text13">Likes</p>
                ) : (
                  <p className="text13">Followers</p>
                )}
                <div className="p-1 rounded-full bg-lightblueColor"></div>
              </div>
            </div>

            <div className="w-[90%] max-w-[400px] md:w-[200px]">
              <Doughnut
                data={data}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  responsive: true,
                  radius: 50,
                  cutout: 60,
                  borderColor: "transparent",
                }}
              />
            </div>

            <div className="mb-6 md:mb-0 text-center">
              <span className="text11 font-semibold">50.3%</span>
              <div className="flex items-center gap-2">
                {selected === "User Engagement" ? (
                  <p className="text13">Comments</p>
                ) : (
                  <p className="text13">Non Followers</p>
                )}
                <div className="p-1 rounded-full bg-blueColor"></div>
              </div>
            </div>
          </div>

          <div className="md:py-4 md:mb-auto mb-2">
            <div className="bg-gray w-full p-[1px]"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <p className="text11 font-medium">Impressions</p>
            <div className="md:text-end text-center">
              <p className="text12 font-medium">1,890</p>
              <p className="text-pink text12 ">+18.3%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDetails;
