// https://nuxt.com/docs/api/configuration/nuxt-config
import { apiVersion } from './constants';
const proxy = require('http-proxy-middleware');

export default defineNuxtConfig({
  // devtools: { enabled: true },
  routeRules: {
    "/": { ssr: true },
    "/dashboard/**": { ssr: false },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  
  // darkMode:"class",
  modules: [
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
    '@nuxt-alt/proxy',
    "@kevinmarrec/nuxt-pwa",
    "@vueuse/nuxt",
  ],
  // auth: {
  //   globalAppMiddleware: true,
  //  },


    // auth: {
    //   // The module is enabled. Change this to disable the module
    //   isEnabled: true,
  
    //   // The origin is set to the development origin. Change this when deploying to production by setting `origin` in this config before build-time or by exporting `AUTH_ORIGIN` by running `export AUTH_ORIGIN=...`
    //   origin: 'https://changekon.ir/api/v2/auth/',
  
    //   // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
    //   basePath: '/api/auth',
  
    //   // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
    //   enableSessionRefreshPeriodically: false,
  
    //   // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    //   enableSessionRefreshOnWindowFocus: true,
  
    //   // Whether to add a global authentication middleware that will protect all pages without exclusion
    //   globalAppMiddleware: false,
  
    //   // Select the default-provider to use when `signIn` is called. Setting this here will also effect the global middleware behavior: E.g., when you set it to `github` and the user is unauthorized, they will be directly forwarded to the Github OAuth page instead of seeing the app-login page
    //   defaultProvider: undefined,
  
    //   // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path.
    //   addDefaultCallbackUrl: true,
  
  
    //   // Configuration of the global auth-middleware (only applies if you set `globalAppMiddleware: true` above!)
    //   globalMiddlewareOptions: {
  
    //       // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
    //       allow404WithoutAuth: true,
  
    //       // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path. Note: You also need to set the global `addDefaultCallbackUrl` setting to `false` if you want to fully disable this for the global middleware.
    //       addDefaultCallbackUrl: true
    //   }
    // },
   


    // proxy: {
    //   '/api': 'https://dummyjson.com', // Replace with the actual API URL
    // },

    // proxy: [
    //   ['/api', {
    //     target: 'https://changekon.ir',
    //     changeOrigin: true,
    //     pathRewrite: { '^/api/': '' }
    //   }]
    // ],
    runtimeConfig: {
      public: {
        API_BASE_URL: process.env.API_BASE_URL + apiVersion,
        APP_BASE_URL: process.env.APP_BASE_URL + apiVersion,
        baseURL: process.env.BASE_URL,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
    // nitro: {
    //   devProxy: {
    //     '/api/v2': {
    //         target: 'http://localhost:3000/api/v2',
    //         changeOrigin: true,
    //         followRedirects: true, // Add this line

    //     }
    // }
    // },


    
      
    },
  
  // toast: {
  //   position: 'top-center',
  //   register: [ // Register custom toasts
  //     {
  //       name: 'myerror',
  //       message: 'Oops...Something went wrong',
  //       options: {
  //         type: 'error'
  //       }
  //     }
  //   ]
  // },

  // pwa: {
  //   manifest:{
  //     name:'changekon',
  //     lang:'fa',
  //     short_name:'changekon',
  //     description:'This is changekon'
  //   },
  //   meta:{
  //     name:'changekon',
  //     author:'changekon'
  //   },
  //   icon: {
  //     sizes: [64, 128, 256, 384, 512],
  //     fileName:'favicon.ico'
  //   },
  //   workbox: {
  //     enabled: true,
  //   },
  // },
//   pinia: {
//     autoImports: [
//       // automatically imports `defineStore`
//       "defineStore", // import { defineStore } from 'pinia'
//       ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
// import { Server } from '@refactorjs/http-proxy';
//     ],
//   },

  plugins: [
    // ...
    { src: "~/plugins/auth", mode: "client" },
  ],
//   proxy: {
//     proxies: {
//         '/api/v2': {
//             target:process.env.API_BASE_URL,
//             changeOrigin: true,
//             rewrite: (path: string) => path.replace(/^\/api/, ''),
//         },
//     },
// },
// auth: {
//   strategies: {
//       local: {
//           token: {
//               property: false,
//               global: true,
//               required: true,
//               type: 'Bearer',
//           },
//           user: {
//               property: 'data',
//               autoFetch: false,
//           },
//           endpoints: {
//               login: { url: '/api/v2/auth/login', method: 'post' },
//               logout: { url: '/api/v2/auth/logout', method: 'post' },
//               user: { url: '/api/v2/users/profile/profile', method: 'post' },
//           },
//       },
//   },
//   // @ts-ignore
//   redirect: {
//       login: '/auth/login',
//       logout: '/auth/login',
//       home: '/dashboard',
//   },
//   globalMiddleware: true,
//   autoLogout: false,
//   watchLoggedIn: true,
//   resetOnError: false,
// },
// nitro: {
//   compressPublicAssets: true,
//   esbuild: {
//       options: {
//           target: 'esnext',
//       },
//   },
// },
// i18n: {
//   experimental: {
//       jsTsFormatResource: true,
//   },
//   strategy: 'prefix_except_default',
//   defaultLocale: 'fa',
//   locales: [
//       {
//           name: 'English',
//           code: 'en',
//           iso: 'en',
//           dir: 'ltr',
//           file: 'en.json',
//       },
//       {
//           name: 'فارسی',
//           code: 'fa',
//           iso: 'fa',
//           dir: 'rtl',
//           file: 'fa.json',
//       },
//   ],
//   lazy: true,
//   langDir: './lang',
//   detectBrowserLanguage: {
//       useCookie: true,
//       cookieKey: 'i18n_redirected',
//       redirectOn: 'root', // recommended
//   },
// },
// proxy: {
//   proxies: {
//       '/api/v2': {
//           target: process.env.API_BASE_URL,
//           changeOrigin: true,
//           rewrite: (path: string) => path.replace(/^\/api/, ''),
//       },
//   },
// },
proxy: {
  proxies: {
      '/api': {
          target: process.env.API_BASE_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
  },
},

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
