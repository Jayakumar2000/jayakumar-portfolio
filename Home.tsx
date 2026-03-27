import React from "react";
import { Hero } from "./Hero";
import { ProjectGrid } from "./ProjectGrid";
import { StoryHook } from "./StoryHook";
import { Toolkit } from "./Toolkit";
import { CTA } from "./CTA";

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
