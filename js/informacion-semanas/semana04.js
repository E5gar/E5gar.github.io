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
  ],
  right: [],
};
