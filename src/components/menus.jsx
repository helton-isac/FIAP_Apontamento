import React from 'react';

function Menus(props) {
    return (
        <div style={styles.container}>
            {props.isAdmin && <div style={styles.action} onClick={props.onReportsClicks}>Relatórios</div>}
            {props.isEmployee && <div style={styles.action} onClick={props.onUserReportClicks}>Meus Apontamentos</div>}
            {props.isEmployee && <div style={styles.action} onClick={props.onTrackingActionSelected}>Registrar Trabalho</div>}
            {props.userName && <div style={styles.user}>{props.userName}</div>}
            {props.loginText && <div style={styles.login} onClick={props.onLoginClick}>{props.loginText}</div>}
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


