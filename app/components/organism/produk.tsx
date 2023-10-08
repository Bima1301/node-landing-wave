'use client'

import React from 'react'
import Title from '../atoms/title'
import Card from '../atoms/card'
import UiDesignIcon from '../atoms/icons/uiDesignIcon'
import ArrowRight from '../atoms/icons/arrowRight'
import Image from 'next/image'
import Button from '../atoms/button'
import WebDesignIcon from '../atoms/icons/webDesignIcon'
import { motion } from 'framer-motion'

export default function Produk() {
    return (
        <motion.section className='xl:px-[12rem] lg:px-[8rem] px-10 md:mb-28 mb-20' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <Title title="Our Produk" className="text-center text-white md:mt-10 mb-8" />
            <div className='flex lg:flex-row flex-col-reverse gap-5'>
                <div className='flex flex-col gap-5 justify-between'>
                    <Card className='bg-white md:px-10 px-3 md:py-12 py-4 text-black flex flex-row items-end gap-3 md:justify-around lg:justify-normal'>
                        <UiDesignIcon className='mb-2 md:w-fit w-24' />
                        <div className='flex flex-col'>
                            <p className='font-semibold lg:text-2xl md:text-xl text-md mb-2'>Mobile Apps</p>
                            <p className='lg:text-base md:text-sm text-xs w-fit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ArrowRight className='md:w-16 w-10' />
                    </Card>
                    <Card className='bg-black md:px-10 px-3 md:py-12 py-4 text-white flex flex-row items-end gap-3 lg:mx-5 md:justify-around lg:justify-normal'>
                        <WebDesignIcon className='mb-2 md:w-fit w-24' />
                        <div className='flex flex-col'>
                            <p className='font-semibold lg:text-2xl md:text-xl text-md mb-2'>Mobile Apps</p>
                            <p className='lg:text-base md:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ArrowRight className='md:w-16 w-10' />
                    </Card>
                </div>
                <Card className='bg-white md:p-10 p-5  text-black flex flex-col items-center gap-3 lg:w-3/4 text-center'>
                    <div className='flex flex-row gap-3'>
                        <Image src='/images/iphoneIcon.png' alt='Phone' width={70} height={70} />
                        <Image src='/images/iphoneIcon.png' alt='Phone' width={70} height={70} />
                        <Image src='/images/iphoneIcon.png' alt='Phone' width={70} height={70} />
                    </div>
                    <p className='font-semibold lg:text-2xl md:text-xl text-md'>Mobile Apps</p>
                    <p className='mb-2 lg:text-base md:text-sm text-xs'>Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.</p>
                    <Button className='rounded-lg md:w-fit w-full text-white font-semibold lg:text-base md:text-sm text-xs'>
                        Pelajari Selengkapnya
                    </Button>
                </Card>
            </div>
        </motion.section >
    )
}
