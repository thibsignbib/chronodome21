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
        <h1 className={styles.title}>Chronodôme 2.1</h1>
        <div className={styles.socials}>
          <a href="https://doodle.com/sign-up-sheet/participate/2e77d6a5-d2b8-49dc-94ab-eea3224209fd/select" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaPlus /> S'inscrire à l'événement
          </a>
          <a href="https://pots.lydia.me/collect/pots?id=71624-chronodome-2-1&fbclid=IwZXh0bgNhZW0CMTAAAR0s0ZyZlPr_sNZA7milhHObpNjSjEUxTZ2KIT3oL" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaEuroSign /> Faire un don
          </a>
          <a href="https://www.instagram.com/semelle_o_monde/" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Les dernières news
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
          <h1>La Chronodôme 2.1, c'est quoi ?</h1>
          <br />
          <p>
            La Chronodôme 2.1 est la seconde édition d'un événement sportif caritatif au profit de l'association Trisomie 21 Puy de Dôme. Un parcours de 9,8 km est tracé pour l'occasion.<br /><br />
            L'événement dure symboliquement 21h mais chacun participe comme il ou elle le souhaite : vous pouvez venir faire 1 tour... ou 5O. En marchant, en courant, ou en VTT... Seule votre bonne humeur est indispensable !
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
              Vous pouvez récupérer votre dossard <b>gratuitement</b> en vous présentant simplement au départ, le jour de l'événement. Nous vous proposons de contribuer via un don libre à l'organisation, dont l'intégralité des bénéfices reviendra à l'association Trisomie 21 Puy de Dôme.
            </p>
        </div>
        <div className={styles.textBlock}>
          <a href="https://pots.lydia.me/collect/pots?id=71624-chronodome-2-1&fbclid=IwZXh0bgNhZW0CMTAAAR0s0ZyZlPr_sNZA7milhHObpNjSjEUxTZ2KIT3oL" className={styles.button} target="_blank" rel="noopener noreferrer">
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
        <div className={styles.textBlock}>
            <h1>Emplacement du parking et du départ</h1>
            <p>
            Quand vous venez de Clermont depuis le col de ceyssat, continuez en direction de Ceyssat et jusqu'à une entrée de chemin signalée par des ballons et rubalises. Tournez sur votre droite, puis suivez la rubalise jusqu'au monument "des fusillés ardents".
            <br /><br />
            <a href="https://www.google.com/maps/place/45%C2%B046'26.9%22N+2%C2%B056'11.5%22E/@45.7702757,2.9333126,14.72z/data=!4m4!3m3!8m2!3d45.774131!4d2.93653?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D">Lien Google Maps</a>
            </p>
        </div>
      </div>

      <div className={styles.contentRow}>
        <div className={styles.textBlock}>
            <h1>Restauration</h1>
            <br />
            <p>
              Un stand de ravitaillement sera présent au départ de la boucle, avec plein de délices sucrés et salés. Une paella sera également proposée de 12h à 17h le dimanche 8 juin, au prix de 10€ la (grosse) barquette.
            </p>
        </div>
        <div className={styles.textBlock}>
        <a href="https://doodle.com/sign-up-sheet/participate/2e77d6a5-d2b8-49dc-94ab-eea3224209fd/select" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaPlus /> L'argument nourriture a fini de me convaincre, je m'inscris !!
          </a>
        </div>
      </div>
    </section>
  </main>
  );
}
