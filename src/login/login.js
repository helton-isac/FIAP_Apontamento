import React from 'react';
import { Redirect } from 'react-router-dom';

function Login(props) {
    const hashParams = props.location.hash.split('&');
    const id_token = extractParam(hashParams, 'id_token');

    if (!id_token) {
       window.location.assign('https://apontamento.auth.us-east-1.amazoncognito.com/login?client_id=2bk2he7s7lgmaovtrtc17bat9t&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://master.d1t6bh9zd2tcsz.amplifyapp.com/');
    } else {

    }

    return (
        <Redirect to="/report" />
    );
}

function extractParam(params,param){
    for(var i = 0; i < params.length; i++){
        if(params[i].indexOf(param) > 0) {
            return params[i].replace('#','').replace(`${param}=`,'');
        }
    }
    return null;
}


export default Login;


