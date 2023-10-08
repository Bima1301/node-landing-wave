import React from 'react'

type ArrowRightProps = React.HTMLAttributes<HTMLDivElement>;

export default function ArrowRight(
    {
        className,
    }: ArrowRightProps
) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
            <path d="M13.75 3.75L18.75 10M18.75 10L13.75 16.25M18.75 10H1.25" stroke="#FFB347" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
