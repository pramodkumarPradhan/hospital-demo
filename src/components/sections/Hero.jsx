"use client";

import { Button } from "@/components/ui/button";
import { HOSPITAL_INFO, HOSPITAL_STATS } from "@/lib/constants";
import { BookingForm } from "./BookingForm";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 sm:pt-24 md:pt-32"
      aria-labelledby="hero-title"
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=80"
        alt="Hospital background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-800 to-teal-600 opacity-95" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-6 lg:px-10 py-16 sm:py-20 md:py-24 items-start text-white">
        {/* Left - Hero Content */}
        <div>
          {/* Badge */}
          <div className="mb-4 sm:mb-6 text-xs sm:text-sm bg-white/20 inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur border border-white/30">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
            {HOSPITAL_INFO.accreditation}
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight"
          >
            Advanced Care <br className="hidden sm:block" /> Compassionate Healing
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8 max-w-lg leading-relaxed">
            Experience world-class treatment with expert doctors and modern medical facilities designed for your recovery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button className="bg-white text-blue-900 rounded-full px-6 sm:px-8 py-2.5 sm:py-3 font-semibold shadow-lg hover:bg-gray-100 transition">
              Explore Services
            </Button>
            <Button className="bg-white/20 text-white rounded-full px-6 sm:px-8 py-2.5 sm:py-3 backdrop-blur border border-white/30 hover:bg-white/30 transition">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 mt-10 sm:mt-12">
            {HOSPITAL_STATS.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-2xl sm:text-3xl font-bold">{stat.value}</h3>
                <p className="text-xs sm:text-sm opacity-80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Booking Form */}
        <div className="md:sticky md:top-24">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
