import React from "react";
import HeroSection from "./section/HeroSection";
import WhoSection from "./section/WhoSection";
import ExperienceSection from "./section/ExperienceSection";
import ProjectsSection from "./section/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}
