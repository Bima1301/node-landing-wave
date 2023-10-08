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
        <div className={cn('bg-[#00AD98] hover:bg-[#67d0c4] rounded-[29px] cursor-pointer py-3 px-4 duration-200', className)} {...props}>
            {children}
        </div>
    )
}
