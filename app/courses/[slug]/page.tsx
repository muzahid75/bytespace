"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Users,
  BarChart3,
  PlayCircle,
  Check,
  Share2,
  Clock,
  BookOpen,
  Award,
  Video,
  FileText,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import {
  courses,
  courseKeyPoints,
  courseSidebarLessons,
  courseModules,
  courseReviewsData,
} from "@/lib/data";

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const course =
    courses.find((x) => x.slug === slug) ||
    courses.find((x) => x.slug === "build-digital-asset");

  if (!course) notFound();

  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">(
    "about"
  );
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<string>("All rating");
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [copiedShare, setCopiedShare] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const filteredReviews = courseReviewsData.reviews.filter((r) => {
    if (selectedRatingFilter === "All rating") return true;
    return r.rating === parseInt(selectedRatingFilter, 10);
  });

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

        {/* Hero Title & Meta */}
        <div className="relative mx-auto max-w-[1240px] px-6 pb-20 pt-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-[780px]">
              <h1 className="font-display text-[32px] md:text-[40px] font-bold leading-tight tracking-tight text-white">
                {course.title}: A Comprehensive Guide
              </h1>
              <p className="mt-3 text-lg md:text-xl font-normal text-[#D1D1D1]">
                {course.subtitle ||
                  "Unlock the Power of Digital Creation with Expert Guidance"}
              </p>
              {/* <p className="mt-2 text-base font-medium text-[#D1D1D1]">
                by <span className="text-white underline">{course.author}</span>
              </p> */}
              <p className="mt-2 text-base font-medium text-[#D1D1D1]">
                by{" "}
                <span className="text-[#92DE00] underline underline-offset-2">
                  {course.author}
                </span>
              </p>


              {/* Badges Row */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1E1E1E] shadow-sm">
                  <BarChart3 size={16} className="text-[#003BE2]" />
                  <span>{course.level}</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1E1E1E] shadow-sm">
                  <Star size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                  <span>
                    {course.rating} ({course.reviewsCount || 172} reviews)
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1E1E1E] shadow-sm">
                  <Users size={16} className="text-[#003BE2]" />
                  <span>{course.students}</span>
                </span>
              </div>
            </div>

            {/* Share Button */}
            {/* <div>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black active:scale-95"
              >
                <Share2 size={16} />
                <span>{copiedShare ? "Link Copied!" : "Share"}</span>
              </button>
            </div> */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full bg-[#CAED21] px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-all hover:brightness-105 active:scale-95"
            >
              <Share2 size={16} />
              <span>{copiedShare ? "Link Copied!" : "Share"}</span>
            </button>

          </div>
        </div>
      </section>

      {/* Main Content Area (Video Preview + 2-Column Details) */}
      <main className="relative mx-auto -mt-10 max-w-[1240px] px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[720px_1fr]">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Video Player Preview Card */}
            <div className="group relative aspect-[720/479] w-full overflow-hidden rounded-[24px] bg-[#1E1E1E] shadow-2xl">
              <Image
                src="/images/course-video-preview.jpg"
                alt={course.title}
                width={720}
                height={479}
                priority
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
              />

              {/* Dark overlay gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  aria-label="Play course preview video"
                  className="flex size-20 md:size-24 items-center justify-center rounded-full bg-black/50 p-2 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-110 hover:bg-[#CAED21] hover:text-black active:scale-95"
                >
                  <div className="flex size-14 md:size-16 items-center justify-center rounded-full bg-white text-[#003BE2] group-hover:bg-black group-hover:text-white transition-colors">
                    <svg
                      className="ml-1 size-7 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Video bottom badge */}
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs font-semibold text-white">
                <span className="rounded-full bg-black/60 px-4 py-1.5 backdrop-blur-md">
                  Preview Lesson · 05:20
                </span>
                <span className="rounded-full bg-[#CAED21] px-4 py-1.5 text-black">
                  HD 1080p
                </span>
              </div>
            </div>

            {/* Interactive Tabs: About / Lessons / Reviews */}
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2">
                {(["about", "lessons", "reviews"] as const).map((tab) => {
                  const isActive = activeTab === tab;

                  const labels = {
                    about: "About",
                    lessons: "Lessons",
                    reviews: "Reviews",
                  };

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${isActive
                        ? "bg-[#CAED21] text-black"
                        : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EBEBEB]"
                        }`}
                    >
                      {labels[tab]}
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: About */}
              {activeTab === "about" && (
                <div className="mt-8 space-y-8">
                  <div>
                    <h2 className="font-display text-[22px] font-bold text-black">
                      Description
                    </h2>
                    <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#4B4C53]">
                      <p>
                        Embark on an enlightening exploration into the world of
                        digital creation with our comprehensive course, &quot;Build
                        Digital Assets: A Comprehensive Guide.&quot; This
                        transformative learning experience invites you to delve
                        deep into the intricacies of crafting impactful digital
                        content. From laying the groundwork with foundational
                        concepts to mastering advanced techniques, this guide is
                        meticulously curated to empower you with the skills
                        essential for navigating the dynamic landscape of
                        digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid
                        foundation by immersing yourself in the foundational
                        concepts that form the backbone of digital asset creation.
                        Understand the fundamental elements that constitute
                        compelling digital content and gain proficiency in
                        leveraging these elements to communicate effectively in
                        the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to
                        higher levels of expertise, delving into the nuances of
                        design principles that drive impactful creations.
                        Uncover the secrets behind effective visual
                        communication, exploring color theory, typography, and
                        layout strategies that elevate your digital assets to
                        new heights. Engage in hands-on exercises that reinforce
                        your understanding, allowing you to apply these
                        principles in practical scenarios.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h2 className="font-display text-[22px] font-bold text-black">
                      Key Points
                    </h2>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {courseKeyPoints.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 rounded-xl bg-[#F9F9FA] p-3 transition-colors hover:bg-[#F0F0F2]"
                        >
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#CAED21] text-black">
                            <Check size={16} strokeWidth={3} />
                          </span>
                          <span className="text-[15px] font-medium text-[#1E1E1E]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Lessons */}
              {activeTab === "lessons" && (
                <div className="mt-8 space-y-8">
                  <div>
                    <h2 className="font-display text-[22px] font-bold text-black">
                      Explore the Modules
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#4B4C53]">
                      Immerse yourself in the course content as we break down each
                      module into comprehensive lessons, providing practical
                      insights and hands-on experiences.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-[18px] font-bold text-black">
                      Lesson List
                    </h3>
                    <div className="mt-4 space-y-3">
                      {courseModules.map((mod) => {
                        const isExpanded = expandedModule === mod.moduleNumber;
                        return (
                          <div
                            key={mod.moduleNumber}
                            className="rounded-xl border border-[#E5E7EB] bg-white transition-shadow hover:shadow-sm"
                          >
                            <button
                              onClick={() =>
                                setExpandedModule(
                                  isExpanded ? null : mod.moduleNumber
                                )
                              }
                              className="flex w-full items-center justify-between p-4 text-left"
                            >
                              <div className="flex items-center gap-3">
                                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#F5F5F6] text-xs font-bold text-[#003BE2]">
                                  M{mod.moduleNumber}
                                </span>
                                <div>
                                  <h4 className="text-[15px] font-semibold text-black">
                                    Module {mod.moduleNumber}: {mod.title}
                                  </h4>
                                  <p className="text-xs text-[#6B7280]">
                                    {mod.lessonsCount} lessons · {mod.duration}
                                  </p>
                                </div>
                              </div>
                              {isExpanded ? (
                                <ChevronUp size={18} className="text-[#6B7280]" />
                              ) : (
                                <ChevronDown
                                  size={18}
                                  className="text-[#6B7280]"
                                />
                              )}
                            </button>
                            {isExpanded && (
                              <div className="border-t border-[#E5E7EB] bg-[#FBFBFC] px-5 py-4 text-sm leading-relaxed text-[#4B4C53]">
                                {mod.description}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Progress Tracking Card */}
                  <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F5F6] p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display text-base font-bold text-black">
                          Learning Progress
                        </h4>
                        <p className="text-xs text-[#6B7280]">
                          Witness your growth as you complete lessons
                        </p>
                      </div>
                      <span className="font-display text-2xl font-bold text-[#003BE2]">
                        55%
                      </span>
                    </div>
                    <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-[#CAED21] transition-all"
                        style={{ width: "55%" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Reviews */}
              {activeTab === "reviews" && (
                <div className="mt-8 space-y-8">
                  <div>
                    <h2 className="font-display text-[22px] font-bold text-black">
                      What Learners Are Saying
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#4B4C53]">
                      Discover what our learners have to say about their
                      experience with &apos;Build Digital Assets: A Comprehensive
                      Guide.&apos; Read reviews and ratings from individuals who
                      have embarked on the transformative journey of mastering
                      digital asset creation.
                    </p>
                  </div>

                  {/* Rating Breakdown Card */}
                  <div className="grid gap-6 rounded-2xl border border-[#E5E7EB] bg-[#FBFBFC] p-6 md:grid-cols-[200px_1fr]">
                    <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#E5E7EB] pb-6 md:pb-0 md:pr-6">
                      <span className="font-display text-[48px] font-extrabold text-black leading-none">
                        4.7
                      </span>
                      <div className="mt-2 flex items-center gap-1 text-[#F59E0B]">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={18} className="fill-current" />
                        ))}
                      </div>
                      <span className="mt-2 text-xs font-medium text-[#6B7280]">
                        Course Rating · 885 reviews
                      </span>
                    </div>

                    <div className="space-y-2">
                      {courseReviewsData.distribution.map((d) => (
                        <div key={d.stars} className="flex items-center gap-3 text-xs">
                          <span className="w-12 text-[#4B4C53] font-medium">
                            {d.stars} Stars
                          </span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                            <div
                              className="h-full rounded-full bg-[#003BE2]"
                              style={{ width: `${d.percentage}%` }}
                            />
                          </div>
                          <span className="w-8 text-right font-medium text-[#6B7280]">
                            {d.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {["All rating", "5", "4", "3", "2", "1"].map((filter) => {
                      const isSelected = selectedRatingFilter === filter;
                      return (
                        <button
                          key={filter}
                          onClick={() => setSelectedRatingFilter(filter)}
                          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${isSelected
                            ? "bg-black text-white"
                            : "border border-[#E5E7EB] bg-white text-[#4B4C53] hover:bg-gray-50"
                            }`}
                        >
                          {filter === "All rating" ? filter : `${filter} Stars`}
                        </button>
                      );
                    })}
                  </div>

                  {/* Review Cards List */}
                  <div className="space-y-4">
                    {filteredReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <Image
                              src={rev.avatar}
                              alt={rev.author}
                              width={48}
                              height={48}
                              className="size-12 rounded-full object-cover border border-[#E5E7EB]"
                            />
                            <div>
                              <h4 className="text-base font-bold text-black">
                                {rev.author}
                              </h4>
                              <p className="text-xs text-[#6B7280]">
                                {rev.role} · {rev.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-[#F59E0B]">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className="fill-current"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#4B4C53]">
                          {rev.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (Sticky Enrollment Card) */}
          <div>
            <aside className="sticky top-6 rounded-[24px] border border-[#E5E7EB] bg-white p-7 shadow-xl space-y-6">
              <div>
                <h3 className="font-display text-[22px] font-bold text-black">
                  112 Lessons (24 hours)
                </h3>

                {/* 3 Preview Lesson Items */}
                <div className="mt-4 divide-y divide-gray-100">
                  {courseSidebarLessons.map((l) => (
                    <div
                      key={l.num}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <PlayCircle size={18} className="text-[#003BE2]" />
                        <span className="font-mono text-xs font-semibold text-gray-400">
                          {l.num}
                        </span>
                        <span className="font-medium text-black line-clamp-1">
                          {l.title}
                        </span>
                      </div>
                      <span className="shrink-0 text-xs text-gray-500 font-medium">
                        {l.duration}
                      </span>
                    </div>
                  ))}
                  <div className="py-2.5 text-xs font-semibold text-[#003BE2]">
                    + 99 more videos
                  </div>
                </div>
              </div>

              {/* Callout & Pricing */}
              <div className="rounded-2xl bg-[#F5F5F6] p-5 space-y-3">
                <p className="text-xs font-medium leading-relaxed text-[#4B4C53]">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-[36px] font-extrabold text-[#003BE2] leading-none">
                    ${course.price}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    /lifetime
                  </span>
                </div>
                <button className="w-full rounded-full bg-[#003BE2] py-3.5 text-center text-sm font-bold text-white shadow-lg transition-all hover:bg-[#002fbe] active:scale-95">
                  Enroll Now
                </button>
              </div>

              {/* What is Included */}
              <div>
                <h4 className="font-display text-base font-bold text-black mb-3">
                  This course include
                </h4>
                <div className="space-y-2.5 text-sm text-[#4B4C53]">
                  {[
                    "Learning Resources",
                    "Quality Lesson Videos",
                    "Certificate of Completion",
                    "Private Consultation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#CAED21] text-black">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Instructor Card */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/purepearl-avatar.jpg"
                    alt="PurePearl Studio"
                    width={52}
                    height={52}
                    className="size-[52px] rounded-full object-cover border border-[#E5E7EB]"
                  />
                  <div>
                    <h4 className="font-display text-base font-bold text-black">
                      PurePearl Studio
                    </h4>
                    <span className="rounded-full bg-[#EBF0FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#003BE2]">
                      Professional Creator
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>
                <Link
                  href="/creators"
                  className="inline-block rounded-full bg-[#F5F5F6] px-5 py-2 text-xs font-bold text-black transition-colors hover:bg-gray-200"
                >
                  See Full Profile
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
