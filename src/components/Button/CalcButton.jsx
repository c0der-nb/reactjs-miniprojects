import React from 'react';
import styles from "./CalcButton.module.css";

export default function CalcButton({content, handler}) {

    return (
        <button className={styles.calcButton} onClick={() => handler(content)}>{content}</button>
    )
}