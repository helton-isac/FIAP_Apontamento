import React, { useEffect, useState } from 'react';
import DynamoUtils from '../utils/dynamoUtils';
import Loading from './loading';

function Report(props) {

    const [allEntries, setAllEntries] = useState(null);
    const [filteredEntries, setFilteredEntries] = useState(null);

    const handleOnChange = (input) => {
        const filteredUser = input.target.value;
        const filteredData = allEntries.filter((entry) => { return entry.login.toLowerCase().indexOf(filteredUser.toLowerCase()) >= 0 });
        setFilteredEntries(filteredData);
    }

    useEffect(() => {
        DynamoUtils.getAllEntries((data) => {

            function compare(a, b) {

                if (a.entries[0].dateId < b.entries[0].dateId) {
                    return -1;
                }
                if (a.entries[0].dateId > b.entries[0].dateId) {
                    return 1;
                }
                return 0;
            }
            if (data) {
                data.sort(compare)
                setAllEntries(data);
                setFilteredEntries(data);
            }
        })
    }, [props.login]);

    if (!filteredEntries) {
        return <Loading />
    }

    let rowId = 0;
    let entryId = 0;

    return (
        <div style={styles.panel}>
            <div style={styles.row}>
                <input type="text" placeholder="Filtrar usuário" onChange={handleOnChange} style={styles.inputText} ></input>
            </div>
            <div style={styles.row}>
                <div style={styles.cellTitle}>Data</div>
                <div style={styles.cellTitle}>Entrada</div>
                <div style={styles.cellTitle}>Saida</div>
            </div>
            {filteredEntries.map((entry) => (
                <div key={++rowId} style={styles.row}>
                    <div style={styles.cellValue}>{entry.login}</div>
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
    inputText: {
        backgroundColor: "#0d0f12",
        appearance: "textfield",
        color: "#FFFFFF",
        height: 22,
        minWidth: 200,
        marginTop: 12,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 16,
        paddingLeft: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#FFFFFF55",
        borderRadius: 2,
    },
}

export default Report;

