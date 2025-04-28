import React, { useState } from "react";
import { IMAGES } from "../utils/Images";

const PasswordInput = ({
  label,
  name,
  values,
  onChange,
  onBlur,
  errors,
  touched,
  labelstyle,
  divstyle,
  innerdiv,
  inputStyle,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={divstyle}>
      {label && <label className={`     ${labelstyle}`}>{label}</label>}
      <div className={`relative  flex items-center    ${innerdiv}`}>
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={values}
          onChange={onChange}
          onBlur={onBlur}
          className={`placeholder-placeHolder w-full  focus:outline-none ${inputStyle}  `}
          placeholder={placeholder}
        />
        <span
          className={`absolute  right-0 md:top-5 top-3 cursor-pointer`}
          onClick={togglePasswordVisibility}
        >
          <img
            src={showPassword ? IMAGES.SHOWICON : IMAGES.HIDEICON}
            alt="toggle visibility"
            className="md:w-8 w-6 md:mr-4 md:-mt-2 -mt-1  mr-3"
          />
        </span>
      </div>
      {errors && touched && (
        <div className="text-end mt-2  text10 text-red-500">{errors}</div>
      )}
    </div>
  );
};

export default PasswordInput;
