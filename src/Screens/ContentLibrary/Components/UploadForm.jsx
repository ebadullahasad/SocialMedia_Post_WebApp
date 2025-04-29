import React, { useState } from "react";
import Inputfield from "../../../Components/Inputfield";
import Button from "../../../Components/Button";
import { IMAGES } from "../../../utils/images";
import UploadImage from "../../../Components/UploadImage";
import { platforma } from "../../../Utils/DummyData";
import { useSelector } from "react-redux";
import DropDown from "../../../Components/DropDown";

const ImageUploadForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    description: "",
    date: "",
    platForm: "",
    tags: "",
    type: "",
  });
  const { theme } = useSelector((state) => state.theme);

  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Track which item is being edited
  const [wordCount, setWordCount] = useState(0);
  const [uploads, setUploads] = useState([]); // Array to store uploaded images and descriptions
  const [showForm, setShowForm] = useState(true); // Toggle form visibility

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      console.log("File Type:", fileType); // log file type for debugging

      // Create the URL for the file (both video and image)
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
        type: fileType.includes("video") ? "video" : "image",
      });
    }
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
    setWordCount(e.target.value.length);
  };

  const handleAdd = () => {
    if (edit) {
      const updatedUploads = [...uploads];
      updatedUploads[editIndex] = formData; // Update the selected item
      setUploads(updatedUploads);
      setEdit(false);
      setEditIndex(null);
    } else {
      setUploads([...uploads, formData]); // Add new item
    }

    setFormData({
      image: null,
      description: "",
      platForm: "",
      tags: "",
      type: "",
      date: "",
    }); // Reset form
    setShowForm(false);
    setTimeout(() => setShowForm(true), 0);
  };

  const handleDelete = (index) => {
    const newUploads = [...uploads];
    newUploads.splice(index, 1);
    setUploads(newUploads);
  };

  const handleEdit = (index) => {
    const selectedUpload = uploads[index];
    setFormData({
      image: selectedUpload.image,
      description: selectedUpload.description,
      date: selectedUpload.date,
      platForm: selectedUpload.platForm,
      tags: selectedUpload.tags,
      type: selectedUpload.type,
    });
    setEdit(true);
    setEditIndex(index);
    setShowForm(false);
    setTimeout(() => setShowForm(true), 0);
  };

  return (
    <div className="md:py-8">
      {uploads.map((upload, index) => (
        <div
          key={index}
          className="md:mb-4 mb-2 rounded-lg shadow-custom md:w-[62%] w-full bg-whiteColor flex items-center justify-between gap-4"
        >
          <Inputfield
            type={"text"}
            placeholder={"Description"}
            inputStyle={"md:p-2 p-1 px-4 w-full text12"}
            divstyle={"w-full"}
            values={upload.description}
            disabled={true}
          />
          <div className="flex items-center md:gap-4 gap-1 md:pr-6 pr-2">
            <Button
              image={IMAGES.EDITICON}
              imageStyle={`md:w-8 w-5 `}
              onPress={() => handleEdit(index)}
            />
            <span className="text-gray md:text-4xl">|</span>
            {theme === "dark" ? (
              <Button
                image={IMAGES.DELETEICONDARK}
                imageStyle={`md:w-8 w-5 `}
                onPress={() => handleDelete(index)}
              />
            ) : (
              <Button
                image={IMAGES.DELETEICON}
                imageStyle={`md:w-8 w-5 `}
                onPress={() => handleDelete(index)}
              />
            )}
          </div>
        </div>
      ))}
      {showForm && (
        <div>
          <UploadImage
            handleImageChange={handleImageChange}
            fileize
            imageUrl={formData.image}
          />
          {/* {textarea} */}
          <div className="xl:w-[62%] w-full relative md:mt-10">
            <div className="relative md:h-[200px] h-[180px] custom-scroll border border-gray rounded-lg shadow-xl  px-4 py-6 bg-white ">
              <textarea
                onChange={handleDescriptionChange}
                minLength={10}
                maxLength={2000}
                placeholder="Description"
                className="w-full h-full text11 placeholder:text-gray3 scroll-m-2 resize-none border-none outline-none pr-8"
                defaultValue={formData.description}
              ></textarea>

              <p className="absolute -bottom-2 right-2 text-black text-sm mb-2">
                {wordCount}/2000
              </p>
            </div>
          </div>
          {/* {textarea} */}

          <div className="md:py-4 py-2 grid sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 xl:w-[62%] w-full">
            <Inputfield
              type="date"
              inputStyle={
                "md:p-4 p-2 px-4 border border-gray rounded-lg w-full text-gray text12 shadow-custom"
              }
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              defaultValue={formData.date}
            />
            <DropDown
              selectValue={platforma}
              value={formData.platForm}
              selected={"Platform"}
              className={
                "appearance-none md:p-4 p-2 px-4 border  border-gray rounded-lg w-full focus:outline-none text-gray text12 shadow-custom"
              }
              onPress={(e) =>
                setFormData({ ...formData, platForm: e.target.value })
              }
            />
          </div>

          <div className="flex  items-center md:flex-row flex-col md:gap-3 gap-2">
            <div className="xl:w-[46%] w-full flex items-center justify-center border bg-whiteColor border-gray rounded-lg shadow-custom">
              <p className="text12 border w-fit py-3 px-4 rounded-lg bg-lightblueColor dark:bg-cgreen text-whiteColor">
                Tags
              </p>
              <Inputfield
                type={"text"}
                inputStyle="p-2 px-4 rounded-lg w-full text10"
                divstyle={"w-full"}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
                defaultValue={formData.tags}
              />
            </div>

            <div className="flex items-center md:gap-3 gap-2 md:pb-0 pb-6">
              <Button
                btnname={"Upload"}
                btnStyle={
                  "px-2 md:py-3 py-2 md:w-[96px] sm:w-[220px] w-[110px]  text12   rounded-lg bg-black dark:bg-whiteColor dark:text-black  text-whiteColor"
                }
              />
              <Button
                btnname={edit ? "Update" : "Add"}
                btnStyle={
                  "px-2 md:py-3 py-2 md:w-[96px] sm:w-[220px] w-[110px] text12  rounded-lg bg-blueColor dark:bg-cgreen text-whiteColor"
                }
                onPress={handleAdd}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
