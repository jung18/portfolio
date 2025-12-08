import { CareerItem } from './CareerItem';
import styles from './Certificate.module.css';
import { useProfile } from "@/contexts/ProfileContext";

export default function Certificate() {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Certificate</h2>
        <p className={styles.message}>로딩 중...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Certificate</h2>
        <p className={styles.error}>오류: {error || '데이터를 불러올 수 없습니다.'}</p>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Certificate</h2>
      <div className={styles.timeline}>
        {profile.certificate.map((cert, index) => (
          <CareerItem
            key={index}
            data={{
              title: cert.title,
              date: cert.date,
              issue: cert.issue
            }}
            isLast={index === profile.certificate.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
