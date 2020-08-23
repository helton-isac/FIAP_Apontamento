import React, { useState } from 'react';

function TimeTracking(props) {


    const [timeEntries, setTimeEntries] = useState([]);
    const today = new Date();

    const register = () => {
        const today = new Date();
        const hours = ("0" + today.getHours()).slice(-2);
        const minutes = ("0" + today.getMinutes()).slice(-2);
        const now = `${hours}:${minutes}`;
        if (timeEntries.length === 0) {
            setTimeEntries([{ start: now }]);
        } else {
            const lastIndex = timeEntries.length;
            if (timeEntries[lastIndex - 1].end) {
                timeEntries.push({ start: now });
            } else {
                timeEntries[lastIndex - 1].end = now;
            }
            setTimeEntries([...timeEntries]);
        }
    }

    function dateFormatted(date) {
        const day = ("0" + date.getDate().toString()).slice(-2);
        const month = ("0" + (date.getMonth() + 1).toString()).slice(-2);
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div style={styles.panel}>
            <div style={styles.text}>{dateFormatted(today)}</div>
            <button style={styles.button} onClick={register} >Marcar Ponto</button>
            <div style={styles.row}>
                <div style={styles.title}>{"Período"}</div>
            </div>
            <div style={styles.row}>
                <div style={styles.columnTitle}>{"INÍCIO"}</div>
                <div style={styles.columnTitle}>{"FIM"}</div>
            </div>
            {timeEntries.map((timeEntry) => (
                <div style={styles.row}>
                    <div style={styles.hour}>{timeEntry.start}</div>
                    <div style={styles.hour}>{timeEntry.end ? timeEntry.end : "__:__"}</div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    panel: {
        display: "flex",
        flexDirection: "column"
    },
    text: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 700,
        paddingTop: 35,
        paddingBottom: 35,
        alignSelf: "center",
        textAlign: "center",
        cursor: 'pointer',
    },
    button: {
        minWidth: "260px",
        fontSize: "16px",
        paddingTop: 20,
        paddingRight: 30,
        paddingBottom: 20,
        paddingLeft: 30,
        marginBottom: 40,
        fontWeight: 700,
        lineHeight: 1.1,
        borderRadius: "2px",
        color: "#FFFFFF",
        borderColor: "#2E8B57",
        backgroundColor: "#2E8B57",
        width: 200,
        alignSelf: "center",
        letterSpacing: "1px",
        cursor: 'pointer',
    },
    row: {
        flex: 1,
        display: "flex",
        marginBottom: 20,
        flexDirection: "row",
        alignSelf: "center",
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
        marginLeft: 20,
        marginRight: 20,
        width: 100,
        textAlign: "center",
    },
    columnTitle: {
        color: "#FFFFFF",
        marginLeft: 20,
        marginRight: 20,
        width: 100,
        textAlign: "center",
        fontSize: "16px",
    },
    title: {
        color: "#FFFFFF",
        marginLeft: 20,
        marginRight: 20,
        width: 100,
        textAlign: "center",
        fontSize: "20px",
    }
}

export default TimeTracking;

