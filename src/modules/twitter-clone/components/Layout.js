import React from "react";
import Sidebar from "./Sidebar";

function Main({ children }) {
  return (
    <main>
      <div className="grid grid-cols-[auto,1fr] md:ml-20 xl:ml-72 min-h-screen">
        {children}
      </div>
    </main>
  );
}

function Layout({ children }) {
  return (
    <div className="max-w-2xl mx-auto lg:max-w-5xl xl:max-w-7xl">
      <div className="fixed">
        <Sidebar />
      </div>
      <Main>{children}</Main>
    </div>
  );
}

export default Layout;
