'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Title from '../atoms/title'
import Card from '../atoms/card'
import Image from 'next/image'
import WorkMobile from './workMobile'
import { portfolio } from '@/libs/data'

export default function Work() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })
    const x = useTransform(scrollYProgress, [0, 0.5, 2], [-350, 100, 800])
    return (
        <motion.section ref={targetRef} className=' mb-20 relative xl:px-[4rem] px-10' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <Title title="Our Works" className=" text-white md:mt-10 mb-6 xl:px-[12rem] lg:px-[8rem] px-10 text-center" />
            <div className='lg:flex hidden flex-col items-center overflow-hidden'>
                <motion.div className='flex gap-8 px-10 ' style={{ x }}>
                    {portfolio.map((item, index) => (
                        <Card key={index} className='flex flex-row gap-5 px-5 py-16 text-white relative min-w-[48rem] overflow-hidden'>
                            <div className='absolute top-0 left-0 w-full h-full blur-xl'>
                                <Image src={item.src} alt='work 1' fill className='z-10 rounded-lg' />
                            </div>
                            <Image src={item.src} alt='work 1' width={500} height={500} className='z-10 rounded-lg' />
                            <div className='flex flex-col max-w-xs z-10'>
                                <p className='text-center text-3xl font-semibold mb-5'>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        </Card>
                    ))}
                </motion.div>
            </div>
            <div className='lg:hidden flex flex-col items-center overflow-hidden'>
                <div className='flex flex-col gap-4 lg:px-10'>
                    {portfolio.map((item, index) => (
                        <React.Fragment key={index}>
                            <WorkMobile
                                item={item}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
