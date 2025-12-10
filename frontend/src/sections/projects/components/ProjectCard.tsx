import { useNavigate } from "react-router-dom";
import svgPaths from "../../../imports/svg-n1ck8w4cmn";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  techStack: string;
  image: string;
  codeLink: string;
}

function GithubIcon() {
  return (
    <svg className={styles.linkIcon} fill="none" viewBox="0 0 20 20">
      <g clipPath="url(#clip0_github)">
        <path clipRule="evenodd" d={svgPaths.p39c9c980} fill="black" fillRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0_github">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ProjectCard({ id, title, description, techStack, image, codeLink }: ProjectCardProps) {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    // GitHub 링크 클릭 시에는 상세 페이지로 이동하지 않음
    if ((e.target as HTMLElement).closest(`.${styles.link}`)) {
      return;
    }
    navigate(`/project/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className={styles.imageWrapper}>
        <img 
          src={image} 
          alt={title} 
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.techStack}>
          <span className={styles.techLabel}>Languages: </span>
          {techStack}
        </p>
        <div className={styles.bottomSection}>
          <a 
            href={codeLink} 
            className={styles.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
