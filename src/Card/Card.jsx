import React from "react";
import { useState } from "react";
import "../App.css";

import Pin from "../Pin/Pin";

const Card = () => {
  const [input, setInput] = useState("");
  const [correctInput, setCorrectInput] = useState("");
  const [expiry, setExpiry] = useState("");
  return (
    <div className="cardPage">
      <div className="card">
        <div className="bankName">
          <h3>SBI ATM</h3>
        </div>
        <div className="cardNumber">
          <Pin
            length={4}
            input={input}
            correctInput={correctInput}
            setInput={setInput}
            maxlength={4}
            inputBoxClassName={"cardInputBox"}
          />
          <span>Card number</span>
        </div>
        <div className="cardHolderName">
          <h2>Praveen Chauhan</h2>
          <span>Card holder name</span>
        </div>
        <div className="expiry">
          <Pin
            length={2}
            maxlength={2}
            inputBoxClassName={"cardInputBox"}
            setInput={setExpiry}
            input={expiry}
          />
          <span>Expiry date</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
