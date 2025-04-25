"use client";

import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "../page.module.css";

const images = [
  "/images/gallery/photo1.jpg",
  "/images/gallery/photo2.jpg",
  "/images/gallery/photo3.jpg",
  "/images/gallery/photo4.jpg",
  "/images/gallery/photo5.jpg",
  "/images/gallery/photo6.jpg",
  "/images/gallery/photo7.jpg",
  "/images/gallery/photo8.jpg",
  "/images/gallery/photo9.jpg",
  // Ajoute autant d'images que tu veux
];

export default function GalleryPage() {
  return (
    <div className={styles.shortPage}>
      <Navbar />
      <main className={styles.gallerySection}>
        <h1 className={styles.galleryTitle}>Galerie photos</h1>
        <p className={styles.galleryIntro}>
          Quelques souvenirs de l'édition précédente et d'autres instants partagés autour de la Chronodôme.
        </p>
        <div className={styles.galleryGrid}>
          {images.map((src, index) => (
            <div className={styles.galleryItem} key={index}>
              <img src={src} alt={`Photo ${index + 1}`} className={styles.galleryImage} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
