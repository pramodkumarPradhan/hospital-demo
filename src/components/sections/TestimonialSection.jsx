"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 md:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Patient Testimonials
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Hear from our satisfied patients about their healthcare journey
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition group"
          >
            <CardContent className="p-6 sm:p-8">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg sm:text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                {testimonial.name}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Patient</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
