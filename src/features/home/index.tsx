import React from "react";
import { AboutSection } from "@/features/home/components/AboutSection";
import { HeroSection } from "@/features/home/components/HeroSection";

export const HomeComponent = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
    </React.Fragment>
  );
};
