import React, { useState } from "react";
import Container from "../../Components/Container";
import UploadImage from "../../Components/UploadImage";
import DatePickerComponent from "./components/DataPickerComponent";
import PostCard from "./components/PostCard";

const BulkUpload = () => {
  const [formData, setFormData] = useState({
    image: null,
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      console.log("File Type:", fileType);

      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
        type: fileType.includes("video") ? "video" : "image",
      });
    }
  };
  return (
    <Container search>
      <div className="xl:w-[%] w-full md:py-8 py-5">
        <UploadImage
          handleImageChange={handleImageChange}
          imageUrl={formData.image}
          fileize="Max 2GB | jpg,png,gif"
        />
        <div className="xl:w-[84%] w-full">
          <DatePickerComponent />
        </div>
        <PostCard />
      </div>
    </Container>
  );
};

export default BulkUpload;
