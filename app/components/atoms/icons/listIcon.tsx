import React from 'react'

type ListIconProps = React.HTMLAttributes<HTMLDivElement>;


export default function ListIcon(
    { className }: ListIconProps
) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className={className}>
            <path d="M8.33334 35.4167C7.74306 35.4167 7.24792 35.2167 6.84792 34.8167C6.44792 34.4167 6.24862 33.9222 6.25001 33.3333C6.25001 32.743 6.45001 32.2479 6.85001 31.8479C7.25001 31.4479 7.74445 31.2486 8.33334 31.25C8.92362 31.25 9.41876 31.45 9.81876 31.85C10.2188 32.25 10.4181 32.7444 10.4167 33.3333C10.4167 33.9236 10.2167 34.4187 9.81667 34.8187C9.41667 35.2187 8.92223 35.418 8.33334 35.4167ZM8.33334 27.0833C7.74306 27.0833 7.24792 26.8833 6.84792 26.4833C6.44792 26.0833 6.24862 25.5889 6.25001 25C6.25001 24.4097 6.45001 23.9146 6.85001 23.5146C7.25001 23.1146 7.74445 22.9153 8.33334 22.9167C8.92362 22.9167 9.41876 23.1167 9.81876 23.5167C10.2188 23.9167 10.4181 24.4111 10.4167 25C10.4167 25.5903 10.2167 26.0854 9.81667 26.4854C9.41667 26.8854 8.92223 27.0847 8.33334 27.0833ZM8.33334 18.75C7.74306 18.75 7.24792 18.55 6.84792 18.15C6.44792 17.75 6.24862 17.2555 6.25001 16.6667C6.25001 16.0764 6.45001 15.5812 6.85001 15.1812C7.25001 14.7812 7.74445 14.5819 8.33334 14.5833C8.92362 14.5833 9.41876 14.7833 9.81876 15.1833C10.2188 15.5833 10.4181 16.0778 10.4167 16.6667C10.4167 17.2569 10.2167 17.7521 9.81667 18.1521C9.41667 18.5521 8.92223 18.7514 8.33334 18.75ZM14.5833 35.4167V31.25H43.75V35.4167H14.5833ZM14.5833 27.0833V22.9167H43.75V27.0833H14.5833ZM14.5833 18.75V14.5833H43.75V18.75H14.5833Z" fill="white" />
        </svg>
    )
}
