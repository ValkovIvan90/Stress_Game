// import Keycloak from "keycloak-js";

// const keycloakConfig = {
//     url: process.env.REACT_APP_KEYCLOAK_URL,
//     realm: process.env.REACT_APP_KEYCLOAK_REALM,
//     clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID
// };

// const keycloakProviderInitConfig = {
//     onLoad: "login-required",
//     responseMode: "query",
//     checkLoginIframe: false,

// };

// const keycloak = new Keycloak(keycloakConfig);
// export { keycloak, keycloakProviderInitConfig };

import Keycloak from "keycloak-js";

const _kc = new Keycloak('/keycloak.json');

const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
      onLoad :'login-required',
      silentCheckSsoRedirectUri : window.location.origin + '/some.html',
      pkceMethod:'S256'
    })
    .then((authenticated)=>{
        if (authenticated) {
            onAuthenticatedCallback();
        }else{
            console.warn("not authenticated")
            doLogin()
        }
    })
}

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const updateToken = (successCallback) => 
  _kc.updateToken(5)
  .then(successCallback)
  .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.prefered_username;

const hasRole = (roles) => roles.some((role)=> _kc.hasRealmRole(role))

export const  UserService  = {
    initKeycloak,
    doLogin,
    doLogout,
    getToken,
    updateToken,
    getUsername,
    hasRole
}