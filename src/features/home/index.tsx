import React from "react";
import { AboutSection } from "@/features/home/components/AboutSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { ServicesSection } from "./components/service-section/ServicesSection";
import { FooterSection } from "./components/footer/FooterSection";
import { SupportSection } from "./components/SupportSection";

export const HomeComponent = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SupportSection />
      <FooterSection />
    </React.Fragment>
  );
};
