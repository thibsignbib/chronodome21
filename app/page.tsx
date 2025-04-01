import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Hello World</h1>
        <div className={styles.socials}>
          <a href="https://twitter.com" className={styles.button}>Twitter</a>
          <a href="https://linkedin.com" className={styles.button}>LinkedIn</a>
          <a href="https://github.com" className={styles.button}>GitHub</a>
        </div>
      </div>
    </div>
  );
}
