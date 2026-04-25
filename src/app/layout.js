import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sumitra Hospital - Advanced Healthcare Services",
  description:
    "Experience world-class treatment at Sumitra Hospital. NABH accredited with expert doctors, modern facilities, and compassionate care. Book your appointment today.",
  keywords: [
    "hospital",
    "healthcare",
    "doctors",
    "medical services",
    "cardiology",
    "neurology",
    "orthopedics",
    "appointment booking",
  ],
  authors: [{ name: "Sumitra Hospital" }],
  creator: "Sumitra Hospital",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sumitra-hospital.com",
    siteName: "Sumitra Hospital",
    title: "Sumitra Hospital - Advanced Healthcare Services",
    description:
      "Experience world-class treatment at Sumitra Hospital. NABH accredited with expert doctors and modern facilities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#001f3f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
