import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Chronodome21</h1>
        <div className={styles.socials}>
          <a href="https://twitter.com" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
          <a href="https://linkedin.com" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com" className={styles.button} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
