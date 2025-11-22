import styles from "../TechStack.module.css";

interface TechIconProps {
  src: string;
  alt: string;
}

export default function TechIcon({ src, alt }: TechIconProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={styles.icon}
    />
  );
}
