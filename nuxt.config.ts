// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '~/css/bulma/bulma.css',
     // SCSS file in the project
    '~/css/bulma/bulma.scss'
  ],
  router: {
    extendRoutes(routes) {
      routes.forEach((route) => {
        // When options.generate.subFolders is true (default)
        const alias =
          route.path.length > 1 ? `${route.path}/index.html` : '/index.html'
        // When options.generate.subFolders is false
        // const normalizedRoute = route.path.replace(/\/$/, '') // Remove trailing slashes if they exist
        // const alias =
        //   route.path.length > 1 ? `${normalizedRoute}.html` : '/index.html'
        route.alias = alias
      })
    }
  }
})
