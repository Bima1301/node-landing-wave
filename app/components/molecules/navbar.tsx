'use client'

import useResponsive from '@/app/hooks/useResponsive';
import { links } from '@/libs/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../atoms/button';
import NavMobile from './navMobile';
import MenuIcon from '../atoms/icons/menuIcon';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [navMobileOpen, setNavMobileOpen] = useState(false);
    const isMobile = useResponsive();



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
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
        <motion.nav
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:px-[4rem] px-4 w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between  py-5 transition-colors duration-300  ${scroll ? 'bg-black' : 'bg-transparent'
                }`}
        >
            <div>
                <Link href="/">
                    <Image
                        src="/images/whiteLogo.png"
                        alt="logo"
                        width={isMobile ? 120 : 150}
                        height={isMobile ? 120 : 150}
                    />
                </Link>
            </div>
            <div>
                <div className='md:hidden flex justify-center items-center'>
                    <button
                        className="text-white hover:text-gray-300 transition-colors duration-300"
                        onClick={() => setNavMobileOpen(!navMobileOpen)}
                    >
                        <MenuIcon />
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
                <ul className="md:flex hidden items-center space-x-6">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.hash}>
                                <p className="text-white hover:text-[#00AD98] transition-colors duration-300 lg:text-[20px] md:text-[16px] text-[14px]">
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
            </div>
        </motion.nav >
    );
};

export default Navbar;
