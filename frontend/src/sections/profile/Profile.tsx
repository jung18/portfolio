import { useState, useEffect } from "react";
import { api, STATIC_BASE_URL } from "@/utils/apiUtil";
import styles from "./Profile.module.css";

interface ProfileData {
  name: string;
  contact: {
    tell: string;
    email: string;
    github: string;
  };
  profileImage: string;
  introduction: {
    title: string;
    content: string;
  };
  certificate: Array<{
    title: string;
    date: string;
    issue: string;
  }>;
  education: {
    title: string;
    period: {
      start: string;
      end: string;
    };
    grade: string;
  };
  career: Array<{
    company: string;
    role: string;
    period: {
      start: string;
      end: string;
    };
    sections: Array<{
      title: string;
      details: string[];
    }>;
  }>;
}

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await api.getProfile();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "프로필 데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

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
          <p className={styles.greeting}>Hi 👋,</p>
          <p className={styles.intro}>My name is</p>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.tagline}>{profile.introduction.title}</p>
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
