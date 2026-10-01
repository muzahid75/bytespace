// "use client";

// import Image from "next/image";
// import { Star, BookOpen, Clock, MessageSquare } from "lucide-react";
// import { Logo } from "./header";

// export function AuthShell({
//   title,
//   blurb,
//   children,
// }: {
//   title: string;
//   blurb: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <main className="relative min-h-screen w-full overflow-hidden bg-primary text-white">
//       {/* Background Grid Lines Pattern */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-15"
//         style={{
//           backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       <div className="relative mx-auto flex min-h-screen max-w-[1300px] flex-col justify-between px-6 py-8 lg:px-12">
//         {/* Top Header / Logo */}
//         <header className="flex items-center justify-between">
//           <Logo />
//         </header>

//         {/* Main Grid Content */}
//         <div className="my-auto grid items-center gap-12 py-8 lg:grid-cols-2">
//           {/* Left Visual Column */}
//           <div className="space-y-6">
//             <div className="max-w-md space-y-3">
//               <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
//                 {title}
//               </h1>
//               <p className="text-base text-blue-100 md:text-lg">
//                 {blurb}
//               </p>
//             </div>

//             {/* Course Cards Stack & 3D Decorations */}
//             <div className="relative mt-8 min-h-[460px] w-full max-w-[500px] pt-4">
//               {/* 3D Lime Ring Torus Top Left */}
//               <Image
//                 src="/images/Frame.png"
//                 alt=""
//                 width={110}
//                 height={110}
//                 className="pointer-events-none absolute -top-6 left-8 z-20 size-28 object-contain drop-shadow-lg"
//               />

//               {/* Back Card: Build Digital Asset */}
//               <div className="absolute top-8 left-0 z-0 w-[320px] rounded-3xl border border-white/20 bg-white p-5 text-black shadow-xl opacity-90 sm:w-[350px]">
//                 <div className="h-32 w-full overflow-hidden rounded-2xl bg-gray-100">
//                   <Image
//                     src="/images/c2.webp"
//                     alt=""
//                     width={350}
//                     height={140}
//                     className="h-full w-full object-cover opacity-60"
//                   />
//                 </div>
//                 <div className="mt-3">
//                   <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-500">
//                     17 Lessons
//                   </span>
//                 </div>
//                 <h4 className="mt-2 font-display text-base font-bold text-black">Build Digital Asset</h4>
//                 <p className="text-xs text-blue-600">by purepearl studio</p>
//                 <div className="mt-3 flex items-center justify-between border-t pt-3">
//                   <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
//                     Beginner
//                   </span>
//                   <span className="font-display text-sm font-bold text-black">$25 /lifetime</span>
//                 </div>
//               </div>

//               {/* Front Main Active Card: the Power of Big Data */}
//               <div className="absolute top-0 left-14 z-10 w-[340px] rounded-3xl border border-gray-100 bg-white p-5 text-black shadow-2xl sm:w-[380px]">
//                 <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-gray-950">
//                   <Image
//                     src="/images/c3.webp"
//                     alt="Course Preview"
//                     width={380}
//                     height={160}
//                     priority
//                     className="h-full w-full object-cover"
//                   />
//                   <div className="absolute bottom-2.5 left-2.5 flex gap-1.5 text-[10px] text-white">
//                     <span className="rounded-full bg-black/70 px-2.5 py-1 backdrop-blur-md">17 Lessons</span>
//                     <span className="rounded-full bg-black/70 px-2.5 py-1 backdrop-blur-md">2 hours 16 mins</span>
//                     <span className="rounded-full bg-black/70 px-2.5 py-1 backdrop-blur-md">59 Comments</span>
//                   </div>
//                 </div>

//                 <div className="mt-4 flex items-start justify-between">
//                   <div>
//                     <h3 className="font-display text-lg font-bold text-black">the Power of Big Data</h3>
//                     <p className="text-xs font-medium text-blue-600">by purepearl studio</p>
//                   </div>
//                   <span className="flex items-center gap-1 font-display text-sm font-bold text-black">
//                     4.5 <Star size={14} className="fill-amber-400 text-amber-400" />
//                   </span>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between border-t pt-3">
//                   <div className="flex items-center gap-2">
//                     <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
//                       Beginner
//                     </span>
//                     <div className="flex -space-x-1.5">
//                       <Image src="/images/a1.webp" alt="" width={22} height={22} className="size-[22px] rounded-full object-cover" />
//                       <Image src="/images/a2.webp" alt="" width={22} height={22} className="size-[22px] rounded-full object-cover" />
//                       <Image src="/images/a3.webp" alt="" width={22} height={22} className="size-[22px] rounded-full object-cover" />
//                     </div>
//                     <span className="text-[10px] font-bold text-gray-500">26+</span>
//                   </div>
//                   <span className="font-display text-base font-bold text-black">
//                     $25 <span className="text-xs font-normal text-gray-400">/lifetime</span>
//                   </span>
//                 </div>
//               </div>

