import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"
import { sideNavItems } from "../Utils/DummyData";



const Sidebar = ({ menu, setMenu }) => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const them = useSelector((state) => state.theme.theme);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div
      className={`bg-primaryColor dark:bg-whiteColor h-screen md:w-[135px] transition-all duration-500 custom-scrollbar ${
        menu ? "w-[110px] absolute left-0 top-0 z-50" : "w-0 md:relative absolute left-0 top-0 z-50"
      } overflow-hidden`}
    >
      <div className="flex flex-col items-center md:gap-5 gap-2 justify-center md:py-6 py-5 lg:px-10 md:px-8 px-6">
        {sideNavItems.map((item) => {
          const isActive = active === item.href;
          return (
            <Link key={item.id} to={item.href} onClick={() => setMenu(false)}>
              <item.Icon
                className="md:w-[26px] w-[22px]"
                color={
                  them === "light"
                    ? isActive
                      ? "#048EFE"
                      : "#ffffff"
                    : isActive
                      ? "#17A2B8"
                      : "#242424"
                }
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
