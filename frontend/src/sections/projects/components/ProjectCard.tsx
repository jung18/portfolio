import svgPaths from "../../../imports/svg-n1ck8w4cmn";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  image: string;
  liveLink: string;
  codeLink: string;
}

function LinkIcon() {
  return (
    <svg className={styles.linkIcon} fill="none" viewBox="0 0 20 20">
      <g>
        <path d={svgPaths.p68e6740} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p184f9260} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
    </svg>
  );
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

export default function ProjectCard({ title, description, techStack, image, liveLink, codeLink }: ProjectCardProps) {
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
        <p className={styles.techLabel}>Tech stack: <span className={styles.techStack}>{techStack}</span></p>
        <div className={styles.links}>
          <a href={liveLink} className={styles.link} target="_blank" rel="noopener noreferrer">
            <LinkIcon />
            Live Preview
          </a>
          <a href={codeLink} className={styles.link} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
