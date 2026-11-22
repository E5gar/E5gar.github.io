window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[12] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar Aplicaciones Web Django con Formularios y Admin',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>Formulario en Django</b> <br> Clase de Python que hereda de forms.Form que se encarga de definir los campos que se solicitan al usuario, generar el HTML y validar los datos que se reciben. Se escribe en el archivo forms.py de la aplicación, de esta manera se separa lógica del formulario de la presentación en la plantilla.',
    },
    {
      text: '<b>Campos</b> <br> Cada atributo de un formulario es un campo que valida y convierte el dato a un tipo de Python. El widget es la representación HTML con la que se presenta dicho campo y puede cambiarse sin alterar la validación.',
      table: {
        headers: ['Campo', 'Valida y convierte a', 'Widget por defecto'],
        rows: [
          ['CharField', 'Texto', 'TextInput, y Textarea si se indica'],
          ['EmailField', 'Texto con formato de correo', 'EmailInput'],
          ['IntegerField', 'Número entero', 'NumberInput'],
          ['DateField', 'Objeto date', 'DateInput'],
          ['ChoiceField', 'Una opción de una lista', 'Select'],
          ['BooleanField', 'True o False', 'CheckboxInput'],
        ],
        caption: 'Campos principales de un formulario',
      },
    },
    {
      text: '<b>Ciclo de Vida del Formulario</b> <br> Un formulario puede estar sin enlazar cuando se crea vacío. Solo un formulario enlazado puede ser validado.',
      table: {
        headers: ['Etapa', 'Código', 'Resultado'],
        rows: [
          ['Instanciación vacía', 'form = ContactoForm()', 'Formulario sin enlazar'],
          [
            'Instanciación con datos',
            'form = ContactoForm(request.POST)',
            'Formulario enlazado, form.is_bound es True',
          ],
          ['Validación', 'form.is_valid()', 'True si todos los datos son correctos'],
          ['Datos limpios', 'form.cleaned_data', 'Diccionario con los valores ya validados'],
          ['Guardado', 'form.save()', 'Persiste el objeto, solo en un ModelForm'],
        ],
        caption: 'Etapas del ciclo de vida de un formulario',
      },
    },
    {
      text: '<b>ModelForm</b> <br> Es un formulario generado automáticamente a partir de un modelo, donde cada campo del modelo se traduce en un campo del formulario con sus mismas restricciones. Evita definir dos veces los mismos datos, aplicando el principio DRY.',
      table: {
        headers: ['Aspecto', 'Form', 'ModelForm'],
        rows: [
          ['Hereda de', 'forms.Form', 'forms.ModelForm'],
          ['Campos', 'Se declaran uno por uno', 'Se generan desde el modelo'],
          ['Guardado', 'Se implementa manualmente', 'Cuenta con el método save()'],
          ['Uso', 'Datos que no se guardan en un modelo', 'Crear o editar registros'],
        ],
        caption: 'Diferencia entre Form y ModelForm',
      },
    },
    {
      text: '<b>Clase Meta del ModelForm</b> <br> Clase interna que indica el modelo del cual se genera el formulario y qué campos incluir. Se recomienda usar fields con una lista antes que exclude o el valor "__all__", dado que si luego se agrega un campo sensible al modelo este quedaría expuesto automáticamente. El método save(commit=False) devuelve el objeto sin guardarlo, lo cual permite completar campos como el usuario antes de grabar.',
      table: {
        headers: ['Atributo', 'Función'],
        rows: [
          ['model', 'Modelo del cual se genera el formulario'],
          ['fields', 'Lista de campos que se incluyen'],
          ['exclude', 'Lista de campos que se omiten'],
          ['labels', 'Cambia las etiquetas que se presentan'],
          ['widgets', 'Cambia el widget de un campo'],
        ],
        caption: 'Atributos de la clase Meta',
      },
    },
    {
      text: '<b>Vista con Formulario</b> <br> Una misma vista atiende los dos métodos HTTP. Con GET presenta el formulario vacío y con POST lo enlaza a los datos recibidos para validarlos. Si son válidos se guarda y se redirige a otra página, siguiendo el patrón Post/Redirect/Get, que evita que el formulario se reenvíe al recargar la página.',
    },
    {
      text: '<b>Vistas Basadas en Clases para Formularios</b> <br> Django ofrece vistas genéricas que implementan el ciclo del formulario sin repetir código. Definen los métodos form_valid() cuando el formulario es correcto y form_invalid() cuando no lo es.',
      table: {
        headers: ['Vista', 'Función'],
        rows: [
          ['FormView', 'Presenta y procesa un formulario cualquiera'],
          ['CreateView', 'Crea un registro a partir de un ModelForm'],
          ['UpdateView', 'Edita un registro existente'],
          ['DeleteView', 'Solicita confirmación y elimina un registro'],
        ],
        caption: 'Vistas genéricas con formularios',
      },
    },
    {
      text: '<b>Renderizado de Formularios en Plantillas</b> <br> El formulario puede presentarse con una sola marca o campo por campo para tener control total del diseño. En el segundo caso cada campo expone etiqueta, widget y errores. Si el formulario permite subir archivos, la etiqueta form debe incluir el atributo enctype="multipart/form-data".',
      table: {
        headers: ['Marca', 'Resultado'],
        rows: [
          ['{{ form.as_p }}', 'Cada campo dentro de un párrafo'],
          ['{{ form.as_table }}', 'Cada campo como fila de tabla'],
          ['{{ form.as_ul }}', 'Cada campo como elemento de lista'],
          ['{{ form.nombre }}', 'Solo el widget del campo nombre'],
          ['{{ form.nombre.label_tag }}', 'La etiqueta label del campo'],
          ['{{ form.nombre.errors }}', 'Los errores de ese campo'],
          ['{{ form.errors }}', 'Todos los errores del formulario'],
        ],
        caption: 'Formas de renderizar un formulario',
      },
    },
    {
      text: '<b>CSRF</b> <br> Cross-Site Request Forgery. Es un ataque donde un sitio malicioso hace que el navegador de un usuario autenticado envíe una petición no deseada al sitio legítimo aprovechando que las cookies de sesión se envían automáticamente. Django ofrece protección con un token asociado a cada usuario que el middleware CsrfViewMiddleware verifica en las peticiones POST, PUT, PATCH y DELETE. Si el token falta o no coincide, responde con el error 403 CSRF verification failed.',
    },
    {
      text: '<b>Niveles de Validación</b> <br> La validación en Django ocurre en etapas, y si una de ellas lanza un error, el flujo se detiene y el formulario retorna a la plantilla con los mensajes. La validación del navegador con atributos como required no reemplaza a la del servidor, dado que el usuario puede evitarla.',
      table: {
        headers: ['Nivel', 'Dónde se define', 'Ejemplo'],
        rows: [
          ['Campo', 'Argumentos del campo y validators', 'max_length, required, RegexValidator'],
          [
            'Formulario',
            'Métodos clean_&lt;campo&gt;() y clean()',
            'Comparar dos fechas del formulario',
          ],
          [
            'Modelo',
            'validators del campo y método clean() del modelo',
            'Reglas que aplican sin importar el formulario',
          ],
        ],
        caption: 'Niveles de validación en Django',
      },
    },
    {
      text: '<b>ValidationError</b> <br> Excepción que se lanza para indicar que un dato no es válido. Recibe el mensaje a presentar y opcionalmente un code que identifica el tipo de error. Django la captura y la registra en form.errors, sin que sea necesario controlarla en la vista.',
    },
    {
      text: '<b>Validadores</b> <br> Son funciones reutilizables que reciben un valor y lanzan ValidationError si no es válido. Se asignan en el argumento validators de un campo, tanto de formulario como de modelo, y evitan repetir la misma regla en distintos formularios.',
      table: {
        headers: ['Validador', 'Función'],
        rows: [
          ['MinLengthValidator y MaxLengthValidator', 'Controlan la longitud del texto'],
          ['MinValueValidator y MaxValueValidator', 'Controlan el rango de un número'],
          ['RegexValidator', 'Exige que el texto cumpla una expresión regular'],
          ['EmailValidator', 'Verifica el formato de un correo'],
          ['Función propia', 'Cualquier función que lance ValidationError'],
        ],
        caption: 'Validadores de Django',
      },
    },
    {
      text: '<b>Sanitización</b> <br> Es el proceso de limpiar y normalizar un dato de entrada antes de usarlo. Se diferencia de la validación en que esta rechaza el dato incorrecto, mientras que la sanitización lo transforma. Las plantillas de Django escapan automáticamente los caracteres peligrosos, pero dicha protección se anula con el filtro safe o la función mark_safe, por lo que solo deben usarse con contenido de confianza.',
      table: {
        headers: ['Aspecto', 'Validación', 'Sanitización'],
        rows: [
          ['Acción', 'Acepta o rechaza el dato', 'Modifica el dato para dejarlo seguro'],
          [
            'Ejemplo',
            'Rechazar un correo sin arroba',
            'strip() para quitar espacios y lower() para minúsculas',
          ],
          ['Previene', 'Datos inconsistentes', 'XSS e inyección de código'],
        ],
        caption: 'Diferencia entre validación y sanitización',
      },
    },
    {
      text: '<b>Django Admin</b> <br> Es una aplicación incluida en Django, llamada django.contrib.admin, que genera una interfaz web para gestionar los datos a partir de los modelos. Se accede desde la ruta /admin/ con un usuario cuyo atributo is_staff sea True y cada usuario solo ve los modelos sobre los que tiene permisos.',
    },
    {
      text: '<b>ModelAdmin</b> <br> Es la clase que personaliza cómo se presenta y gestiona un modelo en el panel de administración. Sus atributos se agrupan en los que controlan el listado y los que controlan el formulario de edición.',
      table: {
        headers: ['Atributo', 'Función'],
        rows: [
          ['list_display', 'Columnas del listado, admite métodos'],
          ['list_filter', 'Filtros laterales por campo'],
          ['search_fields', 'Campos sobre los que busca el cuadro de búsqueda'],
          ['ordering', 'Orden por defecto del listado'],
          ['list_per_page', 'Registros por página'],
          ['list_editable', 'Campos que se editan directo en el listado'],
          ['date_hierarchy', 'Navegación por fechas sobre un campo de fecha'],
        ],
        caption: 'Atributos de ModelAdmin para el listado',
      },
    },
    {
      text: '<b>Personalización del Formulario del Admin</b> <br> Estos atributos controlan qué campos se presentan al editar un registro. Un campo en readonly_fields se muestra pero no se envía ni se guarda desde el formulario. Para campos sensibles como password o is_staff se debe restringir su visibilidad con fields o exclude.',
      table: {
        headers: ['Atributo', 'Función'],
        rows: [
          ['fields', 'Campos que se muestran y su orden'],
          ['exclude', 'Campos que se ocultan'],
          ['readonly_fields', 'Campos que solo se visualizan'],
          ['fieldsets', 'Agrupa los campos en secciones con título'],
          ['form', 'Asigna un formulario propio al admin'],
        ],
        caption: 'Atributos de ModelAdmin para el formulario',
      },
    },
    {
      text: '<b>Campos Calculados</b> <br> Son columnas que no existen en la base de datos, sino que se obtienen de un método definido en el ModelAdmin o en el modelo, y se incluyen en list_display o en readonly_fields. El decorador @admin.display configura su comportamiento.',
      table: {
        headers: ['Parámetro', 'Función'],
        rows: [
          ['description', 'Título de la columna'],
          ['ordering', 'Campo real que se usa para ordenar la columna'],
          ['boolean', 'Presenta el valor como ícono de verdadero o falso'],
        ],
        caption: 'Parámetros de @admin.display',
      },
    },
    {
      text: '<b>Inlines</b> <br> Permiten editar en la misma página de un modelo los registros relacionados mediante una ForeignKey, como los préstamos dentro de la página de un equipo. TabularInline los muestra en filas de tabla y StackedInline apilados uno sobre otro. Se indican en el atributo inlines del ModelAdmin.',
    },
    {
      text: '<b>Middleware</b> <br> Componente de Django que se ubica entre el servidor web y las vistas, procesando cada petición antes de que llegue a la vista y cada respuesta antes de que salga hacia el navegador. Se activa agregándolo a la lista MIDDLEWARE de settings.py y se usa para tareas transversales como auditoría, seguridad, sesiones y bloqueo de usuarios.',
    },
    {
      text: '<b>Middleware Personalizado</b> <br> Se escribe como una clase cuyo constructor recibe get_response, que es la siguiente capa de la cadena, y cuyo método __call__ recibe la petición. El código escrito antes de llamar a get_response se ejecuta antes de la vista, y el escrito después trabaja sobre la respuesta. Si el middleware retorna una respuesta propia sin llamar a get_response, corta la cadena y la vista no se ejecuta.',
      table: {
        headers: ['Método', 'Cuándo se ejecuta'],
        rows: [
          ['__init__(self, get_response)', 'Una sola vez, al iniciar el servidor'],
          ['__call__(self, request)', 'En cada petición'],
          ['process_view()', 'Justo antes de ejecutar la vista, es opcional'],
          ['process_exception()', 'Cuando la vista lanza una excepción, es opcional'],
        ],
        caption: 'Métodos de un middleware',
      },
    },
    {
      text: '<b>Logging</b> <br> Es el registro de eventos del sistema mediante el módulo logging de Python, configurado en la variable LOGGING de settings.py. La auditoría es registrar las acciones para saber quién hizo qué, cuándo y desde dónde, y se realiza guardando usuario, fecha y hora, dirección IP, que se obtiene de request.META, y la acción realizada.',
      table: {
        headers: ['Nivel', 'Uso'],
        rows: [
          ['DEBUG', 'Detalle para desarrollo'],
          ['INFO', 'Acciones normales como un inicio de sesión'],
          ['WARNING', 'Situaciones inusuales como un acceso denegado'],
          ['ERROR', 'Fallos en una operación'],
          ['CRITICAL', 'Fallos graves que afectan al sistema'],
        ],
        caption: 'Niveles de logging',
      },
    },
    {
      text: '<b>Sesiones en Django</b> <br> Permiten recordar al usuario entre peticiones, dado que HTTP no guarda estado. Los datos se almacenan en el servidor y el navegador solo guarda una cookie llamada sessionid con el identificador. En el código se usa request.session como si fuera un diccionario.',
    },
    {
      text: '<b>Motores de Sesión</b> <br> Django permite elegir dónde se almacenan los datos de la sesión mediante la variable SESSION_ENGINE.',
      table: {
        headers: ['Motor', 'Almacenamiento'],
        rows: [
          ['backends.db', 'Base de datos, es el valor por defecto'],
          ['backends.cache', 'Memoria caché, más rápido pero volátil'],
          ['backends.cached_db', 'Caché y base de datos a la vez'],
          ['backends.file', 'Archivos en el servidor'],
          [
            'backends.signed_cookies',
            'Dentro de la propia cookie firmada, sin guardar nada en el servidor',
          ],
        ],
        caption: 'Motores de sesión de Django',
      },
    },
    {
      text: '<b>Configuración de Sesiones</b> <br> Variables de settings.py que controlan la duración y seguridad de la sesión.',
      table: {
        headers: ['Variable', 'Función', 'Valor por defecto'],
        rows: [
          ['SESSION_COOKIE_AGE', 'Duración de la sesión en segundos', '1209600, dos semanas'],
          ['SESSION_SAVE_EVERY_REQUEST', 'Renueva la expiración en cada petición', 'False'],
          ['SESSION_EXPIRE_AT_BROWSER_CLOSE', 'La sesión termina al cerrar el navegador', 'False'],
          ['SESSION_COOKIE_HTTPONLY', 'Impide que JavaScript lea la cookie', 'True'],
          ['SESSION_COOKIE_SECURE', 'Envía la cookie solo por HTTPS', 'False'],
          ['SESSION_COOKIE_SAMESITE', 'Restringe el envío en peticiones de otros sitios', 'Lax'],
          ['CSRF_COOKIE_SECURE', 'Envía la cookie del token CSRF solo por HTTPS', 'False'],
        ],
        caption: 'Variables de configuración de sesiones',
      },
    },
    {
      text: '<b>Sistema de Autenticación de Django</b> <br> Está implementado en django.contrib.auth. Su modelo User cuenta con los campos username, password, email, is_active, is_staff e is_superuser. Las contraseñas nunca se guardan en texto plano, sino como un hash con sal, que por defecto emplea el algoritmo PBKDF2, y en la base de datos queda el resultado junto con los datos del algoritmo.',
      table: {
        headers: ['Función', 'Uso'],
        rows: [
          [
            'authenticate(request, username, password)',
            'Verifica las credenciales y devuelve el usuario o None',
          ],
          ['login(request, user)', 'Inicia la sesión del usuario'],
          ['logout(request)', 'Cierra la sesión y borra sus datos'],
          ['user.set_password(clave)', 'Guarda la contraseña hasheada'],
          ['user.check_password(clave)', 'Compara una contraseña con el hash'],
        ],
        caption: 'Funciones principales de autenticación',
      },
    },
    {
      text: '<b>Protección de Vistas</b> <br> Restringen el acceso a una vista según el usuario. Existe un decorador para las vistas de función y un mixin para las de clase. Un usuario no autenticado es redirigido a LOGIN_URL con el parámetro next que indica la página solicitada, mientras que uno autenticado sin el permiso recibe el error 403.',
      table: {
        headers: ['Vista de función', 'Vista de clase', 'Exige'],
        rows: [
          ['@login_required', 'LoginRequiredMixin', 'Usuario autenticado'],
          [
            '@permission_required("app.permiso")',
            'PermissionRequiredMixin',
            'Un permiso específico',
          ],
          ['@user_passes_test(funcion)', 'UserPassesTestMixin', 'Que una función retorne True'],
        ],
        caption: 'Mecanismos de protección de vistas',
      },
    },
    {
      text: '<b>Ataques Web Frecuentes</b> <br> Un sistema backend debe contar con defensas frente a los tipos de ataques más comunes, la mayoría de ellas se encuentran incorporadas en Django.',
      table: {
        headers: ['Ataque', 'Descripción', 'Defensa'],
        rows: [
          [
            'XSS',
            'Inyección de scripts que se ejecutan en el navegador de otros usuarios',
            'Escape automático en plantillas y sanitización',
          ],
          [
            'Inyección SQL',
            'Código SQL insertado en un dato de entrada',
            'Consultas parametrizadas del ORM',
          ],
          [
            'CSRF',
            'Petición no deseada enviada con la sesión del usuario',
            'Token CSRF y cookie SameSite',
          ],
          [
            'Clickjacking',
            'Ocultar el sitio dentro de un iframe para engañar al usuario',
            'Cabecera X-Frame-Options',
          ],
          ['Secuestro de sesión', 'Robo del identificador de sesión', 'HttpOnly, Secure y HTTPS'],
        ],
        caption: 'Ataques web y defensas en Django',
      },
    },
    {
      subtitle: 'Procedimiento',
    },
    {
      text: '1. Desarrollo de clases en hora de teoría <br> 2. Desarrollo de clases en hora práctica <br> 3. Realización de la práctica calificada <br> 4. Realización de la práctica de laboratorio <br> 5. Actualización del cuaderno de la asignatura',
      image: {
        src: 'assets/images/Semana12/Semana12Teoria.jpeg',
        alt: 'Desarrollo de clases teóricas',
        side: 'right',
        tilt: -6,
      },
    },
  ],
  right: [],
};
