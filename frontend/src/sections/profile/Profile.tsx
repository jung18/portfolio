import img503536831 from "figma:asset/3e249d4a68ef7bac9b2e7b78919f0e2b2b6995bc.png";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section id="home" className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.greeting}>Hi 👋,</p>
          <p className={styles.intro}>My name is</p>
          <p className={styles.name}>Pavan MG</p>
          <p className={styles.tagline}>I build things for web</p>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            alt="Pavan MG" 
            className={styles.profileImage}
            src={img503536831} 
          />
          <div aria-hidden="true" className={styles.imageBorder} />
        </div>
      </div>
    </section>
  );
}
