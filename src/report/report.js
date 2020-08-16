import React, { useState } from 'react';
import { ReactComponent as Logo } from './../logo.svg';

function Report() {

    const [employees, setEmployees] = useState([]);

    fetch('https://81mmi65fab.execute-api.us-east-1.amazonaws.com/default/lambda-microservice?TableName=time_entry')
        .then(res => res.json())
        .then((data) => {
            setEmployees(data.Items);
        }).catch(console.log)

    return (
        <div style={styles.list}>
            {employees.map((contact) => (
                <div style={styles.line}>
                    <text>{contact.login}</text>
                </div>
            ))}
        </div>
    )
}

const styles = {
    list: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF"
    },
    line: {
        display: "flex",
        flexDirection: "row",
    },
    panel: {
        backgroundColor: "#FF0000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
};

export default Report;


