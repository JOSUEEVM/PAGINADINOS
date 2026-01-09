
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
    'index.csr.html': {size: 633, hash: 'cd8c96f899b2efb6d57b86a88e766ba911ac77834eebe58ff21c303bb2d7cc53', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: '707cea4219c1f5fcc82984556f54ef5237bb49e7b59ff2e5feffe9ce122de707', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'promotion/index.html': {size: 10903, hash: '9e392d97e5d18f58e837f719766704868689896e53b47d507d71c1c94c71c080', text: () => import('./assets-chunks/promotion_index_html.mjs').then(m => m.default)},
    'modal/index.html': {size: 11586, hash: 'ffc6ee71032528a0e44c5cc12a5e254622b2a9d21c202d5bd029c078e3355095', text: () => import('./assets-chunks/modal_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 20469, hash: '465f23170a6e3c714ea64ad3672265c163ec910b75e7e4346105b4dab60f028e', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'styles-AOCQ4RV4.css': {size: 63, hash: '6qtwwzt2m/4', text: () => import('./assets-chunks/styles-AOCQ4RV4_css.mjs').then(m => m.default)}
  },
};
