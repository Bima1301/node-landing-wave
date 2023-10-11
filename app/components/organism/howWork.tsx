'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Title from '../atoms/title'
import Image from 'next/image'
import { conversations } from '@/libs/data'

export default function HowWork() {
    return (
        <motion.section className='xl:px-[12rem] lg:px-[8rem] px-10  mb-20 relative pb-12' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <div className='absolute top-0 left-0 w-full h-full bg-[url(/images/howWorkBg.jpg)] bg-cover' />
            <div className='z-10 relative flex justify-center items-center flex-col h-fit 14'>
                <Title title="How We Work" className="text-center text-white md:mt-10 md:mb-14 my-8" />
                <div className='bg-[url(/images/howWorkContent.jpeg)] flex md:flex-row flex-col-reverse md:items-start items-center p-5 rounded-lg md:max-w-[773px] max-w-full'>
                    <div className='flex flex-col md:gap-4 gap-2 bg-white px-4 pt-8 md:pb-28 pb-12  rounded-lg max-w-[300px]'>
                        {conversations.map((item, index) => (
                            <div className={`flex  ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"} md:gap-4 gap-2 text-black items-start`} key={index}>
                                <div className='rounded-full aspect-square min-w-[34px] relative overflow-hidden' >
                                    <Image src={item.imgProfil} alt='Phone' fill objectFit='cover' />
                                </div>
                                <p className='rounded-lg md:text-sm text-xs bg-[#D9D9D9] p-3'>{item.chat}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col px-10 md:mt-9 my-5'>
                        <p className='md:text-xl text-lg font-semibold mb-5 md:text-start text-center'>Estimate</p>
                        <p className='md:text-base text-xs md:text-start text-center'>Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.</p>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}
