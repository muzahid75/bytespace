import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <div className="relative overflow-hidden bg-primary text-white">
        {/* Background Grid Lines Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* 3D Decorative Assets */}
        <Image
          src="/images/Cone (1).png"
          alt=""
          width={220}
          height={220}
          className="pointer-events-none absolute -right-8 top-12 hidden opacity-80 lg:block drop-shadow-xl"
        />
        <Image
          src="/images/ornament-hero-donut-white.png"
          alt=""
          width={180}
          height={180}
          className="pointer-events-none absolute left-8 bottom-8 hidden opacity-85 lg:block drop-shadow-md"
        />
        <Header variant="dark" />
        <div className="relative mx-auto max-w-[900px] px-6 pb-24 text-center">
          <p className="font-display text-[160px] font-medium leading-none text-lime-500 md:text-[300px]">404</p>
          <h1 className="text-4xl md:text-6xl">The page you are looking for doesn’t exist</h1>
          <p className="mt-6 text-lg text-blue-100">Try to use a correct url or go back to homepage to start again</p>
          <Button asChild variant="lime" size="lg" className="mt-8"><Link href="/">Back to Home</Link></Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
