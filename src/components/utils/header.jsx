import styles from "./utils.module.css";

const Header = ({ onOptionClick }) => {
  return (
    <nav className={styles["nav-web"]}>
      <div className={styles["nav-web-options"]}>
        <ul>
          <li onClick={() => onOptionClick(0)}>HOME</li>
          {/* <li onClick={onOptionClick}>Resume</li> */}
          <li onClick={() => onOptionClick(window.innerHeight)}>PROJECTS</li>
          <li onClick={() => onOptionClick(window.innerHeight * 2)}>SKILLS</li>
          <li onClick={() => onOptionClick(window.innerHeight * 3)}>Get In Touch</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
