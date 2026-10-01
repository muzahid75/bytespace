import Image from "next/image";
import Link from "next/link";
import { Star, BarChart3 } from "lucide-react";
import type { Course } from "@/lib/data";

export function CourseCard({ c }: { c: Course }) {
  return (
    <Link
      href={`/courses/${c.slug}`}
      className="group block rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-2xl bg-gray-900">
        <Image
          src={c.image}
          alt={c.title}
          width={360}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-medium text-white">
          <span className="rounded-full bg-black/60 px-3 py-1 backdrop-blur-md">
            {c.lessons} Lessons
          </span>
          <span className="rounded-full bg-black/60 px-3 py-1 backdrop-blur-md">
            {c.duration}
          </span>
          <span className="rounded-full bg-black/60 px-3 py-1 backdrop-blur-md">
            {c.comments} Comments
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-[18px] font-bold text-black line-clamp-1">
            {c.title}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-[#003BE2]">by {c.author}</p>
        </div>
        <span className="flex items-center gap-1 font-display text-sm font-semibold text-black">
          {c.rating}{" "}
          <Star size={14} className="fill-[#D1D5DB] text-[#D1D5DB]" />
        </span>
      </div>

      {/* Badges & Avatars Row (No divider line, matches Figma) */}
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-[#F5F5F6] px-3 py-1 text-xs font-medium text-[#4B4C53] flex items-center gap-1.5">
          <BarChart3 size={13} className="text-[#6B7280]" />
          {c.level}
        </span>
        <div className="flex items-center">
          <div className="flex -space-x-1.5">
            <Image
              src="/images/a1.webp"
              alt=""
              width={22}
              height={22}
              className="size-[22px] rounded-full object-cover border border-white"
            />
            <Image
              src="/images/a2.webp"
              alt=""
              width={22}
              height={22}
              className="size-[22px] rounded-full object-cover border border-white"
            />
            <Image
              src="/images/a3.webp"
              alt=""
              width={22}
              height={22}
              className="size-[22px] rounded-full object-cover border border-white"
            />
          </div>
          <span className="ml-1 size-[22px] rounded-full bg-[#CAED21] text-[10px] font-bold text-black flex items-center justify-center shrink-0">
            26+
          </span>
        </div>
      </div>

      {/* Price Row (Dedicated line below, aligned left) */}
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-display text-[20px] font-bold text-[#003BE2]">
          ${c.price}
        </span>
        <span className="text-xs text-[#9CA3AF] font-normal">/lifetime</span>
      </div>
    </Link>
  );
}
