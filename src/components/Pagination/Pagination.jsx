import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Pagination.module.css';

export default function Pagination() {
    const [employeeData, setEmployeeData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(10);
    const [pageCount, setPageCount] = useState(1);
    
    const fetchEmployeeData = async () => {
        try {
            const apiResponse = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
            setEmployeeData(apiResponse.data);
        }
        catch (error) {
            alert("failed to fetch data");
            console.error(error);
        }
    }

    const nextHandler = () => {
        if (endIndex < employeeData.length) {
            setStartIndex(endIndex);
            setEndIndex((prevVal) => prevVal+10);
            setPageCount((prevVal) => prevVal+1)
        }
    }

    const previousHandler = () => {
        if (startIndex > 0) {
            setEndIndex(startIndex);
            setStartIndex((prevVal) => prevVal-10);
            setPageCount((prevVal) => prevVal-1);
        }
    }

    useEffect(() => {
        fetchEmployeeData();
        setStartIndex(0);
        setEndIndex(10);
    }, [])

    return (
        <div className={styles.employeeWrapper}>
            <h2>Employee Data Table</h2>
            <table className={styles.employeeTable}>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </thead>
                <tbody>
                {employeeData.slice(startIndex, endIndex).map((data) => (
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                <button onClick={previousHandler} className={styles.buttonPrevNext}>Previous</button>
                <button className={styles.pageNumView}>{pageCount}</button>
                <button onClick={nextHandler} className={styles.buttonPrevNext}>Next</button>
            </div>
        </div>
    )
}