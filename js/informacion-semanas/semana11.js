window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[11] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar Aplicaciones Web con Django',
    },

    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>Django</b> <br> Es un Framework web de alto nivel y código abierto escrito en Python con origen en 2005 y es mantenido por la Django Software Foundation. Sigue el principio DRY, para no repetir código.',
    },
    {
      text: '<b>Baterías Incluidas</b> <br> Django trae integradas las funcionalidades más comunes de una aplicación web, de modo que no se requiera instalar librerías por separado para cada una.',
      table: {
        headers: ['Componente', 'Función'],
        rows: [
          ['ORM', 'Permite consultar la base de datos con código Python en lugar de SQL'],
          ['Sistema de plantillas', 'Genera el HTML a partir de datos'],
          ['Enrutador de URLs', 'Asocia cada dirección con una vista'],
          ['Formularios', 'Definen y validan los datos que envía el usuario'],
          ['Autenticación y sesiones', 'Gestionan usuarios, permisos y sesiones'],
          ['Panel de administración', 'Interfaz generada automáticamente para gestionar los datos'],
          ['Seguridad', 'Protección ante CSRF, XSS e inyección SQL'],
        ],
        caption: 'Componentes incluidos en Django',
      },
    },
    {
      text: '<b>Patrón MVC y MTV</b> <br> El patrón MVC separa la aplicación en Modelo, Vista y Controlador. Django lo adopta con otros nombres, llamándolo MTV, dado que el propio framework asume el rol del controlador al resolver la URL y derivar la petición a la vista correspondiente.',
      table: {
        headers: ['MVC', 'MTV en Django', 'Responsabilidad'],
        rows: [
          ['Modelo', 'Model', 'Datos y reglas de acceso a la base de datos mediante el ORM'],
          ['Vista', 'Template', 'Presentación, es decir el HTML que ve el usuario'],
          ['Controlador', 'View', 'Lógica que recibe la petición y decide qué respuesta devolver'],
        ],
        caption: 'Equivalencia entre MVC y MTV',
      },
    },
    {
      text: '<b>Ciclo de Solicitud y Respuesta en Django</b> <br> Cuando el navegador envía una petición HTTP, Django la procesa por etapas. Primero el archivo de URLs determina qué vista debe atenderla, la vista consulta los modelos si requiere datos, los entrega a una plantilla y finalmente devuelve un objeto HttpResponse que viaja de regreso al navegador.',
      table: {
        headers: ['Etapa', 'Componente', 'Acción'],
        rows: [
          ['1', 'URLs', 'Resuelve la ruta y elige la vista'],
          ['2', 'View', 'Ejecuta la lógica de la petición'],
          ['3', 'Model', 'Consulta o modifica los datos'],
          ['4', 'Template', 'Construye el HTML con los datos recibidos'],
          ['5', 'Response', 'Se devuelve al cliente'],
        ],
        caption: 'Flujo de una petición en Django',
      },
    },
    {
      text: '<b>Entorno Virtual</b> <br> Django se instala con pip dentro de un entorno virtual para aislar las dependencias del proyecto de las demás instaladas en el equipo. Las librerías se registran en requirements.txt para poder generar el mismo entorno.',
      table: {
        headers: ['Acción', 'Comando'],
        rows: [
          ['Crear el entorno virtual', 'python -m venv venv'],
          ['Activarlo en Windows', 'venv\\Scripts\\activate'],
          ['Activarlo en Linux y macOS', 'source venv/bin/activate'],
          ['Instalar Django', 'pip install django'],
          ['Verificar la versión', 'python -m django --version'],
          ['Guardar dependencias', 'pip freeze > requirements.txt'],
        ],
        caption: 'Comandos de instalación de Django',
      },
    },
    {
      text: '<b>Proyecto y Aplicación</b> <br> Un proyecto es el conjunto de configuraciones de un sitio web completo, mientras que una aplicación es un módulo con una funcionalidad concreta que puede reutilizarse en distintos proyectos. Un proyecto puede contener varias aplicaciones, y cada una debe registrarse en INSTALLED_APPS.',
      table: {
        headers: ['Elemento', 'Comando', 'Resultado'],
        rows: [
          [
            'Proyecto',
            'django-admin startproject config .',
            'Crea manage.py y la carpeta config con la configuración',
          ],
          [
            'Aplicación',
            'python manage.py startapp catalogo',
            'Crea la carpeta catalogo con models.py, views.py y migrations',
          ],
        ],
        caption: 'Diferencia entre proyecto y aplicación',
      },
    },
    {
      text: '<b>Estructura de un Proyecto</b> <br> Cada archivo generado por Django cumple una función específica dentro del proyecto.',
      table: {
        headers: ['Archivo', 'Función'],
        rows: [
          ['manage.py', 'Utilidad de línea de comandos para administrar el proyecto'],
          ['settings.py', 'Configuración general como apps, base de datos y plantillas'],
          ['urls.py', 'Tabla de rutas del proyecto'],
          ['wsgi.py', 'Punto de entrada para servidores compatibles con WSGI'],
          ['asgi.py', 'Punto de entrada para servidores compatibles con ASGI'],
          ['models.py', 'Definición de los modelos de la aplicación'],
          ['views.py', 'Definición de las vistas de la aplicación'],
          ['migrations/', 'Historial de cambios sobre la base de datos'],
        ],
        caption: 'Archivos principales de un proyecto Django',
      },
    },
    {
      text: '<b>manage.py</b> <br> Script que se genera junto con el proyecto es orquestador de las tareas de administración. Se ejecuta con python manage.py',
      table: {
        headers: ['Subcomando', 'Función'],
        rows: [
          ['runserver', 'Inicia el servidor de desarrollo, por defecto en el puerto 8000'],
          ['startapp', 'Crea una nueva aplicación'],
          ['check', 'Revisa el proyecto en busca de errores de configuración'],
          ['makemigrations', 'Genera archivos de migración a partir de los cambios en los modelos'],
          ['migrate', 'Aplica las migraciones a la base de datos'],
          ['shell', 'Abre una consola interactiva con el entorno de Django'],
          ['createsuperuser', 'Crea un usuario administrador'],
        ],
        caption: 'Subcomandos principales de manage.py',
      },
    },
    {
      text: '<b>settings.py</b> <br> Módulo de Python donde se define la configuración del proyecto.',
      table: {
        headers: ['Variable', 'Función'],
        rows: [
          ['INSTALLED_APPS', 'Lista de aplicaciones activas, incluidas las propias'],
          ['DATABASES', 'Motor y datos de conexión a la base de datos, por defecto SQLite'],
          ['TEMPLATES', 'Configuración del motor de plantillas y carpetas donde se buscan'],
          ['DEBUG', 'Activa los mensajes detallados de error, solo para desarrollo'],
          ['SECRET_KEY', 'Clave usada para firmar sesiones y tokens, debe mantenerse privada'],
          ['ALLOWED_HOSTS', 'Dominios desde los cuales se permite atender peticiones'],
          ['STATIC_URL', 'Dirección base de los archivos estáticos'],
        ],
        caption: 'Variables principales de settings.py',
      },
    },
    {
      text: '<b>Servidor de Desarrollo y de Producción</b> <br> El servidor que inicia runserver solo debe emplearse para desarrollo, dado que no está diseñado para soportar tráfico y tampoco medidas de seguridad. En producción Django se ejecuta en un servidor web tales como Apache o Nginx, con DEBUG en False y ALLOWED_HOSTS establecido',
    },
    {
      text: '<b>WSGI y ASGI</b> <br> WSGI es la interfaz estándar de Python que permite a un servidor web comunicarse con una aplicación, de manera síncrona. ASGI es su sucesor y soporta tareas asíncronas como WebSockets. Django ofrece ambos archivos al crear un proyecto.',
    },
    {
      text: '<b>Integración de Django con Apache</b> <br> Apache sirve los archivos estáticos y delega la ejecución de Python al módulo mod_wsgi, que carga el archivo wsgi.py del proyecto. De esta manera Apache atiende las peticiones y Django las procesa.',
      table: {
        headers: ['Elemento', 'Función'],
        rows: [
          ['mod_wsgi', 'Módulo de Apache que ejecuta aplicaciones Python compatibles con WSGI'],
          ['WSGIScriptAlias', 'Directiva que asocia una URL con el archivo wsgi.py'],
          [
            'WSGIDaemonProcess',
            'Define procesos independientes para la aplicación, con su entorno virtual',
          ],
          ['Alias /static/', 'Hace que Apache entregue directamente los archivos estáticos'],
          ['collectstatic', 'Comando que reúne los archivos estáticos en una sola carpeta'],
        ],
        caption: 'Elementos para desplegar Django en Apache',
      },
    },
    {
      text: '<b>Gestión de URLs</b> <br> El archivo urls.py contiene una lista llamada urlpatterns, en donde cada entrada asocia una ruta con una vista mediante la función path(). Django recorre la lista en orden y usa la primera ruta que coincide con la dirección solicitada.',
      table: {
        headers: ['Elemento', 'Función'],
        rows: [
          ['path("ruta/", vista)', 'Asocia una ruta con una vista'],
          [
            'name="nombre"',
            'Da un nombre a la ruta para poder referenciarla sin escribir la dirección',
          ],
          ['include("app.urls")', 'Delega un grupo de rutas al urls.py de una aplicación'],
          ['app_name', 'Define un espacio de nombres para evitar choques entre aplicaciones'],
          ['reverse()', 'Obtiene la URL a partir del nombre de la ruta desde el código Python'],
        ],
        caption: 'Elementos del enrutamiento en Django',
      },
    },
    {
      text: '<b>Convertidores de Ruta</b> <br> Permiten capturar partes de la URL como parámetros y enviarlos a la vista, validando además su tipo. Por ejemplo, la ruta producto/&lt;int:id&gt;/ que envía el valor de id como entero.',
      table: {
        headers: ['Convertidor', 'Coincide con'],
        rows: [
          ['str', 'Cualquier texto no vacío sin barra, es el valor por defecto'],
          ['int', 'Números enteros positivos'],
          ['slug', 'Letras, números, guiones y guiones bajos'],
          ['uuid', 'Identificador único universal'],
        ],
        caption: 'Convertidores de ruta',
      },
    },
    {
      text: '<b>Vistas</b> <br> Una vista es el código Python que recibe un objeto HttpRequest con los datos de la petición y devuelve un objeto HttpResponse.',
      table: {
        headers: ['Elemento', 'Función'],
        rows: [
          ['HttpRequest', 'Contiene el método, los datos enviados y el usuario de la petición'],
          ['HttpResponse', 'Respuesta con el contenido y código de estado'],
          ['render()', 'Combina una plantilla con un contexto y devuelve el HttpResponse'],
          ['redirect()', 'Redirige a otra URL o vista'],
          ['get_object_or_404()', 'Obtiene un objeto o responde con el error 404 si no existe'],
        ],
        caption: 'Elementos de las vistas',
      },
    },
    {
      text: '<b>Contexto</b> <br> Es el diccionario de Python que la vista envía a la plantilla. Cada clave del diccionario se convierte en una variable disponible dentro del HTML.',
    },
    {
      text: '<b>Django Template Language</b> <br> Es el lenguaje del sistema de plantillas de Django. Una plantilla es un archivo de texto generalmente en HTML que incluye marcas para insertar datos y controlar la lógica de presentación. Las plantillas se guardan en una carpeta templates, que Django localiza según la variable TEMPLATES de settings.py.',
    },
    {
      text: '<b>Sintaxis de Plantillas</b> <br> El lenguaje de plantillas distingue tres tipos de marcas.',
      table: {
        headers: ['Marca', 'Nombre', 'Función'],
        rows: [
          ['{{ variable }}', 'Variable', 'Inserta el valor de una variable del contexto'],
          ['{% etiqueta %}', 'Etiqueta', 'Ejecuta lógica como bucles, condicionales o herencia'],
          ['{# comentario #}', 'Comentario', 'No se presenta en el HTML final'],
        ],
        caption: 'Marcas de las plantillas de Django',
      },
    },
    {
      text: '<b>Etiquetas de Plantilla</b> <br> Controlan el flujo y la estructura de la plantilla. Dentro de un bucle for se dispone de la variable forloop, como forloop.counter, que indica el número de iteración.',
      table: {
        headers: ['Etiqueta', 'Función'],
        rows: [
          [
            '{% for x in lista %}',
            'Recorre una colección, y {% empty %} cubre el caso en que esté vacía',
          ],
          ['{% if condicion %}', 'Presenta contenido según una condición, con elif y else'],
          ['{% url "nombre" %}', 'Genera la URL de una ruta a partir de su nombre'],
          ['{% include "archivo.html" %}', 'Inserta otra plantilla dentro de la actual'],
          ['{% load static %}', 'Carga la librería de archivos estáticos'],
          ['{% csrf_token %}', 'Agrega el token de protección en los formularios'],
        ],
        caption: 'Etiquetas más usadas en plantillas',
      },
    },
    {
      text: '<b>Herencia de Plantillas</b> <br> Permite definir una plantilla base con la estructura común del sitio tales como encabezado, pie de página o menú, y que las demás plantillas la reutilicen. La plantilla hija indica {% extends "base.html" %} como primera línea y solo redefine las partes que cambian. Así se aplica el principio DRY.',
    },
    {
      text: '<b>Bloques</b> <br> Son las zonas de la plantilla base que las plantillas hijas pueden reemplazar. Se declaran con {% block nombre %} y se cierran con {% endblock %}. Un bloque definido en la plantilla hija sustituye al de la base, y {{ block.super }} permite conservar el contenido original y agregar más.',
      table: {
        headers: ['Plantilla', 'Contenido'],
        rows: [
          ['base.html', 'Estructura general con {% block title %} y {% block content %} vacíos'],
          ['catalogo.html', 'Extiende de base.html y llena los bloques con su propio contenido'],
        ],
        caption: 'Herencia mediante bloques',
      },
    },
    {
      text: '<b>Modelo</b> <br> Es una clase de Python que hereda de models.Model y describe la estructura de una tabla de la base de datos. Cada atributo de la clase es un campo que corresponde a una columna. Django agrega automáticamente un campo id como clave primaria.',
    },
    {
      text: '<b>ORM</b> <br> Mapeo Objeto-Relacional. Es la capa que traduce las clases de Python a tablas y las operaciones sobre objetos a sentencias SQL, de modo que se trabaje con la base de datos sin escribir SQL. Funciona con SQLite, PostgreSQL, MySQL y Oracle. El motor se indica en la variable DATABASES.',
      table: {
        headers: ['Python', 'Base de datos'],
        rows: [
          ['Clase', 'Tabla'],
          ['Atributo', 'Columna'],
          ['Instancia', 'Fila'],
        ],
        caption: 'Correspondencia entre objetos y tablas',
      },
    },
    {
      text: '<b>SQLite</b> <br> Es el motor de base de datos que Django configura por defecto. Almacena toda la información en un único archivo llamado db.sqlite3, sin necesidad de instalar un servidor, por lo que resulta útil para desarrollo y pruebas.',
    },
    {
      text: '<b>Relaciones entre Modelos</b> <br> Permiten vincular tablas entre sí mediante campos. En una relación con ForeignKey se debe indicar on_delete, que define qué ocurre con los registros relacionados cuando se elimina el objeto referenciado.',
      table: {
        headers: ['Relación', 'Tipo', 'Ejemplo'],
        rows: [
          ['ForeignKey', 'Uno a muchos', 'Una categoría tiene muchos productos'],
          ['OneToOneField', 'Uno a uno', 'Un usuario tiene un perfil'],
          ['ManyToManyField', 'Muchos a muchos', 'Un pedido incluye muchos productos y viceversa'],
        ],
        caption: 'Relaciones entre modelos',
      },
    },
    {
      text: '<b>Migraciones</b> <br> Son los archivos que registran los cambios realizados en los modelos para trasladarlos a la base de datos, funcionando como un control de versiones del esquema. Se guardan en la carpeta migrations de cada aplicación.',
      table: {
        headers: ['Comando', 'Función'],
        rows: [
          ['makemigrations', 'Detecta los cambios en los modelos y genera el archivo de migración'],
          ['migrate', 'Ejecuta las migraciones pendientes sobre la base de datos'],
          ['showmigrations', 'Lista las migraciones y su estado de aplicación'],
          ['sqlmigrate', 'Muestra el SQL que ejecutará una migración'],
        ],
        caption: 'Comandos de migración',
      },
    },
    {
      text: '<b>QuerySet</b> <br> Es la colección de objetos que devuelven consultas como all() y filter(). Se pueden encadenar varias consultas sobre un mismo QuerySet, dado que cada método devuelve uno nuevo. A diferencia de ello, get() devuelve un único objeto y lanza DoesNotExist si no lo encuentra, o MultipleObjectsReturned si hay más de uno.',
    },
    {
      text: '<b>Shell de Django</b> <br> Consola que se abre con python manage.py shell y que tiene cargada la configuración del proyecto. Se usa para probar consultas del ORM y poblar datos sin necesidad de crear vistas.',
    },
    
  ],
};
