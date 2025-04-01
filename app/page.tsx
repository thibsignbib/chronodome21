import styles from './page.module.css';
import { FaPlus, FaEuroSign, FaInstagram } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';

export default function Home() {
  return (
  <main>
    <section classname={styles.hero}>
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
      <div className={styles.scrollHint}>
          <BsChevronDown className={styles.arrow} />
      </div>
    </section>
    
    <section className={styles.content}>
      <h2>À propos</h2>
      <p>Voici plus d'informations après avoir scrollé 👇</p>
    </section>
  </main>
  );
}
