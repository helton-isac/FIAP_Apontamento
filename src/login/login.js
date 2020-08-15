import React from 'react';

function Login() {
    return (
        <div style={styles.panel}>
            <Title />
            <User />
            <Password />
            <LoginButton />
            <NewUser />
        </div >
    );
}

const Title = () => {
    return (
        <div className="header" style={styles.title}>Bem vindo ao site de Apontamento</div>
    );
}

const User = () => {
    return (
        <div style={styles.inputBox}>
            <div style={styles.label} >Usuário</div>
            <input type="text" style={styles.inputText} ></input>
        </div>
    );
}

const Password = () => {
    return (
        <div style={styles.inputBox}>
            <div style={styles.label}>Senha</div>
            <input type="password" style={styles.inputText}></input>
        </div>
    );
}

const LoginButton = () => {
    return <button style={styles.button} >Entrar</button>;
}

const NewUser = () => {
    return <a onClick={newUserClick} style={styles.newUser}>Criar Perfil de funcionário</a>;
}

const newUserClick = () => {

}

const styles = {
    panel: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 30,
        marginBottom: 48,
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
    }
};

export default Login;


