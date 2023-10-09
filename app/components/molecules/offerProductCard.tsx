import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Card from '../atoms/card'
import ShoppingSaleIcon from '../atoms/icons/shoppingSaleIcon'
import Button from '../atoms/button'
import Image from 'next/image'

type OfferProductCardProps = {
    item: {
        title: string,
        realPrice?: string,
        finalPrice: string,
        imgSrc: string,
    },
    index: number
}

export default function OfferProductCard(
    { item, index }: OfferProductCardProps
) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress: scrollYProgressMobil } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgressMobil, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgressMobil, [0, 1], [0.6, 1]);
    const xProgess = useTransform(scrollYProgressMobil, [0, 1], index % 2 === 0 ? [100, 0] : [-100, 0]);

    return (
        <motion.div ref={ref} style={{
            scale: scaleProgess,
            opacity: opacityProgess,
            x: xProgess,
        }} className='w-full h-full'>
            <Card className='border-transparent flex flex-row w-full md:min-h-[338px] min-h-[280px] max-w-[525px]'>
                <div className='w-full bg-white text-[#333] flex flex-col justify-between items-center py-10 min-w-[50%]'>
                    <p className='md:text-3xl text-lg font-bold text-center w-full px-4'>{item.title}</p>
                    <div className='text-center'>
                        <p className='md:text-xl font-bold md:mb-0 mb-2'>Start from</p>
                        {item.realPrice && (
                            <div className='relative w-fit'>
                                <p className='text-[#717171] md:text-base text-xs'>{item.realPrice}</p>
                                <div className='w-full h-[1px] bg-red-400 absolute top-[50%]' />
                                <ShoppingSaleIcon className='absolute -right-3 -top-3' />
                            </div>
                        )}
                        <p className='md:text-base text-xs'>{item.finalPrice}</p>
                    </div>
                    <Button className='text-white px-7 md:text-base text-sm'>
                        Order Now
                    </Button>
                </div>
                <div className='lg:w-full md:w-2/3 w-full relative '>
                    <Image src={item.imgSrc} alt='Offer' objectFit="cover" fill className="w-full h-full top-0 left-0 object-cover" />
                </div>
            </Card>
        </motion.div>
    )
}
