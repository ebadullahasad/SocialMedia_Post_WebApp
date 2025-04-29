import React, { useState } from "react";
import Container from "../../Components/Container";
import { IMAGES } from "../../Utils/images";
import Inputfield from "../../Components/Inputfield";
import ToggleButton from "./Components/ToggleButton";
import PasswordInput from "../../Components/PasswordInput";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    imgUrl: "",
  });
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      // console.log("File Type:", fileType); // log file type for debugging

      // Create the URL for the file (both video and image)
      setFormData({
        ...formData,
        imgUrl: URL.createObjectURL(file),
      });
    }
  };
  return (
    <Container>
      {/* Profile Avatar Section */}
      <div className="w-full flex flex-col items-center  md:py-8 py-4">
        <div className="relative w-32">
          {formData.imgUrl ? (
            <img
              src={formData.imgUrl}
              alt="Profile Avatar"
              className="md:w-32 w-20 h-20 md:h-32 mx-auto border rounded-full object-cover shadow-lg"
            />
          ) : (
            <img
              src={IMAGES.PROFILEAVATAR}
              alt="Profile Avatar"
              className="md:w-28 w-20 h-20 md:h-28 mx-auto border rounded-full object-cover shadow-lg"
            />
          )}
          <label htmlFor="file">
            <Inputfield
              id={"file"}
              type={"file"}
              accept={"image/*"}
              inputStyle={"hidden"}
              onChange={(e) => {
                handleImageChange(e);
              }}
            />
            <div className="file-upload-button">
              <div className="absolute bottom-0 md:right-6  right-8 bg-blueColor md:p-2 p-1 rounded-full cursor-pointer shadow-md">
                <img
                  src={IMAGES.CAMRAICON}
                  alt="Camera Icon"
                  className="md:w-4 w-3"
                />
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Full Name Section */}
      <form onSubmit={HandleSubmit} className="md:w-[80%] w-[90%] mx-auto">
        <div className="py-1">
          <h2 className="text11 font-bold pb-2 dark:text-whiteColor ">
            Full Name
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
            <Inputfield
              type="text"
              inputStyle="w-full shadow-md border border-gray-300 rounded-lg md:p-3 p-2  placeholder:text13 text13 "
              placeholder="First Name"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              defaultValue={formData.firstName}
            />
            <Inputfield
              type="text"
              inputStyle="w-full shadow-md border border-gray-300 rounded-lg md:p-3 p-2  placeholder:text13 text13"
              placeholder="Last Name"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              defaultValue={formData.lastName}
            />
          </div>
        </div>

        {/* Connected Email Section */}
        <div className="py-1">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-2">
            <h2 className="text11 font-bold pb-2 dark:text-whiteColor ">
              Connected Email
            </h2>
            <h2 className="text11 font-bold pb-2 dark:text-whiteColor md:block hidden  ">
              Appearance
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
            <Inputfield
              type="email"
              inputStyle="w-full shadow-md border border-gray-300 rounded-lg md:p-3 p-2  placeholder:text13 text13"
              placeholder="Email Address"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              defaultValue={formData.email}
            />
            <div className="flex items-center">
              <ToggleButton />
            </div>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="py-1">
          <h2 className="text11 font-bold mb:pb-4 pb-2 dark:text-whiteColor ">
            Change Password
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
            <PasswordInput
              type="password"
              inputStyle="w-full shadow-md border border-gray-300 rounded-lg md:p-3 p-2  placeholder:text13 text13 "
              placeholder="Enter Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              defaultValue={formData.password}
            />
            <PasswordInput
              type="password"
              inputStyle="w-full shadow-md border border-gray-300 rounded-lg md:p-3 p-2  placeholder:text13 text13"
              placeholder="Confirm Password"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              defaultValue={formData.confirmPassword}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:py-4 py-3 flex justify-center">
          <button
            onClick={HandleSubmit}
            className="bg-blueColor text13 dark:bg-cgreen text-white font-semibold rounded-full px-8 py-3 shadow-md hover:bg-blue-600"
          >
            Change
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Profile;
