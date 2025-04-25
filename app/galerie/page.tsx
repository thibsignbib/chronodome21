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
  "/images/gallery/photo9.jpg",
  // Ajoute autant d'images que tu veux
];

export default function GalleryPage() {
  return (
    <div className={styles.shortPage}>
      <Navbar />
      <main className={galleryStyles.gallerySection}>
        <h1 className={galleryStyles.galleryTitle}>Galerie photos</h1>
        <p className={galleryStyles.galleryIntro}>
          Quelques souvenirs de l'édition précédente et d'autres instants partagés autour de la Chronodôme.
        </p>
        <div className={galleryStyles.galleryGrid}>
          {images.map((src, index) => (
            <div className={galleryStyles.galleryItem} key={index}>
              <img src={src} alt={`Photo ${index + 1}`} className={galleryStyles.galleryImage} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
