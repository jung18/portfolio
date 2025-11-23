import { useProfile } from "@/contexts/ProfileContext";
import svgPaths from "../../imports/svg-n1ck8w4cmn";
import styles from "./Footer.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 59">
        <g clipPath="url(#clip0_footer)">
          <path d={svgPaths.p19f8a1f0} fill="url(#paint0_footer)" />
          <path d={svgPaths.p33595780} fill="url(#paint1_footer)" />
          <path d={svgPaths.p16119600} fill="url(#paint2_footer)" />
          <path d={svgPaths.p3b02c700} fill="url(#paint3_footer)" />
          <path d={svgPaths.p28278400} fill="url(#paint4_footer)" />
          <path d={svgPaths.p9cd1480} fill="url(#paint5_footer)" />
          <path d={svgPaths.p27150f80} fill="url(#paint6_footer)" />
          <path d={svgPaths.p3a6d2200} fill="url(#paint7_footer)" />
          <path d={svgPaths.pa871180} fill="url(#paint8_footer)" />
          <path d={svgPaths.pa75cc00} fill="url(#paint9_footer)" />
          <path d={svgPaths.pa4e4300} fill="url(#paint10_footer)" />
          <path d={svgPaths.p2c39ab00} fill="url(#paint11_footer)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_footer" x1="-2.05005" x2="99.9719" y1="36.7549" y2="0.679714">
            <stop stopColor="#00C0FD" />
            <stop offset="1" stopColor="#E70FAA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_footer" x1="-2.05006" x2="99.9719" y1="36.7549" y2="0.679715">
            <stop stopColor="#00C0FD" />
            <stop offset="1" stopColor="#E70FAA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_footer" x1="-2.05005" x2="99.9719" y1="36.7549" y2="0.679718">
            <stop stopColor="#00C0FD" />
            <stop offset="1" stopColor="#E70FAA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_footer" x1="-2.05005" x2="99.9719" y1="36.7549" y2="0.679715">
            <stop stopColor="#00C0FD" />
            <stop offset="1" stopColor="#E70FAA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_footer" x1="-2.05004" x2="99.9719" y1="36.7549" y2="0.679722">
            <stop stopColor="#00C0FD" />
            <stop offset="1" stopColor="#E70FAA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_footer" x1="-0.244432" x2="93.6381" y1="59.3454" y2="39.5069">
            <stop stopColor="#13B0F5" />
            <stop offset="1" stopColor="#CA24B4" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_footer" x1="-0.244434" x2="93.6381" y1="59.3454" y2="39.5069">
            <stop stopColor="#13B0F5" />
            <stop offset="1" stopColor="#CA24B4" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_footer" x1="-0.244433" x2="93.6381" y1="59.3454" y2="39.5069">
            <stop stopColor="#13B0F5" />
            <stop offset="1" stopColor="#CA24B4" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_footer" x1="-0.244423" x2="93.638" y1="59.3454" y2="39.5069">
            <stop stopColor="#13B0F5" />
            <stop offset="1" stopColor="#CA24B4" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_footer" x1="-0.244437" x2="93.6381" y1="59.3454" y2="39.5069">
            <stop stopColor="#13B0F5" />
            <stop offset="1" stopColor="#CA24B4" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_footer" x1="-0.244412" x2="93.638" y1="59.3454" y2="39.5069">
            <stop stopColor="#13B0F5" />
            <stop offset="1" stopColor="#CA24B4" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_footer" x1="-0.244429" x2="93.6381" y1="59.3454" y2="39.5069">
            <stop stopColor="#13B0F5" />
            <stop offset="1" stopColor="#CA24B4" />
          </linearGradient>
          <clipPath id="clip0_footer">
            <rect fill="white" height="59" width="97" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

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
        <Logo />
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
