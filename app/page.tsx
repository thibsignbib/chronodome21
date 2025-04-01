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
          <a href="https://linkedin.com" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaEuroSign /> Faire un don
          </a>
          <a href="https://github.com" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Suivez Arthur sur Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
