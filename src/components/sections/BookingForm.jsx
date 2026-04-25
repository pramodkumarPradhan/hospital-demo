"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DEPARTMENTS, HOSPITAL_INFO } from "@/lib/constants";
import { validateAppointmentForm } from "@/lib/validation";
import { useState } from "react";

export function BookingForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", dept: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");

    // Validate form
    const { isValid, errors: validationErrors } = validateAppointmentForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    // Submit to WhatsApp
    setIsSubmitting(true);
    try {
      const message = `Hello! I would like to book an appointment.\n\n*Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nDepartment: ${formData.dept}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      setSubmitMessage("Redirecting to WhatsApp...");
      setFormData({ name: "", phone: "", dept: "" });

      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    } catch (error) {
      setSubmitMessage("Error opening WhatsApp. Please try again.");
      console.error("WhatsApp error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-gray-900">
          Book Your Appointment
        </CardTitle>
      </CardHeader>
      <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Department */}
              <div>
                <label htmlFor="dept" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Select Department <span className="text-red-500">*</span>
                </label>
                <select
                  id="dept"
                  name="dept"
                  value={formData.dept}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${
                    errors.dept ? "border-red-500" : "border-gray-300"
                  } text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  aria-invalid={!!errors.dept}
                  aria-describedby={errors.dept ? "dept-error" : undefined}
                >
                  <option value="">Choose a department...</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                {errors.dept && (
                  <p id="dept-error" className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.dept}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg py-2.5 sm:py-3 bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                {isSubmitting ? "Processing..." : "Book via WhatsApp"}
              </Button>

              {/* Success/Error Message */}
              {submitMessage && (
                <p className={`text-sm text-center ${submitMessage.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                  {submitMessage}
                </p>
              )}

              {/* Info Text */}
              <p className="text-xs text-gray-500 text-center">
                You'll be redirected to WhatsApp to complete your booking
              </p>
            </form>
          </CardContent>
        </Card>
      );
    }

