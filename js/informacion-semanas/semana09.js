window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[9] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar Aplicaciones Web con PHP y JSP',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>Arquitectura Cliente-Servidor</b> <br> Modelo de comunicación donde el cliente solicita un recurso y el servidor lo procesa para devolver una respuesta. Un mismo servidor puede atender a muchos clientes a la vez y es quien concentra los datos y las reglas del sistema.',
    },
    {
      text: '<b>Arquitectura en Capas</b> <br> Organiza una aplicación en niveles independientes, de modo que cada uno cumpla una única responsabilidad y pueda modificarse sin afectar a los demás. La más usada es la de 3 capas.',
      table: {
        headers: ['Capa', 'Responsabilidad', 'Ejemplo'],
        rows: [
          [
            'Presentación',
            'Mostrar la interfaz y recibir las acciones del usuario',
            'Páginas HTML generadas por el servidor',
          ],
          [
            'Lógica de negocio',
            'Aplicar las reglas del sistema y validar los datos',
            'Clases PHP o Servlets de Java',
          ],
          ['Datos', 'Almacenar y consultar la información', 'PostgreSQL o MySQL'],
        ],
        caption: 'Arquitectura de 3 capas',
      },
    },
    {
      text: '<b>Patrón MVC</b> <br> Patrón de diseño que separa la aplicación en 3 componentes.',
      table: {
        headers: ['Componente', 'Función'],
        rows: [
          ['Modelo', 'Representa los datos y las reglas de acceso a la base de datos'],
          ['Vista', 'Define lo que se presenta al usuario'],
          ['Controlador', 'Recibe la petición y coordina al modelo con la vista'],
        ],
        caption: 'Componentes del patrón MVC',
      },
    },
    {
      text: '<b>Ciclo de Petición y Respuesta</b> <br> Cada interacción inicia con una petición del cliente que incluye la URL, cabeceras y en algunas veces un cuerpo con datos. El servidor la procesa y devuelve una respuesta compuesta por un código de estado, cabeceras y el contenido solicitado. Cada ciclo es independiente, por lo que el servidor por sí solo no recuerda al cliente de la petición anterior.',
    },
    {
      text: '<b>Códigos de Estado</b> <br> Número de 3 dígitos con el que el servidor indica el resultado de la petición. Se agrupan en base al primer dígito.',
      table: {
        headers: ['Serie', 'Significado', 'Ejemplo'],
        rows: [
          ['200', 'Petición atendida con éxito', '200 OK'],
          ['300', 'Redirección a otra dirección', '301 Moved Permanently'],
          ['400', 'Error originado por el cliente', '403 Forbidden'],
          ['500', 'Error originado en el servidor', '500 Internal Server Error'],
        ],
        caption: 'Series de códigos de estado',
      },
    },
    {
      text: '<b>Contenido Estático y Dinámico</b> <br> La diferencia radica en si el recurso existe previamente o se construye en el momento de la petición.',
      table: {
        headers: ['Tipo', 'Característica', 'Ejemplo'],
        rows: [
          [
            'Estático',
            'Se entrega tal cual está almacenado siendo igual para todos los usuarios',
            'Imágenes, archivos CSS y HTML fijos',
          ],
          [
            'Dinámico',
            'Es generado por un programa según la petición y los datos',
            'Listado de pedidos de un cliente',
          ],
        ],
        caption: 'Contenido estático y dinámico',
      },
    },
    {
      text: '<b>Servidor Web</b> <br> Software que escucha las peticiones que llegan por la red y entrega los recursos que les sean solicitados. Si el recurso es estático lo lee del disco, y si es dinámico encarga su ejecución a un intérprete o aplicación.',
      table: {
        headers: ['Servidor', 'Características'],
        rows: [
          ['Apache HTTP Server', 'Multiplataforma y configurable mediante módulos'],
          ['Nginx', 'Alto rendimiento, usado como proxy inverso'],
          ['Microsoft IIS', 'Servidor integrado en Windows Server'],
        ],
        caption: 'Principales servidores web',
      },
    },
    {
      text: '<b>Servidor de Aplicaciones y Contenedor de Servlets</b> <br> Un servidor de aplicaciones ejecuta la lógica de negocio y presenta servicios. El contenedor de servlets es una versión enfocada a ejecutar Servlets y JSP, encargándose tanto de su ciclo de vida como hilos y sesiones.',
    },
    {
      text: '<b>Proxy Inverso</b> <br> Servidor intermedio que recibe las peticiones externas y las reenvía al servidor interno que corresponda. Como por ejemplo, Nginx escucha en el puerto 80 y reenvía hacia Tomcat. Permitiendo así repartir la carga.',
    },
    {
      text: '<b>Puertos y Localhost</b> <br> Un puerto es un número que identifica un servicio dentro de un equipo, de esta manera varios servidores pueden funcionar en la misma máquina. Localhost con dirección 127.0.0.1, apunta al propio equipo y se usa para probar antes de publicar.',
      table: {
        headers: ['Puerto', 'Servicio'],
        rows: [
          ['80', 'HTTP'],
          ['443', 'HTTPS'],
          ['3306', 'MySQL y MariaDB'],
          ['5432', 'PostgreSQL'],
          ['8080', 'Apache Tomcat'],
        ],
        caption: 'Puertos comunes',
      },
    },
    {
      text: '<b>Lenguaje Backend</b> <br> Lenguaje con el que se programa lo que se ejecuta en el lado del servidor. Se diferencian por la forma en que el código llega a ejecutarse.',
      table: {
        headers: ['Lenguaje', 'Ejecución', 'Entorno'],
        rows: [
          ['PHP', 'Interpretado en cada petición', 'Intérprete de PHP'],
          ['Java', 'Compilado a bytecode', 'Máquina Virtual de Java JVM'],
          ['Python', 'Interpretado', 'Intérprete CPython'],
          ['C#', 'Compilado a lenguaje intermedio', 'Plataforma .NET'],
        ],
        caption: 'Lenguajes del lado del servidor',
      },
    },
    {
      text: '<b>Framework Backend</b> <br> Estructura que resuelve el enrutamiento, acceso a datos, plantillas, seguridad y autenticación, para que el desarrollador se concentre más en las reglas del negocio.',
      table: {
        headers: ['Framework', 'Lenguaje', 'Aporte'],
        rows: [
          ['Laravel', 'PHP', 'Motor de plantillas Blade y ORM Eloquent'],
          ['Symfony', 'PHP', 'Componentes reutilizables'],
          ['Spring Boot', 'Java', 'Configuración automática y servidor embebido'],
          ['Django', 'Python', 'Panel de administración incluido'],
        ],
        caption: 'Frameworks backend más usados',
      },
    },
    {
      text: '<b>Ejecución y Configuración de PHP</b> <br> PHP puede ejecutarse como módulo del propio Apache o mediante PHP-FPM, que atiende las peticiones desde un proceso aparte y es el empleado junto a Nginx.',
    },
    {
      text: '<b>XAMPP y Document Root</b> <br> XAMPP es un paquete que instala Apache, MariaDB, PHP y Perl con un panel de control para iniciar o detener cada servicio, se emplea como entorno local de desarrollo. El Document Root es la carpeta desde la cual el servidor entrega los archivos, que en XAMPP es htdocs, por lo que el archivo htdocs/tienda/index.php se visualiza en http://localhost/tienda/index.php.',
    },
    {
      text: '<b>Composer</b> <br> Gestor de dependencias de PHP. Las librerías se definen en el archivo composer.json, se descargan desde el repositorio Packagist hacia la carpeta vendor y se cargan automáticamente con autoload.php.',
    },
    {
      text: '<b>JSP</b> <br> JavaServer Pages. Tecnología de Java para crear páginas dinámicas que combina HTML con código Java en archivos de extensión .jsp. Antes de ejecutarse, el contenedor traduce cada JSP a un Servlet.',
    },
    {
      text: '<b>Servlet</b> <br> Clase de Java que atiende peticiones y genera respuestas dentro de un contenedor. Hereda de HttpServlet y sobrescribe los métodos de doGet y doPost, que reciben los objetos HttpServletRequest y HttpServletResponse. Se usa para lógica de control, mientras que el JSP se usa para la presentación.',
    },
    {
      text: '<b>JDK y JAVA_HOME</b> <br> El JDK incluye el compilador javac y las herramientas para desarrollar, mientras que la JVM ejecuta el bytecode. Tomcat requiere una instalación de Java y la variable de entorno JAVA_HOME apuntando a la carpeta del JDK.',
    },
    {
      text: '<b>Apache Tomcat</b> <br> Contenedor de código abierto de Apache Software Foundation que implementa especificaciones de Servlet y JSP. A diferencia de Apache HTTP Server, está orientado a Java y escucha por defecto en el puerto 8080.',
      table: {
        headers: ['Carpeta', 'Contenido'],
        rows: [
          ['bin', 'Scripts para iniciar y detener el servidor'],
          ['conf', 'Archivos de configuración server.xml'],
          ['webapps', 'Aplicaciones desplegadas'],
          ['logs', 'Registros de funcionamiento'],
        ],
        caption: 'Estructura de carpetas de Tomcat',
      },
    },
    {
      subtitle: 'Procedimiento',
    },
    {
      text: '1. Desarrollo de clases en hora de teoría <br> 2. Desarrollo de clases en hora práctica <br> 3. Realización de la práctica calificada <br> 4. Realización de la práctica de laboratorio <br> 5. Actualización del cuaderno de la asignatura',
      image: {
        src: 'assets/images/Semana09/Semana09Teoria.jpeg',
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
      title: '1. Guía Práctica Semana 09',
      subtitle: 'Despliegue Local de Aplicaciones Web Backend con PHP y JSP',
      text: 'Se instalaron e iniciaron los servidores XAMPP con Apache, MySQL y Apache Tomcat mediante startup.bat, verificando su funcionamiento en localhost y localhost:8080. En PHP se creó la carpeta htdocs/lab09 con los archivos index.html, procesar.php y config.php, implementando el envío del formulario por POST con validación mediante filter_input() y sanitización de la salida con htmlspecialchars(). En JSP se creó la carpeta webapps/lab09 con index.jsp y procesar.jsp, empleando la directiva page, request.getParameter() para recibir los datos y session.setAttribute() para guardar la reserva en la sesión. Luego se desplegó y probó el formulario, inspeccionando los headers de la respuesta en  DevTools, revisando los logs de acceso y error de ambos servidores, y comprobando tanto el error 405 al ingresar sin el método POST como el 200 OK en el envío correcto. Finalmente, se documentó la comparación entre PHP y JSP en cuanto a ciclo de vida, gestión de memoria, despliegue y escalabilidad.',
      image: {
        src: 'assets/images/Semana09/Semana09GuiaPractica.png',
        alt: 'Formulario enviado correctamente con respuesta 200 OK en el servidor',
        side: 'right',
        tilt: 2,
      },
    },
    {
      title: '2. Guía Práctica Grupal Semana 09',
      subtitle: 'Sistema de Registro de Contacto con PHP y JSP',
      text: 'Trabajo desarrollado en equipo de 2, cada uno trabajando en su propia rama de Git, se refactorizó el código base para construir un Sistema de Registro de Contacto en dos versiones. En la versión PHP, un formulario HTML envía los datos por POST para su validación, sanitización y almacenamiento en $_SESSION, respondiendo con una tabla de los registros guardados. En la versión JSP, el formulario recibe los datos con request, los almacena en session y presenta los registros recorriéndolos con c:forEach. En seguridad se previno el XSS con htmlspecialchars y c:out, se validó que solo se aceptara el método POST devolviendo el error 405 en caso contrario, y se controlaron los errores de la serie 400 y 500. Asimismo, se documentó el flujo HTTP desde el cliente hasta el render en el navegador y se elaboró la matriz comparativa entre PHP y JSP en el README.md, junto con las capturas de logs, headers de respuesta y estructura de carpetas.',
      image: {
        src: 'assets/images/Semana09/Semana09GuiaPracticaGrupal.png',
        alt: 'Sistema de Registro de Contacto con PHP y JSP',
        side: 'left',
        tilt: -3,
      },
    },
    {
      chip: 'Resultados',
    },
    {
      title: '1. Guía Práctica Semana 09',
      text: 'Enlace en <a href="https://github.com/E5gar/GuiaPracticaSemana09" target="_blank">GitHub</a>',
      image: {
        src: 'assets/images/Semana09/Semana09ReservaMesa.png',
        alt: 'Aplicación Web de Reserva de Mesas en PHP y JSP',
        side: 'right',
        tilt: 4,
      },
      pdf: {
        src: 'assets/files/Semana09/PRACTICA_SEMANA_09_GAGO_URIBE_EDGAR_ROBERT.pdf',
      },
    },
    {
      title: '2. Guía Práctica Grupal Semana 09',
      text: 'Enlace en <a href="https://github.com/E5gar/GuiaPracticaGrupalSemana09" target="_blank">GitHub</a>',
      image: {
        src: 'assets/images/Semana09/Semana09RegistroContacto.png',
        alt: 'Aplicación Web de Registro de Contacto en PHP y JSP',
        side: 'left',
        tilt: -4,
      },
      pdf: {
        src: 'assets/files/Semana09/Guía Práctica Grupal - Semana 09.pdf',
      },
    },
    {
      chip: 'Reflexión',
    },
    {
      title: '¿Qué aprendió?',
      text: 'En esta semana aprendí cómo funciona una aplicación web desde el lado del servidor, partiendo de la arquitectura cliente-servidor y la organización en capas con el patrón MVC. Comprendí el ciclo de petición y respuesta, así como el carácter stateless del protocolo, que indica usar cookies y sesiones para recordar al usuario, aprendí a interpretar los códigos de estado como el 200 y el 405. Asimismo, diferencié el servidor web Apache del contenedor de servlets Tomcat, y cómo el código se ejecuta en el servidor entregando al navegador solo el resultado. En PHP trabajé con las superglobales $_POST y $_SESSION, validando con filter_input() y sanitizando la salida con htmlspecialchars() para prevenir XSS. En JSP entendí que cada página se traduce a un servlet que el contenedor compila y mantiene como una única instancia, aprendí a usar request.getParameter() y session.setAttribute(). Finalmente, comparé ambas tecnologías en ciclo de vida, gestión de memoria, despliegue y escalabilidad, entendiendo que PHP libera todo al terminar cada solicitud mientras que JSP aprovecha la JVM con un heap compartido que requiere vigilar en sí la concurrencia.',
    },
    {
      title: '¿Cómo aprendió?',
      text: 'En la hora de teoría se explicaron la arquitectura de las aplicaciones web, funcionamiento de  servidores, ciclo del lado del servidor y las características de PHP y JSP. En la hora de práctica se desarrolló la guía paso a paso, instalando XAMPP y Tomcat, creando las estructuras de ambos proyectos y probando el formulario con envío por POST. Luego se inspeccionaron los headers de la respuesta en las DevTools, se revisaron los logs de acceso y error de los servidores, se provocó el error 405 para compararlo con el 200 de un envío correcto. Ello se reforzó en la práctica grupal, donde en equipo de 2 con su propia rama de Git se refactorizó el código base de la práctica grupal para construir un Sistema de Registro de Contacto en PHP y en JSP, aplicando validación, sesiones y prevención de XSS. Finalmente, se documentó el trabajo en un README.md con el flujo HTTP, matriz comparativa entre PHP y JSP así como las capturas de logs, respuestas y estructura de carpetas.',
    },
    {
      title: 'Bibliografía',
      table: {
        headers: ['N°', 'Título', 'Tipo'],

        rows: [
          [
            '01',
            '<a href="https://books.goalkicker.com/PHPBook/" target="_blank">PHP Notes for Professionals</a> - GoalKicker.com (2018)',
            'Libro',
          ],
          [
            '02',
            '<a href="https://upload.wikimedia.org/wikipedia/commons/7/73/PHP_Programming.pdf" target="_blank">PHP Programming</a> - Wikibooks Contributors (2024)',
            'Libro',
          ],
          [
            '03',
            '<a href="https://leanpub.com/s/DC42EC2731414428AABC750F64A17E34.pdf" target="_blank">PHP: The Right Way</a> - Phil Sturgeon y Josh Lockhart (2025)',
            'Libro',
          ],
          [
            '04',
            '<a href="https://www.icid.org/Falkner_0321136497.pdf" target="_blank">Servlets and JavaServer Pages: The J2EE Technology Web Tier</a> - Jayson Falkner y Kevin W. Jones (2003)',
            'Libro',
          ],
          [
            '05',
            '<a href="https://docs.oracle.com/javaee/5/tutorial/doc/javaeetutorial5.pdf" target="_blank">The Java EE 5 Tutorial</a> - Sun Microsystems (2010)',
            'Libro',
          ],
        ],
        caption: '',
      },
    },
  ],
};