//               {/* 3D Lime Cone Bottom Left */}
//               <Image
//                 src="/images/Cone.png"
//                 alt=""
//                 width={130}
//                 height={130}
//                 className="pointer-events-none absolute -bottom-4 -left-2 z-20 w-32 h-auto"
//               />

//               {/* 3D White Squiggle Ribbon Right */}
//               <div className="pointer-events-none absolute top-48 right-2 z-20">
//                 <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
//                   <path
//                     d="M10 10C25 5 45 15 35 30C25 45 5 35 25 55C40 70 55 60 50 50"
//                     stroke="white"
//                     strokeWidth="12"
//                     strokeLinecap="round"
//                     className="drop-shadow-md"
//                   />
//                 </svg>
//               </div>

//               {/* Floating Lime Happy Students Badge Bottom Right */}
//               <div className="absolute bottom-2 right-4 z-20 flex items-center gap-3 rounded-2xl bg-lime-400 p-4 text-black shadow-xl">
//                 <div>
//                   <p className="font-display text-sm font-bold">Happy Students</p>
//                   <p className="flex items-center gap-1 text-xs font-semibold text-gray-800">
//                     4.5 (240) <Star size={12} className="fill-blue-600 text-blue-600" />
//                   </p>
//                   <div className="mt-1 flex items-center gap-1">
//                     <div className="flex -space-x-1.5">
//                       <Image src="/images/a1.webp" alt="" width={22} height={22} className="size-[22px] rounded-full object-cover" />
//                       <Image src="/images/a2.webp" alt="" width={22} height={22} className="size-[22px] rounded-full object-cover" />
//                       <Image src="/images/a3.webp" alt="" width={22} height={22} className="size-[22px] rounded-full object-cover" />
//                     </div>
//                     <span className="rounded-full bg-black px-1.5 py-0.5 text-[9px] font-bold text-white">2K+</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - White Form Card Container */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="w-full max-w-[480px] rounded-[32px] bg-white p-8 text-black shadow-2xl md:p-12">
//               {children}
//             </div>
//           </div>
//         </div>

//         {/* Footer info */}
//         <div className="text-center text-xs text-blue-200/80">
//           © 2023 ByteSpace. All rights reserved.
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import { Logo } from "./header";

