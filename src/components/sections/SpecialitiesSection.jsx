"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DEPARTMENTS } from "@/lib/constants";

export function SpecialitiesSection() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 md:py-24"
    >
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Our Specialities
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Comprehensive medical care across multiple specializations with expert physicians
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {DEPARTMENTS.map((dept) => (
          <Card
            key={dept.id}
            className="rounded-2xl sm:rounded-3xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300 group overflow-hidden"
          >
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-2xl sm:text-4xl group-hover:scale-110 transition transform">
                {dept.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition">
                {dept.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2 sm:mt-3 leading-relaxed">
                Advanced treatment with expert care and modern medical technology
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
