"use client";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
export function Progress({ className, value, ...p }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root className={cn("relative h-2 w-full overflow-hidden rounded-full bg-gray-100", className)} {...p}>
      <ProgressPrimitive.Indicator className="h-full bg-primary transition-all" style={{ width: `${value ?? 0}%` }} />
    </ProgressPrimitive.Root>
  );
}
