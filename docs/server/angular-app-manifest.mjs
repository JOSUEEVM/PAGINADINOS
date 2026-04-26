
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
    "route": "/PAGINADINOS/aboutus"
  },
  {
    "renderMode": 2,
    "route": "/PAGINADINOS/conditions"
  },
  {
    "renderMode": 2,
    "route": "/PAGINADINOS/privacy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3988, hash: '189f58e6ae4293e121071908ff325d8682f27097d5460143e5038ece6a3c148b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4236, hash: '49b9d022ceb48f4d1e3e87cd95d97cca5e48b9961e51732d1d82eaac9610f34b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'conditions/index.html': {size: 19315, hash: '31fddb087baa1312744c974e56299d7408daa59cd2830036148a4ac2b04769ce', text: () => import('./assets-chunks/conditions_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 20992, hash: '7b9431b1cc95d981241c5246763f38361e3112e5fa471828de373b38a5083e26', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'modal/index.html': {size: 18918, hash: '8b07733775b4b578c2def8fd262e8f160ea6aa51cc063d6c9d9116dde546a0fc', text: () => import('./assets-chunks/modal_index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 17673, hash: '924aa42709ad886494b2fbe737b2176ecc7206217f1f2c195c21556a8cdc4115', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 41127, hash: 'd02f645e7123bfad1846df273dda55fefba75e742c4a97aa738dea72280e7bb8', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'styles-DVVSILEZ.css': {size: 229, hash: '2DrQgln/wDA', text: () => import('./assets-chunks/styles-DVVSILEZ_css.mjs').then(m => m.default)}
  },
};
