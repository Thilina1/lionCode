import { cn } from "@/lib/utils";

export function SriLankaFlagIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 600"
            className={cn("h-6 w-auto", className)}
        >
            <defs>
                <clipPath id="a">
                    <path d="M0 0h1200v600H0z" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)">
                <path fill="#ffc400" d="M0 0h1200v600H0z" />
                <path fill="#0057b7" d="M400 0h800v600H400z" />
                <path fill="#fff" d="M450 50h700v500H450z" />
                <path fill="#d2232c" d="M475 75h650v450H475z" />
                <path
                    fill="#ffc400"
                    d="M1025 425c-50-25-50-75 0-100-25 50-75 50-100 0-25-50 25-100 0-100-50 25-50 75 0 100 25-50 75-50 100 0 25 50-25 100 0 100z"
                />
                <path fill="#00843d" d="M0 0h200v600H0z" />
                <path fill="#f37321" d="M200 0h200v600H200z" />
            </g>
        </svg>
    );
}
