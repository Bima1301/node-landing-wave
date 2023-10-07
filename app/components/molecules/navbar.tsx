'use client'

import useResponsive from '@/app/hooks/useResponsive';
import { links } from '@/libs/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../atoms/button';
import NavMobile from './navMobile';


const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [navMobileOpen, setNavMobileOpen] = useState(false);
    const isMobile = useResponsive();



    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`md:px-[4rem] px-4 w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between  py-5 transition-colors duration-300  ${scroll ? 'bg-black' : 'bg-transparent'
                }`}
        >
            <div>
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={isMobile ? 100 : 150}
                        height={isMobile ? 100 : 150}
                    />
                </Link>
            </div>
            <div>
                {isMobile ? (
                    <div className='flex justify-center items-center'>
                        <button
                            className="text-white hover:text-gray-300 transition-colors duration-300"
                            onClick={() => setNavMobileOpen(!navMobileOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </button>
                        <AnimatePresence>
                            {navMobileOpen && (
                                <NavMobile
                                    isMobile={isMobile}
                                    setNavMobileOpen={setNavMobileOpen}
                                    navMobileOpen={navMobileOpen}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                ) : (

                    <ul className="flex items-center space-x-6">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.hash}>
                                    <p className="text-white hover:text-gray-300 transition-colors duration-300 md:text-[20px] text-[14px]">
                                        {link.name}
                                    </p>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button onClick={() => alert("Make An App Now")}>
                                Make an App
                            </Button>
                        </li>
                    </ul>
                )}
            </div>
        </nav >
    );
};

export default Navbar;
