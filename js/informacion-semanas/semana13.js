window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[13] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar Aplicaciones con APIs RESTful',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>REST</b> <br> Representational State Transfer. Es un estilo de arquitectura para diseñar servicios web propuesto por Roy Fielding en el año 2000. En lugar de exponer acciones, se exponen recursos identificados por una URL y son manipulados mediante los métodos del protocolo HTTP. Una API que cumple dichas restricciones se denomina RESTful.',
    },
    {
      text: '<b>Restricciones de REST</b> <br> Para que una API sea considerada REST debe cumplir con 6 restricciones a nivel de arquitectura, siendo opcional la última de ellas.',
      table: {
        headers: ['Restricción', 'Significado'],
        rows: [
          ['Cliente-Servidor', 'Interfaz y almacenamiento de datos se separan'],
          [
            'Sin estado',
            'Cada petición incluye toda la información necesaria, el servidor no guarda contexto del cliente',
          ],
          ['Cacheable', 'Las respuestas indican si pueden almacenarse para reutilizarse'],
          [
            'Interfaz uniforme',
            'Los recursos se identifican por URL y se manipulan con un conjunto determinado de métodos',
          ],
          [
            'Sistema en capas',
            'El cliente no distingue si se comunica con el servidor final o con un intermediario',
          ],
          ['Código bajo demanda', 'El servidor puede enviar código ejecutable al cliente'],
        ],
        caption: 'Restricciones de la arquitectura REST',
      },
    },
    {
      text: '<b>REST vs RPC y SOAP</b> <br> Son distintos estilos para comunicar aplicaciones. REST se organiza alrededor de sustantivos, mientras que RPC y SOAP se organizan en torno a verbos.',
      table: {
        headers: ['Aspecto', 'REST', 'RPC', 'SOAP'],
        rows: [
          ['Enfoque', 'Recursos', 'Procedimientos remotos', 'Mensajes con contrato'],
          ['Formato', 'JSON u otros', 'JSON o binario', 'Solo XML'],
          [
            'Ejemplo de Endpoint',
            'GET /estudiantes/5/',
            'POST /obtenerEstudiante',
            'Un único endpoint con sobre XML',
          ],
          ['Complejidad', 'Baja', 'Media', 'Alta'],
        ],
        caption: 'Comparación entre REST, RPC y SOAP',
      },
    },
    {
      text: '<b>Recursos</b> <br> Es cualquier entidad que la API expone y su URL debe representarlo con sustantivos en plural mas no con verbos. La acción a realizar no se escribe en la URL, la define el método HTTP.',
      table: {
        headers: ['Diseño Incorrecto', 'Diseño Correcto'],
        rows: [
          ['GET /obtenerEstudiantes', 'GET /estudiantes/'],
          ['POST /crearEstudiante', 'POST /estudiantes/'],
          ['POST /eliminarEstudiante/5', 'DELETE /estudiantes/5/'],
          ['GET /estudiantes/5/obtenerCursos', 'GET /estudiantes/5/cursos/'],
        ],
        caption: 'Diseño de URLs para recursos',
      },
    },
    {
      text: '<b>Métodos Seguros</b> <br> Un método es seguro si no modifica el recurso en el servidor y es idempotente si al ejecutarlo una o varias veces produce el mismo estado final. Esto permite que el cliente pueda reintentar una petición si se presenta un fallo.',
      table: {
        headers: ['Método', 'Acción sobre el recurso', 'Seguro', 'Idempotente'],
        rows: [
          ['GET', 'Consultar', 'Sí', 'Sí'],
          ['POST', 'Crear', 'No', 'No'],
          ['PUT', 'Reemplazar de forma completa', 'No', 'Sí'],
          ['PATCH', 'Modificar solo algunos campos', 'No', 'No necesariamente'],
          ['DELETE', 'Eliminar', 'No', 'Sí'],
          ['OPTIONS', 'Consultar métodos disponibles', 'Sí', 'Sí'],
        ],
        caption: 'Propiedades de los métodos HTTP',
      },
    },
    {
      text: '<b>Modelo de Madurez de Richardson</b> <br> Clasifica qué tan cerca está una API de ser RESTful a través de 4 niveles que se acumulan.',
      table: {
        headers: ['Nivel', 'Característica'],
        rows: [
          ['0', 'Un único endpoint por el cual pasa todo'],
          ['1', 'Recursos con URL propia'],
          ['2', 'Uso correcto de métodos HTTP y códigos de estado'],
          ['3', 'Hipermedios, la respuesta incluye enlaces de navegación'],
        ],
        caption: 'Niveles del modelo de madurez de Richardson',
      },
    },
    {
      text: '<b>HATEOAS</b> <br> Hypermedia As The Engine Of Application State. Es la restricción por la cual la respuesta del servidor incluye enlaces hacia acciones y recursos relacionados. El cliente descubre qué puede hacer siguiendo dichos enlaces, sin necesidad de conocer previamente las URL. Esta característica es la que distingue una API de hipermedios.',
    },
    {
      text: '<b>Negociación de Contenido</b> <br> Mecanismo por el cual cliente y servidor acuerdan el formato de respuesta. El cliente indica el que prefiere en la cabecera Accept y el servidor informa el que entrega con Content-Type. DRF puede responder con JSON o con una página HTML según el cliente que realice la petición.',
    },
    {
      text: '<b>Django REST Framework</b> <br> Es un conjunto de herramientas desarrollado en Django que permite construir APIs web. Aporta serializadores, vistas, enrutadores, autenticación, permisos, paginación, filtros y limitación de peticiones. Se instala con pip install djangorestframework y se registra como rest_framework en INSTALLED_APPS.',
    },
    {
      text: '<b>Configuración Global de DRF</b> <br> El comportamiento por defecto de toda API se define en un diccionario denominado REST_FRAMEWORK en settings.py. Así se evita el tener que repetir la misma configuración en cada vista y se sobrescribe solo cuando un endpoint lo requiera.',
      table: {
        headers: ['Clave', 'Función'],
        rows: [
          ['DEFAULT_AUTHENTICATION_CLASSES', 'Define cómo se identifica al usuario'],
          ['DEFAULT_PERMISSION_CLASSES', 'Define quién puede acceder'],
          ['DEFAULT_PAGINATION_CLASS y PAGE_SIZE', 'Define el tipo y tamaño de página'],
          ['DEFAULT_FILTER_BACKENDS', 'Define los filtros disponibles'],
          ['DEFAULT_THROTTLE_CLASSES y DEFAULT_THROTTLE_RATES', 'Define los límites de peticiones'],
          ['DEFAULT_SCHEMA_CLASS', 'Define el generador de esquema OpenAPI'],
        ],
        caption: 'Claves principales del diccionario REST_FRAMEWORK',
      },
    },
    {
      text: '<b>Serialización</b> <br> Proceso de convertir un objeto como una instancia de modelo o un QuerySet en tipos básicos de Python que luego se transforman a JSON para ser enviado al cliente. La deserialización es el proceso inverso, donde se convierten los datos recibidos en objetos de Python.',
      table: {
        headers: ['Proceso', 'Dirección', 'Resultado'],
        rows: [
          ['Serialización', 'Objeto de Python a JSON', 'serializer.data'],
          ['Deserialización', 'JSON a objeto de Python', 'serializer.validated_data'],
        ],
        caption: 'Serialización y deserialización',
      },
    },
    {
      text: '<b>Serializer</b> <br> Clase que declara los campos de un recurso y se encarga tanto de representarlo como de validar los datos de entrada. Funciona de manera análoga a un formulario de Django pero su salida es JSON en lugar de HTML. Para un dato recibido, el flujo es que primero se llama a is_valid() y si todo es correcto se ejecuta save() que invoca a create() o update() según corresponda.',
      table: {
        headers: ['Clase', 'Característica'],
        rows: [
          ['Serializer', 'Los campos se declaran a mano'],
          ['ModelSerializer', 'Genera los campos desde el modelo e implementa create() y update()'],
          [
            'HyperlinkedModelSerializer',
            'Igual que ModelSerializer pero representa las relaciones con URL en lugar de ids',
          ],
        ],
        caption: 'Clases de serializadores',
      },
    },
    {
      text: '<b>Campos de Solo Lectura</b> <br> Un campo de solo lectura aparece en la respuesta pero se ignora al recibir datos. El campo calculado no existe en el modelo, sino que se obtiene de un método de la propia clase.',
      table: {
        headers: ['Campo', 'Función'],
        rows: [
          ['ReadOnlyField', 'Presenta un atributo del modelo sin permitir su escritura'],
          ['SerializerMethodField', 'Presenta el resultado del método get_&lt;campo&gt;()'],
          ['read_only_fields', 'Lista en Meta de los campos que no se aceptan al escribir'],
          ['HyperlinkedIdentityField', 'Genera la URL del propio recurso'],
        ],
        caption: 'Campos especiales de los serializadores',
      },
    },
    {
      text: '<b>Validación en Serializadores</b> <br> Ocurre antes de guardar y devuelve el error 400 con el detalle de cada campo. Al igual que en los formularios, se valida por campo y de forma cruzada pero en una API la validación debe ubicarse en el serializador mas no en la vista.',
      table: {
        headers: ['Método', 'Alcance'],
        rows: [
          ['validate_&lt;campo&gt;(self, valor)', 'Valida un solo campo'],
          ['validate(self, datos)', 'Valida varios campos a la vez'],
          ['validators', 'Reglas reutilizables'],
        ],
        caption: 'Validación en serializadores',
      },
    },
    {
      text: '<b>Conjuntos de Vistas</b> <br> Un ViewSet reúne en una sola clase la lógica de todas las operaciones sobre un recurso. En lugar de métodos con nombre de verbo HTTP, define acciones y el enrutador es quien las asocia con cada método y ruta. Con ModelViewSet solo se indica el queryset y el serializer_class.',
      table: {
        headers: ['Acción', 'Método HTTP', 'Ruta'],
        rows: [
          ['list', 'GET', '/estudiantes/'],
          ['create', 'POST', '/estudiantes/'],
          ['retrieve', 'GET', '/estudiantes/5/'],
          ['update', 'PUT', '/estudiantes/5/'],
          ['partial_update', 'PATCH', '/estudiantes/5/'],
          ['destroy', 'DELETE', '/estudiantes/5/'],
        ],
        caption: 'Acciones de un ModelViewSet',
      },
    },
    {
      text: '<b>Acciones Personalizadas</b> <br> Cuando un recurso requiere de una operación diferente al CRUD como calcular un promedio, se agrega un método con el decorador @action. El parámetro detail indica si actúa sobre un solo objeto o sobre la colección completa y la ruta se genera automáticamente con el nombre del método.',
      table: {
        headers: ['Parámetro', 'Función'],
        rows: [
          ['detail=True', 'Opera sobre un objeto, ruta /recurso/{id}/accion/'],
          ['detail=False', 'Opera sobre la colección, ruta /recurso/accion/'],
          ['methods', 'Lista de métodos HTTP permitidos'],
          ['url_path', 'Cambia el nombre de la ruta generada'],
        ],
        caption: 'Parámetros de @action',
      },
    },
    {
      text: '<b>Ruteadores</b> <br> Un router genera las URL de un ViewSet a partir de sus acciones de modo que no se escribe una por una cada ruta con path(). Se crea la instancia, se registra el ViewSet con register() y sus URL se incluyen en urls.py con router.urls.',
      table: {
        headers: ['Router', 'Característica'],
        rows: [
          ['SimpleRouter', 'Genera las rutas del ViewSet'],
          [
            'DefaultRouter',
            'Igual que el anterior pero agrega una vista raíz de la API con los enlaces a cada recurso y soporte de sufijos en formato .json',
          ],
        ],
        caption: 'Tipos de ruteadores',
      },
    },
    {
      text: '<b>API Navegable</b> <br> Cuando el cliente es un navegador, DRF responde con una interfaz HTML que permite explorar la API, enviar formularios y ver las respuestas. Como las respuestas incluyen enlaces, es posible recorrer la API sin consultar la documentación con lo que se aplica HATEOAS de manera práctica.',
    },
    {
      text: '<b>Permisos en APIs</b> <br> En una API la autenticación identifica quién realiza la petición y los permisos determinan qué puede hacer. Al no haber estado en el servidor, las credenciales son enviadas en cada petición.',
      table: {
        headers: ['Clase', 'Funcionamiento', 'Uso'],
        rows: [
          [
            'SessionAuthentication',
            'Usa la cookie de sesión de Django y solicita el token CSRF',
            'Aplicaciones web del mismo sitio',
          ],
          ['BasicAuthentication', 'Usuario y contraseña en cada petición', 'Pruebas'],
          [
            'TokenAuthentication',
            'Cabecera Authorization: Token abc123',
            'Clientes móviles y de terceros',
          ],
          [
            'JWT',
            'Token firmado que incluye los datos del usuario con expiración',
            'APIs distribuidas',
          ],
        ],
        caption: 'Mecanismos de autenticación en DRF',
      },
    },
    {
      text: '<b>Clases de Permisos</b> <br> Se asignan en permission_classes de la vista o de forma global. Si no se cumplen, el usuario no autenticado recibe 401 y el autenticado sin permiso recibe 403. Cuando se requiere una regla propia se crea una clase que hereda de BasePermission.',
      table: {
        headers: ['Permiso', 'Concede acceso a'],
        rows: [
          ['AllowAny', 'Cualquier persona'],
          ['IsAuthenticated', 'Usuarios autenticados'],
          ['IsAdminUser', 'Usuarios con is_staff'],
          ['IsAuthenticatedOrReadOnly', 'Lectura pública, escritura solo autenticados'],
          ['DjangoModelPermissions', 'Según los permisos del modelo asignados al usuario'],
        ],
        caption: 'Permisos incorporados de DRF',
      },
    },
    {
      text: '<b>Filtrado</b> <br> Permite al cliente reducir la colección devuelta usando parámetros en la URL. El filtrado debe realizarse en la consulta a la base de datos mas no en la memoria del servidor para que sea eficiente en grandes volúmenes de datos.',
      table: {
        headers: ['Backend', 'Función', 'Ejemplo'],
        rows: [
          [
            'DjangoFilterBackend',
            'Filtra por campos o con lookups requiere la librería django-filter',
            '?estado=pendiente',
          ],
          ['SearchFilter', 'Busca texto en los campos de search_fields', '?search=mercado'],
          [
            'OrderingFilter',
            'Ordena según ordering_fields sieno que el signo menos invierte el orden',
            '?ordering=-decibeles',
          ],
        ],
        caption: 'Backends de filtrado de DRF',
      },
    },
    {
      text: '<b>FilterSet</b> <br> Clase de django-filter que declara los filtros disponibles de un recurso tales como rangos, comparaciones o alias de parámetros. Resulta necesario cuando la igualdad de filterset_fields no es suficiente.',
    },
    {
      text: '<b>Paginación</b> <br> Divide una colección extensa en partes y entrega una página por petición, con lo que se evita agotar la memoria o saturar la red. La respuesta incluye el total de elementos, count, enlaces next y previous que son una aplicación de HATEOAS.',
    },
    {
      text: '<b>Límites Temporales de Uso</b> <br> Throttling es un mecanismo que restringe el número de peticiones que un cliente puede realizar en un periodo de tiempo para proteger contra scraping y sobrecarga del servidor. Cuando se supera el límite, la API responde con el código 429 e indica en la cabecera Retry-After los segundos que debe esperar el cliente.',
      table: {
        headers: ['Clase', 'Identifica al cliente por'],
        rows: [
          ['AnonRateThrottle', 'Dirección IP que aplica a usuarios no autenticados'],
          ['UserRateThrottle', 'Usuario autenticado'],
          ['ScopedRateThrottle', 'Un alcance definido por vista con límite propio'],
        ],
        caption: 'Clases de throttling',
      },
    },
    {
      text: '<b>CORS</b> <br> Cross-Origin Resource Sharing. Es el mecanismo que permite al servidor indicar al navegador qué otros orígenes tienen permiso de leer sus respuestas mediante cabeceras Access-Control. Lo aplica el navegador mas no el servidor, por lo que herramientas como curl o Postman no lo evalúan. En Django se implementa con la librería django-cors-headers, agregando middleware al inicio de la lista con los orígenes permitidos.',
      table: {
        headers: ['Configuración', 'Función'],
        rows: [
          ['CORS_ALLOWED_ORIGINS', 'Lista de orígenes autorizados'],
          ['CORS_ALLOW_CREDENTIALS', 'Permite enviar cookies y credenciales'],
          ['CORS_ALLOW_METHODS', 'Métodos HTTP permitidos'],
          ['CORS_ALLOW_HEADERS', 'Cabeceras que el cliente puede enviar'],
          ['CORS_ALLOW_ALL_ORIGINS', 'Autoriza a cualquier origen'],
        ],
        caption: 'Configuración de django-cors-headers',
      },
    },
    {
      text: '<b>Documentación OpenAPI</b> <br> OpenAPI es un estándar que describe una API en un archivo legible por máquinas con rutas, parámetros, cuerpos y respuestas. Swagger UI y ReDoc son interfaces que presentan este esquema de forma interactiva y permiten probar los endpoints desde el navegador. La librería drf-spectacular genera el esquema automáticamente a partir de los serializadores y las vistas. El esquema generado no debe editarse.',
    },
    {
      text: '<b>Herramientas para Probar APIs</b> <br> Permiten enviar peticiones HTTP y revisar respuestas.',
      table: {
        headers: ['Herramienta', 'Uso'],
        rows: [
          ['Postman', 'Colecciones de peticiones, variables, pruebas y exportación'],
          ['curl', 'Peticiones desde la terminal para revisión de cabeceras CORS'],
          ['Thunder Client', 'Cliente HTTP en Visual Studio Code'],
          [
            'DevTools del navegador',
            'Panel Network para inspeccionar peticiones, cabeceras y preflight',
          ],
        ],
        caption: 'Herramientas para probar APIs',
      },
    },
    {
      subtitle: 'Procedimiento',
    },
    {
      text: '1. Desarrollo de clases en hora de teoría <br> 2. Desarrollo de clases en hora práctica <br> 3. Realización de la práctica de laboratorio <br> 4. Realización de la práctica grupal <br> 5. Actualización del cuaderno de la asignatura',
      image: {
        src: 'assets/images/Semana13/Semana13Teoria.jpeg',
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
      title: '1. Guía Práctica Semana 13',
      subtitle: 'API RESTful para Monitoreo de Ruido Urbano con Django REST Framework',
      text: 'Se desarrolló una API RESTful para registrar zonas urbanas y mediciones de ruido. En la configuración se instalaron djangorestframework, django-cors-headers y drf-spectacular, registrando cada uno en INSTALLED_APPS, se definió el diccionario REST_FRAMEWORK con autenticación, permisos, paginación, filtros y throttling, además de CORS_ALLOWED_ORIGINS y SPECTACULAR_SETTINGS, asimismo se verificó el proyecto con python manage.py check. Con respecto a serialización, se creó serializers.py con un HyperlinkedModelSerializer para ZonaUrbana con campos calculados y enlaces relacionados, un serializador de MedicionRuido con campos de solo lectura validado con validate() que no se registren mediciones duplicadas. Se convirtieron las vistas a ModelViewSet con queryset, serializer_class, filter_backends y pagination_class, registrándolos en DefaultRouter con la ruta /api/. Se agregó una acción personalizada con @action que devuelve el promedio, máximo, mínimo, mediciones excedidas y resultados por franja horaria. Se validó la respuesta OPTIONS con el encabezado Allow y que un POST sin sesión fuera rechazado con 403 Forbidden. Respecto al filtrado, se configuraron DjangoFilterBackend, SearchFilter y OrderingFilter con PageNumberPagination, asimismo se probaron mediciones pendientes en la página 2, filtros combinados por exceso del límite, distrito de Huancayo, fuente de tráfico, búsqueda por Mercado ordenado de mayor a menor nivel de decibeles y páginas de 5 mediciones. Con AnonRateThrottle y UserRateThrottle se probaron 130 solicitudes consecutivas, obteniendo respuestas 200 y 429 con el encabezado Retry-After. Finalmente, se configuró el middleware de CORS y CSRF, validando tanto con curl como con Postman la petición preflight OPTIONS desde un origen permitido que devolvió Access-Control-Allow-Origin, y desde uno no permitido que no devolvió encabezados de CORS. Se generó el esquema OpenAPI con drf-spectacular y se publicó en /api/docs/. Se desarrolló además un frontend con página de inicio, zonas urbanas, mediciones de ruido, formulario de reporte, tema oscuro y diseño responsive.',
      image: {
        src: 'assets/images/Semana13/Semana13GuiaPractica.png',
        alt: 'API RESTful de monitoreo de ruido urbano desarrollada con Django REST Framework',
        side: 'right',
        tilt: 3,
      },
    },
    {
      title: '2. Guía Práctica Grupal Semana 13',
      subtitle: 'Caso 1. API REST para Sistema de Gestión de Biblioteca Universitaria',
      text: 'Trabajo desarrollado en equipo de 2 integrantes cada uno en su propia rama de Git. Se construyó con Django REST Framework la API de una Biblioteca Central par la UNCP con catálogo público de libros, préstamos, devoluciones y usuarios, organizando el código en una app comun con la autenticación TokenConExpiracion de 12 horas, AuditoriaMixin, permisos y manejo de excepciones para respuestas 429. Los serializadores incluyen datos del autor de forma anidada, campos calculados e hipervínculos HATEOAS con HyperlinkedIdentityField. Los ViewSets se registraron en un router con paginación mediante PageNumberPagination y LimitOffsetPagination, asimismo filtros con django-filter. Para aceptar parámetros con caracteres en español tales como ?año__gte=2020, ?ordering=-año y ?ordering=título se usaron nombres ASCII en los modelos, año y titulo, así como clase OrdenamientoFlexible y alias en LibroFilter. Los préstamos y devoluciones se realizan en transaction.atomic() con select_for_update() para controlar la concurrencia del stock, validando también el cupo máximo por usuario, mientras que el manager actualiza el estado a vencido antes de listar, calculando multa de S/ 2.00 por día. Se configuraron los roles con permisos, throttling con registro en logs/throttling.log, CORS, documentación con Swagger UI y ReDoc, así como pruebas unitarias. Se desarrolló además una página web con tema claro y oscuro.',
      image: {
        src: 'assets/images/Semana13/Semana13GuiaPracticaGrupalCaso1.png',
        alt: 'API REST de biblioteca universitaria desarrollada con Django REST Framework',
        side: 'left',
        tilt: -3,
      },
    },
    {
      subtitle: 'Caso 2. API REST para Plataforma de E-commerce de Productos Tecnológicos',
      text: 'En el Caso 2 se desarrolló la API de TecnoMarket Perú de 6 aplicaciones siendo comun, productos, carrito, ordenes, resenas y usuarios. Se registraron DRF, token, django-filter, drf-spectacular y CORS con paginación de 24 elementos y límites de peticiones, el script populate_data.py genera 120 productos, 25 usuarios, 60 órdenes y 104 reseñas usando Decimal para evitar errores de redondeo. Los serializadores incluyen campos calculados tales como el precio con descuento, disponibilidad y rating, categoría anidada, enlaces y validaciones de stock. La autenticación es por token en la cabecera Authorization, con permisos por rol donde el invitado solo consulta el catálogo, el vendedor registra sus productos, el cliente usa carrito y órdenes, mientras que el administrador controla todo. El carrito recibe producto_id, cantidad y cupón opcional, para luego devolver subtotal, impuestos, total y total con descuento rechazando con 400 cuando la cantidad supera el stock. El checkout convierte el carrito en una orden dentro de una transacción, descuenta stock y guarda el precio del momento de la compra con los estados pendiente, pagada, enviada, entregada y cancelada, para luego generar el número de seguimiento al pasar a enviada. Las reseñas solo las pueden hacer compradores verificados con calificación de 1 a 5 y una sola por producto. Se agregaron filtros por categoría, marca, precio y disponibilidad, throttling de 60 peticiones por hora para invitados con respuesta 429, CORS para los 3 dominios de TecnoMarket con credenciales y documentación tanto con Swagger UI como con ReDoc. Se realizaron 8 pruebas con resultado. se creó una colección de Postman y se conectó un frontend en HTML, CSS y JavaScript con inicio, catálogo con filtros, detalle de producto, carrito, órdenes y acceso con token.',
      image: {
        src: 'assets/images/Semana13/Semana13GuiaPracticaGrupalCaso2.png',
        alt: 'API REST de e-commerce de productos tecnológicos desarrollada con Django REST Framework',
        side: 'right',
        tilt: 3,
      },
    },
    {
      chip: 'Resultados',
    },
    {
      title: '1. Guía Práctica Semana 13',
      text: 'Enlace en <a href="https://github.com/E5gar/GuiaPracticaSemana13" target="_blank">GitHub</a>',
      image: {
        src: 'assets/images/Semana13/Semana13MedicionesRuido.png',
        alt: 'Listado de mediciones de ruido urbano',
        side: 'right',
        tilt: 4,
      },
      pdf: {
        src: 'assets/files/Semana13/PRACTICA_SEMANA_13_GAGO_URIBE_EDGAR_ROBERT.pdf',
      },
    },
    {
      title: '2. Guía Práctica Grupal Semana 13',
      text: 'Enlace en <a href="https://github.com/E5gar/GuiaPracticaGrupalSemana13" target="_blank">GitHub</a>',
      pdf: {
        src: 'assets/files/Semana13/Guia_Practica_Grupal_Semana_13_GAGO_HUAMANLAZO.pdf',
      },
    },
    {
      subtitle: 'Caso 1. API REST para Sistema de Gestión de Biblioteca Universitaria',
    },
    {
      image: {
        src: 'assets/images/Semana13/Semana13BibliotecaLibros.png',
        alt: 'Aplicación Web de biblioteca universitaria',
        side: 'left',
        tilt: -4,
      },
    },
    {
      subtitle: 'Caso 2. API REST para Plataforma de E-commerce de Productos Tecnológicos',
    },
    {
      image: {
        src: 'assets/images/Semana13/Semana13TecnoMarketCatalogo.png',
        alt: 'Aplicación Web de productos tecnológicos TecnoMarket',
        side: 'right',
        tilt: 4,
      },
    },
    {
      chip: 'Reflexión',
    },
    {
      title: '¿Qué aprendió?',
      text: 'En esta semana aprendí a diseñar APIs RESTful, comprendiendo que REST es un estilo de arquitectura basado en recursos identificados por URL y manipulados con los métodos HTTP que debe cumplir restricciones como cliente-servidor, ausencia de estado, cacheabilidad, interfaz uniforme y sistema en capas. Asimismo, entendí qué métodos son seguros e idempotentes y qué código de estado corresponde a cada operación como 201, 204, 400, 401, 403, 404 y 429. Conocí el modelo de madurez de Richardson y el concepto de HATEOAS, donde la respuesta incluye enlaces que permiten navegar por la API sin conocer antes todas las rutas. Con Django REST Framework comprendí el proceso de serialización y deserialización, la diferencia entre Serializer, ModelSerializer e HyperlinkedModelSerializer, el uso de campos de solo lectura y calculados con SerializerMethodField así como la validación con validate() en el serializador. Aprendí a organizar las vistas con ModelViewSet y a registrarlas en un DefaultRouter que genera las rutas automáticamente, además de agregar operaciones fuera del CRUD con @action. Entendí cómo configurar de forma global autenticación, permisos, paginación, filtros y throttling mediante el diccionario REST_FRAMEWORK, diferenciando autenticación por sesión de la de token y los errores tanto 401 como 403. En filtrado y paginación aprendí a emplear DjangoFilterBackend, SearchFilter, OrderingFilter, PageNumberPagination y LimitOffsetPagination, resolviendo los filtros en la consulta a la base de datos. Comprendí que el throttling protege la API devolviendo 429 con el encabezado Retry-After. También entendí la política del mismo origen, cómo CORS permite autorizar a otros orígenes mediante la solicitud preflight OPTIONS y las cabeceras Access-Control, así como que el CSRF solo es necesario cuando la autenticación depende de cookies. Finalmente, aprendí a documentar la API con OpenAPI mediante drf-spectacular publicándola con Swagger UI y ReDoc, a probarla con Postman - curl, y a proteger operaciones con transaction.atomic() y select_for_update() para controlar la concurrencia del stock.',
    },
    {
      title: '¿Cómo aprendió?',
      text: 'En la hora de teoría se explicaron los fundamentos de REST, restricciones de la arquitectura, diseño de recursos, URLs, métodos, códigos de estado, HATEOAS y las herramientas de Django REST Framework como serializadores, ViewSets, routers, filtrado, paginación, throttling, CORS y CSRF. En la hora de práctica se desarrolló la guía paso a paso, instalando djangorestframework, django-cors-headers y drf-spectacular, configurando REST_FRAMEWORK y verificando el proyecto con python manage.py check. Luego se crearon los serializadores de zonas urbanas y mediciones de ruido, se convirtieron las vistas a ModelViewSet registrados en un DefaultRouter y se probaron los filtros, búsqueda, ordenamiento, paginación y límite de peticiones con 130 solicitudes consecutivas hasta obtener la respuesta 429. Se validó el trabajo con Postman y curl, comprobando los códigos de estado, rechazo con 403 de un POST sin sesión, petición preflight desde un origen permitido y desde uno no permitido, documentación generada en /api/docs/. Lo aprendido se reforzó en la práctica grupal, donde en equipo de 2 integrantes cada uno trabajó en su propia rama de Git y se desarrollaron dos APIs para la gestión de una biblioteca universitaria y para un e-commerce de productos tecnológicos, aplicando serialización anidada, permisos por rol, autenticación por token, control de stock con transacciones, throttling y CORS. Finalmente, se unió el trabajo con Pull Requests de revisión cruzada, se verificó con pruebas unitarias y se documentó en un README.md la arquitectura, endpoints, roles y capturas de pantalla para cada una de las evidencias.',
    },
  ],
};
