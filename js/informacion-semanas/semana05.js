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
    {
      text: '<b>Comandos de Instalación</b> <br> Cada herramienta tiene sus propios comandos para ser ejecutados en la terminal, se usa el término nombre-proyecto como nombre de la carpeta a crear.',
      table: {
        headers: ['Herramienta', 'Comandos'],
        rows: [
          [
            'Create React App',
            'npx create-react-app nombre-proyecto <br> cd nombre-proyecto <br> npm start',
          ],
          [
            'Vite',
            'npm create vite@latest nombre-proyecto <br> cd nombre-proyecto <br> npm install <br> npm run dev',
          ],
          [
            'Next.js',
            'npx create-next-app@latest nombre-proyecto <br> cd nombre-proyecto <br> npm run dev',
          ],
        ],
        caption: 'Comandos para crear un proyecto en React',
      },
    },
    {
      text: '<b>Estructura de Archivos</b> <br> Un proyecto React creado con Vite cuenta con carpetas y archivos diferentes a otras herramientas de instalación. El archivo index.html presenta un único div con id root, y es allí donde React carga toda la aplicación, por lo que todo se ejecuta dentro del mismo root.',
      table: {
        headers: ['Elemento', 'Función'],
        rows: [
          ['node_modules', 'Carpeta donde están todos los archivos de las dependencias'],
          ['package.json', 'Tiene nombre, scripts y dependencias del proyecto'],
          ['index.html', 'Contiene el div con id root'],
          ['src/main.jsx', 'Entrada que renderiza el componente App dentro del root'],
          ['src/App.jsx', 'Componente principal de la aplicación'],
        ],
        caption: 'Estructura de un proyecto con Vite',
      },
    },
    {
      text: '<b>Desarrollo Basado en Componentes</b> <br> Es un enfoque donde la interfaz se divide en piezas independientes y reutilizables que son denominadas componentes. En React un componente es una función de JavaScript cuyo nombre empieza con mayúscula y que retorna un JSX. Los componentes se anidan entre sí formando un árbol que parte desde el componente App.',
    },
    {
      text: '<b>JSX</b> <br> Es una extensión de sintaxis que permite escribir estructuras tipo HTML dentro de JavaScript. No es entendido directamente por el navegador, por lo que es transpilado por Babel o SWC. Todo componente debe retornar un único elemento raíz, y para insertar valores o expresiones de JavaScript se emplean llaves.',
      table: {
        headers: ['HTML', 'JSX'],
        rows: [
          ['class', 'className'],
          ['for', 'htmlFor'],
          ['onclick', 'onClick'],
          ['style="color: red"', 'style={{ color: "red" }}'],
          ['&lt;img&gt; sin cierre', '&lt;img /&gt; con cierre'],
        ],
        caption: 'Diferencias de sintaxis entre HTML y JSX',
      },
    },
    {
      text: '<b>Props</b> <br> Son los datos que un componente padre envía a un componente hijo, escritos como atributos en la etiqueta. El hijo los recibe como un objeto de solo lectura, por ende no puede modificarlos. Esto garantiza un flujo de datos de caracter unidireccional de padre a hijo, permitiendo reutilizar un mismo componente con distintos datos.',
    },
    {
      text: '<b>Children</b> <br> Es una prop especial que contiene todo lo que se escribe entre la etiqueta de apertura y cierre de un componente. Permite crear componentes contenedores tales como tarjetas o layouts que envuelven contenido estructurado por el componente padre.',
    },
    {
      text: '<b>Estilos en Framework JS</b> <br> React ofrece distintas formas de aplicar estilos, la elección de cada uno depende del alcance que se requiera.',
    },
    {
      text: '<b>Styles Inline</b> <br> Se aplican con el atributo style, que recibe un objeto de JavaScript con propiedades en camelCase, afentando solo a un elemento. No permiten usar pseudoclases ni media queries.',
    },
    {
      text: '<b>Style Sheets</b> <br> Son hojas de estilo CSS que se importan dentro del componente. Sus reglas son globales, por lo que existe el riesgo de que los nombres de clases de distintos componentes se solapen.',
    },
    {
      text: '<b>Styles Modules</b> <br> Son archivos con extensión .module.css cuyas clases están limitadas al componente que los importa dado que el compilador les asigna nombres únicos. Se aplican con className={styles.nombreClase} evitando que se solapen entre sí',
    },
    {
      text: '<b>Styled Components</b> <br> Es una librería de CSS-in-JS que permite escribir el CSS dentro del propio componente mediante plantillas de texto. Cada estilo se convierte en un componente y puede cambiar según las props.',
    },
    {
      text: '<b>Framework CSS en React</b> <br> Las librerías Bootstrap y Tailwind CSS también pueden usarse en React, ya sea instalándolas como dependencias con NPM o con CDN.',
      table: {
        headers: ['Estilo', 'Alcance', 'Característica'],
        rows: [
          ['Inline', 'Un solo elemento', 'Objeto JS'],
          ['Style Sheet', 'Global', 'CSS normal'],
          ['Style Module', 'Local al componente', 'Clases con nombres únicos'],
          ['Styled Components', 'Local al componente', 'CSS en JS'],
          ['Framework CSS', 'Global por clases', 'Componentes ya creados'],
        ],
        caption: 'Comparación de formas de aplicar estilos en React',
      },
    },
  ],
  right: [],
};
