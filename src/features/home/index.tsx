import React from "react";
import { AboutSection } from "@/features/home/components/AboutSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { MarketplaceSection } from "./components/MarketPlaceSection";
import { HelpSection } from "./components/HelpSection";
import { FooterSection } from "./components/footer/FooterSection";

export const HomeComponent = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MarketplaceSection />
      <HelpSection />
      <FooterSection />
    </React.Fragment>
  );
};
