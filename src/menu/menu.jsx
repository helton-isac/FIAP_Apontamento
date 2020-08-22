import React, { useState } from 'react';
import LogoWithName from '../components/logoWithName';
import Menus from '../components/menus';
import TimeTracking from '../components/timeTrackingPanel';

function Menu(props) {

    const hashParams = props.location.hash.split('&');
    //const hashParams = ["#id_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2duaXRvOnVzZXJuYW1lIjoiSGVsdG9uIE9sYSJ9"];
    const sign_in = 'Entrar';
    const sign_out = 'Sair';
    const idToken = extractParam(hashParams, 'id_token');
    // TODO: It is necessary to revalidate the token sometime.
    // const expiresIn = extractParam(hashParams, 'expires_in');
    // const tokenType = extractParam(hashParams, 'token_type');

    const [user, setUser] = useState(JSON.parse(parseJwt(idToken)));
    const [showTimeTracking, setShowTimeTracking] = useState(false);

    if (user) {
        window.history.replaceState(null, null, ' ');
    }

    const login = () => {
        window.location.assign('https://apontamento.auth.us-east-1.amazoncognito.com/login?client_id=2bk2he7s7lgmaovtrtc17bat9t&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://master.d1t6bh9zd2tcsz.amplifyapp.com/');
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <LogoWithName />
                <Menus
                    userName={user ? user["cognito:username"] : null}
                    loginText={user ? sign_out : sign_in}
                    onLoginClick={user ? logout : login}
                    isEmployee={user ? true : false}
                    onTrackingActionSelected={() => setShowTimeTracking(true)} />
            </div>
            {!showTimeTracking && <text style={styles.text}>Exemplo de um sistema de ponto simples criado utilizando serviços AWS.</text>}
            {showTimeTracking && <TimeTracking />}
        </div>
    );
}

function extractParam(params, param) {
    for (var i = 0; i < params.length; i++) {
        if (params[i].indexOf(param) > 0) {
            return params[i].replace('#', '').replace(`${param}=`, '');
        }
    }
    return null;
}

function parseJwt(token) {
    if (!token) return null;
    try{
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(JSON.stringify(jsonPayload));
    } catch (e) {
        return null;
    }
};

const styles = {
    page: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        alignSelf: "flex-start",
    },
    header: {
        display: 'flex',
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#212121",
        justifyContent: "space-between",
        height: 90,
        paddingLeft: 30,
        paddingRight: 30,
        flexGrow: 1,
    },
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
    },
    text: {
        margin: 50,
        color: "#FFFFFF",
    }
}


export default Menu;


