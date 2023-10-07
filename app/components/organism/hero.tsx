import React from 'react'
import Button from '../atoms/button'
import CodeIcon from '../atoms/icons/codeIcon'

export default function Hero() {
    return (
        <section className='min-h-full pt-24 relative' >
            <div className='w-full h-16 absolute top-0 z-20 bg-gradient-to-t from-transparent to-black/40' />

            <div className='absolute top-0 left-0 w-full h-full bg-[url(/images/hero.jpeg)] bg-cover brightness-50' />
            <div className='relative z-10 lg:pt-52 md:pt-20'>
                <div className='md:px-[4rem] px-6 w-full md:py-0 py-16'>
                    <CodeIcon className='md:-ms-5 -ms-3 md:w-fit w-6' />
                    <div className='lg:text-5xl md:text-3xl text-2xl font-semibold md:space-y-4 space-y-2 md:mb-5 mb-8'>
                        <p>Make Your Own </p>
                        <p>Website and Mobile Application</p>
                        <p>With Nodewave</p>
                    </div>
                    <Button className='w-fit md:mb-8 mb-10 text-xs'>
                        Get Started Now
                    </Button>
                    <p className='lg:text-2xl md:text-base text-xs max-w-5xl'>Create Mobile Applications and Websites for Companies or Your Business Have a transparent pricing, easy and straightforward development process</p>
                </div>
                <div className='w-full h-16 bg-gradient-to-b from-transparent to-black md:mt-20 mt-12' />
            </div>
        </section>
    )
}
