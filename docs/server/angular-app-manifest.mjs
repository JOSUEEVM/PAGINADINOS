
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PAGINADINOS/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/PAGINADINOS/menu",
    "route": "/PAGINADINOS"
  },
  {
    "renderMode": 2,
    "route": "/PAGINADINOS/menu"
  },
  {
    "renderMode": 2,
    "route": "/PAGINADINOS/modal"
  },
  {
    "renderMode": 2,
    "route": "/PAGINADINOS/promotion"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 633, hash: '112ba68675bd72dfb2514859f2362ee2980263d74804c7db9e0164733e52aced', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: 'bc81d93781be845f6996890167932697a19121fbf6e739ad6035c8edd761524b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'promotion/index.html': {size: 11270, hash: '422928e3b7accfa2f2c08a2d284e1f10f2f89d2702c06aa45abf487982f43594', text: () => import('./assets-chunks/promotion_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 20925, hash: '3092b1df76c818e15f93f2ea336496c73a338dcb4c468505578a604d0711504f', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'modal/index.html': {size: 12778, hash: 'de13cf732f41f5e83fce058a9fcd0d9c258840e37f07980bf539adf19c62aafb', text: () => import('./assets-chunks/modal_index_html.mjs').then(m => m.default)},
    'styles-AOCQ4RV4.css': {size: 63, hash: '6qtwwzt2m/4', text: () => import('./assets-chunks/styles-AOCQ4RV4_css.mjs').then(m => m.default)}
  },
};
