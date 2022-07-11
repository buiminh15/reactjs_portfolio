import React from "react";
import { IconContext } from "react-icons";
function IconWrapper({ element, styleProvider, handleClick }) {
  return (
    <IconContext.Provider value={styleProvider}>
      <div onClick={handleClick}>{element}</div>
    </IconContext.Provider>
  );
}

export default IconWrapper;
