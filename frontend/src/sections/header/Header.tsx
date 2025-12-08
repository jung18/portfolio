import { useProfile } from "@/contexts/ProfileContext";
import svgPaths from "../../imports/svg-n1ck8w4cmn";
import styles from "./Header.module.css";

function SocialIcons() {
  const { profile } = useProfile();
  
  return (
    <div className={styles.socialLinks}>
      <svg className={styles.socialIcon} fill="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_linkedin)">
          <path d={svgPaths.p5810790} fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_linkedin">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
      <svg className={styles.socialIcon} fill="none" viewBox="0 0 30 30">
        <path d={svgPaths.p2db6fff0} fill="currentColor" />
      </svg>
      {profile?.contact.github && (
        <a 
          href={profile.contact.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <svg className={styles.socialIcon} fill="none" viewBox="0 0 30 30">
            <path clipRule="evenodd" d={svgPaths.pf603080} fill="currentColor" fillRule="evenodd" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#tech-stack" className={styles.navLink}>Tech Stack</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#career" className={styles.navLink}>Career</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
        <SocialIcons />
      </div>
    </header>
  );
}
