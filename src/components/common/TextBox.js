import React from "react";

function TextBox({
  placeholder,
  minLength = 1,
  maxLength = 100,
  min = 0,
  max = 1000,
  styleInput,
  styleWrapper,
  value,
  handleChange,
  type = "text",
}) {
  return (
    <div className={`w-full ${styleWrapper}`}>
      <input
        className={`w-full ${styleInput}`}
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
      />
    </div>
  );
}

export default TextBox;
