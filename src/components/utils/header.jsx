
import styles from "./utils.module.css"

const Header = ()=>{
    return (
        <nav className={styles["nav-web"]}>
            <div className={styles["nav-web-options"]}>
                <ul>
                    <li>Home</li>
                    <li>Resume</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Get In Touch</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;