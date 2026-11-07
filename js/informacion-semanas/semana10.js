window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[10] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar Aplicaciones Web con Python',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>Python</b> <br> Lenguaje de programación de alto nivel, interpretado, de tipado dinámico y multiparadigma, creado por Guido van Rossum en 1991. Su sintaxis es cercana al lenguaje natural, por lo que se usa en desarrollo backend, automatización, análisis de datos e inteligencia artificial. En web destacan los frameworks Django y Flask.',
    },
    {
      text: '<b>Intérprete y Ejecución</b> <br> La implementación CPython compila el código fuente a bytecode, que luego es ejecutado por la Máquina Virtual de Python. El código puede ejecutarse de forma interactiva con el modo REPL escribiendo python en la terminal, o como script con python archivo.py. Una versión instalada se verifica con python --version.',
    },
    {
      text: '<b>Indentación</b> <br> A diferencia de otros lenguajes que usan llaves, Python define los bloques de código mediante la indentación. Se emplean 4 espacios por nivel, por lo que no deben mezclarse tabulaciones con espacios, de lo contrario se produce un IndentationError.',
    },
    {
      text: '<b>PEP 8</b> <br> Guía de estilo de código de Python para uniformidad y legibilidad. Herramientas como black formatean el código automáticamente y pylint detecta malas prácticas.',
      table: {
        headers: ['Elemento', 'Convención', 'Ejemplo'],
        rows: [
          ['Variables y funciones', 'snake_case', 'precio_final'],
          ['Clases', 'PascalCase', 'ProductoElectronico'],
          ['Constantes', 'MAYUSCULAS', 'IGV'],
          ['Longitud de línea', 'Máximo 79 caracteres', '-'],
        ],
        caption: 'Convenciones de nombres según PEP 8',
      },
    },
    {
      text: '<b>Comentarios</b> <br> El comentario de una línea inicia con #. El docstring se escribe entre triple comillas al inicio de una función, clase o módulo para documentarlo, y puede consultarse en ejecución con help().',
    },
    {
      text: '<b>Variables</b> <br> Una variable es un nombre que referencia a un objeto en memoria. No se declara el tipo, dado que este se determina por el valor asignado y puede cambiar durante la ejecución. El nombre se distingue entre mayúsculas y minúsculas, no puede iniciar con número ni usar palabras reservadas. El tipo se consulta con type().',
    },
    {
      text: '<b>Tipos de Datos</b> <br> Los tipos se clasifican en inmutables, cuyo valor no puede modificarse una vez creado, y mutables, que sí permiten cambios sobre el mismo objeto.',
      table: {
        headers: ['Tipo', 'Descripción', 'Mutable'],
        rows: [
          ['int', 'Número entero de tamaño ilimitado', 'No'],
          ['float', 'Número decimal', 'No'],
          ['str', 'Cadena de texto', 'No'],
          ['bool', 'True o False', 'No'],
          ['NoneType', 'Ausencia de valor, None', 'No'],
          ['tuple', 'Colección ordenada fija', 'No'],
          ['list', 'Colección ordenada modificable', 'Sí'],
          ['dict', 'Pares clave-valor', 'Sí'],
        ],
        caption: 'Principales tipos de datos en Python',
      },
    },
    {
      text: '<b>Números y Operadores</b> <br> Además de los operadores aritméticos comunes, Python incluye la división entera, módulo y potencia. La división con / siempre devuelve un float.',
      table: {
        headers: ['Operador', 'Función', 'Ejemplo'],
        rows: [
          ['/', 'División con decimales', '7 / 2 devuelve 3.5'],
          ['//', 'División entera', '7 // 2 devuelve 3'],
          ['%', 'Residuo de la división', '7 % 2 devuelve 1'],
          ['**', 'Potencia', '2 ** 3 devuelve 8'],
        ],
        caption: 'Operadores aritméticos propios de Python',
      },
    },
    {
      text: '<b>Cadenas</b> <br> Son secuencias de caracteres inmutables que se escriben con comillas simples, dobles o triples para varias líneas. Se accede a los caracteres por índice y se extraen fragmentos con slicing cadena[inicio:fin]. Las f-strings permiten insertar variables dentro del texto, como f"Hola {nombre}". Los métodos más usados son upper(), lower(), strip(), split() y replace().',
    },
    {
      text: '<b>Listas</b> <br> Colección ordenada y mutable de elementos, que pueden ser de distintos tipos, escrita entre corchetes. Permite acceso por índice tanto positivo como negativo, y slicing.',
      table: {
        headers: ['Método', 'Función'],
        rows: [
          ['append(x)', 'Agrega un elemento al final'],
          ['insert(i, x)', 'Inserta un elemento en la posición i'],
          ['remove(x)', 'Elimina la primera aparición de x'],
          ['pop(i)', 'Elimina y devuelve el elemento de la posición i'],
          ['sort()', 'Ordena la lista'],
        ],
        caption: 'Métodos principales de las listas',
      },
    },
    {
      text: '<b>Tuplas</b> <br> Colección ordenada e inmutable escrita entre paréntesis. Se utiliza para datos que no deben modificarse, como coordenadas, y es la forma en que una función devuelve varios valores.',
      table: {
        headers: ['Aspecto', 'Lista', 'Tupla'],
        rows: [
          ['Sintaxis', '[1, 2, 3]', '(1, 2, 3)'],
          ['Modificable', 'Sí', 'No'],
          ['Uso', 'Datos que cambian', 'Datos fijos'],
        ],
        caption: 'Diferencia entre lista y tupla',
      },
    },
    {
      text: '<b>Diccionarios</b> <br> Colección de pares clave-valor escrita entre llaves. Las claves son únicas e inmutables y, desde Python 3.7, se conserva el orden de inserción. Se accede al valor con dic["clave"], que lanza KeyError si no existe, o con dic.get("clave"), que devuelve None. Los métodos keys(), values() e items() permiten recorrerlo.',
    },
    {
      text: '<b>Condicionales</b> <br> Las sentencias if, elif y else ejecutan un bloque según se cumpla una condición. Se combinan con los operadores lógicos and, or y not, y los operadores de comparación. Además existe el operador ternario valor_a if condicion else valor_b. Valores como 0, cadena vacía, lista vacía y None se evalúan como False.',
    },
    {
      text: '<b>Estructuras de Control</b> <br> El bucle for recorre cualquier iterable, y con range() repite un número definido de veces. El bucle while se repite mientras la condición sea verdadera. Dentro de ambos, break termina el bucle y continue salta a la siguiente iteración. Las comprensiones de lista permiten crear una lista en una sola línea como por ejemplo [x * 2 for x in numeros].',
    },
    {
      text: '<b>Funciones Imperativas</b> <br> Se definen con la palabra def y agrupan instrucciones reutilizables. Admiten parámetros con valor por defecto, argumentos con nombre, *args para recibir una cantidad variable de argumentos posicionales y **kwargs para argumentos con nombre.',
    },
    {
      text: '<b>Retorno de Valores</b> <br> La sentencia return finaliza la función y devuelve un resultado. Si la función no incluye return, devuelve None. Para devolver varios valores se separan por comas, y Python los entrega empaquetados en una tupla.',
    },
    {
      text: '<b>API Imperativa</b> <br> Conjunto de funciones que se invocan una tras otra para realizar una tarea paso a paso, sin objetos que mantengan estado interno. Es la contraparte de una API orientada a objetos, donde el estado y el comportamiento se agrupan en clases.',
    },
    {
      text: '<b>Programación Orientada a Objetos</b> <br> Paradigma que organiza el código en clases y objetos, modelando entidades del mundo real con sus datos y comportamientos. Facilita tanto la reutilización como el mantenimiento del código.',
      table: {
        headers: ['Pilar', 'Función'],
        rows: [
          ['Encapsulamiento', 'Protege los datos internos y controla su acceso'],
          ['Herencia', 'Una clase reutiliza atributos y métodos de otra'],
          ['Polimorfismo', 'Un mismo método se comporta distinto según el objeto'],
        ],
        caption: 'Pilares de la POO',
      },
    },
    {
      text: '<b>Clases, Atributos e Instancias</b> <br> Una clase es el molde que define atributos y métodos, que se declara con la palabra class. Una instancia es el objeto concreto creado a partir de la clase, por ejemplo p = Producto("abcd", 10). Los atributos de instancia pertenecen a cada objeto y se definen con self, mientras que los atributos de clase se comparten entre todas las instancias.',
    },
    {
      text: '<b>Métodos y Objetos</b> <br> Un método es una función definida dentro de una clase. El primer parámetro del método de instancia es self, que representa al objeto que lo invoca.',
      table: {
        headers: ['Tipo', 'Decorador', 'Primer parámetro'],
        rows: [
          ['De instancia', 'Ninguno', 'self, el objeto'],
          ['De clase', '@classmethod', 'cls, la clase'],
          ['Estático', '@staticmethod', 'Ninguno'],
        ],
        caption: 'Tipos de métodos en Python',
      },
    },
    {
      text: '<b>Constructores y Destructores</b> <br> El método __init__ es el constructor, el cual se ejecuta al crear la instancia para inicializar su estado. El método __del__ es el destructor, invocado cuando el recolector de basura elimina el objeto, por lo que el momento exacto no es determinista. Para liberar recursos generalmente se recomienda usar with o try/finally.',
    },
    {
      text: '<b>Encapsulamiento</b> <br> Python no tiene modificadores de acceso estrictos, por lo que se basa en convenciones de nombres. El decorador @property permite acceder a un atributo como si fuera público, validando el valor al asignarlo sin cambiar la forma de uso.',
      table: {
        headers: ['Notación', 'Nivel', 'Comportamiento'],
        rows: [
          ['atributo', 'Público', 'Accesible desde cualquier lugar'],
          ['_atributo', 'Protegido', 'Convención para uso interno y subclases'],
          ['__atributo', 'Privado', 'Name mangling, Python cambia su nombre internamente'],
        ],
        caption: 'Niveles de acceso en Python',
      },
    },
    {
      text: '<b>Herencia</b> <br> Permite que una clase hija reutilice los atributos y métodos de una clase padre, escribiendo el padre entre paréntesis, como por ejemplo class Libro(Producto). La función super() llama a métodos de la clase padre, se usar en el __init__ de la clase hija.',
    },
    {
      text: '<b>Herencia Múltiple</b> <br> Python permite que una clase herede de varias clases a la vez. El orden en que se buscan los métodos se denomina MRO y se calcula con el algoritmo de linealización C3, pudiendo verse con Clase.__mro__. super() sigue este orden y no solo a la clase padre directa. Un Mixin es una clase pequeña que aporta una funcionalidad concreta como puede ser un DescuentoMixin, para combinarse con otras.',
    },
    {
      text: '<b>Polimorfismo</b> <br> Una clase hija puede sobrescribir un método del padre para darle un comportamiento propio, de modo que calcular() devuelva un resultado distinto en cada clase. Python usa duck typing, donde basta que un objeto tenga el método para ejecutarlo sin requerir una interfaz. El método  __str__ define cómo se representa el objeto como texto.',
    },
    {
      text: '<b>Excepciones</b> <br> Son errores detectados durante la ejecución que interrumpen el flujo normal del programa si no se manejan. Se controlan con el bloque try, cada parte tiene una función distinta.',
      table: {
        headers: ['Bloque', 'Se ejecuta cuando'],
        rows: [
          ['try', 'Contiene el código que puede fallar'],
          ['except', 'Ocurre la excepción indicada'],
          ['else', 'No ocurrió ninguna excepción'],
          ['finally', 'Siempre, haya o no error'],
        ],
        caption: 'Bloques de manejo de excepciones',
      },
    },
    {
      text: '<b>Excepciones Comunes</b> <br> Python incluye excepciones incorporadas que indican la causa del error.',
      table: {
        headers: ['Excepción', 'Causa'],
        rows: [
          ['ValueError', 'Valor con tipo correcto pero contenido inválido'],
          ['TypeError', 'Operación sobre un tipo no compatible'],
          ['KeyError', 'Clave inexistente en un diccionario'],
          ['IndexError', 'Índice fuera de rango en una lista'],
          ['ZeroDivisionError', 'División entre cero'],
          ['FileNotFoundError', 'Archivo que no existe'],
        ],
        caption: 'Excepciones más frecuentes',
      },
    },
    {
      text: '<b>Excepciones Personalizadas</b> <br> Se crean heredando de Exception, y permiten formar una jerarquía del dominio, como ValidationError y NotFoundError. Se lanzan con raise. No se debe capturar Exception de forma genérica sin relanzar o registrar el error.',
    },
    {
      text: '<b>Módulos</b> <br> Un módulo es un archivo .py cuyas funciones y clases se reutilizan con import o from modulo import nombre. Un paquete es una carpeta con un archivo __init__.py que agrupa varios módulos como por ejemplo models/ y utils/. La condición if __name__ == "__main__" permite que un archivo se ejecute solo cuando es el programa principal y no cuando es importado. Python incluye una librería estándar con módulos como math, datetime y json.',
    },
    {
      text: '<b>Entornos Virtuales</b> <br> pip es el gestor de paquetes que instala librerías externas desde el repositorio PyPI. Un entorno virtual, creado con python -m venv, aísla las dependencias de cada proyecto. Las librerías se listan en el archivo requirements.txt para poder reproducir el entorno.',
    },
    {
      subtitle: 'Procedimiento',
    },
    {
      text: '1. Desarrollo de clases en hora de teoría <br> 2. Desarrollo de clases en hora práctica <br> 3. Realización de la práctica calificada <br> 4. Realización de la práctica de laboratorio <br> 5. Actualización del cuaderno de la asignatura',
      image: {
        src: 'assets/images/Semana10/Semana10Teoria.jpeg',
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
      title: '1. Guía Práctica Semana 10',
      subtitle: 'API RESTful con Node.js, Express y MySQL',
      text: 'Se inicializó el proyecto con npm init y se instalaron las dependencias express, mysql2, cors y dotenv, organizando la estructura MVC en las carpetas src/routes, src/controllers y src/config, guardando las credenciales en variables de entorno con dotenv. Luego se creó en MySQL la base de datos db_lab10 con la tabla productos, se realizó la configuración en config/db.js con un pool de conexiones de mysql2/promise usando async/await. Se desarrollaron productosController.js y productosRoutes.js con los endpoints GET para listar, POST para crear, devolviendo respuestas en application/json con los códigos de estado 200 y 201, y posteriormente se completó el CRUD con los endpoints PUT y DELETE. El manejo de errores se implementó con bloques try/catch, devolviendo los códigos 400, 404 y 500 con mensajes mediante res.status(codigo).json. Finalmente, se creó una Collection en Postman para probar los 4 verbos HTTP, validando headers, body y status codes tanto en respuestas exitosas como de error.',
      image: {
        src: 'assets/images/Semana10/Semana10GuiaPractica.png',
        alt: 'Prueba del endpoint GET de productos en Postman con respuesta 200 OK',
        side: 'right',
        tilt: 2,
      },
    },
    {
      title: '2. Guía Práctica Grupal Semana 10',
      subtitle: 'Sistema de Gestión de Productos con Python',
      text: 'Trabajo desarrollado en equipo de 2 integrantes cada uno en su propia rama de Git, se refactorizó el código base para construir un Sistema de Gestión de Productos por línea de comandos con programación orientada a objetos. Se diseñó una clase base Producto con las clases derivadas Electronico y Libro, aplicando herencia con super() y un DescuentoMixin para la herencia múltiple, analizando el orden de resolución de métodos MRO. El encapsulamiento se logró con atributos protegidos y privados, accediendo mediante @property y validando rangos en los setters. El polimorfismo se aplicó sobrescribiendo el método calcular_precio_final() en cada clase y empleando __str__ para una representación uniforme. Se definieron excepciones ValidationError y NotFoundError controladas con bloques try/except/else/finally en el flujo del usuario. Se modularizó en main.py como orquestador, junto con los paquetes models/ y utils/ con su __init__.py. Finalmente, se elaboró el README.md con el diagrama de clases, la explicación del MRO, capturas de ejecución del caso exitoso y de las 2 excepciones capturadas.',
      image: {
        src: 'assets/images/Semana10/Semana10GuiaPracticaGrupal.png',
        alt: 'Sistema de Gestión de Productos en Python ejecutándose por línea de comandos',
        side: 'left',
        tilt: -3,
      },
    },
    {
      chip: 'Resultados',
    },
    {
      title: '1. Guía Práctica Semana 10',
      text: 'Enlace en <a href="https://github.com/E5gar/GuiaPracticaSemana10" target="_blank">GitHub</a>',
      image: {
        src: 'assets/images/Semana10/Semana10ProductosElectronicos.png',
        alt: 'Aplicación Web de Tienda de Reparación de Productos Electrónicos con Python',
        side: 'right',
        tilt: 4,
      },
      pdf: {
        src: 'assets/files/Semana10/PRACTICA_SEMANA_10_GAGO_URIBE_EDGAR_ROBERT.pdf',
      },
    },
    {
      title: '2. Guía Práctica Grupal Semana 10',
      text: 'Enlace en <a href="https://github.com/E5gar/GuiaPracticaGrupalSemana10" target="_blank">GitHub</a>',
      image: {
        src: 'assets/images/Semana10/Semana10LibreriaPython.png',
        alt: 'Aplicación Web de Librería con Python',
        side: 'left',
        tilt: -4,
      },
      pdf: {
        src: 'assets/files/Semana10/Guía Práctica Grupal - Semana 10.pdf',
      },
    },
    {
      chip: 'Reflexión',
    },
    {
      title: '¿Qué aprendió?',
      text: 'En esta semana aprendí los fundamentos del lenguaje Python, partiendo de la sintaxis basada en indentación, convenciones de PEP 8, uso de variables, cadenas y números. Diferencié los tipos de datos mutables e inmutables, trabajé con listas, tuplas y diccionarios, comprendiendo cuándo conviene usar cada uno. Asimismo, aprendí a controlar el flujo del programa con condicionales,  bucles y a organizar el código en funciones imperativas con parámetros por defecto, *args, **kwargs y retorno de múltiples valores mediante tuplas. En programación orientada a objetos comprendí cómo definir clases, atributos e instancias, el rol de __init__ como constructor y de __del__ como destructor no determinista. Entendí el encapsulamiento con atributos tanto protegidos como privados junto a @property para validar valores en los setters, la herencia con super(), la herencia múltiple con Mixins y el orden de resolución de métodos MRO calculado con C3. También aprendí que el polimorfismo en Python se apoya en duck typing y en la sobrescritura de métodos como calcular_precio_final(). En el manejo de excepciones aprendí a emplear try, except, else y finally, así como a crear una jerarquía propia con ValidationError y NotFoundError. Finalmente, comprendí la modularización con módulos y paquetes, en la práctica individual aprendí a construir una API RESTful con Node.js y Express, conectada a MySQL mediante un pool de conexiones de mysql2/promise, protegiendo las credenciales con dotenv y validando los verbos HTTP con códigos de estado 200, 201, 404, 500 mediante Postman.',
    },
    {
      title: '¿Cómo aprendió?',
      text: 'En la hora de teoría se explicaron la sintaxis de Python, tipos de datos, estructuras de control, funciones, pilares de la programación orientada a objetos, manejo de excepciones y modularización. En la hora de práctica se desarrolló la guía paso a paso, inicializando el proyecto con npm init, instalando express, mysql2, cors y dotenv, y organizando la estructura MVC en carpetas de rutas, controladores y configuración. Luego se creó la base de datos db_lab10 con la tabla productos, se configuró el pool de conexiones y se implementaron los endpoints GET, POST, PUT y DELETE con bloques try/catch para devolver los errores 400, 404 y 500. Ello se validó creando una Collection en Postman para probar los 4 verbos HTTP y revisar headers, body y códigos de estado. Lo aprendido se reforzó en la práctica grupal, donde en equipo de 2 integrantes se refactorizó el código base para construir un Sistema de Gestión de Productos en Python, aplicando herencia, encapsulamiento con @property, polimorfismo, excepciones personalizadas y modularización en main.py. Finalmente, se documentó el trabajo en un README.md con el diagrama de clases, la explicación del MRO, capturas de ejecución del caso exitoso y de las excepciones capturadas.',
    },
    {
      title: 'Bibliografía',
      table: {
        headers: ['N°', 'Título', 'Tipo'],
        rows: [
          [
            '01',
            '<a href="https://www.textbookofpython.com/" target="_blank">Textbook of Python</a> - Chris Paton',
            'Libro',
          ],
          [
            '02',
            '<a href="https://object-oriented-python.github.io/index.html" target="_blank">Object-oriented Programming in Python for Mathematicians</a> - David A. Ham',
            'Libro',
          ],
          [
            '03',
            '<a href="https://openstax.org/books/introduction-python-programming/pages/1-introduction" target="_blank">Introduction to Python Programming</a> - Udayan Das, Aubrey Lawson, Chris Mayfield y Narges Norouzi (2024)',
            'Libro',
          ],
          [
            '04',
            '<a href="https://www.uvm.edu/~cbcafier/assets/itpacs/itpacs_2ed_cafiero.pdf" target="_blank">An Introduction to Programming and Computer Science with Python (Second Edition)</a> - Clayton Cafiero (2025)',
            'Libro',
          ],
          [
            '05',
            '<a href="https://do1.dr-chuck.com/pythonlearn/ES_es/pythonlearn.pdf" target="_blank">Python para todos: Explorando la información con Python 3</a> - Charles R. Severance',
            'Libro',
          ],
        ],
        caption: '',
      },
    },
  ],
};
