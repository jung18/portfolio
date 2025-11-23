import { useProfile } from "@/contexts/ProfileContext";
import { STATIC_BASE_URL } from "@/utils/apiUtil";
import styles from "./Profile.module.css";

export default function Profile() {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <section id="home" className={styles.profile}>
        <div className={styles.container}>
          <p>로딩 중...</p>
        </div>
      </section>
    );
  }

  if (error || !profile) {
    return (
      <section id="home" className={styles.profile}>
        <div className={styles.container}>
          <p>오류: {error || "데이터를 불러올 수 없습니다."}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.tagline}>{profile.introduction.title}</p>
          <p className={styles.name}>{`${profile.name} 입니다.`}</p>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            alt={profile.name} 
            className={styles.profileImage}
            src={`${STATIC_BASE_URL}${profile.profileImage}`}
          />
          <div aria-hidden="true" className={styles.imageBorder} />
        </div>
      </div>
    </section>
  );
}
