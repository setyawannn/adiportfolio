import React from "react";
import HeroSection from "./section/HeroSection";
import WhoSection from "./section/WhoSection";
import ExperienceSection from "./section/ExperienceSection";
import ProjectsSection from "./section/ProjectsSection";

export default function Home() {
  return (
    <div className="container relative top-24 md:top-40">
      <HeroSection />
      <WhoSection />
      <ExperienceSection />
      {/* <ProjectsSection /> */}
    </div>
  );
}
