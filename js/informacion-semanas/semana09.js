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
  right: [],
};
