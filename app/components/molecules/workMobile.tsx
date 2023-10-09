'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Card from '../atoms/card'
import Image from 'next/image'

type WorkMobileProps = {
    item: {
        title: string,
        description: string,
        bg: string
        src: string
    }
}

export default function WorkMobile(
    { item }: WorkMobileProps
) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress: scrollYProgressMobil } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgressMobil, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgressMobil, [0, 1], [0.6, 1]);
    return (
        <motion.div ref={ref} style={{
            scale: scaleProgess,
            opacity: opacityProgess,
        }}>
            <Card className='flex md:flex-row flex-col gap-5 px-5 lg:py-20 py-6 text-white relative lg:min-w-[48rem] overflow-hidden'>

                <div className='absolute top-0 left-0 w-full h-full brightness-75 blur-lg'>
                    <Image src={item.src} alt='work' fill className='w-full h-full' />
                </div>
                <Image src={item.src} alt='work' width={400} height={400} className='z-10 rounded-lg' />
                <div className='flex flex-col lg:max-w-xs  z-10'>
                    <p className='text-center md:text-3xl text-lg font-semibold mb-5'>{item.title}</p>
                    <p className='lg:text-base md:text-sm text-xs'>{item.description}</p>
                </div>
            </Card>
        </motion.div>

    )
}
