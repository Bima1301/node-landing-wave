import { cn } from '@/libs/utils';
import React from 'react'

type CardProps = {
    children: React.ReactNode;
    className?: string;
    props?: React.HTMLAttributes<HTMLDivElement>;
}

export default function Card(
    {
        children,
        className,
        ...props
    }: CardProps
) {
    return (
        <div className={cn("rounded-xl border border-white", className)} {...props}>
            {children}
        </div>
    )
}
