import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Star,
  TrendingUp,
  CheckCircle2,
  Quote,
  Palette,
  Code2,
  Monitor,
  Briefcase,
  Megaphone,
  Camera,
  Layers,
  BookOpen,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CourseCard } from "@/components/site/course-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { courses, categories, tags } from "@/lib/data";

const categoryIcons = [
  { name: "Design", icon: Palette },
  { name: "Development", icon: Code2 },
  { name: "IT & Software", icon: Monitor },
  { name: "Business", icon: Briefcase },
  { name: "Marketing", icon: Megaphone },
  { name: "Photography", icon: Camera },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/a1.webp",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/a2.webp",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/a3.webp",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

const logoIpsumList = [
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-primary text-white">
        {/* Background Grid Lines Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <Header variant="dark" />

        {/* Background Decorative 3D Shapes matching Figma exactly */}
        <Image
          src="/images/Mask Group (1).png"
          alt=""
          width={280}
          height={280}
          className="pointer-events-none absolute -right-10 top-12 hidden opacity-90 lg:block drop-shadow-2xl"
        />
        <Image
          src="/images/Cone (2).png"
          alt=""
          width={180}
          height={180}
          className="pointer-events-none absolute right-24 top-72 hidden opacity-90 lg:block drop-shadow-xl"
        />
        <Image
          src="/images/Frame (3).png"
          alt=""
          width={331}
          height={331}
          className="pointer-events-none absolute -right-6 bottom-16 hidden opacity-90 lg:block drop-shadow-2xl"
        />
        <Image
          src="/images/Mask Group (3).png"
          alt=""
          width={385}
          height={385}
          className="pointer-events-none absolute -left-8 top-20 hidden opacity-90 lg:block drop-shadow-2xl"
        />
        <Image
          src="/images/Frame (3).png"
          alt=""
          width={175}
          height={175}
          className="pointer-events-none absolute left-44 top-110 hidden opacity-90 lg:block drop-shadow-lg"
        />
        <Image
          src="/images/Mask Group (2).png"
          alt=""
          width={342}
          height={342}
          className="pointer-events-none absolute left-20 bottom-4 z-10 hidden opacity-95 lg:block drop-shadow-2xl"
        />

        <div className="relative mx-auto max-w-[1200px] px-6 pb-0 text-center">
          <h1 className="font-display text-4xl font-bold leading-[1.12] sm:text-6xl lg:text-[72px] text-white tracking-tight">
            Get Access to Hundreds<br className="hidden sm:inline" /> Courses Available
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-blue-100 sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form
            action="/search"
            className="mx-auto mt-8 flex max-w-[560px] items-center rounded-full bg-white p-2 shadow-2xl"
          >
            <div className="flex flex-1 items-center gap-2.5 px-3 text-gray-400">
              <Search size={20} className="text-gray-400 shrink-0" />
              <Input
                name="q"
                placeholder="Course, topic, creator"
                className="h-10 border-0 bg-transparent text-base text-black placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button
              type="submit"
              className="rounded-full bg-[#CBFC01] hover:bg-[#b8e400] px-8 py-2.5 text-base font-semibold text-black transition-colors"
            >
              Search
            </Button>
          </form>

          {/* Hero Student Graphic & Floating Cards with Figma Ellipse 7 */}
          <div className="relative mx-auto mt-12 w-full max-w-[1149px] flex justify-center items-end">
            {/* Real Figma Ellipse 7 Giant Lime Halo Arch (#CBFC01) */}
            <Image
              src="/images/Ellipse 7.png"
              alt=""
              width={1149}
              height={442}
              priority
              className="pointer-events-none absolute left-1/2 bottom-0 z-0 -translate-x-1/2 w-[700px] sm:w-[920px] md:w-[1040px] lg:w-[1149px] max-w-none select-none"
            />

            {/* Transparent Student Cutout */}
            <div className="relative z-10 mx-auto">
              <Image
                src="/images/hero-student-exact.png"
                alt="Student learning on laptop"
                width={578}
                height={541}
                priority
                className="relative z-10 mx-auto h-[350px] w-auto object-contain sm:h-[450px] md:h-[510px] lg:h-[541px]"
              />

              {/* Top Left Floating Card - UI/UX Design (Matching Figma) */}
              <div className="absolute -left-6 sm:-left-12 lg:-left-16 top-16 sm:top-24 z-20 hidden rounded-2xl bg-white px-5 py-4 text-left text-black shadow-xl md:block">
                <p className="font-display text-sm font-bold text-black">UI/UX Design</p>
                <p className="mt-0.5 text-xs text-[#82868E]">200 Courses • 1000+ Students</p>
              </div>

              {/* Top Right Floating Card - Learning Progress 55% */}
              <div className="absolute -right-6 sm:-right-12 lg:-right-16 top-20 sm:top-28 z-20 hidden w-56 sm:w-60 rounded-2xl bg-white p-4 sm:p-5 text-left text-black shadow-xl md:block">
                <p className="text-xs font-medium text-[#82868E]">Learning Progress</p>
                <p className="mt-1 font-display text-3xl sm:text-4xl font-bold text-black">55%</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#F5F5F6]">
                  <div className="h-full rounded-full bg-[#CBFC01]" style={{ width: "55%" }} />
                </div>
              </div>

              {/* Bottom Left Floating Card - Happy Students */}
              <div className="absolute -left-10 sm:-left-16 lg:-left-24 bottom-12 sm:bottom-16 z-20 hidden rounded-2xl bg-white p-4 text-left text-black shadow-xl md:block">
                <div>
                  <p className="font-display text-sm font-bold text-black">Happy Students</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-[#82868E]">
                    4.5 (240) <Star size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
                  </p>
                </div>
                <div className="mt-3 flex items-center -space-x-2">
                  <Image src="/images/a1.webp" alt="" width={28} height={28} className="size-7 rounded-full border-2 border-white object-cover" />
                  <Image src="/images/a2.webp" alt="" width={28} height={28} className="size-7 rounded-full border-2 border-white object-cover" />
                  <Image src="/images/a3.webp" alt="" width={28} height={28} className="size-7 rounded-full border-2 border-white object-cover" />
                  <Image src="/images/reviewer-1.jpg" alt="" width={28} height={28} className="size-7 rounded-full border-2 border-white object-cover" />
                  <Image src="/images/reviewer-2.jpg" alt="" width={28} height={28} className="size-7 rounded-full border-2 border-white object-cover" />
                  <Image src="/images/reviewer-3.jpg" alt="" width={28} height={28} className="size-7 rounded-full border-2 border-white object-cover" />
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#CBFC01] text-[10px] font-bold text-black border-2 border-white">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 2. LOGOIPSUM PARTNERS STRIP */}
      <section className="border-b bg-gray-50/80 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 px-6 text-gray-400">
          {logoIpsumList.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-gray-400 hover:text-gray-600">
              <Layers size={24} className="text-gray-400" />
              <span>{logo}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DISCOVER YOUR PASSION SECTION */}
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-[44px]">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Tag Filter Pills */}
        <div className="mx-auto mt-10 flex max-w-[1000px] flex-wrap justify-center gap-2.5">
          {tags.map((t, i) => (
            <button
              key={t}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${i === 0
                ? "bg-lime-400 text-black font-semibold shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {t}
            </button>
          ))}
          <button className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50">
            + More
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.slug} c={c} />
          ))}
        </div>
      </section>

      {/* 4. EXPLORE DIVERSE LEARNING PATHS */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-4 max-w-[850px] text-base text-gray-500 md:text-lg">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categoryIcons.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              href="/search"
              className="group flex flex-col items-center justify-center rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-lime-400 hover:shadow-md"
            >
              <div className="grid size-14 place-items-center rounded-2xl bg-lime-400 text-black transition-transform group-hover:scale-110">
                <Icon size={26} />
              </div>
              <span className="mt-4 font-display text-base font-semibold text-black">{name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. YOUR PATH TO PROFESSIONAL GROWTH */}
      <section className="bg-gray-50/70 py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-4 text-base text-gray-600 md:text-lg leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            <div className="mt-10 flex gap-12">
              {[
                ["12K", "Students"],
                ["70+", "Courses"],
                ["16", "Creators"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="font-display text-4xl font-bold text-blue-600">{num}</p>
                  <p className="mt-1 text-sm font-medium text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Feature with Floating Progress & Mini Card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-3xl bg-lime-400 p-2 sm:p-4 shadow-xl">
              <Image
                src="/images/hero.webp"
                alt="Professional learning"
                width={480}
                height={480}
                className="h-[420px] w-full rounded-2xl object-cover"
              />

              {/* Stacked Mini Course Card Left */}
              <div className="absolute left-4 top-8 w-60 rounded-2xl bg-white p-3.5 text-black shadow-2xl border border-gray-100 hidden sm:block">
                <span className="text-[10px] text-gray-400">17 Lessons · 2 hours 16 mins</span>
                <h4 className="mt-1 font-display text-xs font-bold text-black">Learn Figma from Basic</h4>
                <p className="text-[10px] text-blue-600">by purepearl studio</p>
                <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-2 text-[10px]">
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 font-semibold text-gray-700">Beginner</span>
                  <span className="font-display font-bold text-blue-600">$25 <span className="text-gray-400 font-normal">/lifetime</span></span>
                </div>
              </div>

              {/* Learning Progress Widget Top Right */}
              <div className="absolute right-4 top-12 w-48 rounded-2xl bg-white p-3.5 text-black shadow-xl">
                <p className="text-[10px] text-gray-500">Learning Progress</p>
                <p className="font-display text-2xl font-bold">55%</p>
                <Progress value={55} className="mt-2 h-1.5 w-full bg-gray-100" />
              </div>
            </div>

            {/* 3D Decorative Lime Cone Right */}
            <Image
              src="/images/Cone.png"
              alt=""
              width={160}
              height={160}
              className="pointer-events-none absolute -right-10 bottom-6 hidden lg:block drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 6. CREATE & MANAGE COURSES EASILY */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Graphic with Creator & Revenue Widget */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-3xl bg-blue-50 p-4 shadow-xl">
              <Image
                src="/images/c1.webp"
                alt="Creator managing courses"
                width={480}
                height={480}
                className="h-[420px] w-full rounded-2xl object-cover"
              />

              {/* Revenue Badge Left */}
              <div className="absolute left-6 top-6 rounded-2xl bg-blue-600 p-4 text-white shadow-2xl space-y-1">
                <p className="text-[10px] text-blue-200 uppercase tracking-wider">Total Revenue</p>
                <p className="font-display text-xl font-bold">$120.29</p>
                <div className="border-t border-blue-500/40 pt-1 mt-1 text-[10px] text-blue-100">
                  <span>Year to Date 2023</span>
                  <p className="font-bold text-white text-xs">$1,200.38 <span className="text-lime-300">+12$</span></p>
                </div>
              </div>

              {/* Happy Students Floating Badge Right */}
              <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-white p-3.5 text-black shadow-xl">
                <div className="flex -space-x-1.5">
                  <Image src="/images/a1.webp" alt="" width={24} height={24} className="size-6 rounded-full object-cover border border-white" />
                  <Image src="/images/a2.webp" alt="" width={24} height={24} className="size-6 rounded-full object-cover border border-white" />
                  <Image src="/images/a3.webp" alt="" width={24} height={24} className="size-6 rounded-full object-cover border border-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-black">Happy Students</p>
                  <p className="flex items-center gap-1 text-[10px] text-gray-500">
                    <Star size={10} className="fill-amber-400 text-amber-400" />
                    <span className="font-bold text-black">4.5</span> (240) · 2K+
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Decorative Asset */}
            <Image
              src="/images/Frame (1).png"
              alt=""
              width={140}
              height={140}
              className="pointer-events-none absolute -right-8 top-1/3 hidden lg:block drop-shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-[44px]">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="text-base text-gray-600 md:text-lg leading-relaxed">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="grid size-6 place-items-center rounded-full bg-blue-600 text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-medium text-black text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. UNLOCK YOUR POTENTIAL BANNER */}
      <section className="relative overflow-hidden bg-primary py-20 text-white">
        {/* Background Grid Lines Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <Image
          src="/images/Cone1.png"
          alt=""
          width={260}
          height={260}
          className="pointer-events-none absolute -right-10 -top-10 opacity-90 drop-shadow-xl"
        />
        <Image
          src="/images/Frame (1).png"
          alt=""
          width={150}
          height={150}
          className="pointer-events-none absolute -left-6 -bottom-6 opacity-80 drop-shadow-lg hidden sm:block"
        />
        <div className="relative mx-auto max-w-[900px] px-6 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-blue-100 md:text-lg">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button asChild variant="lime" size="lg" className="mt-8 rounded-full px-10 text-base font-semibold text-black">
            <Link href="/register">Join as Creator</Link>
          </Button>
        </div>
      </section>

      {/* 8. COMMUNITY TESTIMONIALS */}
      <section className="relative overflow-hidden bg-[#f7fbe6] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-[44px]">
                Discover What Our<br />Community Is Saying
              </h2>
            </div>
            <div className="rounded-3xl bg-lime-300/40 p-6 md:p-8">
              <p className="text-sm text-gray-700 md:text-base leading-relaxed">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md"
              >
                <div>
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={52}
                    height={52}
                    className="size-13 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-display text-base font-bold text-black">{t.name}</h4>
                  <p className="text-xs font-semibold text-blue-600">{t.role}</p>
                  <p className="mt-4 text-xs text-gray-600 leading-relaxed">"{t.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
