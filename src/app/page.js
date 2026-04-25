"use client";

import { ContactStrip } from "@/components/sections/ContactStrip";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { SpecialitiesSection } from "@/components/sections/SpecialitiesSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

export default function HospitalHomepage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section with Booking Form */}
        <Hero />

        {/* Contact Strip */}
        <ContactStrip />

        {/* Specialities Section */}
        <SpecialitiesSection />

        {/* Doctors Section */}
        <DoctorsSection />

        {/* Testimonials Section */}
        <TestimonialSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
