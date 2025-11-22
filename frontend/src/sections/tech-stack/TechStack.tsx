import TechIcon from "./components/TechIcon";
import styles from "./TechStack.module.css";

export default function TechStack() {
  const technologies = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Greensock", icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-greensock.svg" },
    { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ];

  return (
    <section id="tech-stack" className={styles.techStack}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Tech Stack</h2>
        <p className={styles.subtitle}>Technologies I've been working with recently</p>
        <div className={styles.iconGrid}>
          {technologies.map((tech) => (
            <TechIcon 
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
