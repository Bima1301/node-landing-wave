'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Title from '../atoms/title'
import { offersProduct } from '@/libs/data'
import OfferProductCard from '../molecules/offerProductCard'

export default function OfferingProduct() {
    return (
        <motion.section className='xl:px-[11rem] lg:px-[8rem] px-10 md:mb-28 mb-20 overflow-hidden' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <Title title="Start Creating Websites or Mobile Apps For You Now" className="text-center text-white md:mt-10 mb-8" />
            <div className='flex md:flex-row flex-col md:justify-between justify-center items-center xl:gap-24 lg:gap-11 gap-5 w-full'>
                {offersProduct.map((item, index) => (
                    <React.Fragment key={index}>
                        <OfferProductCard
                            index={index}
                            item={item}
                        />
                    </React.Fragment>
                ))}
            </div>
        </motion.section>
    )
}
