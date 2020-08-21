import React from 'react';

function Menus(props) {
    return (
        <div style={styles.container}>
            {props.isEmployee && <text style={styles.action} onClick={props.onTrackingActionSelected}>Registrar Trabalho</text>}
            {props.userName && <text style={styles.user}>{props.userName}</text>}
            {props.loginText && <text style={styles.login} onClick={props.onLoginClick}>{props.loginText}</text>}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
    },
    login: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 700,
        paddingLeft: 40,
        paddingRight: 20,
        paddingTop: 35,
        paddingBottom: 35,
        alignSelf: "center",
        cursor: 'pointer',
    },
    user: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 700,
        paddingLeft: 40,
        paddingRight: 20,
        paddingTop: 35,
        paddingBottom: 35,
        alignSelf: "center",
    },
    action: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 700,
        paddingLeft: 40,
        paddingRight: 20,
        paddingTop: 35,
        paddingBottom: 35,
        alignSelf: "center",
        cursor: 'pointer',
    },
}


export default Menus;


