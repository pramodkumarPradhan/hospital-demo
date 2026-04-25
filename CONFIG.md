# 🔧 Configuration Guide

## Hospital Information

Edit `src/lib/constants.js` to update hospital details:

```javascript
export const HOSPITAL_INFO = {
  name: "Sumitra Hospital",              // Hospital name
  phone: "+91 9876543210",               // Contact phone
  email: "info@sumitra-hospital.com",    // Contact email
  location: "Bangalore, India",          // Hospital location
  whatsappNumber: "919876543210",        // WhatsApp number (without +)
  accreditation: "NABH Accredited Hospital", // Accreditation badge
};
```

## Statistics Display

Customize the main statistics shown in hero:

```javascript
export const HOSPITAL_STATS = [
  { label: "Emergency", value: "24x7" },
  { label: "Doctors", value: "100+" },
  { label: "Beds", value: "100" },
];
```

## Departments/Specialities

Add or modify medical departments:

```javascript
export const DEPARTMENTS = [
  { id: "cardiology", name: "Cardiology", icon: "❤️" },
  { id: "neurology", name: "Neurology", icon: "🧠" },
  { id: "orthopedics", name: "Orthopedics", icon: "🦴" },
];
```

**Note**: Use emoji icons or integrate with Lucide React icons:
```javascript
import { Heart, Brain, Bone } from "lucide-react";

icon: <Heart className="w-8 h-8" />
```

## Doctors

Add doctor profiles:

```javascript
export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    speciality: "Cardiologist",
    department: "Cardiology",
    image: "https://example.com/doctor.jpg",
    experience: "15+ years",
  },
];
```

## Testimonials

Add patient reviews:

```javascript
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Amit Kumar",
    text: "Excellent care and professional staff. Highly recommended!",
    rating: 5,
  },
];
```

## Navigation Links

Customize navbar links:

```javascript
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];
```

## Color Scheme

Update Tailwind theme in `globals.css`:

```css
@layer theme {
  --color-primary: #001f3f;      /* Blue-900 */
  --color-secondary: #0d47a1;    /* Blue-800 */
  --color-accent: #0d8086;       /* Teal-600 */
}
```

## Validation Rules

Modify form validation in `src/lib/validation.js`:

```javascript
export const validateName = (name) => {
  // Add custom validation rules
};

export const validatePhone = (phone) => {
  // Indian format: 10 digits starting with 6-9
};
```

## Images

### Hero Background
Located in `src/components/sections/Hero.jsx`:
```jsx
<img
  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=80"
  alt="Hospital background"
/>
```

### Doctor Images
In `DOCTORS` constant, update the `image` URL

### Contact Icons
In `src/components/sections/ContactStrip.jsx`:
```jsx
icon: "📞" // Change emoji
```

## Responsive Breakpoints

All components use Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px

Example:
```jsx
<div className="text-sm sm:text-base md:text-lg">
  Responsive text
</div>
```

## SEO Configuration

Update metadata in `src/app/layout.js`:

```javascript
export const metadata = {
  title: "Your Hospital - Healthcare Services",
  description: "Your hospital description",
  keywords: ["hospital", "healthcare", "doctors"],
  // ... more options
};
```

## Font Configuration

Change fonts in `src/app/layout.js`:

```javascript
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

Or use Google Fonts:
```javascript
import { Poppins, Inter } from "next/font/google";
```

## Animation & Transitions

Customize in component classes:
```jsx
className="hover:shadow-xl hover:-translate-y-2 transition duration-300"
```

Available Tailwind transitions:
- `transition` - Default (150ms)
- `transition-all` - All properties
- `duration-300` - 300ms
- `ease-in-out` - Timing function

## Form Customization

### Input Styles
Modify in `src/components/sections/BookingForm.jsx`

### Error Messages
Customize error text in validation functions

### Success Message
Update success callback handling

### WhatsApp Message Format
Customize the message template in `BookingForm.jsx`

## Icon System

Current setup uses emoji. To switch to Lucide React icons:

```javascript
import { Phone, Mail, MapPin } from "lucide-react";

// In components:
<Phone className="w-5 h-5" />
```

## Database/Backend Integration

When ready to add backend:

1. Replace WhatsApp integration with API call:
```javascript
const response = await fetch('/api/appointments', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

2. Create API routes in `src/app/api/`

3. Connect to your database

## Environment Variables

Create `.env.local` for sensitive data:

```
NEXT_PUBLIC_HOSPITAL_PHONE=+91 9876543210
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
HOSPITAL_API_URL=https://api.hospital.com
DB_CONNECTION_STRING=mongodb://...
```

Then access in code:
```javascript
const phone = process.env.NEXT_PUBLIC_HOSPITAL_PHONE;
```

## Build & Deployment

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

All configurations are centralized for easy updates and maintenance! 🚀
