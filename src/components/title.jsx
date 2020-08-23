import React from 'react';

export const Title = ({title}) => {
    return (
        <div style={styles.titleBox}>
            <div style={styles.title}>{title}</div>
        </div>
    );
}

const styles = {
    title: {
        color: "#FFFFFF",
        fontSize: 30,
        textAlign: "center",
    },
    titleBox: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 48,
        alignItems: "center",
        justifyContent: "center",
        flexBasis: 0,
    },
};