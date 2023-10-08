import React from 'react'

type MenMechanicIconProps = React.HTMLAttributes<HTMLDivElement>

export default function MenMechanicIcon(
    { className }: MenMechanicIconProps
) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none" className={className}>
            <path d="M20.125 14.375C19.0781 14.375 18.2031 15.0937 17.9688 16.0625C17.8906 16.3281 18.1094 16.6094 18.3906 16.6094H19.0781C19.0214 16.3982 19.0139 16.1768 19.0563 15.9622C19.0988 15.7477 19.19 15.5458 19.3229 15.3721C19.4558 15.1985 19.6268 15.0577 19.8228 14.9606C20.0188 14.8636 20.2344 14.8129 20.4531 14.8125C21.25 14.8125 21.875 15.4531 21.875 16.2344C21.875 16.3594 21.8594 16.4844 21.8281 16.6094H21.9531C22.1875 16.6094 22.3594 16.4063 22.3125 16.1719C22.1094 15.1406 21.2031 14.375 20.125 14.375ZM27.7656 14.375C28.8125 14.375 29.6875 15.0937 29.9219 16.0625C29.9844 16.3438 29.7812 16.6094 29.5 16.6094H28.8125C28.8693 16.3982 28.8767 16.1768 28.8343 15.9622C28.7919 15.7477 28.7007 15.5458 28.5678 15.3721C28.4349 15.1985 28.2638 15.0577 28.0678 14.9606C27.8719 14.8636 27.6562 14.8129 27.4375 14.8125C27.2502 14.8104 27.0644 14.8458 26.8909 14.9165C26.7175 14.9872 26.5599 15.0918 26.4274 15.2243C26.295 15.3567 26.1903 15.5143 26.1196 15.6878C26.0489 15.8612 26.0135 16.0471 26.0156 16.2344C26.0156 16.3594 26.0313 16.4844 26.0625 16.6094H25.9375C25.883 16.6107 25.8288 16.5996 25.7792 16.5768C25.7296 16.5541 25.6858 16.5204 25.6512 16.4782C25.6165 16.436 25.592 16.3866 25.5793 16.3335C25.5667 16.2804 25.5662 16.2251 25.5781 16.1719C25.7812 15.1406 26.6719 14.375 27.7656 14.375Z" fill="white" />
            <path d="M20.4531 15.4062C20.5932 15.4047 20.7313 15.4398 20.8537 15.508C20.9761 15.5761 21.0787 15.675 21.1512 15.7949C21.2238 15.9148 21.2638 16.0515 21.2675 16.1915C21.2711 16.3316 21.2381 16.4702 21.1719 16.5937H19.7344C19.6691 16.4692 19.6372 16.33 19.6416 16.1896C19.6459 16.0492 19.6865 15.9122 19.7594 15.7921C19.7788 15.8221 19.8044 15.8477 19.8345 15.867C19.8645 15.8863 19.8984 15.8989 19.9338 15.904C19.9692 15.9091 20.0052 15.9065 20.0396 15.8965C20.0739 15.8865 20.1056 15.8692 20.1327 15.8458C20.1598 15.8225 20.1815 15.7936 20.1965 15.7611C20.2114 15.7287 20.2192 15.6934 20.2194 15.6576C20.2196 15.6219 20.2121 15.5865 20.1974 15.5539C20.1827 15.5213 20.1612 15.4923 20.1344 15.4687C20.2354 15.4268 20.3438 15.4056 20.4531 15.4062ZM27.4375 15.4062C27.336 15.406 27.2354 15.4245 27.1406 15.4609C27.1695 15.4844 27.1927 15.5141 27.2087 15.5478C27.2246 15.5815 27.2328 15.6183 27.2326 15.6555C27.2325 15.6928 27.224 15.7295 27.2079 15.7631C27.1917 15.7967 27.1682 15.8262 27.1392 15.8495C27.1101 15.8728 27.0763 15.8894 27.04 15.8979C27.0037 15.9065 26.966 15.9068 26.9296 15.8989C26.8932 15.891 26.859 15.8751 26.8296 15.8523C26.8001 15.8295 26.7761 15.8004 26.7594 15.7671C26.6795 15.8887 26.6336 16.0295 26.6264 16.1749C26.6193 16.3202 26.6512 16.4648 26.7188 16.5937H28.1563C28.2225 16.4702 28.2555 16.3316 28.2518 16.1915C28.2482 16.0515 28.2082 15.9148 28.1356 15.7949C28.0631 15.675 27.9605 15.5761 27.8381 15.508C27.7157 15.4398 27.5776 15.4047 27.4375 15.4062ZM23.4531 16.1093L22.625 18.7812C22.4531 19.328 22.8594 19.8905 23.4375 19.8905H24.6562C25.2344 19.8905 25.6406 19.328 25.4687 18.7812L24.6406 16.1093C24.4687 15.5155 23.6406 15.5155 23.4531 16.1093ZM21.625 20.8124C22.2969 21.1718 23.0937 21.3749 23.9375 21.3749C24.7969 21.3749 25.5781 21.1718 26.25 20.8124C26.4687 20.703 26.7188 20.953 26.5781 21.1718C26.0156 22.0312 25.0469 22.6093 23.9375 22.6093C22.8281 22.6093 21.8594 22.0312 21.2969 21.1718C21.1562 20.953 21.3906 20.6874 21.625 20.8124Z" fill="white" />
            <path d="M31.4062 4.77808C29.9844 3.38745 27.8281 2.83276 25.5781 2.83276H22.2812C20.0312 2.83276 17.875 3.38589 16.4531 4.77808C15.3594 5.84683 14.7656 7.8062 15.2031 10.0093L15.3094 9.99683C15.1031 10.1718 14.8984 10.3562 14.6969 10.5484L14.175 11.0437L14.9328 11.9859L14.9531 12.8359C14.9562 12.9609 14.9625 13.0859 14.9703 13.2109L14.9937 13.5453C14.3886 13.8346 13.8845 14.2993 13.547 14.8789C13.2094 15.4585 13.0539 16.1262 13.1007 16.7953C13.1476 17.4644 13.3946 18.104 13.8096 18.6309C14.2247 19.1578 14.7886 19.5477 15.4281 19.75L15.5797 21.9296L15.5812 21.95C15.6516 22.6671 15.8359 23.3375 16.1141 23.9468C16.2812 24.3125 16.4828 24.6562 16.7156 24.9734L16.1562 25.2C13.095 26.6557 10.5114 28.9528 8.70736 31.8226C6.90334 34.6924 5.95346 38.0165 5.96875 41.4062V46.875C5.96875 47.0822 6.05106 47.2809 6.19757 47.4274C6.34408 47.5739 6.5428 47.6562 6.75 47.6562H41.1094C41.1797 47.6562 41.25 47.6453 41.3187 47.625H41.3281C41.8959 47.625 42.4403 47.3994 42.8418 46.998C43.2432 46.5965 43.4688 46.0521 43.4688 45.4843V39.9968C43.4687 39.9107 43.4635 39.8246 43.4531 39.739V36.8406C43.4522 36.4715 43.3643 36.1079 43.1965 35.7791C43.0288 35.4504 42.7859 35.1658 42.4876 34.9485C42.1893 34.7311 41.844 34.5872 41.4796 34.5283C41.1153 34.4693 40.7422 34.4971 40.3906 34.6093V32.9156C40.3906 32.7593 40.4844 32.6031 40.625 32.525C41.8594 31.8687 42.6875 30.5718 42.6875 29.0875C42.6719 27.6343 41.8438 26.3375 40.625 25.6812C40.3281 25.525 39.9531 25.7281 39.9531 26.0718V28.4937C39.9531 29.15 39.4219 29.6968 38.7656 29.6812C38.4596 29.675 38.1683 29.5486 37.9549 29.3293C37.7414 29.11 37.6229 28.8154 37.625 28.5093V26.0718C37.625 25.7281 37.25 25.5093 36.9531 25.6656C36.3855 25.9695 35.9025 26.4101 35.5478 26.9475C35.1932 27.4849 34.9781 28.1023 34.9219 28.7437V29.4453C35.0453 30.7968 35.875 31.9578 37.0312 32.5562C37.1719 32.6343 37.2656 32.7906 37.2656 32.9468V37.8593H36.1719C36.1049 37.8596 36.0382 37.8686 35.9734 37.8859C35.5893 37.9246 35.2244 38.0726 34.9219 38.3125V32.9171C34.2953 32.287 33.8329 31.5127 33.5755 30.6622C33.318 29.8116 33.2733 28.9109 33.4453 28.039L33.4578 28.0484C33.5606 27.5197 33.7417 27.0094 33.9953 26.5343C33.2641 26.0343 32.4984 25.5859 31.7031 25.1968L31.7234 25.1687C31.5193 25.1041 31.3117 25.0509 31.1016 25.0093C31.7595 24.1141 32.1609 23.0563 32.2625 21.95V21.9296L32.4156 19.7562C33.0594 19.5566 33.6278 19.167 34.0463 18.6387C34.4649 18.1103 34.7139 17.4679 34.7609 16.7955C34.8079 16.1231 34.6505 15.4522 34.3095 14.8708C33.9685 14.2894 33.4598 13.8246 32.85 13.5375L32.8734 13.2093C32.8812 13.0937 32.8875 12.9781 32.8906 12.8625L32.9141 12.0781L33.7469 11.0437L33.225 10.5484C33.0289 10.3617 32.8272 10.1809 32.6203 10.0062L32.6562 10.0093C33.0937 7.8187 32.5 5.84683 31.4062 4.77808ZM31.2531 13.9859L30.7062 21.8093C30.4734 24.15 28.6453 25.7812 26.4375 25.7812H21.4062C20.6495 25.7864 19.9054 25.5876 19.2521 25.2057C18.5988 24.8238 18.0605 24.2729 17.6937 23.6109C17.3863 23.0551 17.1969 22.4417 17.1375 21.8093L16.5906 13.9843C17.0578 14.0265 17.5406 13.9375 17.9766 13.7046L17.9937 13.6953C18.1517 13.8439 18.3613 13.9251 18.5781 13.9218C18.75 13.9218 18.9375 13.875 19.0937 13.7656C19.125 13.7343 19.9062 13.1562 21.0781 13.3125C21.2047 13.3275 21.333 13.3142 21.4538 13.2735C21.5746 13.2328 21.6849 13.1658 21.7765 13.0772C21.8682 12.9887 21.9391 12.8809 21.9839 12.7616C22.0288 12.6423 22.0466 12.5145 22.0359 12.3875C23.2969 12.2031 24.5781 12.2031 25.8391 12.3875C25.8284 12.5145 25.8462 12.6423 25.8911 12.7616C25.9359 12.8809 26.0068 12.9887 26.0985 13.0772C26.1901 13.1658 26.3004 13.2328 26.4212 13.2735C26.542 13.3142 26.6703 13.3275 26.7969 13.3125C27.9203 13.1765 28.6875 13.7031 28.775 13.7609L28.7812 13.7656C28.9375 13.875 29.1094 13.9375 29.2969 13.9375C29.5174 13.933 29.7291 13.8499 29.8937 13.7031C30.3219 13.9359 30.7953 14.025 31.2531 13.9859ZM32.5422 17.9468L32.7234 15.3468C32.8909 15.5252 33.0198 15.7363 33.1019 15.9668C33.184 16.1973 33.2176 16.4423 33.2005 16.6864C33.1835 16.9305 33.1163 17.1685 33.003 17.3854C32.8897 17.6022 32.7328 17.7934 32.5422 17.9468ZM15.3 17.9343C15.114 17.7808 14.9612 17.5911 14.8509 17.3766C14.7405 17.1622 14.6749 16.9275 14.6581 16.687C14.6413 16.4464 14.6736 16.2049 14.7531 15.9772C14.8325 15.7495 14.9575 15.5403 15.1203 15.3625L15.3 17.9343ZM27.7344 27.2015C28.3312 27.0671 28.8937 26.8421 29.4062 26.539V32.9375C29.4062 32.9687 29.3984 32.9843 29.3937 32.9937C29.3847 33.007 29.3723 33.0178 29.3578 33.025C29.3434 33.0326 29.3272 33.0364 29.3109 33.0359C29.3001 33.0355 29.2894 33.0329 29.2797 33.0281L25.3984 29.6765C25.9447 29.4593 26.4369 29.1251 26.8404 28.6976C27.2439 28.2701 27.549 27.7594 27.7344 27.2015ZM25.5437 27.3437H25.9344C25.71 27.6663 25.411 27.9299 25.0627 28.1119C24.7145 28.294 24.3273 28.389 23.9344 28.389C23.5414 28.389 23.1543 28.294 22.806 28.1119C22.4578 27.9299 22.1587 27.6663 21.9344 27.3437H25.5437ZM18.4687 26.5578C18.9812 26.8562 19.5422 27.0781 20.1375 27.2078C20.3215 27.7658 20.6262 28.2765 21.0299 28.7035C21.4337 29.1304 21.9265 29.4632 22.4734 29.6781L18.5937 33.0281C18.5845 33.0327 18.5744 33.0353 18.5641 33.0359C18.5478 33.0364 18.5316 33.0326 18.5172 33.025C18.5027 33.0178 18.4903 33.007 18.4812 32.9937C18.4717 32.9766 18.4673 32.957 18.4687 32.9375V26.5578ZM18.5172 9.77651C20.222 8.98326 22.0796 8.57212 23.96 8.57185C25.8403 8.57158 27.698 8.98219 29.4031 9.77495C30.1859 10.1437 30.9078 10.6046 31.6156 11.2015L31.4375 11.4203L31.4344 11.4265C31.3186 11.5705 31.1556 11.6688 30.9743 11.704C30.7929 11.7392 30.6049 11.709 30.4437 11.6187H30.4406C28.4568 10.5328 26.2303 9.96676 23.9688 9.97339C21.7073 9.96628 19.4809 10.5318 17.4969 11.6171L17.4937 11.6203C17.3281 11.7104 17.136 11.7396 16.951 11.7028C16.766 11.666 16.5998 11.5654 16.4812 11.4187L16.3062 11.2C16.9717 10.6253 17.7143 10.1467 18.5125 9.77808L18.5172 9.77495V9.77651ZM31.6875 26.9453V35.2968C31.6875 35.6562 31.4062 35.9375 31.0469 35.9375H16.875C16.5156 35.9375 16.2344 35.6562 16.2344 35.2968V26.9093C16.4547 26.7921 16.6797 26.6812 16.9062 26.575V32.9375C16.9062 34.2921 18.4187 35.0625 19.5125 34.2968L19.5437 34.2734L23.8 30.5968C23.8383 30.5639 23.887 30.5459 23.9375 30.5459C23.988 30.5459 24.0367 30.5639 24.075 30.5968L28.3312 34.2734L28.3625 34.2953C29.4562 35.064 30.9687 34.2921 30.9687 32.9375V26.5812C31.2109 26.6968 31.4516 26.8171 31.6875 26.9453ZM13 29.1515V46.0937H7.53125V41.4062C7.52159 39.0925 8.00423 36.8033 8.9471 34.6905C9.88997 32.5776 11.2715 30.6895 13 29.1515ZM41.8906 37.7921H40.3906V36.5375C40.4509 36.3964 40.551 36.2761 40.6786 36.1911C40.8063 36.1062 40.956 36.0604 41.1094 36.0593C41.5375 36.0593 41.8906 36.4124 41.8906 36.8406V37.7921ZM36.1719 46.0625C35.9297 46.0625 35.7594 45.8781 35.75 45.6937C35.7491 45.6239 35.7653 45.555 35.7972 45.4929C35.8291 45.4308 35.8756 45.3774 35.9328 45.3375C36.0416 45.2649 36.1305 45.1662 36.1913 45.0503C36.252 44.9345 36.2827 44.8052 36.2805 44.6744C36.2784 44.5437 36.2434 44.4155 36.1788 44.3018C36.1142 44.188 36.0221 44.0923 35.9109 44.0234C35.8599 43.991 35.8182 43.9459 35.79 43.8924C35.7617 43.839 35.748 43.7791 35.75 43.7187C35.75 43.5968 35.8187 43.475 35.9266 43.4062C36.0371 43.3344 36.1276 43.2359 36.1898 43.1197C36.252 43.0035 36.2838 42.8735 36.2823 42.7417C36.2807 42.61 36.2458 42.4807 36.1809 42.3661C36.116 42.2514 36.0231 42.155 35.9109 42.0859C35.8599 42.0535 35.8182 42.0084 35.79 41.9549C35.7617 41.9015 35.748 41.8416 35.75 41.7812C35.75 41.6593 35.8187 41.5375 35.9266 41.4687C36.0352 41.3981 36.1246 41.3016 36.1867 41.1879C36.2488 41.0742 36.2816 40.9468 36.2822 40.8173C36.2829 40.6877 36.2513 40.56 36.1903 40.4457C36.1293 40.3314 36.0408 40.2341 35.9328 40.1625C35.8761 40.1268 35.8295 40.0772 35.7975 40.0184C35.7655 39.9596 35.7491 39.8935 35.75 39.8265V39.8156C35.7547 39.6281 35.9266 39.4375 36.1719 39.4375C36.2243 39.4375 36.2767 39.4323 36.3281 39.4218H41.3281C41.6094 39.4218 41.8438 39.6218 41.8953 39.8875L41.9062 40.0031V45.4843C41.9062 45.6377 41.8453 45.7847 41.7369 45.8931C41.6285 46.0015 41.4814 46.0625 41.3281 46.0625H36.1719ZM21.9062 40.2187C21.9062 41.3437 21.0156 42.2343 19.8906 42.2343H17.625C16.5156 42.2343 15.6094 41.3281 15.6094 40.2187C15.6094 39.1093 16.5156 38.2031 17.625 38.2031H19.8906C21 38.2031 21.9062 39.1093 21.9062 40.2187Z" fill="white" />
        </svg>
    )
}
