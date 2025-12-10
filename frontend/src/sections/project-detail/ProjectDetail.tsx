import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api, STATIC_BASE_URL } from "@/utils/apiUtil";
import FeatureTimeline from "./components/FeatureTimeline";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailResponse {
  id: number;
  name: string;
  mainPage: string;
  description: string;
  period: {
    start: string;
    end: string;
  };
  team: {
    frontend: number;
    backend: number;
  };
  role: string[];
  techStack: string[];
  diagram: string;
  details: {
    thumbnail: string;
    title: string;
    content: string;
  }[];
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectDetail = async () => {
      if (!id) {
        setError("프로젝트 ID가 없습니다.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const projectId = parseInt(id, 10);
        const data = await api.getProjectDetail(projectId);
        setProject(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "프로젝트 정보를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetail();
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <section className={styles.projectDetail}>
        <div className={styles.container}>
          <button onClick={handleBack} className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Projects
          </button>
          <p>로딩 중...</p>
        </div>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className={styles.projectDetail}>
        <div className={styles.container}>
          <button onClick={handleBack} className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Projects
          </button>
          <p>오류: {error || "프로젝트를 찾을 수 없습니다."}</p>
        </div>
      </section>
    );
  }

  // period 포맷팅 함수
  const formatPeriod = (start: string, end: string) => {
    return `${start} ~ ${end}`;
  };

  // team 포맷팅 함수
  const formatTeam = (team: { frontend: number; backend: number }) => {
    return `프론트엔드 ${team.frontend}명, 백엔드 ${team.backend}명`;
  };

  // details를 features 형식으로 변환
  const features = project.details.map((detail) => ({
    title: detail.title,
    description: detail.content,
    period: "", // API 응답에 개별 기간이 없으므로 빈 문자열
    image: detail.thumbnail
  }));

  return (
    <section className={styles.projectDetail}>
      <div className={styles.container}>
        {/* 뒤로가기 버튼 */}
        <button onClick={handleBack} className={styles.backButton}>
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        {/* 프로젝트 프로필 */}
        <div className={styles.profileSection}>
          <div className={styles.profileLayout}>
            <div className={styles.profileImage}>
              <img src={`${STATIC_BASE_URL}${project.mainPage}`} alt={project.name} />
            </div>
            <div className={styles.profileInfo}>
              <h1 className={styles.projectTitle}>{project.name}</h1>
              <p className={styles.projectSubject}>{project.description}</p>
              
              <div className={styles.profileDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>프로젝트 기간</span>
                  <span className={styles.detailValue}>
                    {formatPeriod(project.period.start, project.period.end)}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>팀 구성</span>
                  <span className={styles.detailValue}>
                    {formatTeam(project.team)}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>역할</span>
                  <div className={styles.detailValue}>
                    {project.role.map((roleItem, index) => (
                      <div key={index}>▸ {roleItem}</div>
                    ))}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>기술 스택</span>
                  <div className={styles.techStack}>
                    {project.techStack.map((tech, index) => (
                      <span key={index} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className={styles.divider}></div>

        {/* 아키텍처 다이어그램 */}
        <div className={styles.architectureSection}>
          <h2 className={styles.sectionTitle}>시스템 아키텍처</h2>
          <div className={styles.architectureImage}>
            <img src={`${STATIC_BASE_URL}${project.diagram}`} alt="Architecture Diagram" />
          </div>
        </div>

        {/* 구현 기능 타임라인 */}
        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>주요 구현 기능</h2>
          <FeatureTimeline features={features} />
        </div>
      </div>
    </section>
  );
}