import { cn } from "@/lib/utils";
import Image from "next/image";

export function LionLogo({ className, width = 24, height = 24 }: { className?: string, width?: number, height?: number }) {
  return (
    <Image src="/images/logo.png" alt="Lion Code Logo" width={width} height={height} className={cn(className)} />
  );
}
