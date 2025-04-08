'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import { FaInstagram, FaBars  } from 'react-icons/fa';
import { LuLightbulb, LuCamera, LuEuro, LuPlus   } from "react-icons/lu";
import { SiGithubsponsors } from "react-icons/si";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname.startsWith('/');
  
    const getLinkHref = (hash: string) => {
        return isHome ? `#${hash}` : `/#${hash}`;
      };
      
  
    return (
      <>
        <nav className={styles.navbar}>
            <div className={styles.desktopMenu}>
                <Link href={getLinkHref('concept')} scroll={false}>
                    <LuLightbulb /> Concept
                </Link>
                <Link href={getLinkHref('inscription')} scroll={false}>
                    <LuPlus /> Inscription
                </Link>
                <Link href={getLinkHref('don')} scroll={false}>
                    <LuEuro /> Faire un don
                </Link>
                <a href="https://www.instagram.com/semelle_o_monde/">
                    <FaInstagram /> News
                </a>
                <Link href={getLinkHref('partenaires')} scroll={false}>
                    <SiGithubsponsors /> Partenaires
                </Link>
                <Link href="/credits">
                    <LuCamera /> Crédits
                </Link>
            </div>

            <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars />
            </button>
        </nav>

        {menuOpen && (
            <div className={styles.mobileMenu}>
                <Link href="/#concept">
                    <LuLightbulb /> Concept
                </Link>
                <Link href="/#inscription">
                    <LuPlus /> Inscription
                </Link>
                <Link href="/#don">
                    <LuEuro /> Faire un don
                </Link>
                <a href="https://www.instagram.com/semelle_o_monde/">
                    <FaInstagram /> News
                </a>
                <Link href="/#partenaires">
                    <SiGithubsponsors /> Partenaires
                </Link>
                <Link href="/credits">
                    <LuCamera /> Crédits
                </Link>
            </div>
        )}
        </>
    );
}
