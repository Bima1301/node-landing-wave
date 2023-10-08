'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Title from '../atoms/title'
import Card from '../atoms/card'
import Image from 'next/image'

export default function Work() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })
    const x = useTransform(scrollYProgress, [0, 0.5, 2], [-300, 100, 800])
    return (
        <motion.section ref={targetRef} className='md:mb-28 mb-20 relative xl:px-[4rem]' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <Title title="Our Works" className=" text-white md:mt-10 mb-14 xl:px-[12rem] lg:px-[8rem] px-10 text-center" />
            <div className='lg:flex hidden flex-col items-center overflow-hidden'>
                <motion.div className='flex gap-8 px-10' style={{ x }}>
                    <Card className='flex flex-row gap-5 px-5 py-16 text-white relative min-w-[48rem] overflow-hidden'>
                        <div className='absolute top-0 left-0 w-full h-full bg-[url(/images/work1.png)] bg-cover brightness-50 blur-lg' />
                        <Image src='/images/work1.png' alt='work 1' width={500} height={500} className='z-10 rounded-lg' />
                        <div className='flex flex-col max-w-xs z-10'>
                            <p className='text-center text-3xl font-semibold mb-5'>Rayu Motor</p>
                            <p>AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales</p>
                        </div>
                    </Card>
                    <Card className='flex flex-row gap-5 px-5 py-16 text-white relative min-w-[48rem] overflow-hidden'>
                        <div className='absolute top-0 left-0 w-full h-full bg-[url(/images/work2.png)] bg-cover brightness-50 blur-lg' />
                        <Image src='/images/work2.png' alt='work 1' width={500} height={500} className='z-10 rounded-lg' />
                        <div className='flex flex-col max-w-xs z-10'>
                            <p className='text-center text-3xl font-semibold mb-5'>Jasabung</p>
                            <p>
                                Jasabung is a platform for online cockfighting gambling games, which is equipped with a live streaming feature that allows players to watch the match live.
                            </p>
                        </div>
                    </Card>
                </motion.div>
            </div>
            <div className='lg:hidden flex flex-col items-center overflow-hidden'>
                <div className='flex flex-col gap-4 lg:px-10'>
                    <Card className='flex md:flex-row flex-col gap-5 px-5 lg:py-20 py-10 text-white relative lg:min-w-[48rem] overflow-hidden'>
                        <div className='absolute top-0 left-0 w-full h-full bg-[url(/images/work1.png)] bg-cover brightness-50 blur-lg' />
                        <Image src='/images/work1.png' alt='work 1' width={400} height={400} className='z-10 rounded-lg' />
                        <div className='flex flex-col lg:max-w-xs  z-10'>
                            <p className='text-center md:text-3xl text-xl font-semibold mb-5'>Rayu Motor</p>
                            <p className='lg:text-base md:text-sm text-xs'>AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales</p>
                        </div>
                    </Card>
                    <Card className='flex md:flex-row flex-col gap-5 px-5 lg:py-20 py-10 text-white relative lg:min-w-[48rem] overflow-hidden'>
                        <div className='absolute top-0 left-0 w-full h-full bg-[url(/images/work2.png)] bg-cover brightness-50 blur-lg' />
                        <Image src='/images/work2.png' alt='work 1' width={400} height={400} className='z-10 rounded-lg' />
                        <div className='flex flex-col lg:max-w-xs z-10'>
                            <p className='text-center md:text-3xl text-xl font-semibold mb-5'>Jasabung</p>
                            <p className='lg:text-base md:text-sm text-xs'>
                                Jasabung is a platform for online cockfighting gambling games, which is equipped with a live streaming feature that allows players to watch the match live.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </motion.section>
    )
}
