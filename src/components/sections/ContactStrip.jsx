"use client";

import { HOSPITAL_INFO } from "@/lib/constants";

export function ContactStrip() {
  const contactItems = [
    {
      title: "Call Us",
      value: HOSPITAL_INFO.phone,
      action: `tel:${HOSPITAL_INFO.phone}`,
      icon: "📞",
    },
    {
      title: "Email",
      value: HOSPITAL_INFO.email,
      action: `mailto:${HOSPITAL_INFO.email}`,
      icon: "📧",
    },
    {
      title: "Location",
      value: HOSPITAL_INFO.location,
      action: "#",
      icon: "📍",
    },
  ];

  return (
    <section id="contact" className="bg-white border-t border-gray-200 py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {contactItems.map((item) => (
            <a
              key={item.title}
              href={item.action}
              className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 shadow hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-900 transition">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1 group-hover:text-gray-900 transition">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
