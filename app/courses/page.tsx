"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CourseCard } from "@/components/site/course-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { courses, categories } from "@/lib/data";
import { FilterListIcon } from "@/components/icons/filter-icons";
import {
  FilterAltIcon,
  SignalCellularAltIcon,
  CategoryIcon,
} from "@/components/icons/filter-icons";


export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Repeat courses to fill 9-12 grid slots like Figma
  const allCourses = [
    ...courses,
    ...courses.map((c, i) => ({ ...c, slug: `${c.slug}-alt-${i}` })),
  ];

  const filteredCourses = allCourses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      {/* Blue Hero Section */}
      <section className="relative overflow-hidden bg-primary text-white">
        {/* Background Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />


        {/* Global Dark Header */}
        <Header variant="dark" />

        {/* Hero Title & Search Bar */}
        <div className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-6 text-center">
          <h1 className="font-display text-[36px] md:text-[44px] font-bold tracking-tight text-white">
            Find Your Next Course
          </h1>

          <div className="mx-auto mt-8 flex max-w-[620px] items-center rounded-full bg-white p-1.5 shadow-2xl transition-all focus-within:ring-2 focus-within:ring-[#CAED21]">
            <div className="flex flex-1 items-center px-4">
              <Search size={20} className="text-[#9CA3AF] shrink-0" />
              <Input
                type="text"
                placeholder="Course, topic, creator"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 border-0 bg-transparent text-[15px] font-medium text-black placeholder:text-[#9CA3AF] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <button
              onClick={() => { }}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#CAED21] px-7 text-[15px] font-bold text-black transition-all hover:brightness-105 active:scale-95"
            >
              <Search size={16} className="text-black" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Course Listing Content */}
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

          <button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700">
            <FilterListIcon className="size-4 text-black" />
            <span>Most relevant</span>
          </button>
        </div>

        {/* Category Pills Slider */}
        <div className="mt-8 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${isActive
                  ? "bg-[#CAED21] text-black font-semibold shadow-sm"
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EBEBEB] hover:text-black"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.slice(0, 9).map((course, idx) => (
            <CourseCard key={course.slug + idx} c={course} />
          ))}
        </div>

        {/* Pagination Section */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex size-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-black transition-colors hover:bg-gray-50 disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          {[1, 2, 3, 4, 5].map((pageNum) => {
            const isSelected = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`flex size-10 items-center justify-center rounded-full font-display text-sm font-semibold transition-all ${isSelected
                  ? "bg-black text-white shadow-sm"
                  : "border border-[#E5E7EB] bg-white text-black hover:bg-gray-50"
                  }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            disabled={currentPage === 5}
            aria-label="Next page"
            className="flex size-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-black transition-colors hover:bg-gray-50 disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
