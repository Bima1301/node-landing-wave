import { cn } from '@/libs/utils';
import React from 'react'

type CardProductProps = {
    children: React.ReactNode;
    className?: string;
    props?: React.HTMLAttributes<HTMLDivElement>;
}

export default function CardProduct(
    {
        children,
        className,
        ...props
    }: CardProductProps
) {
    return (
        <div className={cn("rounded-xl border border-white", className)} {...props}>
            {children}
        </div>
    )
}
