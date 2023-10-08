"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Card from '../atoms/card'

type TestimoniMobileProps = {
    item: {
        text: string,
        user: string,
    }
}

export default function TestimoniMobile(
    { item }: TestimoniMobileProps
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
        }} className='w-full h-full overflow-hidden'>
            <Card className='bg-white text-black px-5 py-4 rounded-md ' >
                <p className='mb-2'>{item.text}</p>
                <p className='text-[#00AD98] font-semibold'>{item.user}</p>
            </Card>
        </motion.div>
    )
}
