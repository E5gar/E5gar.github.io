window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[3] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar una Página Web con Librería Tailwind CSS',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>Librería CSS</b> <br> Es un conjunto de elementos de estilo creados previamente por otra persona, se usan dado que permite reutilizar lo que ya existe y así no tener que diseñar cada elemento desde cero, por ende, reducir el tiempo de desarrollo de una aplicación web.',
    },
    {
      text: '<b>Bootstrap</b> <br> Librería CSS que proporciona componentes de navegación, cards, modals, forms, entre otros que pueden ser usados directamente en una página web.',
    },
    {
      text: '<b>Tailwind CSS</b> <br> Es una librería CSS en donde el estilo de cada elemento se aplica en las clases del HTML de manera independiente.',
      table: {
        headers: ['Comparativa', 'Bootstrap', 'Tailwind'],
        rows: [
          ['Función', 'Componentes previamente creados', 'Aplicado a clases'],
          ['Apariencia', 'Similar en distintas páginas web', 'Diseño único en cada página web'],
        ],
        caption: 'Diferencia entre Bootstrap y Tailwind',
      },
    },
    {
      text: '<b>Clases Utilitarias</b> <br> Representa el enfoque Utility - First en donde cada clase cuenta con una única función. El diseño sobre cada una de las clases permite obtener el diseño general de la página web.',
    },
    {
      text: '<b>Archivo de Configuración de Tailwind</b> <br> Archivo de extensión tailwind.config en donde se edita el diseño general de la página web, para usar colores generales, reemplazarlos, definir una tipografía, cantidad de espaciado y puntos para ajuste de interfaz para diseño responsive.',
    },
    {
      text: '<b>Control de Espaciado</b> <br> Escala numérica que se usa en Tailwind para definir tanto margen como relleno, cada uno equivale a 0.25rem. Por ende p-4 es 1rem y m-2 a 0.25rem. Esto permite llevar un control de escala uniforme en la página web.',
    },
    {
      text: '<b>Tipografía</b> <br> Son las funcionalidades que permiten modificar el texto que es presentado, tales como fuente, tamaño, grosor, interlineado y alineación.',
    },
    {
      text: '<b>Paleta de Colores</b> <br> Tailwind permite editar el color con escala de 50 a 950, el cual va de un tono claro a uno más oscuro. Para el fondo se emplea el parámetro bg-, para texto el text-, y para borde el border-.',
    },
    {
      text: '<b>Bordes</b> <br> Son funciones que permiten definir el contorno de un elemento, border para grosor, border-dashed para estilo de línea, rounded-lg para redondear esquinas y divide- para líneas separadoras.',
    },
    {
      text: '<b>Efectos</b> <br> Son funciones que permiten agregar determinada profundidad o transparencia a la interfaz, como shadow-md para sombras, opacity-50 para transparencia, blur-sm para desenfoque y transition para un cambio suave entre diseños.',
    },
    {
      text: '<b>Container</b> <br> Clase Layout que define ancho máximo del contenido según las dimensiones de la pantalla del dispositivo. A diferencia de Bootstrap, Tailwind no centra el contenido automáticamente, por lo que se requiere de un mx-auto adicional.',
    },
    {
      text: '<b>Flexbox</b> <br> Tailwind convierte cada propiedad del modelo en una clase independiente, de tal manera  que la distribución de elementos se define dentro del mismo documento HTML.',
      table: {
        headers: ['Clase', 'Función'],
        rows: [
          ['flex', 'Crea un contenedor flexible'],
          ['flex-row y flex-col', 'Dirección de elementos'],
          ['flex-wrap', 'Salto de línea'],
        ],
        caption: 'Clases de Flexbox en Tailwind',
      },
    },
    {
      text: '<b>Prefijos Responsives</b> <br> Permiten activar una utilidad en base a ancho mínimo de pantalla',
      table: {
        headers: ['Prefijo', 'Ancho mínimo'],
        rows: [
          ['sm', '640px'],
          ['md', '768px'],
          ['lg', '1024px'],
          ['xl', '1280px'],
          ['2xl', '1536px'],
        ],
        caption: 'Puntos de quiebre de Tailwind',
      },
    },
    {
      text: '<b>Variantes de Estado</b> <br> Prefijos que aplican un estilo cuando se realiza una acción, por ejemplo hover al pasar el cursor, focus al seleccionar un campo o dark cuando se reconoce que el SO utiliza un tema oscuro',
    },
    {
      text: '<b>Application UI</b> <br> Grupo de componentes de Tailwind organizados en botones, menús, encabezados, formularios, vetanas, entre otros',
    },
    {
      subtitle: 'Procedimiento',
    },
    {
      text: '1. Desarrollo de clases en hora de teoría <br> 2. Desarrollo de clases en hora práctica <br> 3. Realización de la práctica calificada <br> 4. Realización de la práctica de laboratorio <br> 5. Actualización del cuaderno de la asignatura',
      image: {
        src: 'assets/images/Semana03/Semana03Teoria.jpeg',
        alt: 'Desarrollo de clases teóricas',
        side: 'right',
        tilt: -6,
      },
    },
  ],
  right: [],
};
