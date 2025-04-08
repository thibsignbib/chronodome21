'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { FaPlus, FaEuroSign, FaInstagram, FaBars  } from 'react-icons/fa';
import { LuLightbulb, LuCamera, LuEuro, LuPlus   } from "react-icons/lu";
import { SiGithubsponsors } from "react-icons/si";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <>
        <nav className={styles.navbar}>
            <div className={styles.desktopMenu}>
                <a href="#concept">
                    <LuLightbulb /> Concept
                </a>
                <a href="#inscription">
                    <LuPlus /> Inscription
                </a>
                <a href="#don">
                    <LuEuro /> Faire un don
                </a>
                <a href="https://www.instagram.com/semelle_o_monde/">
                    <FaInstagram /> News
                </a>
                <a href="#partenaires">
                    <SiGithubsponsors /> Partenaires
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
                <a href="#concept">
                    <LuLightbulb /> Concept
                </a>
                <a href="#inscription">
                    <LuPlus /> Inscription
                </a>
                <a href="#don">
                    <LuEuro /> Faire un don
                </a>
                <a href="https://www.instagram.com/semelle_o_monde/">
                    <FaInstagram /> News
                </a>
                <a href="#partenaires">
                    <SiGithubsponsors /> Partenaires
                </a>
                <a href="/credits">
                    <LuCamera /> Crédits
                </a>
            </div>
        )}
        </>
    );
}
