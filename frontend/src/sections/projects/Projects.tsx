import { useState, useEffect } from "react";
import { api, STATIC_BASE_URL } from "@/utils/apiUtil";
import ProjectCard from "./components/ProjectCard";
import styles from "./Projects.module.css";

interface Repo {
  name: string;
  fullName: string;
  url: string;
  thumbnail: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

interface ReposResponse {
  repos: Repo[];
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const data: ReposResponse = await api.getRepos();
        setRepos(data.repos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "프로젝트 데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <p>로딩 중...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <p>오류: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>Things I've built so far</p>
        <div className={styles.grid}>
          {repos.map((repo) => (
            <ProjectCard
              key={repo.fullName}
              title={repo.name}
              description={repo.description || ""}
              techStack={repo.language || "Unknown"}
              image={`${STATIC_BASE_URL}${repo.thumbnail}`}
              liveLink={repo.url}
              codeLink={repo.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
