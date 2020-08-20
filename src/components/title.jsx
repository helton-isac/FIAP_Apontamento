import React from 'react';

export const Title = ({title}) => {
    return (
        <div style={styles.titleBox}>
            <text style={styles.title}>{title}</text>
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