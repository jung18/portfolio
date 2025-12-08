import { CareerItem } from './CareerItem';
import styles from './Education.module.css';
import { useProfile } from "@/contexts/ProfileContext";

export default function Education() {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <p className={styles.message}>로딩 중...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <p className={styles.error}>오류: {error || '데이터를 불러올 수 없습니다.'}</p>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <div className={styles.timeline}>
        {profile.education.map((edu, index) => (
          <CareerItem
            key={index}
            data={{
              title: edu.title,
              date: `${edu.period.start} ~ ${edu.period.end}`,
              issue: edu.organization
            }}
            isLast={index === profile.education.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
