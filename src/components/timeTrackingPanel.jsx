import React, { useState, useEffect } from 'react';
import DynamoUtils from '../utils/dynamoUtils';
import Utils from '../utils/utils';
import Loading from './loading';

function TimeTracking(props) {

    const [timeEntries, setTimeEntries] = useState(null);
    const today = new Date();
    const ftDate = Utils.dateFormatted(today);

    useEffect(() => {
        DynamoUtils.getAllEntries((data) => {
            const todayEntry = data.find(
                element => element.login === props.login
                    && element.date === Utils.dateFormatted(new Date()));

            if (todayEntry) {
                setTimeEntries(todayEntry.entries);
            }
        })
    }, [props.login])


    if (!timeEntries) {
        return <Loading />
    }

    const register = () => {
        const today = new Date();
        const hours = ("0" + today.getHours()).slice(-2);
        const minutes = ("0" + today.getMinutes()).slice(-2);
        const now = `${hours}:${minutes}`;

        if (timeEntries.length === 0) {
            const newTimeEntry = [{ dateId: today.getTime(), start: now }];
            DynamoUtils.postTimeEntry(props.login, ftDate, newTimeEntry);
            setTimeEntries(newTimeEntry);
        } else {
            const lastIndex = timeEntries.length;
            if (timeEntries[lastIndex - 1].end) {
                timeEntries.push({ dateId: today.getTime(), start: now });
            } else {
                timeEntries[lastIndex - 1].end = now;
            }
            DynamoUtils.postTimeEntry(props.login, ftDate, timeEntries);
            setTimeEntries([...timeEntries]);
        }
    }

    let id = 0;

    return (
        <div style={styles.panel}>
            <div style={styles.text}>{ftDate}</div>
            <button style={styles.button} onClick={register} >Marcar Ponto</button>
            <div style={styles.row}>
                <div style={styles.title}>{"Período"}</div>
            </div>
            <div style={styles.row}>
                <div style={styles.title}>{"Início"}</div>
                <div style={styles.title}>{"Fim"}</div>
            </div>
            {timeEntries.map((timeEntry) => (
                <div key={++id} style={styles.row}>
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
        fontSize: 20,
        fontWeight: 700,
        paddingTop: 35,
        paddingBottom: 35,
        alignSelf: "center",
        textAlign: "center",
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
    title: {
        color: "#FFFFFF",
        marginLeft: 20,
        marginRight: 20,
        width: 100,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 700,
    }
}

export default TimeTracking;

