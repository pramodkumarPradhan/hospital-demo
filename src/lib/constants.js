// Hospital Information
export const HOSPITAL_INFO = {
  name: "Sumitra Hospital",
  phone: "+91 9876543210",
  email: "info@sumitra-hospital.com",
  location: "Bangalore, India",
  whatsappNumber: "919876543210", // Without +91 prefix for WhatsApp API
  accreditation: "NABH Accredited Hospital",
};

// Statistics
export const HOSPITAL_STATS = [
  { label: "Emergency", value: "24x7" },
  { label: "Doctors", value: "100+" },
  { label: "Beds", value: "100" },
];

// Departments/Specialities
export const DEPARTMENTS = [
  { id: "cardiology", name: "Cardiology", icon: "❤️" },
  { id: "neurology", name: "Neurology", icon: "🧠" },
  { id: "orthopedics", name: "Orthopedics", icon: "🦴" },
];

// Doctors data
export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    speciality: "Cardiologist",
    department: "Cardiology",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    experience: "15+ years",
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    speciality: "Neurologist",
    department: "Neurology",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    experience: "12+ years",
  },
  {
    id: 3,
    name: "Dr. Anil Singh",
    speciality: "Orthopedic Surgeon",
    department: "Orthopedics",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    experience: "18+ years",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Amit Kumar",
    text: "Excellent care and professional staff. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Kavya Desai",
    text: "The treatment was outstanding. Very caring team.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rajesh Gupta",
    text: "Modern facilities with compassionate healthcare workers.",
    rating: 5,
  },
];

// Navigation Links
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];
