window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[2] = {
  left: [
    {
      chip: 'Tema',
      title: 'Diseñar una Página Web con Hojas de Estilos',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>Estructura HTML</b> <br> El HTML permite presentar el contenido de una página web a través del uso de etiquetas nidadas entre sí, formando a su vez una jerarquía.',
    },
    {
      text: '<b>Estructura XML</b> <br> El XML es también un lenguaje de marcado pero centrado en la funcionalidad de transportar datos, permitiendo que diferentes programas puedan compartir información.',
    },
    {
      text: '<b>Etiquetas de HTML5</b> <br> La versión 5 de HTML incorporó las etiquetas header, nav, main, section, article, aside y footer. Estos permiten describir partes del HTML por sí mismos para no tener que usar varios divs.',
    },
    {
      text: '<b>Árbol DOM</b> <br> Es la representación en memoria de un HTML en forma de estructura de árbol compuesto por nodos de elementos, atributos y texto. Su funcionalidad radica en que el navegador pueda modificar el contenido del HTML.',
    },
    {
      text: '<b>Renderizado de Árbol</b> <br> Proceso donde el navegador usa el árbol DOM y el árbol CSSOM para determinar los elementos que serán presentados en pantalla, tanto su posición como apariencia.',
    },
    {
      text: '<b>Ciclo de Vida de una Página Web</b> <br> Son las etapas por las que el navegador solicita el HTML, construye el DOM, descarga el CSS y JS, hasta presentarlo en pantalla para que el usuario pueda interactuar con la página web.',
    },
    {
      text: '<b>Optimización en Motores de Búsqueda</b> <br> Conjunto de métodos que permiten mejorar el posicionamiento de la página web a nivel de resultados de búsqueda con un mejor etiqueta del contenido del HTML.',
    },
    {
      text: '<b>Compatibilidad entre Navegadores</b> <br> Capacidad de una Página Web para poder ser presentada correctamente en diferentes navegadores, sea Chrome, Firefox, Safari, Edge, Brave, Opera, etc.',
    },
    {
      text: '<b>CSS3</b> <br> Es la versión extendida del estándar de Hojas de Estilo en Cascada, el cual incorporó elementos de animaciones, transiciones, flexbox, grid y variables. Gracias a esta versión se pueden diseñar páginas web con caracter responsivo.',
    },
    {
      text: '<b>Modelo de Caja</b> <br> Block ocupa todo el ancho y comienza en una nueva línea. Inline ocupa el espacio de su contenido sin romper línea. Inline-block actúa como inline con la diferencia que permite definir tanto ancho como alto.',
    },
    {
      text: '<b>Unidades de Medida</b> <br> Las unidades absolutas no cambian según los elementos anteriores, mientras que las unidades relativas se calculan en base al elemento padre. Resulta importante conocer ambas unidades para poder diseñar páginas responsive correctamente.',
      table: {
        headers: ['Tipo', 'Unidades', 'Uso'],
        rows: [
          ['Absolutas', 'px', 'Medidas que no varían por contenedor'],
          ['Relativas', '%, em, rem, vw, vh', 'Se adaptan al tamaño del padre'],
        ],
        caption: 'Diferencia entre Unidades Absolutas y Relativas',
      },
    },
    {
      text: '<b>Flexbox</b> <br> Es un modelo en el estándar CSS3 que permite organizar los elementos ya sea en filas o columnas, proporcionando las funcionalidades de alineación, distribución y el orden de elementos en un contenedor flexible.',
    },
    {
      text: '<b>Grid Layout</b> <br> Es un modelo en el estándar CSS3 que permite organizar los elementos en filas y columnas al mismo tiempo, como si fuera estructura de cuadrícula.',
    },
    {
      text: '<b>Position</b> <br> Define cómo se ubica un elemento.',
      table: {
        headers: ['Valor', 'Función'],
        rows: [
          ['static', 'Sigue la ubicación del documento'],
          ['relative', 'Se desplaza respecto a la posición original'],
          ['absolute', 'Se ubica respecto al contenedor más cercano'],
          ['fixed', 'Se ubica respecto a la ventana del navegador'],
          ['sticky', 'Emplea relative y fixed'],
        ],
        caption: 'Position en CSS3',
      },
    },
    {
      text: '<b>Diseño Fluido</b> <br> Es una forma de maquetación en donde los elementos del documento se presentan con unidades relativas, garantizando así que el contenido se adapte a cualquier tamaño de dispositivo.',
    },
    {
      subtitle: 'Procedimiento',
    },
    {
      text: '1. Desarrollo de clases en hora de teoría <br> 2. Desarrollo de clases en hora práctica <br> 3. Realización de la práctica calificada <br> 4. Realización de la práctica de laboratorio <br> 5. Actualización del cuaderno de la asignatura',
      image: {
        src: 'assets/images/Semana02/Semana02Teoria.jpeg',
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
      title: '1. Práctica Calificada Grupal 01',
      subtitle: 'Interfaces con HTML y CSS',
      text: 'Trabajo desarrollado en equipo de 4 integrantes, donde cada uno colaboró en su propia rama de GitHub para el desarrollo de un formulario con animaciones, un drag y drop de imágenes, un selector de RGB con slider y tarjetas responsives. Todos ellos creados con HTML y CSS nativo',
      image: {
        src: 'assets/images/Semana02/Semana02PracticaCalificada01.png',
        alt: 'Página web desarrollada con HTML y CSS',
        side: 'right',
        tilt: -4,
      },
    },
    {
      title: '2. Práctica de Elicitación y Análisis de Requerimientos',
      subtitle: 'Caso de un Sistema de Gestión de Citas para la Clínica MediSalud',
      text: 'Comprensión de las técnicas usadas para la elicitación o recolección de requerimientos a partir de entrevistas, encuestas, observación y talleres JAD realizados en conjunto con el cliente, usuarios y personas interesadas. Asimismo, se identificaron los principales 7 stakeholders, con un resultado de 11 requerimientos funcionales, 13 no funcionales y categorizados por prioridad. Finalmente, se contruyó la matriz de elicitación.',
      image: {
        src: 'assets/images/Semana02/Semana02Elicitacion.png',
        alt: 'Matriz de requerimientos funcionales y no funcionales',
        side: 'left',
        tilt: 3,
      },
    },
    {
      title: '3. Guía Práctica Semana 02',
      subtitle: 'Parte I. Diseño flexbox, diseño fluido y diseño responsivo',
      text: 'Maquetación de página web con flexbox para distribuir los elementos mediante unidades relativas con la finalidad de contar con un diseño de tipo fluido. Asimismo, se emplean media queries para escalar la presentación de la página web en diferentes tamaños de pantalla',
      image: {
        src: 'assets/images/Semana02/Semana02GuiaPracticaParteI.png',
        alt: 'Página web con flexbox para diseño responsive',
        side: 'right',
        tilt: 2,
      },
    },
    {
      subtitle: 'Parte II. HTML5 Semántico, ARIA, Grid, Flexbox Híbrido y SEO',
      text: 'Desarrollo de una galería de proyectos técnicos empleando etiquetas semánticas de atributos ARIA y flexbox al layout para el escalamiento de tarjetas, fuente y espaciado entre elementos. Se validó con las herramientas Google Lighthouse, extensión WAVE Evaluation Tool y W3C Validator para corroborar optimización de SEO',
      src: 'assets/images/Semana02/Semana02GuiaPracticaParteII-WAVE.png',
      alt: 'Resultados de WAVE aplicado a la página web de proyectos técnicas con diseño responsive',
      side: 'right',
      tilt: -3,
    },
    {
      text: 'Resultados en Google Lighthouse. 98 en Rendimiento, 100 en Accesibilidad, 100 en Mejores Prácticas y 100 en SEO.',
      image: {
        src: 'assets/images/Semana02/Semana02GuiaPracticaParteII-Lighthouse.png',
        alt: 'Resultados de Lighthouse aplicado a la página web de proyectos técnicas con diseño responsive',
        side: 'left',
        tilt: 4,
      },
    },
    {
      chip: 'Resultados',
    },
    {
      title: '1. Práctica Calificada Grupal 01',
      text: 'Enlace en <a href="https://github.com/E5gar/PracticaCalificada01" target="_blank">GitHub</a> <br> Enlace en <a href="https://e5gar.github.io/PracticaCalificada01/" target="_blank">GitHub Pages</a>',
    },
    {
      title: '2. Práctica de Elicitación y Análisis de Requerimientos',
      text: 'Enlace en <a href="" target="_blank">PENDIENTE</a>',
    },
    {
      title: '3. Guía Práctica Semana 02',
      text: 'Enlace en <a href="https://github.com/E5gar/PracticaSemana02" target="_blank">GitHub</a> <br> Enlace en <a href="https://e5gar.github.io/PracticaSemana02/" target="_blank">GitHub Pages</a>',
    },
    {
      chip: 'Reflexión',
    },
    {
      title: '¿Qué aprendió?',
      text: 'En esta semana he aprendido a diferenciar los lenguajes de marcado HTML y XML, siendo el primero para la presentación de contenido y el segundo para transmitir información o datos. Asimismo, la importancia que tiene emplear etiquetas semáticas de la version 5 de HTML en lugar de usar solamente divs, lo cual mejora también el posicionamiento SEO. En cuanto a las Hojas de Estilos, comprendí los conceptos de modelos de caja, unidades tanto relativas como absolutas, uso de flexbox, grid y ubicación de elementos, todo ello permite crear páginas web con diseño responsive. De igual manera, me familiaricé más con el flujo de trabajo colaborativo con Git y GitHub, así como el proceso de elicitación de requerimientos funcionales y no funcionales para así crear productos que verdaderamente satisfagan las expectativas del cliente y usuarios.'
    },
    {
      title: '¿Cómo aprendió?',
      text: 'En la hora de teoría se explicaron aún más los estándares HTML, XML y CSS, ello ha sido reforzado con el trabajo realizado en la práctica calificada grupal. Asimismo, se hizo uso de ramas de Git para gestionar el trabajo de cada integrante y así tener una mejor trazabilidad de cada uno. En la hora de práctica, se desarrolló el trabajo de elicitación y análisis de requerimientos, para posteriormente desarrollar una galería de productos técnicos de caracter responsive usando unidades relativas y flexbox. Gracias a las herramietnas de Google Lighthouse y WAVE Tool, se validó que el trabajo desarrollado no tuviera problemas a nivel de rendimiento, accesibilidad e indexación en SEO.'
    },
    {
      title: 'Bibliografía',
      table: {
        headers: ['N°', 'Título', 'Tipo'],
        rows: [],
        caption: '',
      },
    },
  ],
};
