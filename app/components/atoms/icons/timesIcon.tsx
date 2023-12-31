import { cn } from '@/libs/utils'
import React from 'react'

type TimesIconProps = React.HTMLAttributes<HTMLDivElement>;

export default function TimesIcon(
    { className }: TimesIconProps
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-6 w-6 fill-current text-white", className)}
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    )
}
