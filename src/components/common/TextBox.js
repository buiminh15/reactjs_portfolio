import React from "react";

function TextBox({ placeholder, minLength = 1, maxLength = 100, styleInput, styleWrapper }) {
  return (
    <div className={`w-full ${styleWrapper}`}>
      <input
        className={`w-full ${styleInput}`}
        type="text"
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
}

export default TextBox;
