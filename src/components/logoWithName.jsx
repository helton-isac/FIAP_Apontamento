import React from 'react';
import { ReactComponent as Icon } from './../logo.svg';

function LogoWithName(props) {
    return (
        <div style={styles.brand}>
            <Icon style={styles.icon} />
            <div style={styles.title}>Apontamentos</div>
        </div>
    );
}

const styles = {
    title: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 700,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 35,
        paddingBottom: 35,
        alignSelf: "center",
    },
    icon: {
        width: 36,
        height: 36,
        alignSelf: "center",
    },
    brand: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
    }
}


export default LogoWithName;


