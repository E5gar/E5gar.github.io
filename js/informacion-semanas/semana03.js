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
  right: [
    {
      chip: 'Ejercicios de Laboratorio',
    },
    {
      title: '1. Práctica Calificada Grupal 02',
      subtitle: 'Interfaces con HTML y Tailwind',
      text: 'Trabajo desarrollado en equipo de 4 integrantes, donde cada uno colaboró en su propia rama de GitHub para el desarrollo de una listas de mensajes responsivas, tarjetas de destinos con efectos hover, galería basada en media queries y un menú principal con tarjetas animadas en 3D con giro de 180°. Todo el proyecto ha sido creado utilizando HTML y Tailwind CSS.',
      image: {
        src: 'assets/images/Semana03/Semana03PracticaCalificada02.png',
        alt: 'Página web desarrollada con HTML y Tailwind',
        side: 'right',
        tilt: -4,
      },
    },
    {
      title: '2. Práctica de Frameworks CSS Modernos - Bootstrap 5 y Tailwind CSS',
      subtitle: 'Caso de una Tienda Online para Huawei',
      text: 'Desarrollo de una tienda con catálogo de productos, usando sistema de 12 columnas de Bootstrap 5 con utilidades de diseño atómico y transiciones de Tailwind CSS. Se evaluaron metadatos SEO, navegación responsiva por pasos, tarjetas con animaciones de escala, aside con posicionamiento, formulario con mensajes de error y atributos ARIA. Revisado además con métricas de WAVE (0 Errores, 0 Alertas) y Google Lighthouse (81 Rendimiento, 100 Accesibilidad, 96 Mejores Prácticas, 91 SEO).',

      image: {
        src: 'assets/images/Semana03/Semana03HuaweiTienda.png',
        alt: 'Página web desarrollada con Bootstrap 5 y Tailwind CSS',
        side: 'left',
        tilt: 3,
      },
    },
    {
      title: '3. Guía Práctica Semana 03',
      subtitle: 'Parte I. Setup, SEO, Navbar Híbrido y Hero Section',
      text: 'Configuración del proyecto HTML5, metadatos SEO y vinculación de CDNs para Bootstrap 5.3.3 y Tailwind CSS. En la primera rama se creó una barra de navegación responsiva con menú desplegable y efecto backdrop-blur, junto a un Hero Section con tipografía adaptativa y fondos degradados para la temática de adopción y servicios para mascotas.',
      image: {
        src: 'assets/images/Semana03/Semana03Huellitas.png',
        alt: 'Hero section creada para veterinaria desarrollado con Bootstrap 5 y Tailwind CSS',
        side: 'right',
        tilt: 2,
      },
    },
    {
      subtitle: 'Parte II. Grid de Servicios y formulario con validación de datos',
      text: 'En la segunda rama, se creó el catálogo de servicios usando control de 12 columnas de Bootstrap con efectos hover de Tailwind. Asimismo, se agregó un formulario con validación de needs-validation, mensajes de error y vinculación de atributos ARIA.',
      image: {
        src: 'assets/images/Semana03/Semana03HuellitasGridFormulario.png',
        alt: 'Catálogo de servicios con efecto hover y formulario de reserva',
        side: 'right',
        tilt: -3,
      },
    },
    {
      text: 'Resultados en Google Lighthouse. 98 en Rendimiento, 100 en Accesibilidad, 100 en Mejores Prácticas y 100 en SEO.',
      image: {
        src: 'assets/images/Semana03/Semana03GuiaPracticaParteII-Lighthouse.png',
        alt: 'Resultados de Lighthouse aplicado a la página web de veterinara con diseño responsive',
        side: 'left',
        tilt: 4,
      },
    },
    {
      chip: 'Resultados',
    },
    {
      title: '1. Práctica Calificada Grupal 02',
      text: 'Enlace en <a href="https://github.com/E5gar/Equipo_Semana03_DAW" target="_blank">GitHub</a> <br> Enlace en <a href="https://e5gar.github.io/Equipo_Semana03_DAW/" target="_blank">GitHub Pages</a>',
    },
    {
      title:
        '2. Práctica de Frameworks CSS Modernos - Bootstrap 5 y Tailwind CSS para Tienda Huawei',
      text: 'Enlace en <a href="https://github.com/E5gar/GuiaPracticaSemana03" target="_blank">GitHub</a> <br> Enlace en <a href="https://e5gar.github.io/GuiaPracticaSemana03/" target="_blank">GitHub Pages</a>',
      pdf: {
        src: 'assets/files/Semana03/PRACTICA_SEMANA_03_GAGO_URIBE_EDGAR_ROBERT.pdf',
      },
    },
    {
      title: '3. Guía Práctica Semana 03',
      text: 'Enlace en <a href="https://github.com/E5gar/grupo-Gago-Huamanlazo-semana3-web-mascotas" target="_blank">GitHub</a> <br> Enlace en <a href="https://e5gar.github.io/grupo-Gago-Huamanlazo-semana3-web-mascotas/" target="_blank">GitHub Pages</a>',
    },
    {
      chip: 'Reflexión',
    },
    {
      title: '¿Qué aprendió?',
      text: 'En esta semana aprendí a diferenciar dos paradigmas del diseño frontend, siendo el primero el enfoque basado en componentes ya creados con Bootstrap 5, y el segundo enfoque de usar utilidades atómicas de Tailwind CSS. Entendí cómo Tailwind permite solucionar el problema de escribir los estilos CSS de manera convencional al emplear escala uniforme de espaciados, así como paleta de tonos de colores, variantes de estado y puntos de quiebre. Finalmente, he reforzado los conceptos de  accesibilidad en web al garantizar un contraste adecuado, labels asociados y atributos ARIA con estados de validación.',
    },
    {
      title: '¿Cómo aprendió?',
      text: 'En la hora de teoría se explicaron los conceptos de estilo CSS, librería Tailwind y Bootstrap, ello ha sido reforzado con el trabajo realizado en la práctica calificada grupal. Asimismo, se hizo uso de ramas de Git para gestionar el trabajo de cada integrante y así tener una mejor trazabilidad de cada uno. En la hora de práctica, se desarrolló el trabajo de crear una página web estilo tienda para la marca Huawei usando los conceptos aprendidos, para posteriormente desarrollar una página web de adopción y servicios para mascotas. Se validó la calidad de los resultados mediante despliegue en GitHub Pages y realizando pruebas con Google Lighthouse y la extensión WAVE.',
    },
  ],
};
