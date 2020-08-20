import React, { useState } from 'react';
import { ReactComponent as Logo } from './../logo.svg';
import LogoWithName from '../components/logoWithName';
import Menus from '../components/menus';

function Menu(props) {


    const hashParams = props.location.hash.split('&');
    const sign_in = 'Entrar';
    const sign_out = 'Sair';
    const idToken = extractParam(hashParams, 'id_token');
    const expiresIn = extractParam(hashParams, 'expires_in');
    const tokenType = extractParam(hashParams, 'token_type');

    function parseJwt(token) {
        if (!token) return null;
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(JSON.stringify(jsonPayload));
    };
    const [user, setUser] = useState(JSON.parse(parseJwt(idToken)));

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
                    onLoginClick={user ? logout : login} />
            </div>
            <text style={styles.text}>Exemplo de um sistema de ponto simples criado utilizando serviços AWS.</text>
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


