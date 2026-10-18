window.cuadernoWeeksData = window.cuadernoWeeksData || {};
cuadernoWeeksData[7] = {
  left: [
    {
      chip: 'Tema',
      title: 'Desarrollar Aplicaciones con Hooks en Framework JS',
    },
    {
      subtitle: 'Definiciones',
    },
    {
      text: '<b>Hooks</b> <br> Funciones especiales de React que permiten a los componentes de función acceder al estado y a otras características sin necesidad de usar clases. El nombre empieza con el prefijo use y se importa desde la librería react. Los Hooks han sido incorporados en la versión 16.8.',
    },
    {
      text: '<b>Reglas de los Hooks</b> <br> Normas que deben cumplirse al usar hooks. Si no se cumplen entonces se presentan errores o comportamientos inesperados en la aplicación.',
      table: {
        headers: ['Regla', 'Motivo'],
        rows: [
          [
            'Llamarse en el nivel superior del componente',
            'React identifica cada hook por el orden en que se ejecuta en cada renderizado',
          ],
          [
            'No usarse dentro de condicionales, bucles o funciones anidadas',
            'Alterarían el orden de ejecución entre un renderizado y otro',
          ],
          [
            'Usarse solo en componentes de función o en hooks personalizados',
            'Las funciones comunes de JavaScript no tienen acceso al ciclo de renderizado',
          ],
        ],
        caption: 'Reglas de Hooks',
      },
    },
    {
      text: '<b>eslint-plugin-react-hooks</b> <br> Complemento de ESLint que verifica automáticamente reglas de los hooks, detectando llamadas en lugares no permitidos, mientras que exhaustive-deps advierte cuando falta una dependencia en el arreglo. Viene configurado por defecto en los proyectos creados con Vite.',
    },
    {
      text: '<b>Hooks Incorporados</b> <br> React incluye un conjunto de hooks propios, cada uno resuelve una necesidad distinta dentro del componente.',
      table: {
        headers: ['Hook', 'Función'],
        rows: [
          ['useState', 'Guarda un dato que al cambiar renderiza nuevamente el componente'],
          ['useEffect', 'Ejecuta acciones secundarias después del renderizado'],
          ['useContext', 'Lee un dato compartido sin recibirlo como prop'],
          ['useRef', 'Guarda una referencia mutable que no provoca renderizado'],
          ['useReducer', 'Gestiona estado mediante acciones'],
          ['useCallback', 'Memoriza una función entre renderizados'],
          ['useMemo', 'Memoriza el resultado de un cálculo'],
        ],
        caption: 'Hooks incorporados de React',
      },
    },
    {
      text: '<b>useState</b> <br> El valor inicial que recibe solo se emplea en el primer renderizado, en los siguientes conserva el valor más reciente. El estado puede ser de cualquier tipo de dato, sea número, texto, booleano, arreglo u objeto. Un componente puede declarar tantos estados como necesite, cada uno de manera independiente.',
    },
    {
      text: '<b>Actualización Funcional del Estado</b> <br> Consiste en pasar a la función actualizadora otra función que recibe el valor previo y retorna el nuevo. Se usa cuando el nuevo valor depende del anterior, dado que el estado dentro de un renderizado es una captura que no cambia hasta el siguiente.',
      table: {
        headers: ['Forma', 'Sintaxis', 'Resultado al llamarla tres veces seguidas'],
        rows: [
          ['Directa', 'setContador(contador + 1)', 'Incrementa en 1'],
          ['Funcional', 'setContador(prev =&gt; prev + 1)', 'Incrementa en 3'],
        ],
        caption: 'Diferencia entre actualización directa y funcional',
      },
    },
    {
      text: '<b>Actualizaciones por Lotes</b> <br> React agrupa varias llamadas a funciones actualizadoras dentro del mismo evento en un único renderizado, con la finalidad de evitar renderizados innecesarios. Por ello, leer el estado después de actualizarlo devuelve todavía el valor anterior.',
    },
    {
      text: '<b>Inmutabilidad del Estado</b> <br> El estado de tipo objeto o arreglo nunca se modifica directamente, siempre se reemplaza por una copia nueva. React detecta el cambio comparando referencias, por lo que mutar el original no provoca un nuevo renderizado.',
      table: {
        headers: ['Operación', 'Forma incorrecta', 'Forma correcta'],
        rows: [
          ['Agregar elemento', 'arreglo.push(x)', '[...arreglo, x]'],
          ['Eliminar elemento', 'arreglo.splice(i, 1)', 'arreglo.filter(...)'],
          ['Modificar elemento', 'arreglo[0] = x', 'arreglo.map(...)'],
          ['Modificar propiedad', 'objeto.edad = 20', '{ ...objeto, edad: 20 }'],
        ],
        caption: 'Actualización de estado sin mutar',
      },
    },
    {
      text: '<b>Estado Inicial Perezoso</b> <br> Cuando el valor inicial requiere un cálculo costoso, se pasa a useState una función en lugar del valor. React la ejecuta únicamente en el primer renderizado para evitar repetir el cálculo cada vez que el componente se renderiza.',
    },
    {
      text: '<b>useEffect</b> <br> Se ejecuta después de que React actualiza el DOM y el navegador presenta la interfaz, por lo que no bloquea el renderizado. Se usa para sincronizar el componente con sistemas externos.',
    },
    {
      text: '<b>Arreglo de Dependencias</b> <br> Es el segundo argumento de useEffect que controla cuándo se ejecuta el efecto. React compara cada valor del arreglo con el del renderizado anterior. Todo valor del componente que se use dentro del efecto debe incluirse en dicho arreglo.',
      table: {
        headers: ['Arreglo', 'Cuándo se ejecuta el efecto'],
        rows: [
          ['No se indica', 'Después de cada renderizado'],
          ['[ ] vacío', 'Solo después del primer renderizado'],
          ['[a, b]', 'Después del primer renderizado y cada vez que a o b cambian'],
        ],
        caption: 'Comportamiento según el arreglo de dependencias',
      },
    },
    {
      text: '<b>Función de Limpieza</b> <br> Es la función que un efecto puede retornar para deshacer lo que configuró. React la ejecuta antes de volver a ejecutar el efecto y cuando el componente se elimina de la pantalla.',
    },
    {
      text: '<b>Ciclo de Vida con useEffect</b> <br> Los componentes de clase empleaban los métodos componentDidMount, componentDidUpdate y componentWillUnmount de forma separada. El hook useEffect unifica las tres fases dentro de una misma sintaxis.',
      table: {
        headers: ['Fase', 'Cómo se logra'],
        rows: [
          ['Montaje', 'useEffect con arreglo de dependencias vacío'],
          ['Actualización', 'useEffect con valores en el arreglo de dependencias'],
          ['Desmontaje', 'Función de limpieza retornada por el efecto'],
        ],
        caption: 'Fases del ciclo de vida en componentes de función',
      },
    },
    {
      text: '<b>StrictMode</b> <br> Es un componente de React que en modo de desarrollo ejecuta dos veces cada efecto, montando, desmontando y volviendo a montar el componente. Su objetivo es detectar efectos que no cuentan con función de limpieza.',
    },
    {
      text: '<b>Context API</b> <br> Mecanismo de React que permite compartir un dato entre componentes sin enviarlo como prop por cada nivel del árbol. Es una alternativa al prop drilling para datos globales como el tema, idioma o usuario autenticado.',
    },
    {
      text: '<b>createContext</b> <br> Función que crea el objeto de contexto. Recibe un valor por defecto, que solo se utiliza cuando un componente consume el contexto sin estar dentro de un Provider.',
    },
    {
      text: '<b>Provider</b> <br> Componente del contexto que envuelve a todos los componentes que podrán leer el dato. El dato se entrega en la prop value, el cual puede ser un valor, objeto o función.',
    },
    {
      text: '<b>useContext</b> <br> Hook que recibe un contexto y retorna su valor actual, tomado del Provider más cercano hacia arriba en el árbol de componentes.',
    },
    {
      text: '<b>Provider con Estado</b> <br> Para que un dato compartido pueda modificarse, el componente Provider lo guarda con useState y entrega en value tanto el valor como la función actualizadora. De esta manera cualquier descendiente puede leer el dato y también cambiarlo.',
    },
    {
      text: '<b>Renderizado de Consumidores</b> <br> Cuando cambia el valor del Provider, todos los componentes que consumen dicho contexto se renderizan nuevamente. Por ello resulta conveniente mantener contextos pequeños, separados por responsabilidad, en lugar de uno solo que almacene todos los datos de la aplicación.',
    },
    {
      text: '<b>useRef</b> <br> Hook que retorna un objeto con una única propiedad current, el cual persiste durante toda la vida del componente. A diferencia del estado, modificar current no provoca un nuevo renderizado.',
      table: {
        headers: ['Aspecto', 'useState', 'useRef'],
        rows: [
          ['Retorno', 'Valor y función actualizadora', 'Objeto con la propiedad current'],
          ['Al cambiar', 'Renderiza nuevamente el componente', 'No renderiza'],
          ['Se modifica con', 'Función actualizadora', 'Asignación directa a current'],
          ['Uso', 'Datos que se muestran en la interfaz', 'Datos internos del componente'],
        ],
        caption: 'Diferencia entre useState y useRef',
      },
    },
  ],
  right: [],
};
