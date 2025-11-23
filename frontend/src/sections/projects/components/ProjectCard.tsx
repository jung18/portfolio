import svgPaths from "../../../imports/svg-n1ck8w4cmn";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
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

export default function ProjectCard({ title, description, techStack, image, codeLink }: ProjectCardProps) {
  return (
    <div className={styles.card}>
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
          <a href={codeLink} className={styles.link} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
