import "./globals.css";
import { Header, Footer } from "../components/";

export const metadata = {
  title: "Tabernacle School",
  description: "Kindergarten through 8th grade school in Concord, California",
};

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
