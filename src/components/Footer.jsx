import React from "react";
import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="py-6 text-white bg-gray-900 nunito">
        <div className="w-full px-12 mx-auto 2xl:px-36 max-md:px-6">
          <div className="grid grid-cols-1 gap-12 max-lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  <span className="text-[#d70e1d]">M2 </span>
                  <span className="text-white">Productions</span>
                </h2>
                <p className="text-sm">Creativity That Prints Success</p>
              </div>
              <p className="text-sm text-justify text-gray-400">
                At M2 Productions, we don't just print - we create bold impressions.
                Your brand, our expertise, premium quality, fast delivery and
                unmatched reliability. We harness the power of latest technology
                for unparalleled service. And, as we bring your vision to life,
                we'll ensure your brand stands out in every way possible.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/m2-productions-256829380/"
                  className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@m2productions"
                  className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/m2productions"
                  className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/Mm2productionsnawinna"
                  className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Our Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Digital, UV, Offset Printing",
                  "Sublimation Printing",
                  "Laser Cutting & Engraving",
                  "Event & Corporate Branding",
                  "X Banners & Pull-Up Banners",
                  "Sublimation Printing Solutions",
                ].map((service) => (
                  <li key={service}>
                    <p className="text-gray-400 transition-colors cursor-pointer hover:text-white">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">More Info</h3>
              <ul className="space-y-3">
                {["Home", "Our Culture", "Products", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "Our Culture"
                            ? "/culture"
                            : item === "Products"
                              ? "/products"
                              : item === "Contact"
                                ? "/contact"
                                : ""
                      }
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Address */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Office Address</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1" />
                  <div>
                    <a
                      href="mailto:mm2produ@gmail.com"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      mm2produ@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div className="text-gray-400">
                    <p>161/B-1,</p>
                    <p>Old Kottawa Road,</p>
                    <p>Nawinna,</p>
                    <p>Maharagama</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold">Business Hours</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400">Weekdays - 9AM to 5PM</li>
                  <li className="text-gray-400">Saturday - 9 AM to 2 PM</li>
                  <li className="p-2"></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="hidden pt-8 my-16 border-t border-gray-800">
            <h3 className="mb-6 text-xl font-semibold">Achievements:</h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="object-contain w-24 h-24 bg-gray-400" />
              <div className="object-contain w-24 h-24 bg-gray-400" />
              <div className="object-contain w-24 h-24 bg-gray-400" />
              <div className="object-contain w-24 h-24 bg-gray-400" />
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
            <p>
              2025 © All Rights Reserved | M2 Productions | Designed & Developed by
              Silicon Radon Networks (Pvt) Ltd.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
