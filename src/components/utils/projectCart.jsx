import styles from "./utils.module.css";

const ProjectCard = (props) => {

    const points = props.points;
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-img"]}>
        <img src={props.imgLocation} />
      </div>
      <div className={styles["project-description"]}>
        <p style={{fontSize: "250%", marginBottom: "5px"}} className={styles["neonText"]}>{props.title}</p>
        <p style={{fontSize: "90%", fontStyle: "italic", marginBottom: "10px"}}>{props.belowTitle}</p>
        <ul style={{fontSize: "88%"}}>
          {points.map((i, key)=>{
            return <li key={key}>{i}</li>
          })}
        </ul>
        <table>
            <thead>
                <td></td>
            </thead>
        </table>
      </div>
    </div>
  );
};

export default ProjectCard;
