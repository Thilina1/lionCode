import { cn } from "@/lib/utils";

export function LionLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6 text-primary", className)}
    >
      <path d="M12 5.5A4.5 4.5 0 0 1 16.5 10M12 5.5A4.5 4.5 0 0 0 7.5 10M12 18.5V14.5M8.5 14.5h7M6 9l-2 2M18 9l2 2m-13 4l-1 1M19 14l1 1m-10 2l-2 2M16 17l2 2M5 12H3M19 12h2m-8 6.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
    </svg>
  );
}
