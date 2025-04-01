import styles from './page.module.css';
import { FaPlus, FaEuroSign, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Chronodome 2.1</h1>
        <div className={styles.socials}>
          <a href="https://twitter.com" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaPlus /> S'inscrire à l'événement
          </a>
          <a href="https://pots.lydia.me/collect/pots?id=71624-chronodome-2-1&fbclid=IwZXh0bgNhZW0CMTAAAR0s0ZyZlPr_sNZA7milhHObpNjSjEUxTZ2KIT3oL" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaEuroSign /> Faire un don
          </a>
          <a href="https://www.instagram.com/semelle_o_monde/" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Suivez Arthur sur Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
