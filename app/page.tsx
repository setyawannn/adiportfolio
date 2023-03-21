import React from "react";
import HeroSection from "./section/HeroSection";
import WhoSection from "./section/WhoSection";
import ExperienceSection from "./section/ExperienceSection";
import ProjectsSection from "./section/ProjectsSection";

export default function Home() {
  return (
    <div className="top-24 max-w-[100vw]">
      <HeroSection />
      <WhoSection />
      <ExperienceSection />
      {/* <ProjectsSection /> */}
    </div>
  );
}
