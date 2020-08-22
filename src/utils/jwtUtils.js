export default class JWTUtils {
    static extractParam(params, param) {
        for (var i = 0; i < params.length; i++) {
            if (params[i].indexOf(param) > 0) {
                return params[i].replace('#', '').replace(`${param}=`, '');
            }
        }
        return null;
    }
    
    static parseJwt(token) {
        if (!token) return null;
        try {
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
}
