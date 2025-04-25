"use client";

import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "../page.module.css";
import galleryStyles from "./gallery.module.css";

const images = [
  "/images/gallery/photo1.jpg",
  "/images/gallery/photo2.jpg",
  "/images/gallery/photo3.jpg",
  "/images/gallery/photo4.jpg",
  "/images/gallery/photo5.jpg",
  "/images/gallery/photo6.jpg",
  "/images/gallery/photo7.jpg",
  "/images/gallery/photo8.jpg",
  "/images/gallery/photo9.jpg"
];

export default function GalleryPage() {
  return (
    <div className={styles.shortPage}>
      <Navbar darkBackground />
      <main className={galleryStyles.contentSection}>
        <h1 className={galleryStyles.galleryTitle}>Votre impact 💖</h1>
        <p className={galleryStyles.galleryIntro}>
          L'édition 2025 de la Chronodôme 21 avait permis de faire un don de 3326€ à l'association Trisomie 21 Puy-de-dôme. Les bénéficiaires de l'association avaient, grâce à ce don, pu réaliser différentes activités sportives et ludiques comme de la plongée !
        </p>
        <section className={galleryStyles.gallerySection}>
          <h1 className={galleryStyles.galleryTitle}>Galerie Photo</h1>
          <div className={galleryStyles.galleryGrid}>
            {images.map((src, i) => (
              <img key={i} src={src} alt={`photo-${i}`} className={galleryStyles.galleryImage} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
