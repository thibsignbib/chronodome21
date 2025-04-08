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
                <a href="#concept" target="_blank" rel="noopener noreferrer">
                <LuLightbulb /> Concept
                </a>
                <a href="#inscription" target="_blank" rel="noopener noreferrer">
                    <LuPlus /> Inscription
                </a>
                <a href="#don" target="_blank" rel="noopener noreferrer">
                    <LuEuro /> Faire un don
                </a>
                <a href="https://www.instagram.com/semelle_o_monde/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> News
                </a>
                <a href="#partenaires" target="_blank" rel="noopener noreferrer">
                    <SiGithubsponsors /> Partenaires
                </a>
                <a href="https://www.instagram.com/semelle_o_monde/" target="_blank" rel="noopener noreferrer">
                    <LuCamera /> Crédits
                </a>
            </div>

            <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars />
            </button>
        </nav>

        {menuOpen && (
            <div className={styles.mobileMenu}>
            <a href="https://doodle.com/sign-up-sheet/participate/2e77d6a5-d2b8-49dc-94ab-eea3224209fd/select" target="_blank" rel="noopener noreferrer">
                <FaPlus /> Concept
            </a>
            <a href="https://pots.lydia.me/collect/pots?id=71624-chronodome-2-1" target="_blank" rel="noopener noreferrer">
                <FaEuroSign /> Faire un don
            </a>
            <a href="https://www.instagram.com/semelle_o_monde/" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
            </a>
            </div>
        )}
        </>
    );
}
