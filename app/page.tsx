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
    
    <section id="contenu" className={styles.contentSection}>
      <div className={styles.contentRow}>
        <div className={styles.textBlock}>
          <h1>La Chronodome 2.1, c'est quoi ?</h1>
          <p>
            La Chronodome 2.1 est la seconde édition d'un événement sportif caritatif au profit de l'association Trisomie 21 Puy de Dôme. Un parcours de 9,8 km est tracé pour l'occasion.<Br />
            L'événement dure symboliquement 21h mais chacun participe comme il ou elle le souhaite : vous pouvez venir faire 1 tour... ou 5O. En marchant, en courant, ou en VTT... Seule votre bonne humeur est indispensable !
          </p>
        </div>
        <div className={styles.imageBlock}>
          <img src="../public/images/logo_trisomie_21_pdd.png" alt="Mission" />
        </div>
      </div>

      <div className={`${styles.contentRow} ${styles.reverse}`}>
        <div className={styles.imageBlock}>
          <img src="/images/img2.jpg" alt="Notre équipe" />
        </div>
        <div className={styles.textBlock}>
          <h2>Notre équipe</h2>
          <p>
            Morbi luctus, justo a ullamcorper convallis, nisi erat fermentum erat, a tincidunt nulla justo at libero.
          </p>
        </div>
      </div>

      <div className={styles.contentRow}>
        <div className={styles.textBlock}>
          <h2>Notre impact</h2>
          <p>
            Integer vel velit a metus tincidunt tempor. Nulla facilisi. Aliquam erat volutpat.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <img src="/images/img3.jpg" alt="Impact" />
        </div>
      </div>
    </section>
  </main>
  );
}
