import React, { useState } from 'react';
import LogoWithName from '../components/logoWithName';
import Menus from '../components/menus';
import TimeTracking from '../components/timeTrackingPanel';
import DynamoUtils from '../utils/dynamoUtils';
import JWTUtils from '../utils/jwtUtils';
import UserReport from '../components/userReport';

const SIGN_IN = 'Entrar';
const SIGN_OUT = 'Sair';
const screen = {
    Home: "HOME",
    TimeTracking: "TimeTracking",
    UserReport: "UserReport"
}

function MainPage(props) {

    const hashParams = props.location.hash.split('&');
    const idToken = JWTUtils.extractParam(hashParams, 'id_token');

    const [user, setUser] = useState(JSON.parse(JWTUtils.parseJwt(idToken)));
    const [activeScreen, setActiveScreen] = useState("HOME");

    if (user) {
        window.history.replaceState(null, null, ' ');
        const login = user["cognito:username"];
        if (login) {
            DynamoUtils.getAllUsers(
                (data) => {
                    if (!data.find(element => element.login === login)) {
                        DynamoUtils.postUser(login)
                    }
                });
        }
    }

    const login = () => {
        window.location.assign('https://apontamento.auth.us-east-1.amazoncognito.com/login?client_id=2bk2he7s7lgmaovtrtc17bat9t&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://master.d1t6bh9zd2tcsz.amplifyapp.com/');
    }

    const logout = () => {
        setUser(null);
        setActiveScreen(screen.Home);
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
                    onTrackingActionSelected={() => setActiveScreen(screen.TimeTracking)}
                    onUserReportClicks={() => setActiveScreen(screen.UserReport)}
                />
            </div>
            {activeScreen === screen.Home && <div style={styles.text}>Exemplo de um sistema de ponto simples criado utilizando serviços AWS.</div>}
            {activeScreen === screen.TimeTracking && <TimeTracking login={user ? user["cognito:username"] : null} />}
            {activeScreen === screen.UserReport && <UserReport login={user ? user["cognito:username"] : null} />}
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


export default MainPage;


