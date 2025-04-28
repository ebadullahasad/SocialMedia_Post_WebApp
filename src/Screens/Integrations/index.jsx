// import React from "react";
// import Container from "../../Components/Container";
// import { IMAGES } from "../../utils/Images";
// import { AddIntegrations, MyIntegrations } from "../../Utils/DummyData";
// import { useSelector } from "react-redux";

// const Integrations = () => {
//   const theme = useSelector((state) => state.theme.theme);

//   return (
//     <Container>
//       <div className="w-full">
//         <div className="flex flex-col sm:gap-8 gap-4">
//           {/* My Integration Icon  */}
//           <div>
//             <h1 className="text8 font-semibold text-primaryColor dark:text-whiteColor">
//               My Integrations
//             </h1>
//             <div
//               className="grid sm:grid-cols-4 grid-cols-2 gap-4 md:justify-start 
//             justify-center items-start py-4"
//             >
//               {MyIntegrations.map((integration, index) => (
//                 <div className="flex items-start justify-start sm:p-6 p-4 sm:pl-6 pl-4 rounded-md cursor-pointer ">
//                   <div
//                     key={index}
//                     className="flex flex-col gap-y-1 items-center justify-center"
//                   >
//                     <img
//                       src={integration.img}
//                       alt={integration.name}
//                       draggable={false}
//                       className="md:w-[50px] w-[35px] object-contain"
//                     />
//                     <h2 className="text14 text-primaryColor dark:text-whiteColor">
//                       {integration.name}
//                     </h2>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* My Integration Icon  */}
//           {/* Add Integration Icon  */}
//           <div>
//             <h1 className="text8 font-semibold text-primaryColor dark:text-whiteColor">
//               +Add Intergration
//             </h1>
//             <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 md:justify-start 
//             justify-center items-start py-4">
//               {AddIntegrations.map((addintegration, index) => (
//                 <div className="flex items-start justify-start sm:p-6 sm:pl-8 pl-6 p-4 rounded-md cursor-pointer">
//                   <div
//                     key={index}
//                     className="flex flex-col gap-1 items-center justify-center"
//                   >
//                     <img
//                       src={addintegration.img}
//                       alt={addintegration.name}
//                       draggable={false}
//                       className="md:w-[50px] w-[35px] object-contain"
//                     />
//                     <h2 className="text14 text-primaryColor dark:text-whiteColor">
//                       {addintegration.name}
//                     </h2>
//                   </div>
//                 </div>
//               ))}
//               <div className="cursor-pointer sm:p-6 sm:pl-4 pl-5 p-4 rounded-md">
//                 <img
//                   src={theme === "dark" ? IMAGES.PLUSGRAY : IMAGES.PLUS}
//                   alt={IMAGES.PLUS}
//                   className="md:w-[80px] sm:w-[50px] w-[50px] object-contain 
//                   hover:shadow-custom border-[1px] dark:border-gray border-primaryColor border-dashed md:p-6 p-4 rounded-md"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Integrations;




import React from "react";
import Container from "../../Components/Container";
import { IMAGES } from "../../utils/Images";
import { AddIntegrations, MyIntegrations } from "../../Utils/DummyData";
import { useSelector } from "react-redux";

const Integrations = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Container>
      <div className="w-full">
        <div className="flex flex-col sm:gap-8 gap-4">
          {/* My Integration Icon  */}
          <div>
            <h1 className="text8 font-semibold text-primaryColor dark:text-whiteColor">
              My Integrations
            </h1>
            <div
              className="grid sm:grid-cols-4 grid-cols-2 gap-4 md:justify-start 
            justify-center items-start py-4 "
            >
              {MyIntegrations.map((integration, index) => (
                <div className="flex items-start justify-start ">
                  <div
                    key={index}
                    className=" md:min-w-auto min-w-[80px] w-fit cursor-pointer"
                  >
                    <img
                      src={integration.img}
                      alt={integration.name}
                      draggable={false}
                      className="md:w-[50px]  w-[35px] mx-auto object-contain"
                    />
                    <h2 className="text15 md:mt-2 mt-1 text-primaryColor text-center dark:text-whiteColor">
                      {integration.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* My Integration Icon  */}
          {/* Add Integration Icon  */}
          <div>
            <h1 className="text8 font-semibold text-primaryColor dark:text-whiteColor">
              +Add Intergration
            </h1>
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 md:justify-start 
            justify-center items-start py-4">
              {AddIntegrations.map((addintegration, index) => (
                <div className="flex items-start justify-start ">
                  <div
                    key={index}
                    className="md:min-w-auto min-w-[80px] w-fit cursor-pointer"
                  >
                    <img
                      src={addintegration.img}
                      alt={addintegration.name}
                      draggable={false}
                      className="md:w-[50px]  w-[35px] mx-auto object-contain"
                    />
                    <h2 className="text15 text-primaryColor md:mt-2 mt-1 text-center dark:text-whiteColor">
                      {addintegration.name}
                    </h2>
                  </div>
                </div>
              ))}
              <div className="cursor-pointer md:pl-auto pl-3 rounded-md">
                <img
                  src={theme === "dark" ? IMAGES.PLUSGRAY : IMAGES.PLUS}
                  alt={IMAGES.PLUS}
                  className="md:w-[60px] sm:w-[40px] w-[50px] object-contain 
                  hover:shadow-custom border-[1px] dark:border-gray border-primaryColor border-dashed md:p-5 p-4 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Integrations;
