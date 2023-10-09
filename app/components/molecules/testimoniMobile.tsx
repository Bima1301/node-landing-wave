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
    const xProgess = useTransform(scrollYProgressMobil, [0, 1], [100, 0]); // Mengubah dari 100 ke 0 untuk gerakan dari kanan ke kiri
    return (
        <motion.div ref={ref} style={{
            scale: scaleProgess,
            opacity: opacityProgess,
            x: xProgess,
        }} className='w-full h-full overflow-hidden'>
            <Card className='bg-white text-black px-5 py-4 rounded-md ' >
                <p className='mb-2 text-xs'>{item.text}</p>
                <p className='text-[#00AD98] font-semibold text-sm'>{item.user}</p>
            </Card>
        </motion.div>
    )
}
