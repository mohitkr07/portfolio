import { useState } from "react";
import styles from "./utils.module.css";

const Header = ({ onOptionClick }) => {
  const [showNav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!showNav);
  };
  return (
    <nav className={`${styles["nav-web"]}`}>
      <div className={styles["menu-bar"]}>
        <label for="check">
          <input onClick={handleNav} type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {showNav && (
        <div className={styles["nav-web-options"]}>
          <div>
            <ul className={`${styles["options"]} ${styles["hide"]}`}>
              <li onClick={() => onOptionClick(0)}>HOME</li>
              <li onClick={() => onOptionClick(window.innerHeight)}>
                PROJECTS
              </li>
              <li onClick={() => onOptionClick(window.innerHeight * 2)}>
                SKILLS
              </li>
              <li onClick={() => onOptionClick(window.innerHeight * 3)}>
                Get In Touch
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className={`${styles["nav-web-options"]} ${styles["hide-nav-web"]}`}>
          <div>
            <ul className={`${styles["options"]} ${styles["hide"]}`}>
              <li onClick={() => onOptionClick(0)}>HOME</li>
              <li onClick={() => onOptionClick(window.innerHeight)}>
                PROJECTS
              </li>
              <li onClick={() => onOptionClick(window.innerHeight * 2)}>
                SKILLS
              </li>
              <li onClick={() => onOptionClick(window.innerHeight * 3)}>
                Get In Touch
              </li>
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default Header;
