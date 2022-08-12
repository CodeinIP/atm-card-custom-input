import React from "react";
import "../App.css";
import { useRef } from "react";
import { useState } from "react";
import PinInput from "./PinInput";

const Pin = ({
  input,
  setInput,
  correctInput,
  inputBoxClassName,
  length,
  maxlength,
}) => {
  const [arr] = useState(new Array(length).fill(0));
  const inputRef = useRef([]);
  const [inputData] = useState(new Array(length).fill(""));
  const changeHandler = (e, index) => {
    if (
      e.target.value != "" &&
      e.target.value.length === maxlength &&
      index < length - 1
    ) {
      inputData[index] = e.target.value;
      setInput(inputData.join(""));
      inputRef.current[index + 1].focus();
    } else if (index === length - 1) {
      inputData[index] = e.target.value;
      setInput(inputData.join(""));
    }
  };
  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
      setInput(inputData.join(""));
      inputData[index] = e.target.value;
    }
  };
  const handlePaste = (e) => {
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((_, index) => index < length);
    data.forEach((item, index) => {
      inputRef.current[index].value = item;
      inputData[index] = item;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };
  return (
    <div className={inputBoxClassName} onPaste={handlePaste}>
      {arr.map((_, index) => (
        <>
          <PinInput
            key={index}
            maxlength={maxlength}
            ref={(element) => (inputRef.current[index] = element)}
            onBackSpaceHandler={(e) => handleBackSpace(e, index)}
            singleInputHandler={(e) => changeHandler(e, index)}
          />
          {"/"}
        </>
      ))}
    </div>
  );
};

export default Pin;
