import React from "react";
import Inputfield from "./Inputfield";
import { IMAGES } from "../Utils/images";
import { useSelector } from "react-redux";

const UploadImage = ({ handleImageChange, imageUrl, fileize, imageType }) => {
  const them = useSelector((state) => state.theme.theme);
  return (
    <div className="w-fit">
      <label htmlFor="file" className="cursor-pointer">
        <span className="sr-only">Upload Profile Image</span>
        <Inputfield
          id={"file"}
          type={"file"}
          accept={"image/*,video/*,gif/*"}
          inputStyle={"hidden"}
          onChange={handleImageChange}
        />
        <div className="file-upload-button w-fit py-8 px-8 border-2 border-dashed border-gray rounded-lg bg-whiteColor dark:bg-transparent">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageUrl}
              className="md:w-24 w-16 mx-auto"
            />
          ) : (
            <img
              src={them === "light" ? IMAGES.UPLOADICON : IMAGES.UPLOADICONDARK}
              alt={them === "light" ? IMAGES.UPLOADICON : IMAGES.UPLOADICONDARK}
              className="md:w-12 w-10 mx-auto"
            />
          )}
        </div>
        <div className="py-2">
          {fileize && (
            <p className="text-black dark:text-whiteColor text16">
              Max 1GB | jpg,png,gif
            </p>
          )}
        </div>
      </label>
    </div>
  );
};

export default UploadImage;