export function AuthShell({
  title,
  blurb,
  children,
}: {
  title: string;
  blurb: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide "ByteSpace" text on login and register pages.
  // The Vector logo will remain visible.
  const isAuthPage =
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/register");

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-primary text-white">
      {/* Background Grid Lines Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1300px] flex-col justify-between px-6 py-8 lg:px-12">
        {/* Top Header / Logo */}
        <header className="flex items-center justify-between">
          <Logo showText={false} />
        </header>
        {/* Main Grid Content */}
        <div className="my-auto grid items-center gap-12 py-8 lg:grid-cols-2">
          {/* Left Visual Column */}
          <div className="space-y-6">
            <div className="max-w-md space-y-3">
              <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
                {title}
              </h1>

              <p className="text-base text-blue-100 md:text-lg">
                {blurb}
              </p>
            </div>

            {/* Course Cards Stack & 3D Decorations */}
            <div className="relative mt-8 min-h-[460px] w-full max-w-[500px] pt-4">
              {/* 3D Lime Ring */}
              <Image
                src="/images/Frame.png"
                alt=""
                width={110}
                height={110}
                className="pointer-events-none absolute -top-6 left-8 z-20 size-28 object-contain drop-shadow-lg"
              />

              {/* Back Card */}
              <div className="absolute left-0 top-8 z-0 w-[320px] rounded-3xl border border-white/20 bg-white p-5 text-black opacity-90 shadow-xl sm:w-[350px]">
                <div className="h-32 w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/images/c2.webp"
                    alt=""
                    width={350}
                    height={140}
                    className="h-full w-full object-cover opacity-60"
                  />
                </div>

                <div className="mt-3">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-500">
                    17 Lessons
                  </span>
                </div>

                <h4 className="mt-2 font-display text-base font-bold text-black">
                  Build Digital Asset
                </h4>

                <p className="text-xs text-blue-600">
                  by purepearl studio
                </p>

                <div className="mt-3 flex items-center justify-between border-t pt-3">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    Beginner
                  </span>

                  <span className="font-display text-sm font-bold text-black">
                    $25 /lifetime
                  </span>
                </div>
              </div>

              {/* Front Main Active Card */}
              <div className="absolute left-14 top-0 z-10 w-[340px] rounded-3xl border border-gray-100 bg-white p-5 text-black shadow-2xl sm:w-[380px]">
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-gray-950">
                  <Image
                    src="/images/c3.webp"
                    alt="Course Preview"
                    width={380}
                    height={160}
                    priority
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute bottom-2.5 left-2.5 flex gap-1.5 text-[10px] text-white">
                    <span className="rounded-full bg-black/70 px-2.5 py-1 backdrop-blur-md">
                      17 Lessons
                    </span>

                    <span className="rounded-full bg-black/70 px-2.5 py-1 backdrop-blur-md">
                      2 hours 16 mins
                    </span>

                    <span className="rounded-full bg-black/70 px-2.5 py-1 backdrop-blur-md">
                      59 Comments
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-black">
                      the Power of Big Data
                    </h3>

                    <p className="text-xs font-medium text-blue-600">
                      by purepearl studio
                    </p>
                  </div>

                  <span className="flex items-center gap-1 font-display text-sm font-bold text-black">
                    4.5
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      Beginner
                    </span>

                    <div className="flex -space-x-1.5">
                      <Image
                        src="/images/a1.webp"
                        alt=""
                        width={22}
                        height={22}
                        className="size-[22px] rounded-full object-cover"
                      />

                      <Image
                        src="/images/a2.webp"
                        alt=""
                        width={22}
                        height={22}
                        className="size-[22px] rounded-full object-cover"
                      />

                      <Image
                        src="/images/a3.webp"
                        alt=""
                        width={22}
                        height={22}
                        className="size-[22px] rounded-full object-cover"
                      />
                    </div>

                    <span className="text-[10px] font-bold text-gray-500">
                      26+
                    </span>
                  </div>

                  <span className="font-display text-base font-bold text-black">
                    $25{" "}
                    <span className="text-xs font-normal text-gray-400">
                      /lifetime
                    </span>
                  </span>
                </div>
              </div>

              {/* 3D Lime Cone */}
              <Image
                src="/images/Cone.png"
                alt=""
                width={130}
                height={130}
                className="pointer-events-none absolute -bottom-4 -left-2 z-20 h-auto w-32"
              />

              {/* White Squiggle */}
              <div className="pointer-events-none absolute right-2 top-48 z-20">
                <svg
                  width="60"
                  height="70"
                  viewBox="0 0 60 70"
                  fill="none"
                >
                  <path
                    d="M10 10C25 5 45 15 35 30C25 45 5 35 25 55C40 70 55 60 50 50"
                    stroke="white"
                    strokeWidth="12"
                    strokeLinecap="round"
                    className="drop-shadow-md"
                  />
                </svg>
              </div>

              {/* Happy Students Badge */}
              <div className="absolute bottom-2 right-4 z-20 flex items-center gap-3 rounded-2xl bg-lime-400 p-4 text-black shadow-xl">
                <div>
                  <p className="font-display text-sm font-bold">
                    Happy Students
                  </p>

                  <p className="flex items-center gap-1 text-xs font-semibold text-gray-800">
                    4.5 (240)
                    <Star
                      size={12}
                      className="fill-blue-600 text-blue-600"
                    />
                  </p>

                  <div className="mt-1 flex items-center gap-1">
                    <div className="flex -space-x-1.5">
                      <Image
                        src="/images/a1.webp"
                        alt=""
                        width={22}
                        height={22}
                        className="size-[22px] rounded-full object-cover"
                      />

                      <Image
                        src="/images/a2.webp"
                        alt=""
                        width={22}
                        height={22}
                        className="size-[22px] rounded-full object-cover"
                      />

                      <Image
                        src="/images/a3.webp"
                        alt=""
                        width={22}
                        height={22}
                        className="size-[22px] rounded-full object-cover"
                      />
                    </div>

                    <span className="rounded-full bg-black px-1.5 py-0.5 text-[9px] font-bold text-white">
                      2K+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] rounded-[32px] bg-white p-8 text-black shadow-2xl md:p-12">
              {children}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-blue-200/80">
          © 2023 ByteSpace. All rights reserved.
        </div>
      </div>
    </main>
  );
}
