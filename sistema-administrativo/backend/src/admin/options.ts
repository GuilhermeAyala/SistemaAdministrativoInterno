import { AdminJSOptions } from 'adminjs';

import componentLoader, { Components } from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  dashboard: {
    component: Components.MyFirstComponent,
  },
  pages: {
    colaboradores: {
      icon: 'User',
      component: Components.ColaboradoresComponent,
    },
  },
  locale: {
    language: 'pt-BR',
    translations: {
      pages: {
        colaboradores: 'Colaboradores',
      },
    },
  },
  resources: [],
  databases: [],
};

export default options;
