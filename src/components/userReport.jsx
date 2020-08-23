import React, { useEffect, useState } from 'react';
import DynamoUtils from '../utils/dynamoUtils';
import Loading from './loading';

function UserReport(props) {

    const [myEntries, setMyEntries] = useState(null);

    useEffect(() => {
        DynamoUtils.getAllEntries((data) => {
            const _myEntries = data.filter(element => element.login === props.login);
            if (_myEntries) {
                setMyEntries(_myEntries);
            }
        })
    }, [props.login]);

    if (!myEntries) {
        return <Loading />
    }

    let rowId = 0;
    let entryId = 0;

    return (
        <div style={styles.panel}>
            <div style={styles.row}>
                <div style={styles.cellTitle}>Data</div>
                <div style={styles.cellTitle}>Entrada</div>
                <div style={styles.cellTitle}>Saida</div>
            </div>
            {myEntries.map((entry) => (
                <div key={++rowId} style={styles.row}>
                    <div style={styles.cellValue}>{entry.date}</div>
                    <div>
                        {entry.entries.map((timeEntry) => (
                            <div key={++entryId} style={styles.row}>
                                <div style={styles.cellValue}>{timeEntry.start}</div>
                                <div style={styles.cellValue}>{timeEntry.end ? timeEntry.end : "__:__"}</div>
                            </div>
                        ))}
                    </div>

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
    cellTitle: {
        paddingTop: 35,
        paddingBottom: 35,
        color: "#FFFFFF",
        marginLeft: 20,
        marginRight: 20,
        width: 100,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 700,
    },
    row: {
        flex: 1,
        display: "flex",
        marginBottom: 20,
        flexDirection: "row",
        alignSelf: "center",
    },
    cellValue: {
        color: "#FFFFFF",
        marginLeft: 20,
        marginRight: 20,
        width: 100,
        textAlign: "center",
    },
}

export default UserReport;

