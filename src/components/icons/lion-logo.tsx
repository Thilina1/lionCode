import { cn } from "@/lib/utils";
import Image from "next/image";

export function LionLogo({ className }: { className?: string }) {
  return (
    <Image src="/logo.png" alt="Lion Code Logo" width={24} height={24} className={cn(className)} />
  );
}
