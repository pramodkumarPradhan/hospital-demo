"use client";

import { HOSPITAL_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              {HOSPITAL_INFO.name}
            </h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Providing compassionate healthcare with cutting-edge medical technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="text-blue-100 hover:text-white transition">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-lg">Departments</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition">
                  Cardiology
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition">
                  Neurology
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition">
                  Orthopedics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-sm sm:text-base text-blue-100">
              <li className="hover:text-white transition">
                <a href={`tel:${HOSPITAL_INFO.phone}`}>{HOSPITAL_INFO.phone}</a>
              </li>
              <li className="hover:text-white transition">
                <a href={`mailto:${HOSPITAL_INFO.email}`}>{HOSPITAL_INFO.email}</a>
              </li>
              <li>{HOSPITAL_INFO.location}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-8 text-center text-sm text-blue-100">
          <p>
            &copy; {currentYear} {HOSPITAL_INFO.name}. All rights reserved. | Made with care for your health.
          </p>
        </div>
      </div>
    </footer>
  );
}
