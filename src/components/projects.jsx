import styles from "./components.module.css";
import ProjectCard from "./utils/projectCart";

const Projects = () => {
  const cityMarket = [
    "Facilitated users in authentication, searching, viewing, and adding products to the cart.",
    "Ensured seccure access by implementing robust user and seller authentication protocols.",
    "Enabled sellers to efficiently list & manage their products.",
    "Implemented advanced search and filtering.",
  ];
  const weatherEx = [
    "Integrated openweathermap API to get weather information.",
    "Access current weather data for 200,000 + cities accross the globe.",
    "Designed responsive and user friendly UI.",
  ];
  const lms = [
    "Build web based application to manage multiple aspects of Educational Institutions.",
    "Integrated Faculty Management System, Student Management System, Attendance Management System.",
    "Integrated cheating proof quiz taking system",
    "Designed and implemented responsive & interactive UI."
  ]
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
            github="https://github.com/mohitkr07/online-marketplace"
            live="https://city-market-onlinemarket.onrender.com/"
          />
            <ProjectCard
              imgLocation="projects/lms.png"
              title="Learning Management System"
              belowTitle="Build comprehensive Institue Management system"
              points={lms}
              github="https://github.com/mohitkr07/Major-Project"
              live="#"
            />
          <ProjectCard
            imgLocation="projects/weather.png"
            title="Weather-Ex"
            belowTitle="Developed and deployed comprehensive Weather Application"
            points={weatherEx}
            github="https://github.com/mohitkr07/weather-app"
            live="https://weather-ex.onrender.com/"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
