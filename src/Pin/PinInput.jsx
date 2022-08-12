import React from "react";
import { forwardRef } from "react";

const PinInput = forwardRef(
  ({ maxlength, onBackSpaceHandler, singleInputHandler }, ref) => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 8 && !e.target.value) {
        onBackSpaceHandler(e);
      } else {
        singleInputHandler(e);
      }
    };
    return (
      <>
        <input
          type="text"
          ref={ref}
          maxLength={maxlength}
          onKeyUp={handleKeyUp}
        />
      </>
    );
  }
);

export default PinInput;
