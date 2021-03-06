import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
