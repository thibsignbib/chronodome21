'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { FaPlus, FaEuroSign, FaInstagram, FaBars } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import FlipdownTimer from './FlipdownTimer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.desktopMenu}>
          <a href="https://doodle.com/sign-up-sheet/participate/2e77d6a5-d2b8-49dc-94ab-eea3224209fd/select" target="_blank" rel="noopener noreferrer">
            <FaPlus /> S'inscrire
          </a>
          <a href="https://pots.lydia.me/collect/pots?id=71624-chronodome-2-1" target="_blank" rel="noopener noreferrer">
            <FaEuroSign /> Faire un don
          </a>
          <a href="https://www.instagram.com/semelle_o_monde/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="https://doodle.com/sign-up-sheet/participate/2e77d6a5-d2b8-49dc-94ab-eea3224209fd/select" target="_blank" rel="noopener noreferrer">
            <FaPlus /> S'inscrire
          </a>
          <a href="https://pots.lydia.me/collect/pots?id=71624-chronodome-2-1" target="_blank" rel="noopener noreferrer">
            <FaEuroSign /> Faire un don
          </a>
          <a href="https://www.instagram.com/semelle_o_monde/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
      )}

    
        <section className={styles.hero}>
          <div className={styles.slideshow}>
            <div className={`${styles.slide} ${styles.slide1}`}></div>
            <div className={`${styles.slide} ${styles.slide2}`}></div>
            <div className={`${styles.slide} ${styles.slide3}`}></div>
            <div className={`${styles.slide} ${styles.slide4}`}></div>
            <div className={`${styles.slide} ${styles.slide5}`}></div>
          </div>

          <div className={styles.overlay}>
            <h1 className={styles.title}>Chronodôme 2.1</h1>
          </div>

          <a href="#content" className={styles.scrollHint}>
            <h3>Plus d'informations</h3>
            <BsChevronDown className={styles.arrow} />
          </a>
        </section>

        <section id="content" className={styles.contentSection}>
          <FlipdownTimer />
          
          <main>
            <section id="content" className={styles.contentSection}>
            <FlipdownTimer />
            <div className={styles.contentRow}>
              <div className={styles.textBlock}>
                <h1>La Chronodôme 2.1, c'est quoi ?</h1>
                <br />
                <p>
                  La Chronodôme 2.1 est la seconde édition d'un événement sportif caritatif au profit de l'association Trisomie 21 Puy de Dôme. Un parcours de 9,8 km est tracé pour l'occasion.<br /><br />
                  L'événement dure symboliquement 21h mais chacun participe comme il ou elle le souhaite : vous pouvez venir faire 1 tour... comme 5O. En marchant ou en courant... Seule votre bonne humeur est indispensable !
                </p>
              </div>
              <div className={styles.imageBlock}>
                <img src="/images/logo_trisomie_21_pdd.png" alt="logo association trisomie 21 puy de dôme" />
              </div>
            </div>

            <div className={styles.contentRow}>
              <div className={styles.textBlock}>
                  <h1>Prix et inscriptions</h1>
                  <br />
                  <p>
                    Vous pouvez récupérer votre dossard en vous présentant simplement au départ, le jour de l'événement. L'inscription étant gratuite, apporter une petite contribution sucrée ou salée pour le ravitaillement (gateau, chips, bonbons, fruits, etc.) nous aiderait beaucoup ! Nous vous proposons également de contribuer via un don libre à l'organisation, dont l'intégralité des bénéfices reviendra à l'association Trisomie 21 Puy de Dôme.
                  </p>
              </div>
              <div className={styles.textBlock}>
                <a href="https://pots.lydia.me/collect/pots?id=71624-chronodome-2-1&fbclid=IwZXh0bgNhZW0CMTAAAR0s0ZyZlPr_sNZA7milhHObpNjSjEUxTZ2KIT3oL" className={styles.buttonContent} target="_blank" rel="noopener noreferrer">
                  <FaEuroSign /> Faire un don
                </a>
              </div>
            </div>

            <div className={styles.contentRowDoubleText}>
              <div className={styles.textBlock}>
                  <h1>La date</h1>
                  <br />
                  <p>
                    La Chronodôme 2.1 aura lieu le samedi 7 juin à partir de 19h et se terminera donc le dimanche 8 juin à 16h.
                  </p>
              </div>
            </div>

            <div className={styles.contentRow}>
            <div className={styles.textBlock}>
                <h1>Emplacement du parking et du départ</h1>
                <p>
                Quand vous venez de Clermont depuis le col de ceyssat, continuez en direction de Ceyssat et jusqu'à une entrée de chemin signalée par des ballons et rubalises. Tournez sur votre droite, puis suivez la rubalise jusqu'au monument "des fusillés ardents".
              </p>
              </div>
              <div className={styles.textBlock}>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.6829172977566!2d2.9333062!3d45.774131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ2JzI2LjkiTiAywrA1NicxMS41IkU!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className={styles.contentRow}>
              <div className={styles.textBlock}>
                  <h1>Restauration</h1>
                  <br />
                  <p>
                    Un stand de ravitaillement sera présent au départ de la boucle, avec plein de délices sucrés et salés qui n'attendent que vous ! Une paella sera également proposée de 12h à 17h le dimanche 8 juin, au prix de 10€ la (grosse) barquette.
                  </p>
              </div>
              <div className={styles.textBlock}>
              <a href="https://doodle.com/sign-up-sheet/participate/2e77d6a5-d2b8-49dc-94ab-eea3224209fd/select" className={styles.buttonContent} target="_blank" rel="noopener noreferrer">
                  <FaPlus /> Ok tu m'as convaincu, je m'inscris !!
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>&copy; 2025 Chronodôme 2.1. Tous droits réservés.</p>
          </div>
        </footer> 
    </div>
  );
}

          