'use client'

import { cn } from '@/libs/utils'
import React from 'react'


type PillButtonProps = React.HTMLAttributes<HTMLDivElement>;
export default function Button(
    {
        className,
        children,
        ...props
    }: PillButtonProps
) {
    return (
        <div className={cn('bg-[#00AD98] rounded-[29px] cursor-pointer py-3 px-4', className)} {...props}>
            {children}
        </div>
    )
}
