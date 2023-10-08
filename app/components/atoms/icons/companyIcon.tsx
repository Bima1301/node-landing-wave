import React from 'react'

type CompanyIconProps = React.HTMLAttributes<HTMLDivElement>;

export default function CompanyIcon(
    {
        className,
    }: CompanyIconProps
) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none" className={className}>
            <path d="M38 31.25H33.8333V35.4167H38M38 22.9167H33.8333V27.0833H38M42.1667 39.5833H25.5V35.4167H29.6667V31.25H25.5V27.0833H29.6667V22.9167H25.5V18.75H42.1667M21.3333 14.5833H17.1667V10.4167H21.3333M21.3333 22.9167H17.1667V18.75H21.3333M21.3333 31.25H17.1667V27.0833H21.3333M21.3333 39.5833H17.1667V35.4167H21.3333M13 14.5833H8.83332V10.4167H13M13 22.9167H8.83332V18.75H13M13 31.25H8.83332V27.0833H13M13 39.5833H8.83332V35.4167H13M25.5 14.5833V6.25H4.66666V43.75H46.3333V14.5833H25.5Z" fill="white" />
        </svg>
    )
}
