import React from "react";
import { Layout, MainTweeting, Sidebar, Trends } from "../components";

function Home() {
  return (
    <Layout>
      <div className="border border-x-[0.1px] max-w-[37.5rem]">
        <MainTweeting />
      </div>
      <Trends />
    </Layout>
  );
}

export default Home;
