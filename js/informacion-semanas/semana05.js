window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[5] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar una Aplicación Frontend con Framework JavaScript',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>React</b> <br> Es una librería de código JavaScript para crear interfaces de usuario, permite a su vez construir componentes de interfaz de tal manera que sean reutilizables. Ha sido creado por Jordan Walke y utilizada por primera vez en 2011 por Facebook. Se liberó en Julio de 2013 y cada cierto tiempo recibe actualizaciones.',
    },
    {
      text: '<b>SPA - Aplicación de Página Única</b> <br> Es una aplicación web que carga una sola página con JavaScript y que actualiza el contenido sin necesidad de recargar el navegador, mejorando tanto rendimiento y uso. React es una herramienta que permite desarrollar SPA.',
    },
    {
      text: '<b>Librería y Framework</b> <br> Una librería es un conjunto de funciones que el desarrollador agrega cuando necesita, mientras que un framework define la estructura de la aplicación, este mismo se encarga de usar el código indicado por el desarrollador. Dicho principio se conoce como Inversión de Control. React es técnicamente una librería, pero con todas sus herramientas se emplea como un framework.',
      table: {
        headers: ['Aspecto', 'Librería', 'Framework'],
        rows: [
          ['Control del flujo', 'Lo tiene el desarrollador', 'Lo tiene el framework'],
          ['Estructura', 'Libre', 'Definida por el framework'],
          ['Ejemplo', 'React', 'Next.js y Angular'],
        ],
        caption: 'Diferencia entre Librería y Framework',
      },
    },
    {
      text: '<b>Client Side Rendering</b> <br> Es el modelo donde el servidor presenta un HTML casi vacío y un archivo JavaScript, el navegador también se encarga de presentar la interfaz. Luego de una carga inicial, la navegación se vuelve más rápida, reduciendo así la carga del servidor a costa de que el primer acceso sea más lento y que también sea vea afectado el posicionamiento SEO. La contraparte es el Server Side Rendering, donde el HTML es construido por el servidor, como en Next.js.',
    },
    {
      text: '<b>Node.js</b> <br> Es un entorno que permite ejecutar JavaScript fuera del navegador a nivel del sistema operativo. Se recomienda instalar la versión LTS. El proceso consiste en descargar, ejecutar el instalador y comprobar la instalación desde la terminal con node -v.',
    },
    {
      text: '<b>NPM</b> <br> Es un gestor de paquetes incluido en Node.js que se emplea para instalar, actualizar y eliminar las dependencias de un proyecto. Las dependencias se registran en el archivo package.json y sus archivos se descargan en la carpeta node_modules.',
    },
    {
      text: '<b>Gestión de Dependencias</b> <br> Es el control de las librerías de las cuales depende un proyecto. Una herramienta de creación de proyectos inicializa el package.json e instala las dependencias necesarias de tal manera que el entorno de desarrollo esté configurado desde el inicio.',
    },
    {
      text: '<b>Herramientas del Entorno de Desarrollo</b> <br> Cada etapa del trabajo con React requiere de una herramienta.',
      table: {
        headers: ['Etapa', 'Función', 'Herramienta'],
        rows: [
          [
            'Inicialización',
            'Crea el package.json e instala las librerías',
            'Create React App, Vite',
          ],
          [
            'Compilación',
            'Agrupa el código fuente en archivos listos para distribuir',
            'Webpack, Turbopack, Rollup',
          ],
          [
            'Transpilación',
            'Transforma JS y JSX de última generación a código compatible con cualquier navegador',
            'Babel, SWC',
          ],
          [
            'Calidad de código',
            'Analiza el código de forma estática y da formato',
            'ESLint, Prettier',
          ],
          ['Control de versiones', 'Automatizar procesos', 'Git, Husky'],
        ],
        caption: 'Herramientas de React',
      },
    },
    {
      text: '<b>Compilador y Empaquetador</b> <br> Webpack, Turbopack y Rollup toman los archivos JSX, TSX, JS e imágenes y los combinan en archivos JS y CSS optimizado que forman de la SPA. Babel se encarga de la transpilación, permitiendo usar sintaxis moderna y JSX para garantizar la compatibilidad con navegadores antiguos.',
    },
    {
      text: '<b>Linter</b> <br> ESLint es una herramienta que ausculta el código en busca tanto de errores como de malas prácticas. Se complementa con Prettier para formatear el código.',
    },
    {
      text: '<b>SASS</b> <br> Syntactically Awesome Style Sheets. Es un metalenguaje de hojas de estilo que usa variables, anidamiento y reutiliza CSS, que posteriormente se compila a un CSS estándar.',
    },
    {
      text: '<b>Herramientas Complementarias</b> <br> Favicon es el ícono de 32x32 o 16x16 píxeles que identifica la pestaña del navegador. Font Awesome ofrece íconos como fuente tipográfica que no requieren de JavaScript. Así también se emplean los servicios de Google como Maps, Fonts, Analytics, Trends y las herramientas para webmasters.',
    },
    {
      text: '<b>Herramientas de Creación de Proyectos React</b> <br> Permiten generar la estructura de una aplicación con el entorno configurado.',
      table: {
        headers: ['Herramienta', 'Descripción'],
        rows: [
          ['Create React App', 'Herramienta actualmente obsoleta'],
          ['Vite', 'Herramienta rápida siendo la más usada actualmente'],
          ['Next.js', 'Framework con renderizado en servidor'],
          ['Gatsby', 'Generador de sitios estáticos'],
          ['Blitz.js', 'Framework full-stack basado en Next.js'],
          ['Remix Run', 'Framework full-stack centrado en rutas y carga de datos'],
          ['Hydrogen', 'Framework de Shopify para tiendas en línea'],
        ],
        caption: 'Herramientas de instalación de React',
      },
    },
  ],
  right: [],
};
