import imgRectangle4 from "figma:asset/8fdf1590e7872c6a2058b9625737f5b75b60be13.png";
import imgRectangle6 from "figma:asset/c58f84a06b364f1d268c5f396af9f68e95fa8167.png";
import imgRectangle8 from "figma:asset/61378a0032f30b561bea9168c23cb7e62e2faca6.png";
import imgRectangle12 from "figma:asset/bd0b1c40ea5b01bccbe2ee39d1608b7af2b84c96.png";
import imgRectangle13 from "figma:asset/1ca614c694dfa61c88bf91b57d4a2a529cb10144.png";
import imgRectangle14 from "figma:asset/1f4932808d5857f6f0d9154cbce52348d32d1f0d.png";
import ProjectCard from "./components/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      image: imgRectangle4,
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      image: imgRectangle6,
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      image: imgRectangle8,
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      image: imgRectangle12,
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      image: imgRectangle13,
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      image: imgRectangle14,
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>Things I've built so far</p>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
