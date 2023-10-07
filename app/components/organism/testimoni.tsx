'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Title from '../atoms/title'
import Card from '../atoms/card'
import { testimonials } from '@/libs/data'

export default function Testimoni() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 0, 300])
    return (
        <motion.section ref={targetRef} className='md:mb-28 mb-20 relative ' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <Title title="Testimoni" className=" text-white md:mt-10 mb-14 lg:px-[4rem] px-10 w-full text-start" />
            <div className='lg:flex hidden flex-col items-center overflow-hidden'>
                <motion.div className='flex gap-4 px-10' style={{ x }}>
                    {testimonials.map((item, index) => (
                        <Card className='bg-white text-black px-5 py-4 rounded-md min-w-[500px]' key={index}>
                            <p className='mb-2'>{item.text}</p>
                            <p className='text-[#00AD98] font-semibold'>{item.user}</p>
                        </Card>
                    ))}
                </motion.div>
            </div>
            <div className='lg:hidden flex flex-col items-center overflow-hidden'>
                <div className='flex flex-col gap-4 px-10'>
                    {testimonials.map((item, index) => (
                        <Card className='bg-white text-black px-5 py-4 rounded-md ' key={index}>
                            <p className='mb-2'>{item.text}</p>
                            <p className='text-[#00AD98] font-semibold'>{item.user}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
