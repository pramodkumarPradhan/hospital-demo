"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DOCTORS } from "@/lib/constants";

export function DoctorsSection() {
  return (
    <section id="doctors" className="bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Expert Doctors
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced medical professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {DOCTORS.map((doc) => (
            <Card
              key={doc.id}
              className="rounded-2xl sm:rounded-3xl shadow hover:shadow-xl hover:-translate-y-2 transition group overflow-hidden"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                {/* Doctor Image */}
                <div className="relative mb-4 sm:mb-6">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto object-cover shadow-md group-hover:shadow-lg transition ring-4 ring-blue-100 group-hover:ring-blue-300"
                  />
                </div>

                {/* Doctor Info */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition">
                  {doc.name}
                </h3>
                <p className="text-sm sm:text-base text-blue-600 font-medium mt-1">
                  {doc.speciality}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {doc.experience} experience
                </p>

                {/* Book Button */}
                <Button className="mt-4 sm:mt-6 rounded-full px-6 py-2 sm:py-2.5 bg-blue-900 hover:bg-blue-800 text-white shadow transition w-full sm:w-auto">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
