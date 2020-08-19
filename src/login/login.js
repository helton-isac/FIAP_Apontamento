import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
    const urlParams = new URLSearchParams(window.location.search);
    
    
    const id_token = urlParams.get('id_token');
    const access_token = urlParams.get('access_token');
    const expires_in = urlParams.get('expires_in');
    const token_type = urlParams.get('token_type');
    console.log("urlParams: " + urlParams);
    console.log("id_token: " + id_token);
    console.log("access_token: " + access_token);
    console.log("expires_in: " + expires_in);
    console.log("token_type: " + token_type);
    alert("check console");
    if (!id_token) {
        window.location.assign('https://apontamento.auth.us-east-1.amazoncognito.com/login?client_id=2bk2he7s7lgmaovtrtc17bat9t&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://master.d1t6bh9zd2tcsz.amplifyapp.com/');
    }

    return (
        <Redirect to="/report" />
    );
}

export default Login;


