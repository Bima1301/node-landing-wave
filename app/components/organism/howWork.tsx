'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Title from '../atoms/title'
import Image from 'next/image'

export default function HowWork() {
    return (
        <motion.section className='xl:px-[12rem] lg:px-[8rem] px-10 md:mb-28 mb-20 relative pb-12' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <div className='absolute top-0 left-0 w-full h-full bg-[url(/images/howWorkBg.jpeg)] bg-cover' />
            <div className='z-10 relative flex justify-center items-center flex-col h-fit 14'>
                <Title title="How We Work" className="text-center text-white md:mt-10 md:mb-14 my-8" />
                <div className='bg-[url(/images/howWorkContent.jpeg)] flex md:flex-row flex-col p-5 rounded-lg md:max-w-[80%] max-w-full'>
                    <div className='flex flex-col gap-4 bg-white px-4 pt-8 pb-28  rounded-lg min-w-[50%]'>
                        <div className='flex flex-row gap-6 text-black items-start'>
                            <div className='rounded-full aspect-square min-w-[34px] relative overflow-hidden' >
                                <Image src='/images/person.jpeg' alt='Phone' fill objectFit='cover' />
                            </div>
                            <p className='rounded-lg md:text-sm text-xs bg-[#D9D9D9] p-3'>My name is Danny, I'm looking for profile website company</p>
                        </div>
                        <div className='flex flex-row-reverse gap-4 text-black items-start'>
                            <div className='rounded-full aspect-square min-w-[34px] relative overflow-hidden' >
                                <Image src='/images/person2.jpeg' alt='Phone' fill objectFit='cover' />
                            </div>
                            <p className='rounded-lg md:text-sm text-xs bg-[#D9D9D9] p-3'>Hello Danny, thank to reaching out us. We are interested to your offer. Maybe we can set meeting</p>
                        </div>
                        <div className='flex flex-row gap-4 text-black items-start'>
                            <div className='rounded-full aspect-square min-w-[34px] relative overflow-hidden' >
                                <Image src='/images/person.jpeg' alt='Phone' fill objectFit='cover' />
                            </div>
                            <p className='rounded-lg md:text-sm text-xs bg-[#D9D9D9] p-3'>Sounds good, I have many desires to explain</p>
                        </div>
                        <div className='flex flex-row-reverse gap-4 text-black items-start'>
                            <div className='rounded-full aspect-square min-w-[34px] relative overflow-hidden' >
                                <Image src='/images/person2.jpeg' alt='Phone' fill objectFit='cover' />
                            </div>
                            <p className='rounded-lg md:text-sm text-xs bg-[#D9D9D9] p-3'>Hello Danny, thank to reaching out us. We are interested to your offer. Maybe we can set meeting</p>
                        </div>
                    </div>
                    <div className='flex flex-col px-10 md:mt-9 my-5'>
                        <p className='text-xl font-semibold mb-5'>Estimate</p>
                        <p className='md:text-base text-xs'>Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.</p>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}
