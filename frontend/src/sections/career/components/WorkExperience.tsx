import { CareerItem } from './CareerItem';
import styles from './WorkExperience.module.css';
import { useProfile } from "@/contexts/ProfileContext";

export default function WorkExperience() {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <p className={styles.message}>로딩 중...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <p className={styles.error}>오류: {error || '데이터를 불러올 수 없습니다.'}</p>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>
      <div className={styles.timeline}>
        {profile.career.map((career, index) => (
          <CareerItem
            key={index}
            data={{
              title: career.role,
              date: `${career.period.start} ~ ${career.period.end}`,
              issue: career.company
            }}
            isLast={index === profile.career.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
