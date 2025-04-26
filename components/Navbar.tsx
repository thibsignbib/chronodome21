'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import { FaInstagram, FaBars  } from 'react-icons/fa';
import { LuLightbulb, LuCamera, LuEuro, LuPlus, LuHeartHandshake   } from "react-icons/lu";
import { SiGithubsponsors } from "react-icons/si";
import { usePathname } from 'next/navigation';

interface NavbarProps {
    darkBackground?: boolean;
  }

export default function Navbar({ darkBackground = false }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/' || pathname === '';
  
    const getLinkHref = (hash: string) => {
        return isHome ? `#${hash}` : `/#${hash}`;
      };
    
    const navbarClass = `${styles.navbar} ${darkBackground ? styles.darkNavbar : ''}`;
  
    return (
      <>
        <nav className={navbarClass}>
            <div className={styles.desktopMenu}>
                <a href={getLinkHref('concept')}>
                    <LuLightbulb /> Concept
                </a>
                <a href={getLinkHref('inscription')}>
                    <LuPlus /> Inscription
                </a>
                <a href={getLinkHref('don')}>
                    <LuEuro /> Faire un don
                </a>
                <a href="https://www.instagram.com/semelle_o_monde/">
                    <FaInstagram /> News
                </a>
                <a href={getLinkHref('partenaires')}>
                    <SiGithubsponsors /> Partenaires
                </a>
                <a href="/galerie">
                    <LuHeartHandshake /> Impact
                </a>
                <a href="/credits">
                    <LuCamera /> Crédits
                </a>
            </div>

            <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars />
            </button>
        </nav>

        {menuOpen && (
            <div className={styles.mobileMenu}>
                <a href={getLinkHref('concept')}>
                    <LuLightbulb /> Concept
                </a>
                <a href={getLinkHref('inscription')}>
                    <LuPlus /> Inscription
                </a>
                <a href={getLinkHref('don')}>
                    <LuEuro /> Faire un don
                </a>
                <a href="https://www.instagram.com/semelle_o_monde/">
                    <FaInstagram /> News
                </a>
                <a href={getLinkHref('partenaires')}>
                    <SiGithubsponsors /> Partenaires
                </a>
                <a href="/galerie">
                    <LuHeartHandshake /> Impact
                </a>
                <a href="/credits">
                    <LuCamera /> Crédits
                </a>
            </div>
        )}
        </>
    );
}
