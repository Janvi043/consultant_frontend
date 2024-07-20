import React, { useEffect, useState } from "react";
import JsonData from "../../data/data.json";
import { About } from "./About";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Services } from "./Services";
import { Team } from "./Team";
import { Testimonials } from "./Testimonials";
import { Ftr } from "./Ftr";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Ftr />     
    </div>
  );
};

export default Home;
