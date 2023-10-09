import React from 'react'

type TwitterIconProps = React.HTMLAttributes<HTMLDivElement>;

export default function TwitterIcon(
    { className }: TwitterIconProps
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={className}>
  <path d="M28.075 7.5C27.1125 7.9375 26.075 8.225 25 8.3625C26.1 7.7 26.95 6.65 27.35 5.3875C26.3125 6.0125 25.1625 6.45 23.95 6.7C22.9625 5.625 21.575 5 20 5C17.0625 5 14.6625 7.4 14.6625 10.3625C14.6625 10.7875 14.7125 11.2 14.8 11.5875C10.35 11.3625 6.3875 9.225 3.75 5.9875C3.2875 6.775 3.025 7.7 3.025 8.675C3.025 10.5375 3.9625 12.1875 5.4125 13.125C4.525 13.125 3.7 12.875 2.975 12.5V12.5375C2.975 15.1375 4.825 17.3125 7.275 17.8C6.48841 18.0153 5.66262 18.0452 4.8625 17.8875C5.20201 18.9531 5.86692 19.8855 6.76377 20.5537C7.66062 21.2218 8.74431 21.5921 9.8625 21.6125C7.96704 23.113 5.61749 23.9241 3.2 23.9125C2.775 23.9125 2.35 23.8875 1.925 23.8375C4.3 25.3625 7.125 26.25 10.15 26.25C20 26.25 25.4125 18.075 25.4125 10.9875C25.4125 10.75 25.4125 10.525 25.4 10.2875C26.45 9.5375 27.35 8.5875 28.075 7.5Z" fill="white"/>
</svg>
  )
}