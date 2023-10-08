'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FacebookIcon from '../atoms/icons/social/facebookIcon'
import TwitterIcon from '../atoms/icons/social/twitterIcon'
import YoutubeIcon from '../atoms/icons/social/youtubeIcon'
import LinkedinIcon from '../atoms/icons/social/linkedinIcon'
import InstagramIcon from '../atoms/icons/social/instagramIcon'

export default function Footer() {
    return (
        <motion.section className='mb-12 mt-14 flex flex-col justify-center items-center' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <Image src='/images/whiteLogo.png' alt='Nodewave' width={226} height={200} className='md:max-w-[226px] max-w-[180px]' />
            <p className='my-8 md:text-xl text-sm font-semibold'>PT NODEWAVE SOLUSI TEKNOLOGI</p>
            <p className='text-center mb-10 md:text-xl text-xs md:px-0 px-[4rem] font-semibold'>
                Graha Pena Surabaya Jl. Ahmad Yani no. 88 Surabaya <br />
                Phone : +62811258280 <br />
                Email : support@nodewave.id <br />
            </p>
            <div className='flex flex-row md:gap-5 gap-3 '>
                <a href="https://www.facebook.com/profile.php?id=100094647258015" target='_blank'>
                    <FacebookIcon className='md:w-auto w-5' />
                </a>
                <a href="https://twitter.com/nodewave" target='_blank'>
                    <TwitterIcon className='md:w-auto w-5' />
                </a>
                <a href="https://www.nodewave.id/en" target='_blank'>
                    <YoutubeIcon className='md:w-auto w-5' />
                </a>
                <a href="https://www.linkedin.com/company/nodewaveindonesia/?originalSubdomain=id" target='_blank'>
                    <LinkedinIcon className='md:w-auto w-5' />
                </a>
                <a href="https://www.instagram.com/nodewave.id/" target='_blank'>
                    <InstagramIcon className='md:w-auto w-5' />
                </a>
            </div>
        </motion.section>
    )
}
