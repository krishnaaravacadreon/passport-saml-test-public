module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 8083
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/login/callback',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://idp.ssocircle.com/sso/idpssoinit?metaAlias=%2Fpublicidp&spEntityID=http://serveur.network-drian.ovh:8083/metadata',//'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
        //callbackUrl: 'http://serveur.network-drian.ovh:8083/login/callback/',
        issuer: 'http://serveur.network-drian.ovh:8083', //'passport-saml',
        cert: process.env.SAML_CERT || fs.readFileSync('ssocircle.cert','utf8')
      }
    }
  }
};
