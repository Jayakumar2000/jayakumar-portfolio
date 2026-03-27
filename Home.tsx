import React from "react";
import { Hero } from "../components/Hero";
import { ProjectGrid } from "../components/ProjectGrid";
import { StoryHook } from "../components/StoryHook";
import { Toolkit } from "../components/Toolkit";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectGrid />
      <StoryHook />
      <Toolkit />
      <CTA />
    </div>
  );
}
