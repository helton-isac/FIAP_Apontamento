import React, { useState } from 'react';
import LogoWithName from '../components/logoWithName';
import Menus from '../components/menus';
import TimeTracking from '../components/timeTrackingPanel';
import DynamoUtils from '../utils/dynamoUtils';
import JWTUtils from '../utils/jwtUtils';

const SIGN_IN = 'Entrar';
const SIGN_OUT = 'Sair';

function Menu(props) {

    const hashParams = props.location.hash.split('&');
    const idToken = JWTUtils.extractParam(hashParams, 'id_token');

    const [user, setUser] = useState(JSON.parse(JWTUtils.parseJwt(idToken)));
    const [showTimeTracking, setShowTimeTracking] = useState(false);

    if (user) {
        window.history.replaceState(null, null, ' ');
        const login = user["cognito:username"];
        console.log(`apontamento: login-${login}`)
        if (login) {
            DynamoUtils.getAllUsers(
                (data) => {
                    console.log(`apontamento: data-${JSON.stringify(data)}`)
                    if (!data.find(element => element.login === login)) {
                        DynamoUtils.postUser(login)
                    }
                });
        }
    }

    const login = () => {
        // Test
        // window.location.assign('http://localhost:3000/#id_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2duaXRvOnVzZXJuYW1lIjoiSGVsdG9uIE9sYSJ9');
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
                    loginText={user ? SIGN_OUT : SIGN_IN}
                    onLoginClick={user ? logout : login}
                    isEmployee={user ? true : false}
                    onTrackingActionSelected={() => setShowTimeTracking(true)} />
            </div>
            {!showTimeTracking && <text style={styles.text}>Exemplo de um sistema de ponto simples criado utilizando serviços AWS.</text>}
            {showTimeTracking && <TimeTracking />}
        </div>
    );
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


