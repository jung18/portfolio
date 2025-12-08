import { useProfile } from "@/contexts/ProfileContext";
import svgPaths from "../../imports/svg-n1ck8w4cmn";
import styles from "./Footer.module.css";

function SocialIcons() {
  const { profile } = useProfile();
  
  return (
    <div className={styles.socialLinks}>
      <svg className={styles.socialIcon} fill="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_linkedin_footer)">
          <path d={svgPaths.p5810790} fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_linkedin_footer">
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

export default function Footer() {
  const { profile } = useProfile();
  
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          {profile?.contact.tell && (
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <p className={styles.contactText}>{profile.contact.tell}</p>
            </div>
          )}
          {profile?.contact.email && (
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <p className={styles.contactText}>{profile.contact.email}</p>
            </div>
          )}
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}
