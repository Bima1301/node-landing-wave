import React from 'react'

type ShoppingSaleIconProps = React.HTMLAttributes<HTMLDivElement>;

export default function ShoppingSaleIcon(
    { className }: ShoppingSaleIconProps
) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" className={className}>
            <g clipPath="url(#clip0_1_58)">
                <path d="M8.37943 21.2113C8.28817 20.9121 8.18448 20.5722 8.03576 20.465C7.76651 20.3542 7.47233 20.3182 7.1843 20.3607L7.19134 20.3594C6.85176 20.393 6.50892 20.353 6.18623 20.242L6.17681 20.2385L6.16924 20.2351C6.07391 20.1911 5.98823 20.1288 5.91713 20.0516L5.92097 20.0552C5.62083 19.7292 5.66882 19.23 5.71733 18.7475C5.77545 18.4704 5.76403 18.1831 5.6841 17.9115L5.68491 17.9137C5.58344 17.7897 5.44991 17.6959 5.29885 17.6426L5.30187 17.644C5.19143 17.593 5.07178 17.5459 4.95214 17.4989C4.82306 17.4485 4.69469 17.3965 4.57517 17.3413C4.42538 17.2885 4.28749 17.2066 4.16943 17.1004C4.05136 16.9942 3.95544 16.8657 3.88718 16.7223L3.88799 16.7245C3.84738 16.4998 3.85442 16.2691 3.90866 16.0473C3.96291 15.8255 4.06314 15.6176 4.20288 15.437L4.19682 15.4461C4.36067 15.2079 4.46158 14.9321 4.49014 14.6444L4.48793 14.6572C4.37514 14.4024 4.20141 14.1793 3.98207 14.0076L3.97252 14.0004C3.62321 13.6637 3.26122 13.3147 3.28003 12.8726C3.32876 12.652 3.42294 12.444 3.55657 12.2619C3.6902 12.0798 3.86034 11.9275 4.05613 11.8148L4.05101 11.8179C4.29173 11.6599 4.4886 11.4436 4.62334 11.1892L4.62509 11.1854C4.66917 11.0065 4.52752 10.6813 4.40308 10.3943C4.20736 9.9477 4.00629 9.48485 4.19468 9.0771C4.38308 8.66935 4.86587 8.52248 5.33312 8.37943C5.63232 8.28818 5.97215 8.18449 6.07942 8.03577C6.18584 7.76512 6.22183 7.4719 6.18401 7.18355L6.185 7.19135C6.14484 6.96809 6.15179 6.73889 6.20542 6.51848C6.25904 6.29806 6.35815 6.09129 6.49639 5.91143L6.49033 5.92057C6.81627 5.62043 7.31552 5.66842 7.79799 5.71693C8.08805 5.77659 8.37133 5.76152 8.63438 5.68294L8.63217 5.68375C8.83189 5.47548 8.97484 5.21945 9.04734 4.94015L9.04466 4.94993C9.09324 4.72771 9.18748 4.51802 9.32142 4.33416C9.45536 4.15031 9.62606 3.99631 9.82269 3.88195L9.81757 3.88509C9.97142 3.84475 10.1317 3.83519 10.2893 3.85695C10.4468 3.87871 10.5986 3.93136 10.7357 4.01188L10.7312 4.00978C10.8522 4.06571 10.9739 4.13019 11.0956 4.19467C11.2089 4.25531 11.3223 4.31594 11.4327 4.36697C11.572 4.44749 11.7308 4.48813 11.8916 4.48444L11.886 4.48461C12.1346 4.37367 12.3598 4.20229 12.5348 3.9784L12.542 3.96886C12.8795 3.6199 13.2285 3.25791 13.6698 3.27637C13.7728 3.28088 13.874 3.30577 13.9673 3.34959L13.9757 3.35344L13.9749 3.35309C14.289 3.53953 14.5414 3.78007 14.7334 4.05789L14.7253 4.0477C14.8773 4.29223 15.0932 4.49067 15.3496 4.62166L15.3526 4.62306C15.5315 4.66713 15.8567 4.52549 16.1437 4.40105C16.5952 4.20667 17.0588 4.00594 17.4665 4.19434C17.8743 4.38273 18.0212 4.86553 18.1638 5.33353C18.2551 5.63273 18.3588 5.97256 18.5075 6.07983C18.7772 6.18963 19.0712 6.22536 19.3593 6.18332L19.3515 6.18431C19.6913 6.15079 20.0343 6.19122 20.357 6.30282L20.3665 6.30625L20.374 6.30975C20.4724 6.35519 20.5571 6.4182 20.6262 6.49325L20.6223 6.48964C20.9224 6.81558 20.8745 7.31482 20.8259 7.7973C20.7663 8.08736 20.7817 8.36988 20.8592 8.63334L20.8584 8.63112C20.9602 8.75514 21.0943 8.84857 21.2459 8.90105L21.2429 8.89966C21.3533 8.95069 21.473 8.99771 21.5922 9.04548C21.721 9.09669 21.8497 9.14791 21.9692 9.20313C22.1191 9.25607 22.257 9.33802 22.3752 9.44428C22.4934 9.55055 22.5895 9.67905 22.658 9.82246L22.6571 9.82025C22.6973 10.0449 22.69 10.2755 22.6356 10.4972C22.5812 10.7189 22.4811 10.9268 22.3415 11.1074L22.3476 11.0982C22.1836 11.3365 22.0829 11.6125 22.055 11.9003L22.0569 11.8883C22.1667 12.1374 22.3388 12.3629 22.5631 12.5372L22.5726 12.5443C22.9216 12.8818 23.2836 13.2308 23.2651 13.6721C23.2159 13.8925 23.1217 14.1003 22.9882 14.2824C22.8548 14.4645 22.6851 14.617 22.4898 14.7303L22.4949 14.7272C22.2546 14.8833 22.0576 15.0977 21.9224 15.3503L21.9203 15.3549C21.8762 15.5337 22.0179 15.859 22.1423 16.146C22.3385 16.5974 22.5396 17.0602 22.3512 17.468C22.1628 17.8757 21.6797 18.0234 21.2117 18.1661C20.9125 18.2573 20.573 18.3603 20.4654 18.5097C20.3551 18.792 20.3242 19.0834 20.3604 19.3627L20.3598 19.3542C20.4 19.5773 20.3932 19.8063 20.3396 20.0266C20.286 20.2469 20.187 20.4536 20.0488 20.6333L20.0548 20.6242C19.7293 20.9254 19.2296 20.8763 18.7471 20.8278C18.4698 20.7696 18.1824 20.7813 17.9108 20.8618L17.913 20.861C17.7133 21.0693 17.5703 21.3253 17.4978 21.6046L17.5005 21.5948C17.4518 21.8169 17.3576 22.0264 17.2237 22.2101C17.0899 22.3938 16.9193 22.5477 16.7228 22.662L16.7279 22.6589C16.5742 22.6995 16.414 22.7094 16.2564 22.6879C16.0989 22.6665 15.9471 22.6142 15.8098 22.534L15.8144 22.5361C15.6933 22.4801 15.5717 22.4157 15.45 22.3512C15.3393 22.2905 15.2268 22.2331 15.1128 22.1789C14.9737 22.0981 14.8148 22.0574 14.654 22.0614L14.6595 22.0612C14.4052 22.1745 14.1824 22.3483 14.0107 22.5674L14.0036 22.577C13.6661 22.9259 13.3171 23.2879 12.8758 23.2695C12.7727 23.265 12.6716 23.2401 12.5782 23.1963L12.5699 23.1924C12.2691 23.0153 12.0114 22.775 11.8133 22.4876L11.8206 22.4974C11.6687 22.2528 11.4527 22.0546 11.196 21.9242L11.1929 21.9228C11.0141 21.8787 10.6889 22.0204 10.4019 22.1448C9.94996 22.3381 9.48711 22.5392 9.07861 22.3504C8.67011 22.1617 8.52323 21.6789 8.37943 21.2113ZM16.5746 10.4918L9.78331 15.4946C9.76399 15.5089 9.7487 15.5279 9.73895 15.5498C9.72921 15.5718 9.72534 15.5959 9.72773 15.6198C9.73013 15.6436 9.73869 15.6665 9.7526 15.6861C9.7665 15.7056 9.78525 15.7213 9.80702 15.7314L10.4478 16.0274C10.47 16.0378 10.4946 16.0419 10.519 16.0395C10.5434 16.037 10.5667 16.028 10.5864 16.0135L17.3731 11.0067C17.3924 10.9924 17.4077 10.9734 17.4174 10.9515C17.4272 10.9295 17.4311 10.9054 17.4287 10.8815C17.4263 10.8576 17.4177 10.8348 17.4038 10.8152C17.3899 10.7956 17.3711 10.78 17.3494 10.7699L16.7147 10.4766C16.6922 10.4663 16.6674 10.4622 16.6429 10.4648C16.6183 10.4673 16.5945 10.4771 16.5746 10.4918ZM14.452 13.687C14.3192 13.722 14.1957 13.786 14.0905 13.8743C13.9852 13.9627 13.9008 14.0732 13.8432 14.1979L13.004 16.0142C12.8838 16.2745 12.896 16.5619 13.0123 16.8011L13.0131 16.8033C13.1319 17.0547 13.338 17.2683 13.6126 17.3952C13.8872 17.5221 14.1838 17.5398 14.4541 17.4673L14.4519 17.4681C14.712 17.4019 14.9388 17.2249 15.0591 16.9647L15.8979 15.1491C16.0182 14.8889 16.0089 14.6009 15.8971 14.3602L15.8959 14.3587C15.7838 14.0978 15.579 13.8878 15.3211 13.769L15.2976 13.7582L15.2991 13.7589L15.2757 13.7481C15.0174 13.6283 14.7242 13.6071 14.4513 13.6885L14.4532 13.6884L14.452 13.687ZM12.7469 8.94538C12.6141 8.98044 12.4906 9.04442 12.3854 9.13274C12.2801 9.22107 12.1957 9.33156 12.1381 9.45632L11.2993 11.2719C11.1787 11.5329 11.1894 11.8215 11.3061 12.0618L11.3069 12.064C11.4247 12.3176 11.6308 12.5331 11.9062 12.6603C12.1816 12.7876 12.4804 12.8044 12.751 12.7294L12.7488 12.7302C13.0111 12.6632 13.2393 12.485 13.3606 12.2225L14.1974 10.4115C14.3187 10.149 14.3079 9.86033 14.1923 9.61781L14.1912 9.61635C14.0686 9.35095 13.8555 9.1379 13.5901 9.01543C13.3247 8.89296 13.0243 8.86909 12.7429 8.94811L12.7451 8.9473L12.7469 8.94538ZM13.821 16.511C13.8107 16.4906 13.8052 16.4681 13.8048 16.4452C13.8044 16.4222 13.8092 16.3996 13.8188 16.3788L14.658 14.5624C14.6783 14.5185 14.7165 14.4894 14.7591 14.4788C14.8141 14.4628 14.873 14.4672 14.925 14.4912L14.9348 14.4957L14.9341 14.4954L14.9431 14.4996C14.9953 14.5236 15.0371 14.5654 15.0612 14.6175C15.0715 14.6378 15.077 14.6602 15.0774 14.683C15.0779 14.7057 15.0732 14.7283 15.0638 14.749L14.2242 16.5661C14.2147 16.5867 14.2007 16.6049 14.1832 16.6194C14.1657 16.6339 14.1452 16.6443 14.1232 16.6498C14.0669 16.6642 14.0049 16.6594 13.9474 16.6328C13.8899 16.6062 13.846 16.5621 13.8202 16.5088L13.8209 16.5092L13.821 16.511ZM12.1185 11.7716C12.1084 11.7511 12.1029 11.7286 12.1025 11.7057C12.1021 11.6828 12.1069 11.6601 12.1163 11.6393L12.9552 9.82374C12.9755 9.77986 13.0137 9.75072 13.0566 9.73933C13.1128 9.72492 13.1749 9.72972 13.2324 9.75628C13.2899 9.78285 13.3337 9.82698 13.3596 9.88025C13.3699 9.90072 13.3747 9.92289 13.3751 9.94579C13.3754 9.9687 13.3707 9.99139 13.3611 10.0122L12.5219 11.8285C12.5123 11.8492 12.4982 11.8675 12.4806 11.8821C12.4631 11.8967 12.4425 11.9072 12.4204 11.9129C12.3642 11.9273 12.3022 11.9225 12.2447 11.896C12.1872 11.8694 12.1433 11.8253 12.1174 11.772L12.1185 11.7716Z" fill="#FF3939" />
            </g>
            <defs>
                <clipPath id="clip0_1_58">
                    <rect width="20" height="20" fill="white" transform="translate(8.38867) rotate(24.7989)" />
                </clipPath>
            </defs>
        </svg>
    )
}