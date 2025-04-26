'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Footer() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
        <>
            <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; 2025 Chronodôme 2.1. Tous droits réservés.</p>
            </div>
            </footer> 
        </>
    );
}
