import React from 'react'

type TitleProps = {
    title: string;
    className?: string;
    props?: React.HTMLAttributes<HTMLDivElement>;
}

export default function Title(
    {
        title,
        className,
        ...props
    }: TitleProps
) {
    return (
        <div className={className} {...props}>
            <h1 className="md:text-[32px] text-[20px] font-semibold">{title}</h1>
        </div>
    )
}
