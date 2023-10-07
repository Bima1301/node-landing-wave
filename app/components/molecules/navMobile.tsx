"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { links } from '@/libs/data'
import Button from '../atoms/button'
import TimesIcon from '../atoms/icons/timesIcon'

type NavMobileProps = {
    navMobileOpen: boolean;
    setNavMobileOpen: (value: boolean) => void;
    isMobile: boolean;
}

export default function NavMobile(
    {
        navMobileOpen,
        setNavMobileOpen,
        isMobile
    }: NavMobileProps
) {

    const menuMotion = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.4,
                duration: 0.3,
                ease: [0.12, 0, 0.39, 1],
            },
        },
    }

    const menuItemsMotion = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.3,
                ease: [0.37, 0, 0.63, 1],
            }
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.5,
            }
        }
    }

    const containerMotion = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            }
        },
        open: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.09,
                staggerDirection: 1,
            }
        }
    }
    return (
        <motion.div
            variants={menuMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed origin-top top-0 left-0 right-0 bottom-0 bg-[#00AD98] z-50 w-full h-screen text-white p-10">
            <div className='flex h-full flex-col'>
                <div className='flex justify-between items-center'>
                    <Link href="/">
                        <Image
                            src="/images/logoWhite.png"
                            alt="logo"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <button onClick={() => setNavMobileOpen(!navMobileOpen)}>
                        <TimesIcon />
                    </button>
                </div>
                <motion.ul
                    variants={containerMotion}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center items-center  gap-4">
                    {links.map((link, index) => (
                        <div className='overflow-hidden py4' key={index}>
                            <motion.li
                                variants={menuItemsMotion}
                                key={index}>
                                <Link href={link.hash} className=" text-white hover:text-gray-300 transition-colors duration-300 text-lg">
                                    {link.name}
                                </Link>
                            </motion.li>
                        </div>
                    ))}
                    <div className='overflow-hidden'>
                        <motion.li variants={menuItemsMotion}>
                            <Button onClick={() => alert("Make An App Now")} className='bg-black text-white text-lg'>
                                Make an App
                            </Button>
                        </motion.li>
                    </div>
                </motion.ul>
            </div>
        </motion.div>
    )
}
