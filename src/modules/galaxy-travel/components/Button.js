import React from "react";
import { Link } from "react-router-dom";
function Button({ title, flag, url }) {
  return (
    <Link
      to={url}
      className={`${
        flag ? "bg-gray-400/[.6]" : "bg-transparent"
      }  border border-white px-8 py-2  uppercase text-xl hover:bg-gray-400/[.6]`}
    >
      {title}
    </Link>
  );
}

export default Button;
