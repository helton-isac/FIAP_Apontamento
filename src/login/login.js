import React from 'react';
import { ReactComponent as Logo } from './../logo.svg';

function Login() {
    return (
        <div style={styles.panel}>
            <Logo style={styles.icon}/>
            <Title />
            <User />
            <Password />
            <LoginButton />
            <NewUser />
            <Credits />
        </div >
    );
}

const Title = () => {
    return (
        <div style={styles.titleBox}>
            <text style={styles.title}>Bem vindo ao site de Apontamento</text>
        </div>
    );
}

const User = () => {
    return (
        <div style={styles.inputBox}>
            <text style={styles.label}>Usuário</text>
            <input type="text" style={styles.inputText} ></input>
        </div>
    );
}

const Password = () => {
    return (
        <div style={styles.inputBox}>
            <text style={styles.label}>Senha</text>
            <input type="password" style={styles.inputText}></input>
        </div>
    );
}

const LoginButton = () => {
    return <button style={styles.button} onClick={loginClick} >Entrar</button>;
}

const NewUser = () => {
    return <a onClick={newUserClick} style={styles.newUser}>Criar Perfil de funcionário</a>;
}

const newUserClick = () => {
    alert("Novo usuário não implementado");
}

const loginClick = () => {
    alert("Login não implementado");
}

const Credits = () => {
    return (
      <div style={styles.credit}>
        Ícones feitos por <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/"
          title="Flaticon">www.flaticon.com</a>
      </div>
    );
  }

const styles = {
    panel: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex:1,
    },
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
        justifyContent:"center",
        flexBasis:0,
    },
    icon: {
        width: 36,
        height: 36,
        marginBottom: 24,
    },
    label: {
        color: "#FFFFFF",
        marginBottom: 4,
    },
    inputBox: {
        display: "flex",
        flexDirection: "column",
    },
    inputText: {
        backgroundColor: "#0d0f12",
        appearance: "textfield",
        color: "#FFFFFF",
        height: 22,
        minWidth: 200,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 16,
        paddingLeft: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: "#FFFFFF55",
        borderRadius: 2,
    },
    button: {
        backgroundColor: "#0084bd",
        color: "#FFE5E5",
        height: 40,
        minWidth: 232,
        fontSize: 14,
        marginBottom: 24,
        borderWidth: 0,
        borderRadius: 2,
    },
    newUser: {
        cursor: 'pointer',
        color: "#2ea0d6",
        minWidth: 232,
        textAlign: "center",
    },
    credit: {
        color: "#FFFFFF",
        fontSize: 12,
        textAlign: "center",
        marginTop: 100,
      }
};

export default Login;


