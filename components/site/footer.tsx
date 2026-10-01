"use client";

import Link from "next/link";
import { Logo } from "./header";

const navColumns = [
  {
    links: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  {
    links: [
      "Development",
      "Marketing",
      "Photography",
      "Finance",
      "Sport",
    ],
  },
  {
    links: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[#E5E7EB] bg-white text-black">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0 pt-[70px] pb-[140px]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="w-full max-w-[500px]">
            <Logo dark />
            <p className="mt-7 text-sm sm:text-base text-[#3F4043] leading-normal font-normal">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[376px] h-[52px] rounded-full border border-[#D2D3D6] bg-white px-6 text-sm text-black placeholder:text-[#919293] focus:outline-none focus:border-black transition-colors"
              />
              <button
                type="submit"
                className="h-[52px] px-8 rounded-full bg-[#CAED21] text-black text-base font-semibold hover:bg-[#b8da1c] transition-colors flex items-center justify-center shrink-0"
              >
                Search
              </button>
            </form>

            <p className="mt-7 text-xs text-[#68696B] leading-[18px] max-w-[465px]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Column: Nav Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-[48px] w-full lg:w-auto lg:pt-[54px]">
            {navColumns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-[18px]">
                {col.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-sm text-[#3F4043] hover:text-black transition-colors font-normal whitespace-nowrap"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Inner Divider */}
        <div className="mt-24 border-t border-[#E6E7E9] w-full" />

        {/* Bottom Legal Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-sm text-[#9F9FA1]">
          <span>@ 2023 ByteSpace. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

