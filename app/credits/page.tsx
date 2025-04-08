import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from '../page.module.css';

export default function CreditsPage() {
  return (
    <div className={styles.shortPage}>
      <Navbar />
      <main className={styles.contentSection}>
            <div className={styles.contentRow}>
              <div className={styles.textBlock}>
                <br />
                <br />
                <h1>Photos</h1>
                <br />
                <p>
                  Les photos utilisées pour le site ont été réalisées par Adventif Outdoor - Pascal Rudel Photography, lors de la première édition de la Chronodôme. Un grand merci à Pascal pour son soutien et sa confiance renouvellée à l'occasion de cette seconde édition !
                </p>
                <br />
                <p>
                    Le lien ci-contre vous amènera sur le site de Pascal ➡️
                </p>
              </div>
              <div className={styles.imageBlock}>
                <a href="https://pascalrudelphotography.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/adventif_outdoor.jpg" alt="logo adventif outdoor" />
                </a>
              </div>
            </div>
      </main>
      <Footer />
    </div>
  );
}