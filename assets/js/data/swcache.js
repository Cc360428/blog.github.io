const resource = [

  /* --- CSS --- */
  '/blog.github.io/assets/css/style.css',

  /* --- PWA --- */
  '/blog.github.io/app.js',
  '/blog.github.io/sw.js',

  /* --- HTML --- */
  '/blog.github.io/index.html',
  '/blog.github.io/404.html',
  
    '/blog.github.io/categories/',
  
    '/blog.github.io/tags/',
  
    '/blog.github.io/archives/',
  
    '/blog.github.io/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/blog.github.io/assets/img/favicons/1apple-touch-icon.png',
    '/blog.github.io/assets/img/favicons/android-chrome-192x192.png',
    '/blog.github.io/assets/img/favicons/android-chrome-512x512.png',
    '/blog.github.io/assets/img/favicons/apple-touch-icon.png',
    '/blog.github.io/assets/img/favicons/favicon-16x16.png',
    '/blog.github.io/assets/img/favicons/favicon-32x32.png',
    '/blog.github.io/assets/img/favicons/favicon.ico',
    '/blog.github.io/assets/img/favicons/mstile-150x150.png',
    '/blog.github.io/assets/js/dist/categories.min.js',
    '/blog.github.io/assets/js/dist/commons.min.js',
    '/blog.github.io/assets/js/dist/home.min.js',
    '/blog.github.io/assets/js/dist/misc.min.js',
    '/blog.github.io/assets/js/dist/page.min.js',
    '/blog.github.io/assets/js/dist/post.min.js',
    '/blog.github.io/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'cc360428.github.io',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

