"use client";

import Link from "next/link";
import { AuthShell } from "@/components/site/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <AuthShell
      title="Sign in with ease"
      blurb="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="w-full space-y-6">
        <div>
          <span className="text-sm font-semibold text-primary">Sign In</span>
          <h2 className="mt-1 font-display text-4xl font-bold text-black md:text-5xl">
            Welcome Back
          </h2>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <Input
              type="email"
              placeholder="designer@example.com"
              className="h-12 rounded-2xl border-gray-200 bg-gray-50/50 px-4 text-base text-black placeholder:text-gray-400 focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <Input
              type="password"
              placeholder="********"
              className="h-12 rounded-2xl border-gray-200 bg-gray-50/50 px-4 text-base text-black placeholder:text-gray-400 focus-visible:ring-primary"
            />
          </div>

          {/* Right-aligned Lime Sign In Button */}
          <div className="pt-2 flex justify-end">
            <Button
              type="submit"
              variant="lime"
              size="lg"
              className="rounded-full px-10 text-base font-semibold text-black hover:bg-lime-400 shadow-sm"
            >
              Sign In
            </Button>
          </div>
        </form>

        {/* Separator Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <span className="relative bg-white px-4 text-xs text-gray-400">or</span>
        </div>

        {/* Social Auth Icons */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="flex size-14 items-center justify-center rounded-2xl border border-gray-200 bg-white text-xl font-bold text-black transition-all hover:bg-gray-50 hover:shadow-sm"
            aria-label="Sign in with Facebook"
          >
            <svg className="size-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            type="button"
            className="flex size-14 items-center justify-center rounded-2xl border border-gray-200 bg-white text-xl font-bold text-black transition-all hover:bg-gray-50 hover:shadow-sm"
            aria-label="Sign in with Google"
          >
            <svg className="size-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
          </button>
        </div>

        {/* Create Account Link */}
        <p className="text-center text-sm text-gray-500">
          New user?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
