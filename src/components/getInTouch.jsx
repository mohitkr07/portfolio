import styles from "./components.module.css"

const GetInTouch = ()=>{
    return (
        <div className={`${styles["get-in-touch-container"]} ${styles["page"]}`}>
            <div className={styles["get-in-touch-title"]}>
                <p>Get In Touch</p>
            </div>
            <div className={styles["get-in-touch"]}>
                <div className={styles["get-in-touch-back"]}>
                    <div className={styles["get-in-touch-forth"]}>
                        
                    </div>
                    <div className={styles["get-in-touch-form"]}>
                        <input type="text"></input>
                        <input type="text"></input>
                        <input type="text"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;