// import Image from "next/image";
// import Link from "next/link";
// import { ShoppingBag } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const nav = [
//   ["Home", "/"],
//   ["Courses", "/courses"],
//   ["Creators", "/creators"],
// ] as const;


// export function Logo({ dark }: { dark?: boolean }) {
//   return (
//     <Link href="/" className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90">
//       <Image
//         src="/images/Vector.png"
//         alt="ByteSpace"
//         width={29}
//         height={32}
//         priority
//         className="w-[28.88px] h-[31.5px] object-contain"
//       />
//       <span
//         className={`font-display text-[24px] font-bold leading-none tracking-normal ${dark ? "text-black" : "text-white"
//           }`}
//       >
//         ByteSpace
//       </span>
//     </Link>
//   );
// }

// export function Header({ variant = "light" }: { variant?: "light" | "dark" }) {
//   const onBlue = variant === "dark";
//   return (
//     <header className={onBlue ? "bg-primary text-white" : "bg-white text-black"}>
//       <div className="mx-auto flex h-[120px] max-w-[1440px] items-center justify-between px-6 lg:px-16">
//         <Logo dark={!onBlue} />
//         <nav className="hidden gap-8 md:flex">
//           {nav.map(([label, href]) => (
//             <Link
//               key={label}
//               href={href}
//               className={`font-sans text-base font-medium transition-colors hover:opacity-80 ${onBlue ? "text-white" : "text-black"
//                 }`}
//             >
//               {label}
//             </Link>
//           ))}
//         </nav>
//         <div className="flex items-center gap-6">
//           <Link
//             href="/login"
//             className={`hidden text-base font-medium sm:block transition-colors hover:opacity-80 ${onBlue ? "text-white" : "text-black"
//               }`}
//           >
//             Sign In
//           </Link>
//           <Link
//             href="/register"
//             className={`hidden text-base font-medium sm:block transition-colors hover:opacity-80 ${onBlue ? "text-white" : "text-black"
//               }`}
//           >
//             Join Us
//           </Link>
//           <button
//             className={`flex size-10 items-center justify-center rounded-full transition-colors ${onBlue ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"
//               }`}
//             aria-label="Cart"
//           >
//             <ShoppingBag size={20} />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";

const nav = [
  ["Home", "/"],
  ["Courses", "/courses"],
  ["Creators", "/creators"],
] as const;

export function Logo({
  dark = false,
  showText = true,
}: {
  dark?: boolean;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace Home"
      className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
    >
      <Image
        src="/images/Vector.png"
        alt="ByteSpace"
        width={29}
        height={32}
        priority
        className="h-[31.5px] w-[28.88px] object-contain"
      />

      {showText && (
        <span
          className={`font-display text-[24px] font-bold leading-none ${dark ? "text-black" : "text-white"
            }`}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}

export function Header({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();

  const onBlue = variant === "dark";

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register";

  return (
    <header
      className={`w-full ${onBlue
          ? "bg-primary text-white"
          : "bg-white text-black"
        }`}
    >
      <div className="mx-auto flex h-[120px] max-w-[1440px] items-center justify-between px-6 lg:px-16">

        {/* ================= LOGO ================= */}
        <Logo
          dark={!onBlue}
          showText={!isAuthPage}
        />

        {/* ================= NAVIGATION ================= */}
        {!isAuthPage && (
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={`font-sans text-base font-medium transition-opacity hover:opacity-70 ${onBlue ? "text-white" : "text-black"
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}

        {/* ================= RIGHT SIDE ================= */}
        {!isAuthPage && (
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className={`hidden text-base font-medium transition-opacity hover:opacity-70 sm:block ${onBlue ? "text-white" : "text-black"
                }`}
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className={`hidden text-base font-medium transition-opacity hover:opacity-70 sm:block ${onBlue ? "text-white" : "text-black"
                }`}
            >
              Join Us
            </Link>

            <button
              type="button"
              aria-label="Cart"
              className={`flex size-10 items-center justify-center rounded-full transition-colors ${onBlue
                  ? "text-white hover:bg-white/10"
                  : "text-black hover:bg-black/5"
                }`}
            >
              <ShoppingBag
                size={20}
                strokeWidth={2}
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

