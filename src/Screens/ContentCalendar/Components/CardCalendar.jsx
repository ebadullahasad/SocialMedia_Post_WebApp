const CardCalendar = ({ card = [] }) => {  // Ensure card is always an array
  return (
    <div className="gridclass gap-10 pt-5">
      {
        card.map((member, ind) => (
          <div key={ind} className="rounded-lg shadow-custom bg-white overflow-hidden p-4">
            {/* ImageSection */}
            <div className="relative h-[220px]">
              <img src={member.img1} alt="Main" className="w-full h-full relative rounded-xl" />
              <img src={member.img3} alt="Icon" className="absolute left-4 md:-bottom-4 -bottom-2 md:w-[30px] w-[20px]" />
            </div>

            {/* Text1 */}
            <div className="flex flex-row justify-end mt-4">
              <img src={member.img2} alt="Edit Icon" className="md:w-[20px] w-[16px]" />
            </div>

            {/* Text2 */}
            <div className="flex flex-row justify-between mt-4">
              <p className="text-black text12 font-Barlow font-semibold">{member.heading}</p>
              <div className="flex flex-row justify-between">
                <p className="text-black text12 font-semibold">{member.day}</p>
                <span className="px-2 text12 text-gray1">|</span>
                <p className="text-black text12">{member.date}</p>
              </div>
            </div>

            {/* Text3 */}
            <p className="text12 md:mt-2 mt-1">{member.para}</p>
          </div>
        ))
      }
    </div>
  );
};

export default CardCalendar;