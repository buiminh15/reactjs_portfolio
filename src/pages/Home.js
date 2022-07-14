import React from "react";
import { About, Hero, Skills, Works } from "../components";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div>
        <Hero />
        <About />
        <Skills />
        <Works />
      </div>
    </Layout>
  );
}

export default Home;
