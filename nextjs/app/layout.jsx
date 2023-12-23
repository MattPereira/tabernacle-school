import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Tabernacle School",
  description: "Kindergarten through 8th grade school in Concord, California",
};

/**
 * Root layout for entire website
 * @dev Header and Footer show on every page because they are included here
 * @dev {children} is entry point for all the individual page components
 */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        {/* Required script for "swiper" package 👇 */}
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
      </body>
    </html>
  );
}
