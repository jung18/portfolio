import { useState, useEffect } from "react";
import { api, STATIC_BASE_URL } from "@/utils/apiUtil";
import TechIcon from "./components/TechIcon";
import styles from "./TechStack.module.css";

interface TechStackResponse {
  icons: string[];
}

export default function TechStack() {
  const [icons, setIcons] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        setLoading(true);
        const data: TechStackResponse = await api.getTechStacks();
        setIcons(data.icons);
      } catch (err) {
        setError(err instanceof Error ? err.message : "기술 스택 데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechStack();
  }, []);

  if (loading) {
    return (
      <section id="tech-stack" className={styles.techStack}>
        <div className={styles.container}>
          <p>로딩 중...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="tech-stack" className={styles.techStack}>
        <div className={styles.container}>
          <p>오류: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="tech-stack" className={styles.techStack}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tech Stack</h2>
        <p className={styles.subtitle}>Technologies I've been working with recently</p>
        <div className={styles.iconGrid}>
          {icons.map((iconPath, index) => (
            <TechIcon 
              key={index}
              src={`${STATIC_BASE_URL}${iconPath}`}
              alt={`Tech icon ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
