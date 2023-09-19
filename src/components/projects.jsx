import styles from "./components.module.css";
import ProjectCard from "./utils/projectCart";

const Projects = () => {
  const cityMarket = [
    "Facilitated users in logging in, searching, viewing, rating, and adding products to the cart.",
    "Ensured seccure access by implementing robust user and seller authentication protocols.",
    "Enabled sellers to efficiently list & manage their products.",
    "Implemented advanced search and filtering.",
  ];
  return (
    <>
      <div className={`${styles["projects"]} ${styles["page"]}`}>
        <div className={styles["title"]}>
          <p style={{ color: "#fff" }}>PROJECTS</p>
          <hr></hr>
        </div>
        <div className={styles["project-div"]}>
          <ProjectCard
            imgLocation="projects/citymarket.png"
            title="City Market"
            belowTitle="Developed and deployed fully functional E-Commerce Platform"
            points={cityMarket}
          />
          
        </div>
      </div>
    </>
  );
};

export default Projects;
