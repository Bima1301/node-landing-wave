import Image from 'next/image'
import React from 'react'
import Button from '../atoms/button'

export default function Hero() {
    return (
        <section className='min-h-full pt-24 relative' >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/hero.jpeg)',
                    backgroundSize: 'cover',
                    WebkitFilter: 'brightness(0.5)',
                }}
            />
            <div className='relative z-10 py-60'>
                
                <p>Make Your Own <br /> Website and Mobile Application <br /> With Nodewave</p>
                <Button className='w-fit'>
                    Get Started Now
                </Button>
                <p>Create Mobile Applications and Websites for Companies or Your Business Have a transparent pricing, easy and straightforward development process</p>
            </div>
        </section>
    )
}
