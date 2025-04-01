import styles from './page.module.css';
import { FaPlus, FaEuroSign, FaInstagram } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';

export default function Home() {
  return (
  <main>
    <section className={styles.hero}>
      <div className={styles.slideshow}>
        <div className={styles.slide + ' ' + styles.slide1}></div>
        <div className={styles.slide + ' ' + styles.slide2}></div>
        <div className={styles.slide + ' ' + styles.slide3}></div>
        <div className={styles.slide + ' ' + styles.slide4}></div>
        <div className={styles.slide + ' ' + styles.slide5}></div>
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Chronodome 2.1</h1>
        <div className={styles.socials}>
          <a href="https://doodle.com/sign-up-sheet/participate/2e77d6a5-d2b8-49dc-94ab-eea3224209fd/select" className={styles.button} target="_blank" rel="noopener noreferrer">
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
      <a href="#contenu" className={styles.scrollHint}>
        <BsChevronDown className={styles.arrow} />
      </a>

    </section>
    
    <section id="contenu" className={styles.content}>
      <h2>À propos</h2>
      <p>Voici plus d'informations après avoir scrollé 👇</p>
    </section>
  </main>
  );
}
