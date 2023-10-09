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
        <motion.section className='xl:px-[12rem] lg:px-[4rem] px-10 md:mb-28 mb-20' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <Title title="Our Produk" className="text-center text-white md:mt-10 mb-8" />
            <div className='flex lg:flex-row flex-col-reverse gap-5'>
                <div className='flex flex-col gap-5 justify-between lg:max-w-[40%]'>
                    <Card className='cursor-pointer bg-white md:px-10 px-3 md:py-12 py-4 text-black flex flex-row items-end gap-3 md:justify-around lg:justify-normal'>
                        <UiDesignIcon className='mb-2 lg:w-[130px] md:w-[80px] w-14' />
                        <div className='flex flex-col'>
                            <p className='font-semibold lg:text-2xl md:text-xl text-lg mb-2'>Mobile Apps</p>
                            <p className='lg:text-base md:text-sm text-xs w-fit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ArrowRight className='md:w-16 w-10' />
                    </Card>
                    <Card className='cursor-pointer bg-black md:px-10 px-3 md:py-12 py-4 text-white flex flex-row items-end gap-3  md:justify-around lg:justify-normal md:mx-5 md:hover:mx-0 duration-200'>
                        <WebDesignIcon className='mb-2 lg:w-[130px] md:w-[80px] w-14' />
                        <div className='flex flex-col'>
                            <p className='font-semibold lg:text-2xl md:text-xl text-lg mb-2'>Mobile Apps</p>
                            <p className='lg:text-base md:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ArrowRight className='md:w-16 w-10' />
                    </Card>
                </div>
                <Card className='bg-white md:p-10 p-5  text-black flex flex-col items-center gap-3 lg:min-w-[50%] lg:max-w-[60%] text-center'>
                    <div className='flex flex-row gap-3'>
                        <Image src='/images/iphoneIcon.png' alt='Phone' width={70} height={70} />
                        <Image src='/images/iphoneIcon.png' alt='Phone' width={70} height={70} />
                        <Image src='/images/iphoneIcon.png' alt='Phone' width={70} height={70} />
                    </div>
                    <p className='font-semibold lg:text-2xl md:text-xl text-lg'>Mobile Apps</p>
                    <p className='mb-2 lg:text-base md:text-sm text-xs'>Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.</p>
                    <Button className='rounded-lg md:w-fit w-full text-white font-semibold lg:text-base md:text-sm text-sm'>
                        Pelajari Selengkapnya
                    </Button>
                </Card>
            </div>
        </motion.section >
    )
}
