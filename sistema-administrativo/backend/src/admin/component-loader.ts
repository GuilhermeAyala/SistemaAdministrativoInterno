import { fileURLToPath } from 'node:url';

import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

const helloComponentPath = fileURLToPath(
  new URL('../ComponentesAdm/hello.js', import.meta.url),
  
);

const colaboradoresComponentPath = fileURLToPath(
  new URL('../ComponentesAdm/listaColaboradores.js', import.meta.url),
);

const Components = {
  MyFirstComponent: componentLoader.add(
    'ComponenteTeste',
    helloComponentPath,
  ),
  ColaboradoresComponent: componentLoader.add(
    'Colaboradores', 
    colaboradoresComponentPath,
  )
};

export { Components };
export default componentLoader;
