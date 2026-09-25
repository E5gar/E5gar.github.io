window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[4] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar una Página Web Frontend con JavaScript y TypeScript',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>Motores de JavaScript</b> <br> Es el software encargado de procesar y convertir el código JavaScript en instrucciones de código máquina mediante la compilación Just-In-Time. Entre los principales motores se encuentran V8 para Google Chrome, Edge y Node.js, SpiderMonkey para Mozilla Firefox y JavaScriptCore para Safari. La arquitectura se compone de un Call Stack usado para gestionar la pila de ejecución y Memory Heap para asignación dinámica.',
    },
    {
      text: '<b>Declaración de Variables</b> <br> Permiten reservar espacio en memoria para almacenar datos. Gracias al estándar ECMAScript 6 se solucionan los problemas de alcance global al incorporar let y const con ámbito de bloque.',
      table: {
        headers: ['Palabra clave', 'Ámbito', 'Reasignable', 'Hoisting'],
        rows: [
          ['var', 'Función y Global', 'Sí', 'Sí'],
          ['let', 'Bloque { }', 'Sí', 'Sí'],
          ['const', 'Bloque { }', 'No', 'Sí'],
        ],
        caption: 'Comparación de declaración de variables en JavaScript',
      },
    },
    {
      text: '<b>Tipos de Datos</b> <br> JavaScript es de tipado dinámico. Los datos se clasifican en tipos primitivos inmutables como Number, String, Boolean, Undefined, Null, Symbol, BigInt, y tipos referenciales como Objetos, Arreglos y Funciones. Los operadores permiten transformar dichos datos, asimismo existe diferencias al usar el comparador de estricta igualdad === y el de igualdad laxa ==, ya que este último realiza una coerción de tipos.',
    },
    {
      text: '<b>TypeScript</b> <br> Es un superconjunto tipado de código abierto desarrollado sobre JavaScript. Agrega tipado estático, interfaces y verificación de tipos en tiempo de desarrollo. Requiere de un compilador para llevarse a JavaScript que sea ejecutable por los navegadores.',
    },
    {
      text: '<b>Estructuras de Control</b> <br> Controlan el flujo de ejecución mediante sentencias condicionales if-else, switch y operador ternario, así como bucles iterativos for, while y do-while. Además, incorpora for...of para recorrer colecciones iterables y for...in para iterar sobre los nombres de propiedades de un objeto.',
    },
    {
      text: '<b>Funciones</b> <br> Las funciones son tratadas como valores de primer orden, por lo que pueden asignarse a variables, pasar argumentos y devolverse a partir de otras funciones.',
      table: {
        headers: ['Tipo de Función', 'Sintaxis', 'Uso'],
        rows: [
          [
            'Declarativa',
            'function nombre() { }',
            'Funciones globales y reutilizables con hoisting',
          ],
          ['Anónima', 'const f = function() { }', 'Asignación de variables y parámetros'],
          ['Flecha', '() => { } con retorno implícito', 'Binding de this'],
          ['Auto-invocada', '(function() { })()', 'Aislamiento de variables'],
          ['Closure', 'Función anidada con acceso al padre', 'Encapsulamiento de métodos privados'],
        ],
        caption: 'Tipos de funciones en JavaScript',
      },
    },
    {
      text: '<b>Funciones Closures</b> <br> Es la fusión de una función y el ámbito en el cual ha sido creada. Permite que la función acceda a las variables del ámbito de una función externa contenedora, aun después de que dicha función exterior haya culminado su ejecución.',
    },
    {
      text: '<b>Manipulación del DOM con JavaScript</b> <br> Conjunto de interfaces de programación que permiten modificar la estructura, contenido y apariencia de los elementos visuales de la página web mediante métodos.',
      table: {
        headers: ['Acción', 'Método', 'Función'],
        rows: [
          [
            'Selección',
            'querySelector() y querySelectorAll()',
            'Selecciona nodos con selectores CSS',
          ],
          ['Contenido', 'textContent', 'Inserta texto plano e interpreta código HTML'],
          ['Clases y Estilos', 'classList', 'Modifica estilos CSS'],
          [
            'Interactividad',
            'addEventListener("evento", callback)',
            'Registra listeners de eventos del usuario',
          ],
        ],
        caption: 'Métodos principales para manipulación del DOM',
      },
    },
    {
      text: '<b>API Canvas de HTML5</b> <br> Elemento gráfico que proporciona una superficie de dibujo rasterizada en mapa de bits. A través de del contexto bidimensional getContext("2d"), JavaScript proporciona métodos para trazar líneas, arcos, curvas, rectángulos y degradados.',
    },
    {
      text: '<b>Animaciones y Gráficos con Canvas</b> <br> La generación de movimiento se implementa creando un bucle continuo de renderizado mediante la función window.requestAnimationFrame(), la cual sincroniza los cuadros de animación con la frecuencia de actualización del monitor, aplicando un ciclo de limpiar el lienzo con clearRect(), actualizar las variables de posición y redibujar los objetos.',
    },
    {
      subtitle: 'Procedimiento',
    },
    {
      text: '1. Desarrollo de clases en hora de teoría <br> 2. Desarrollo de clases en hora práctica <br> 3. Realización de la práctica calificada <br> 4. Realización de la práctica de laboratorio <br> 5. Actualización del cuaderno de la asignatura',
      image: {
        src: 'assets/images/Semana04/Semana04Teoria.jpeg',
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
      title: '1. Práctica Calificada Grupal 03',
      subtitle: 'Ruleta Interactiva y Sorteador de Equipos con JavaScript',
      text: 'Trabajo desarrollado en equipo de 4 integrantes, donde cada uno colaboró en su propia rama de GitHub para el desarrollo de una ruleta dividida en sectores con distribución cíclica de 5 colores y puntero triangular, con un textarea multifila y persistencia en localStorage, controlada mediante atajos de teclado, y el desarrollo de un sorteador aleatorio hasta de 100 participantes, parámetros de número de grupos, integrantes por equipo, renderizando a los miembros uno a uno en tarjetas, botones para exportar el resultado en formato JPG y copiar la lista al portapapeles. Desarrollados solo con HTML5, CSS3 y JavaScript.',
      image: {
        src: 'assets/images/Semana04/Semana04PracticaCalificada03.png',
        alt: 'Aplicación de ruleta y sorteador de equipos con JavaScript',
        side: 'right',
        tilt: -4,
      },
    },
    {
      title:
        '2. Práctica JavaScript y TypeScript, Manipulación del DOM, Funciones Avanzadas, Canvas API y Animaciones',
      subtitle: 'Caso de una Tienda Online de Renta de Vehículos en Huancayo',
      text: 'Desarrollo de una tienda con catálogo de vehículos, usando JavaScript y tipado estático con TypeScript. Se usaron funciones autoinvocadas IIFE para el scope y closures para encapsular el estado de los vehículos y la animación entre fotogramas. La interfaz gestiona el DOM mediante selectores querySelector, vinculación de eventos con funciones flecha y modificación de variables CSS. La simulación se desarrolló con la API Canvas 2D mediante un bucle de renderizado con window.requestAnimationFrame() y sincronizada con delta time (dt) para desplazamiento fluido a 60 FPS. Finalmente, se realizaron pruebas de perfilado en DevTools con Memory Snapshot y Performance.',

      image: {
        src: 'assets/images/Semana04/Semana04RentaTienda.png',
        alt: 'Página web desarrollada con JavaScript',
        side: 'left',
        tilt: 3,
      },
    },
    {
      chip: 'Resultados',
    },
    {
      title: '1. Práctica Calificada Grupal 03',
      text: 'Enlace en <a href="https://github.com/E5gar/PracticaCalificada03" target="_blank">GitHub</a> <br> Enlace en <a href="https://e5gar.github.io/PracticaCalificada03/" target="_blank">GitHub Pages</a>',
    },
    {
      title: '2. Práctica JavaScript y TypeScript para Tienda de Renta de Vehículos',
      text: 'Enlace en <a href="https://github.com/E5gar/PracticaSemana04" target="_blank">GitHub</a> <br> Enlace en <a href="https://e5gar.github.io/PracticaSemana04/" target="_blank">GitHub Pages</a>',
      pdf: {
        src: 'assets/files/Semana04/PRACTICA_SEMANA_04_GAGO_URIBE_EDGAR_ROBERT.pdf',
      },
    },
    {
      chip: 'Reflexión',
    },
    {
      title: '¿Qué aprendió?',
      text: 'En esta semana aprendí los fundamentos del motor de ejecución de JavaScript V8, comprendiendo cómo funciona el Call Stack, Memory Heap y Event Loop para tareas asíncronas. Asimismo, profundicé en el manejo de variables con ámbito de bloque let y const, así como la importancia del tipado estático que aporta TypeScript frente a errores en tiempo de codificación. Entendí cómo una IIFE permite aislar el scope global y cómo los closures encapsulan y retienen estado privado entre ejecuciones. Asimismo, aprendí a manipular el DOM mediante selectores y clases dinámicas y a utilizar la API Canvas 2D con requestAnimationFrame y delta time (dt) para hacer animaciones fluidas a 60 FPS.',
    },
    {
      title: '¿Cómo aprendió?',
      text: 'En la hora de teoría se explicaron el ciclo de renderizado del navegador, motores JS y paradigmas funcionales. Este aprendizaje se puso en praxis durante la práctica calificada grupal, donde trabajamos en equipo usando ramas en GitHub para construir una ruleta y un sorteador de equipos con JavaScript. En la hora de práctica desarollamos paso a paso un lienzo con la API Canvas 2D usando closures, funciones flecha y bucles de animación. Finalmente, se validó el rendimiento utilizando las herramientas para desarrolladores de Chrome, analizando la cantidad de fotogramas en el panel Performance.',
    },
  ],
};
