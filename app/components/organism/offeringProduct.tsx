'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Title from '../atoms/title'
import Card from '../atoms/card'
import ShoppingSaleIcon from '../atoms/icons/shoppingSaleIcon'
import Button from '../atoms/button'
import { offersProduct } from '@/libs/data'

export default function OfferingProduct() {
    return (
        <motion.section className='xl:px-[11rem] lg:px-[8rem] px-10 md:mb-28 mb-20' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <Title title="Start Creating Websites or Mobile Apps For You Now" className="text-center text-white md:mt-10 mb-8" />
            <div className='flex md:flex-row flex-col md:justify-between justify-center items-center xl:gap-24 lg:gap-11 gap-5 w-full'>
                {offersProduct.map((item, index) => (
                    <Card key={index} className='border-transparent flex flex-row w-full md:min-h-[338px] min-h-[280px] max-w-[525px]'>
                        <div className='w-full bg-white text-[#333] flex flex-col justify-between items-center py-10 min-w-[50%]'>
                            <p className='md:text-3xl text-lg font-bold'>{item.title}</p>
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
                ))}
            </div>
        </motion.section>
    )
}
