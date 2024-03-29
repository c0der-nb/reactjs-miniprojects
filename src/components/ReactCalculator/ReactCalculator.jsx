import React, { useState } from 'react';
import styles from './ReactCalculator.module.css';
import CalcButton from '../Button/CalcButton';
import { evaluate } from 'mathjs';

export default function ReactCalculator() {
    const [inputString, setInputString] = useState("");
    const [result, setResult] = useState("");
    const charList = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'];
    const operators = ['+', '-', '*', '/'];

    const handleOperatorsOperandsClick = (value) => {
        if (value==='C') {
            setResult("");
            setInputString("");
        }
        else if (value === '=') {
            setResult(() => inputString && !operators.includes(inputString[inputString.length-1]) ? evaluate(inputString) : "Error")
        }
        else {
            setInputString((prevVal) => prevVal ? prevVal+value : value);
        }
    }

    return (
        <div className={styles.container}>
            <h1>React Calculator</h1>
            <input className={styles.input} type="text" name="input" id="input-string" value={inputString} disabled />
            {result && <div><p className={styles.pCalc}>{result}</p></div>}
            <div className={styles.buttonGrid}>
                {charList.map((val) => (<CalcButton content={val} handler={handleOperatorsOperandsClick} key={val} />))}
            </div>
        </div>
    )
}