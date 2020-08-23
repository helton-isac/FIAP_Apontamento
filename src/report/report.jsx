import React, { useState } from 'react';
import { Title } from '../components/title';

function Report() {

    const [employees, setEmployees] = useState([
        {
            "entries":
                [
                    { "start": "08:00", "end": "16:00" },
                    { "start": "08:00", "end": "16:00" }
                ]
            ,
            "login": "hgalindo",
            "date": "2020-08-16"
        },
        {
            "entries":
                [
                    { "start": "08:00" }
                ]
            ,
            "login": "daiana",
            "date": "2020-08-16"
        }
    ]);

    return (

        <div style={styles.list}>
            <Title title={"Relatório Geral"} />
            {employees.map((timeEntry) => (
                <div style={styles.line}>
                    <div style={styles.userName}>{timeEntry.login}</div>
                    <div style={styles.date}>{timeEntry.date}</div>
                    <Entries entries={timeEntry.entries} />
                </div>
            ))}
        </div>
    )
}

const Entries = (entries) => {
    return <div style={styles.entryPanel}>
        {entries.entries.map((timeEntry) => (
            <div style={styles.row}>
                <div style={styles.hour}>{timeEntry.start}</div>
                <div style={styles.hour}>{timeEntry.end ? timeEntry.end : "__:__"}</div>
            </div>
        ))}
    </div>

};


const styles = {
    list: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        alignItems: "center",
    },
    line: {
        display: "flex",
        margin: 16,
        flexDirection: "row",
    },
    entryPanel: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    row: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
    },
    userName: {
        color: "#FFFFFF",
        width: 200,
    },
    date: {
        color: "#FFFFFF",
        width: 100,
        textAlign: "center",
    },
    hour: {
        color: "#FFFFFF",
        marginLeft: 4,
        marginBottom: 4,
        width: 50,
        textAlign: "center",
    }
};

export default Report;


