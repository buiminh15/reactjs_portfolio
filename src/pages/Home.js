import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "Navbar Responsive",
    url: "navbar-responsive",
  },
  {
    id: 2,
    name: "Galaxy Travel",
    url: "galaxy",
  },
];

function Home() {
  return (
    <div className="max-w-[1240px] mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {links.map((item) => (
          <Link
            key={`home-id-${item.id}`}
            to={item.url}
            className="text-center py-2 cursor-pointer border border-[#808080] rounded gap-2"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
