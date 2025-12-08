import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import styles from './Career.module.css';

export default function Career() {
  return (
    <section id="career" className={styles.career}>
      <div className={styles.container}>
        <h2 className={styles.title}>Career</h2>
        <p className={styles.subtitle}>The path I've taken as a developer</p>
        <WorkExperience />
        <Education />
        <Certificate />
      </div>
    </section>
  );
}