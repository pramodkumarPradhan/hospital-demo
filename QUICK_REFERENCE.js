// Quick Reference: What Goes Where?

/*
====================================
📍 CONTENT CHANGES
====================================
*/

// Hospital Details → src/lib/constants.js
HOSPITAL_INFO = {
  name, phone, email, location, whatsappNumber, accreditation
}

// Stats Display → src/lib/constants.js
HOSPITAL_STATS = [
  { label: "", value: "" }
]

// Medical Departments → src/lib/constants.js
DEPARTMENTS = [
  { id: "", name: "", icon: "" }
]

// Doctors List → src/lib/constants.js
DOCTORS = [
  { id, name, speciality, department, image, experience }
]

// Patient Reviews → src/lib/constants.js
TESTIMONIALS = [
  { id, name, text, rating }
]

/*
====================================
🎨 DESIGN CHANGES
====================================
*/

// Colors & Fonts → src/app/globals.css
- Primary color: #001f3f (Blue-900)
- Update Tailwind theme if needed

// Component Styling → Individual component files
- Each component: src/components/sections/*.jsx
- Uses Tailwind classes
- sm:, md:, lg: prefixes for responsive

// Hero Background → src/components/sections/Hero.jsx
- Line with <img> tag
- Update image URL or path

/*
====================================
🔧 FUNCTIONALITY CHANGES
====================================
*/

// Form Validation Rules → src/lib/validation.js
- validateName()
- validatePhone()
- validateDepartment()

// WhatsApp Integration → src/components/sections/BookingForm.jsx
- Update HOSPITAL_INFO.whatsappNumber in constants.js
- Customize message template if needed

// Navigation Links → src/lib/constants.js + src/components/sections/Navbar.jsx
- Update NAV_LINKS in constants
- Add scroll anchors with id="" attributes

/*
====================================
📄 SEO CHANGES
====================================
*/

// Metadata & Title → src/app/layout.js
export const metadata = {
  title: "Your Title",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
  // ... more options
}

/*
====================================
🏗️ ADDING NEW FEATURES
====================================
*/

// Add New Section
1. Create: src/components/sections/YourSection.jsx
2. Export: Add to src/components/sections/index.js
3. Import: In src/app/page.js
4. Use: <YourSection /> in JSX

// Add New Doctor
1. Open: src/lib/constants.js
2. Add to: DOCTORS array
3. Done! Updates automatically

// Add New Department
1. Open: src/lib/constants.js
2. Add to: DEPARTMENTS array
3. Updates in SpecialitiesSection automatically

/*
====================================
📁 FILE LOCATION GUIDE
====================================
*/

Page Content              → src/lib/constants.js
Page Layout              → src/app/page.js
Root Settings           → src/app/layout.js
Global Styles           → src/app/globals.css
All Components          → src/components/sections/
Component Exports       → src/components/sections/index.js
Utilities              → src/lib/utils.js
Form Validation        → src/lib/validation.js

/*
====================================
🚀 DEPLOYMENT CHECKLIST
====================================
*/

Before going live:
☐ Update HOSPITAL_INFO in constants.js
☐ Add your hospital logo/images
☐ Update doctor photos
☐ Verify WhatsApp number
☐ Check all phone numbers are real
☐ Review testimonials (yours or remove section)
☐ Update meta description & keywords
☐ Test form submission
☐ Test on mobile devices
☐ Check all links work
☐ Update social media links (add to Footer)

/*
====================================
⚡ PERFORMANCE TIPS
====================================
*/

Images:
- Add ?w=1600&q=80 to URLs for optimization
- Use local images for better performance

Caching:
- Next.js caches static content automatically
- Components optimize re-renders

Animations:
- Smooth scroll enabled in layout.js
- Hover effects use CSS transitions (fast)

/*
====================================
♿ ACCESSIBILITY NOTES
====================================
*/

Already Included:
✓ Semantic HTML (<nav>, <main>, <section>)
✓ ARIA labels on interactive elements
✓ Keyboard navigation support
✓ Color contrast compliant
✓ Image alt text
✓ Form validation feedback

To Add More:
- Add aria-label="" to components
- Ensure focus indicators visible
- Test with screen readers

/*
====================================
📱 RESPONSIVE DESIGN TIPS
====================================
*/

Breakpoints:
sm: = 640px
md: = 768px
lg: = 1024px

Example:
className="text-sm sm:text-base md:text-lg"
↓
Mobile: small | Tablet: medium | Desktop: large

Common Patterns:
- grid md:grid-cols-3 (1 col mobile, 3 cols desktop)
- hidden md:block (hide on mobile, show desktop)
- px-4 sm:px-6 lg:px-10 (responsive padding)

/*
====================================
🔗 INTEGRATION GUIDE
====================================
*/

WhatsApp Already Built In ✓
- Update: HOSPITAL_INFO.whatsappNumber

Email Integration:
- Update: HOSPITAL_INFO.email
- ContactStrip has mailto: links

Phone Integration:
- Update: HOSPITAL_INFO.phone
- ContactStrip has tel: links

Backend Ready:
- Form validation complete
- Ready to add API endpoint
- Modify BookingForm.jsx handleSubmit()

/*
====================================
💾 BACKUP IMPORTANT INFO
====================================
*/

Before making changes, save:
- Hospital phone number
- WhatsApp number
- Hospital name
- Doctors list
- Current color scheme

Keep in .env.local:
NEXT_PUBLIC_HOSPITAL_PHONE=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_API_URL=

/*
====================================
❓ COMMON QUESTIONS
====================================
*/

Q: Where to change the hospital name?
A: src/lib/constants.js → HOSPITAL_INFO.name

Q: How to add more doctors?
A: src/lib/constants.js → DOCTORS array

Q: How to change colors?
A: src/app/globals.css or Tailwind classes

Q: How to update WhatsApp?
A: src/lib/constants.js → HOSPITAL_INFO.whatsappNumber

Q: How to add a new page section?
A: Create component in src/components/sections/

Q: How to validate more form fields?
A: Add function in src/lib/validation.js

Q: How to add authentication?
A: Use NextAuth.js (recommended) or similar

Q: How to add database?
A: Create API routes in src/app/api/

/*
====================================
📚 DOCUMENTATION
====================================
*/

REDESIGN_SUMMARY.md - Overview & getting started
DESIGN_IMPROVEMENTS.md - Detailed improvements made
CONFIG.md - All customization options
.env.example - Environment variables template
QUICK_REFERENCE.js - This file!

/*
====================================
🎯 START HERE
====================================
*/

1. Read: REDESIGN_SUMMARY.md (2 min)
2. Update: src/lib/constants.js (5 min)
3. Test: npm run dev (2 min)
4. Deploy: Your hosting (depends)

Done! 🎉
