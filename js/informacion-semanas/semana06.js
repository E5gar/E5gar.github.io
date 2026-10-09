window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[6] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar Aplicaciones con Eventos, Condicionales y Bucles con Framework JS',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>Función de Renderizado</b> <br> Función que se encargada de modificar el DOM con el código HTML de un componente, sobre un elemento con id root o main en la mayoría de las veces. ReactDOM.render() recibe dos argumentos, siendo el primero el componente a presentar y el segundo el elemento HTML que será modificado. En las versiones recientes de React se emplea createRoot().render() con el mismo objetivo.',
    },
    {
      text: '<b>Web Components</b> <br> Elementos personalizados y reutilizables que tienen su propio HTML, CSS y JavaScript bajo una etiqueta propia. React adopta esta idea a través del uso de componentes que permiten renderizar DOM en una página web.',
    },
    {
      text: '<b>DOM Virtual, Diffing y Reconciliación</b> <br> El DOM virtual es una copia del DOM que React mantiene en memoria. Cada vez que un componente cambia se genera uno nuevo, de tal manera que no se modifica el DOM real en cada cambio, puesto que resultaría costoso a nivel computacional para el navegador.',
      table: {
        headers: ['Etapa', 'Función'],
        rows: [
          ['Generación', 'React crea un DOM virtual cuando un componente cambia'],
          ['Diffing', 'Compara el DOM virtual con el anterior para detectar diferencias'],
          ['Reconciliación', 'Actualiza en el DOM real solo las partes que cambiaron'],
        ],
        caption: 'Proceso de actualización del DOM en React',
      },
    },
    {
      text: '<b>Creación e Invocación de Componentes</b> <br> Un componente se crea en un archivo con extensión .js, .jsx, .ts o .tsx, y su nombre debe empezar con una letra mayúscula. Por ejemplo, se crea el archivo src/components/Component01.jsx y luego es llamado desde otro componente ya sea &lt;Component01 /&gt; o con apertura y cierre.',
    },
    {
      text: '<b>Estructura de un Componente</b> <br> Todo componente está conformado por tres partes, código HTML que define aquello que se presenta, código JavaScript que contiene la lógica y el código CSS para estilo.',
    },
    {
      text: '<b>Componentes de Clase y de Función</b> <br> Existen dos formas de escribir un componente. Los componentes de función requieren usan menos código y son más fáciles de entender, por lo que son los más usados hoy en día.',
      table: {
        headers: ['Tipo', 'Sintaxis', 'Característica'],
        rows: [
          [
            'Clase',
            'class Nombre extends React.Component { render() { } }',
            'Requiere el método render para retornar un HTML',
          ],
          [
            'Función',
            'function Nombre() { } o const Nombre = () => { }',
            'Retorna el HTML con return',
          ],
        ],
        caption: 'Diferencia entre componentes de clase y de función',
      },
    },
    {
      text: '<b>Expresiones en JSX</b> <br> Las llaves { } permiten ejecutar JS dentro del JSX, gracias a ello se pueden pasar variables, insertar atributos en etiquetas así como ejecutar código. Una variable que almacena etiquetas HTML se escribe sin comillas.',
      table: {
        headers: ['Uso', 'Ejemplo'],
        rows: [
          ['Insertar variable', '&lt;h1&gt;Bienvenido {usuario}&lt;/h1&gt;'],
          ['Insertar atributo', '&lt;h1 id={myId}&gt;Bienvenido&lt;/h1&gt;'],
          ['Ejecutar JavaScript', '&lt;h1&gt;Año {2000 + 24}&lt;/h1&gt; que devuelve 2024'],
        ],
        caption: 'Uso de llaves en JSX',
      },
    },
    {
      text: '<b>Fragment</b> <br> Cuando un componente retorna un bloque extenso de HTML se emplean paréntesis después del return. Dicho bloque debe ser envuelto con un elemento de nivel superior como lo puede ser un div o un Fragment escrito como &lt;&gt; &lt;/&gt;, que agrupa los elementos sin generar una etiqueta adicional en el DOM.',
    },
    {
      text: '<b>Componentes en TypeScript</b> <br> Un componente JSX se traduce a TypeScript cambiando la extensión a .tsx y agregando el tipado de variables y props. Un elemento HTML guardado en una variable se tipa como JSX.Element. De esta manera se pueden detectar errores antes de la ejecución.',
    },
    {
      text: '<b>Tailwind CSS en Vite</b> <br> Para usar Tailwind dentro de un proyecto React se requiere de tres pasos en la carpeta del proyecto.',
      table: {
        headers: ['Paso', 'Acción'],
        rows: [
          [
            'Instalación',
            'npm install -D tailwindcss postcss autoprefixer y luego npx tailwindcss init -p, que crea tailwind.config.js y postcss.config.js',
          ],
          [
            'Configuración',
            'Agregar en content de tailwind.config.js las rutas tanto de index.html como de los archivos jsx de src',
          ],
          [
            'Directivas',
            'Agregar @tailwind base, @tailwind components y @tailwind utilities en src/index.css',
          ],
        ],
        caption: 'Configuración de Tailwind CSS en Vite',
      },
    },
    {
      text: '<b>Componentes Anidados</b> <br> Un componente puede invocar a otros componentes formando así una cadena como el componente 1 que contiene al 2, este al 3 y así sucesivamente. Cuando un dato debe llegar hasta el último componente de la cadena se envía como props a través de cada nivel, dicha técnica se conoce como prop drilling.',
    },
    {
      text: '<b>Comunicación entre Componentes</b> <br> Los props van desde padre a hijo, por lo que para el sentido contrario se requiere que el padre envía una función como prop y el hijo la ejecute con el dato a transferir. Para comunicar dos componentes tipo hermanos, el dato pasa primero al padre y desde allí se envía al otro hermano.',
    },
    {
      text: '<b>Eventos</b> <br> Acciones que realiza el usuario sobre la interfaz tal como hacer clic, escribir en un campo o enviar un formulario. En React se nombran en camelCase y se les asigna una función entre llaves.',
      table: {
        headers: ['Evento', 'Se activa cuando'],
        rows: [
          ['onClick', 'El usuario hace clic sobre un elemento'],
          ['onChange', 'Cambia el valor de un campo'],
          ['onSubmit', 'Se envía un formulario'],
          ['onMouseOver', 'El cursor pasa sobre un elemento'],
        ],
        caption: 'Eventos principales en React',
      },
    },
    {
      text: '<b>Hook useState</b> <br> Función de React que permite que un componente guarde datos que cambian a lo largo del tiempo. Devuelve un par con el valor actual y la función para actualizarlo y cada vez que se actualiza el componente este vuelve a renderizar con el proceso del DOM virtual.',
    },
    {
      text: '<b>Hook useEffect</b> <br> Permite ejecutar acciones secundarias luego de que el componente se presenta en pantalla como lo puede ser consultar una API. Recibe una función y un arreglo de dependencias y si este se encuentra vacío la acción se ejecuta solo una vez al cargar el componente.',
    },
    {
      text: '<b>Renderizado Condicional</b> <br> Permite decidir qué parte de la interfaz se presenta según una condición. La sentencia if no puede escribirse dentro del HTML, por lo que se usa antes del return para determinar qué componente retornar o también se puede usar el operador ternario y el operador && dentro del JSX.',
      table: {
        headers: ['Técnica', 'Sintaxis', 'Uso'],
        rows: [
          ['if', 'if (condicion) { return ... }', 'Elegir qué componente retornar'],
          [
            'Ternario',
            'condicion ? expresionTrue : expresionFalse',
            'Presentar una de dos opciones',
          ],
          ['Operador &&', 'condicion && expresionTrue', 'Presentar algo solo si se cumple'],
        ],
        caption: 'Formas de renderizado condicional',
      },
    },
    {
      text: '<b>Renderizado Iterativo con Map</b> <br> El método map recorre un arreglo y devuelve un elemento JSX por cada uno de sus datos para así evitar repetir código. Cada elemento generado debe llevar un atributo key con un valor único como el id para que React pueda identificar cuál ha cambiado.',
    },
    {
      text: '<b>Formularios Controlados</b> <br> Tipo de formulario cuyo campo está vinculado a un estado. El atributo value toma el dato del estado y el evento onChange lo actualiza con lo que escribe el usuario, de esta manera React tiene el control del dato en todo momento. En el evento onSubmit se emplea preventDefault() para evitar que la página se recargue.',
    },
    {
      text: '<b>Routing</b> <br> Mecanismo que permite navegar entre distintas vistas de una SPA sin recargar la página presentando un componente distinto según la ruta de la URL. En React se emplea la librería de React Router.',
      table: {
        headers: ['Elemento', 'Función'],
        rows: [
          ['BrowserRouter', 'Habilita la navegación dentro de la aplicación'],
          ['Routes', 'Agrupa todas las rutas disponibles'],
          ['Route', 'Asocia una ruta con el componente a presentar'],
          ['Link', 'Crea un enlace de navegación sin recargar la página'],
        ],
        caption: 'Elementos principales de React Router',
      },
    },
    {
      text: '<b>Consumo de APIs</b> <br> Una API es una interfaz que permite que dos aplicaciones intercambien datos. Consumirla es que la aplicación frontend envíe una petición HTTP a una dirección y luega reciba una respuesta en formato JSON la mayoría de las veces.',
      table: {
        headers: ['Método HTTP', 'Función'],
        rows: [
          ['GET', 'Obtener datos'],
          ['POST', 'Enviar datos nuevos'],
          ['PUT', 'Actualizar datos existentes'],
          ['DELETE', 'Eliminar datos'],
        ],
        caption: 'Métodos HTTP principales para consumir una API',
      },
    },
    {
      text: '<b>Promesas</b> <br> Objeto que representa el resultado futuro de una operación asíncrona. Se resuelve con then para el resultado y con catch en caso de error.',
      table: {
        headers: ['Estado', 'Significado'],
        rows: [
          ['Pending', 'La operación aún está en curso'],
          ['Fulfilled', 'La operación terminó con éxito'],
          ['Rejected', 'La operación terminó con un error'],
        ],
        caption: 'Estados de una Promesa',
      },
    },
    {
      text: '<b>Async - Await</b> <br> Sintaxis que permite escribir código asíncrono. Una función marcada con async permite usar await, que pausa su ejecución hasta que la promesa sea resuelta. Los errores se capturan mediante bloque de try-catch.',
    },
    {
      text: '<b>Obtención de Datos Fetch</b> <br> Fetch es la función nativa del navegador para realizar peticiones HTTP y devuelve una promesa. La respuesta debe ser convertida con response.json() y no es considerado error cuando el servidor responde códigos como 404, por lo que se debe verificar con response.ok.',
    },
    {
      text: '<b>Librería Axios</b> <br> Librería cliente HTTP basada en promesas que se instala con npm install axios. Permite simplicar el consumo de APIs dado que convierte automáticamente la respuesta a JSON, entregando datos en response.data y además considera el error a códigos de fallo que responda el servidor.',
      table: {
        headers: ['Aspecto', 'Fetch', 'Axios'],
        rows: [
          ['Instalación', 'Nativo del navegador', 'Requiere npm install axios'],
          ['Conversión a JSON', 'Con response.json()', 'Automática en response.data'],
          ['Errores HTTP', 'Se verifica con response.ok', 'Se capturan con catch'],
        ],
        caption: 'Diferencia entre Fetch y Axios',
      },
    },
    {
      text: '<b>Estados de Carga y Error</b> <br> Al consumir una API los datos no llegan de inmediato, por lo que se manejan tres estados, uno para datos, otro para carga y otro para error. Gracias al renderizado condicional se presenta un mensaje de carga mientras se espera, un mensaje de error si falla, y finalmente los datos recorridos con map.',
    },
    {
      subtitle: 'Procedimiento',
    },
    {
      text: '1. Desarrollo de clases en hora de teoría <br> 2. Desarrollo de clases en hora práctica <br> 3. Realización de la práctica calificada <br> 4. Realización de la práctica de laboratorio <br> 5. Actualización del cuaderno de la asignatura',
      image: {
        src: 'assets/images/Semana06/Semana06Teoria.jpeg',
        alt: 'Desarrollo de clases teóricas',
        side: 'right',
        tilt: -6,
      },
    },
  ],
  right: [
    {
      chip: 'Ejercicios de Laboratorio',
    },
    {
      title: '1. Ejercicios de la Práctica Componentes, JSX, TypeScript y Estilos en React',
      subtitle:
        'Resolución de 5 ejercicios sobre componentes, props, children y renderizado de datos',
      text: 'Se desarrollaron 5 ejercicios en React aplicando la creación de componentes en archivos JSX y la transferencia de datos mediante props. En el 1ro se maquetó una aplicación con diseño responsivo para PC, tablet y móvil, creando 7 componentes, uno por cada sección, con estilos en CSS y media queries. En el 2do se anidaron 4 componentes, donde el componente 1 contiene al 2 hasta llegar al 4, y se envió un objeto con nombre, dirección y ciudad a través de cada nivel mediante props para visualizarlo en un card en el último componente. En el 3ro se creó un componente padre y un hijo, donde el padre envió una función como prop para que el hijo transfiriera un dato hacia él y este fuera renderizado por el padre. En el 4to se crearon un componente padre y dos hijos, donde el nombre y apellido del hermano 1 se enviaron al padre y desde allí hacia el hermano 2. Finalmente, en el 5to se renderizaron los datos de un arreglo de 4 estudiantes con id, name y city recorridos con map, presentándolos en una tabla con estilos CSS.',
      image: {
        src: 'assets/images/Semana06/Semana06React5Ejercicios.png',
        alt: 'Página web desarrollada con JavaScript',
        side: 'right',
        tilt: -3,
      },
      pdf: {
        src: 'assets/files/Semana06/Semana06A Jsx Components React.pdf',
      },
    },
    {
      title:
        '2. Práctica Framework JS: Eventos, Renderizado Condicional/Iterativo, Formularios, Routing y Consumo de APIs (Async/Await, Axios)',
      subtitle: 'Caso de una Página Web de Reserva de Sitios Turísticos',
      text: 'Desarrollo de una SPA con React y Vite para la reserva de sitios turísticos. Se instalaron las librerías react-router-dom y axios, y se organizó el proyecto en src/pages, src/components, src/services y src/hooks. El enrutamiento se agregó con BrowserRouter, Routes, Route y NavLink, creando las páginas Home, List, Form y NotFound para las rutas no existentes. El consumo de la API se realizó con axios y async/await dentro de un useEffect, controlando estados de loading, data y error. Los datos se presentaron con renderizado iterativo mediante map con key y renderizado condicional con el operador && y ternario, mientras que la reserva se registró a través de un formulario con useState. Finalmente, se validó el flujo de datos y auditaron las peticiones de red en las DevTools del navegador y el estado de la interfaz con la extensión React DevTools.',
      image: {
        src: 'assets/images/Semana06/Semana06ReservaTurismo.png',
        alt: 'Página web de turismo desarrollada con React',
        side: 'left',
        tilt: 3,
      },
    },
    {
      chip: 'Resultados',
    },
    {
      title: '1. Ejercicios de la Práctica Componentes, JSX, TypeScript y Estilos en React',
      text: 'Enlace en <a href="https://github.com/E5gar/Ejercicio01React" target="_blank">GitHub</a> <br> Enlace en <a href="https://e5gar.github.io/Ejercicio01React/" target="_blank">GitHub Pages</a>',
    },
    {
      text: 'A. Aplicación Web con Diseño Responsive',
      image: {
        src: 'assets/images/Semana06/Semana06Ejercicio01.png',
        alt: 'Página web React con Diseño Responsive',
        side: 'right',
        tilt: -3,
      },
    },
    {
      text: 'B. Aplicación Web con Componentes Anidados',
      image: {
        src: 'assets/images/Semana06/Semana06Ejercicio02.png',
        alt: 'Página web React con Componentes Anidados',
        side: 'left',
        tilt: 3,
      },
    },
    {
      text: 'C. Aplicación Web con Componente Padre e Hijo',
      image: {
        src: 'assets/images/Semana06/Semana06Ejercicio03.png',
        alt: 'Página web React con Componente Padre e Hijo',
        side: 'right',
        tilt: -3,
      },
    },
    {
      text: 'D. Aplicación Web con Componentes 1 Padre y 2 Hijos',
      image: {
        src: 'assets/images/Semana06/Semana06Ejercicio04.png',
        alt: 'Página web React con Componentes 1 Padre y 2 Hijos',
        side: 'left',
        tilt: 3,
      },
    },
    {
      text: 'E. Aplicación Web de Datos de Estudiantes',
      image: {
        src: 'assets/images/Semana06/Semana06Ejercicio05.png',
        alt: 'Página web React con Datos de Estudiantes',
        side: 'right',
        tilt: -3,
      },
    },
    {
      title:
        '2. Práctica Framework JS: Eventos, Renderizado Condicional/Iterativo, Formularios, Routing y Consumo de APIs (Async/Await, Axios)',
      text: 'Enlace en <a href="https://github.com/E5gar/GuiaPracticaSemana06" target="_blank">GitHub</a> <br> Enlace en <a href="https://e5gar.github.io/GuiaPracticaSemana06/" target="_blank">GitHub Pages</a>',
      image: {
        src: 'assets/images/Semana06/Semana06ReservaTurismo02.png',
        alt: 'Página web de turismo desarrollada con React',
        side: 'left',
        tilt: 3,
      },
      pdf: {
        src: 'assets/files/Semana06/PRACTICA_SEMANA_06_GAGO_URIBE_EDGAR_ROBERT.pdf',
      },
    },
  ],
};
