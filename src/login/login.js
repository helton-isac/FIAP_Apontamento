import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
    const urlParams = new URLSearchParams(window.location.search);
    const id_token = urlParams.get('id_token');
    if (!id_token) {
        window.location.assign('https://apontamento.auth.us-east-1.amazoncognito.com/login?client_id=2bk2he7s7lgmaovtrtc17bat9t&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://master.d1t6bh9zd2tcsz.amplifyapp.com/');
    }

    return (
        <Redirect to="/report" />
    );
}

export default Login;


