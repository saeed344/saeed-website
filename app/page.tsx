"use client";
import Carousel from "./components/Carousel";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import ResearchInterest from "./components/ResearchInterests";
import ResearchPublication from "./components/ResearchPublications";
import ThesisSupervises from "./components/ThesisSupervised";
import Editorial_ReviewerServices from "./components/Editorial_ReviewerServices";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ offset: 100 });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center  pb-10">
      
      <Carousel />
      <div className="mt-3">
        <About />
      </div>
      <div className="w-full mt-3">
        <WorkExperience />
      </div>
      <div className="w-full flex flex-wrap justify-evenly gap-2 mt-3">
        <Education />
        <ResearchInterest />
      </div>
      <div className="w-full mt-3">
        <ResearchPublication />
      </div>
      <div className="w-full mt-3">
        <ThesisSupervises />
      </div>
      <div className="w-full mt-3">
        <Editorial_ReviewerServices />
      </div>
      <div className="w-full mt-3">
        <ContactUs />
      </div>
      <div className="w-full mt-3">
        <Footer />
      </div>
    </main>
  );
}
