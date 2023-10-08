'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Title from '../atoms/title'
import ListIcon from '../atoms/icons/listIcon'
import { otherServices, services } from '@/libs/data'
import Marquee from 'react-fast-marquee'

export default function Service() {
    return (
        <motion.section className=' mb-20 relative ' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <Title title="Applications that can be made" className="text-center text-white md:mt-10 mb-8" />
            <div className='flex md:flex-row flex-col justify-around mb-8 gap-8 px-[4rem]'>
                {services.map((item, index) => (
                    <div className='flex flex-col gap-5 service-content w-full' key={index}>
                        <p className='inline-flex gap-3 md:text-xl text-lg items-center font-semibold'> <item.icon className='md:w-auto w-10' /> {item.title}</p>
                        {item.description && (
                            <div className='md:text-base text-xs' key={index} dangerouslySetInnerHTML={{ __html: item.description }} />
                        )}
                    </div>
                ))}
            </div>
            <Marquee
                pauseOnHover={true}
                gradient={true}
                gradientColor='black'
            >
                {otherServices.map((item, index) => (
                    <p className='inline-flex items-center w-fit mx-5 gap-3' key={index}>{item.icon && <item.icon className='w-8' />} {item.title}</p>
                ))}
            </Marquee>
        </ motion.section>
    )
}
