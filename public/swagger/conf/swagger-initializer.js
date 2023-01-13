window.onload = function() {
  window.ui = SwaggerUIBundle({
    dom_id: '#swagger-ui',
    deepLinking: true,
    filter: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: 'StandaloneLayout',
    configUrl: `./conf/${location.hostname.replace(/^portal\.([a-zA-Z0-9-_]+)\.demo.catena-x.net$/, "$1")}.json`,
    requestInterceptor: (req) => {
      req.headers.Authorization = `Bearer ${keycloak.token}`
      return req
    },
  })
  window.ui.initOAuth({
    clientId: 'catenax-portal',
    scopes: 'openid profile',
    usePkceWithAuthorizationCodeGrant: 'true'
  })
  setTimeout(selectAPI, 250)
}
