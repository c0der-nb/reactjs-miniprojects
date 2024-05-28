import React from "react";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className={styles.wrapper}>
            <h1>ReactJS Mini Projects</h1>
            <Link style={{marginTop: '30px'}} to="/counter-app"><h3 className={styles.homepageH3}>Counter App</h3></Link>
            <Link to="/react-calculator"><h3 className={styles.homepageH3}>React Calculator</h3></Link>
            <Link to="/login"><h3 className={styles.homepageH3}>Login</h3></Link>
            <Link to="/select-location"><h3 className={styles.homepageH3}>Select Location</h3></Link>
            <Link to="/weather-app"><h3 className={styles.homepageH3}>Weather App</h3></Link>
            <Link to="/pagination"><h3 className={styles.homepageH3}>Pagination</h3></Link>
            <Link to="/spell-check"><h3 className={styles.homepageH3}>Spell Check</h3></Link>
            <Link to="/dictionary-app"><h3 className={styles.homepageH3}>Dictionary App</h3></Link>
            <Link to="/table"><h3 className={styles.homepageH3}>Table</h3></Link>
        </div>
    )
}

export default Homepage;