import React, { useState, useEffect } from 'react';

const data = 
[

    { id: "abc", date: "2022-09-01", views: 100, article: "Article 1" },

    { id: "def", date: "2023-09-01", views: 100, article: "Article 1" },

    { id: "ghi", date: "2023-09-02", views: 150, article: "Article 2" },

    { id: "jkl", date: "2023-09-02", views: 120, article: "Article 3" },

    { id: "mno", date: "2020-09-03", views: 200, article: "Article 4" }

]

export default function Table() {
    const [tableData, setTableData] = useState([]);

    const dateSortHandler = () => {
        let sortedData = [...data];
        sortedData.sort((val1, val2) => {
            if (val1.date === val2.data)
                return val2.views - val1.views;
            return new Date(val2.date) - new Date(val1.date)
        })
        setTableData(sortedData)
    }

    const viewsSortHandler = () => {
        let sortedData = [...data];
        sortedData.sort((a, b) => a.views === b.views ? new Date(b.date) - new Date(a.date) : b.views-a.views)
        setTableData(sortedData)
    }

    useEffect(() => {
        setTableData(data);
    }, [])

    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={dateSortHandler}>Sort by Date</button>
            <button onClick={viewsSortHandler}>Sort by Views</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((val) => (<tr key={val.id}>
                        <td>{val.date}</td>
                        <td>{val.views}</td>
                        <td>{val.article}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}