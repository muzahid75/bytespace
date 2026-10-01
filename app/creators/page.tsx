"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CourseCard } from "@/components/site/course-card";
import { courses } from "@/lib/data";
import {
  FilterAltIcon,
  SignalCellularAltIcon,
  CategoryIcon,
} from "@/components/icons/filter-icons";

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(12);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((c) => c - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((c) => c + 1);
    }
  };

  // PurePearl Studio's courses (first 6 courses)
  const creatorCourses = courses.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      {/* Blue Hero Header Section */}
      <section className="relative overflow-hidden bg-primary text-white">
        {/* Background Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Header */}
        <Header variant="dark" />

        {/* Creator Profile Hero Info */}
        <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-4">
          <div className="flex flex-col gap-6">
            {/* Top row: Avatar + Name + Creator Badge + Tagline */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border-2 border-white/20 bg-white shadow-xl">
                <Image
                  src="/images/creator-profile-avatar.png"
                  alt="PurePearl Studio"
                  width={96}
                  height={96}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h1 className="font-display text-[30px] md:text-[36px] font-bold tracking-tight text-white">
                    PurePearl Studio
                  </h1>
                  <span className="rounded-full bg-[#CAED21] px-3.5 py-1 text-xs font-bold text-black shadow-sm">
                    Creator
                  </span>
                </div>
                <p className="mt-1 text-base md:text-lg font-medium text-[#D1D1D1]">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="max-w-[1050px] space-y-2 text-[15px] md:text-[16px] leading-relaxed text-[#D1D1D1]">
              <p>
                Welcome to the creative world of [Creator&apos;s Name]. Here,
                you&apos;ll discover the passion, expertise, and inspiration that
                drive my creative journey. Let&apos;s explore and learn together!
              </p>
              <p>
                ive into my creative portfolio, showcasing a glimpse of my
                artistic endeavors. From digital designs to multimedia projects,
                each piece tells a unique story. Explore the world of
                creativity with me.
              </p>
            </div>

            {/* Stats Pills & Follow Button */}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm">
                  <span className="font-display text-base font-bold text-[#003BE2]">
                    3
                  </span>
                  <span>Products</span>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm">
                  <span className="font-display text-base font-bold text-[#003BE2]">
                    {followersCount}
                  </span>
                  <span>Followers</span>
                </div>
              </div>

              <button
                onClick={handleFollowToggle}
                className="rounded-full bg-[#CAED21] px-8 py-2.5 text-sm md:text-base font-bold text-black shadow-md transition-all hover:brightness-105 active:scale-95"
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Creator's Courses Section */}
      <main className="mx-auto max-w-[1240px] px-6 py-12">
        {/* Controls & Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-50">
              <FilterAltIcon className="size-4 text-black shrink-0" />
              <span>Filter</span>
              <ChevronDown size={14} className="text-[#6B7280]" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-50">
              <SignalCellularAltIcon className="size-4 text-black shrink-0" />
              <span>Level</span>
              <ChevronDown size={14} className="text-[#6B7280]" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-50">
              <CategoryIcon className="size-4 text-black shrink-0" />
              <span>Category</span>
              <ChevronDown size={14} className="text-[#6B7280]" />
            </button>
          </div>

          <button className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-50">
            <svg
              className="size-4 text-black shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
            </svg>
            <span>Most relevant</span>
            <ChevronDown size={14} className="text-[#6B7280]" />
          </button>
        </div>

        {/* 6 Courses Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {creatorCourses.map((c) => (
            <CourseCard key={c.slug} c={c} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
