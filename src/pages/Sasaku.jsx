import { useState } from "react";
import SasakuLayout from "../components/sasaku/SasakuLayout";
import HeroSection from "../components/sasaku/HeroSection";
import AboutSection from "../components/sasaku/AboutSection";
import MissionVisionSection from "../components/sasaku/MissionVisionSection";
import LeadershipSection from "../components/sasaku/LeadershipSection";
import ProgramsSection from "../components/sasaku/ProgramsSection";
import EventsSection from "../components/sasaku/EventsSection";
import GallerySection from "../components/sasaku/GallerySection";
import JoinSection from "../components/sasaku/JoinSection";
import ContactSection from "../components/sasaku/ContactSection";

/* Main Component */
export default function Sasaku() {
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <SasakuLayout>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <LeadershipSection />
      <ProgramsSection />
      <EventsSection />
      <GallerySection
        galleryFilter={galleryFilter}
        setGalleryFilter={setGalleryFilter}
        showGalleryModal={showGalleryModal}
        setShowGalleryModal={setShowGalleryModal}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <JoinSection />
      <ContactSection />
    </SasakuLayout>
  );
}
