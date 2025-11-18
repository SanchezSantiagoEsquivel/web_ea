Web EA
Este proyecto sirve como una base sólida para aplicaciones web modernas utilizando Angular.

🏛️ Arquitectura del Proyecto
Este proyecto sigue una arquitectura modular basada en funcionalidades (feature-based). El objetivo es organizar el código en módulos cohesivos e independientes, lo que facilita la escalabilidad, el mantenimiento y el trabajo en equipo a medida que el proyecto crece.

La estructura principal del código fuente se encuentra dentro de la carpeta /src/app y se recomienda organizarla alrededor de tres conceptos clave: core, features y shared.

/src/app/core
Esta carpeta está destinada a contener la lógica fundamental de la aplicación, aquella que se configura una sola vez y se utiliza en todo el proyecto.

guards/: Contiene los guardianes de ruta (Route Guards) para proteger rutas, por ejemplo, verificando si un usuario está autenticado.
interceptors/: Para los interceptores HTTP, útiles para añadir cabeceras (como tokens de autenticación) a las peticiones o para gestionar errores de forma global.
services/: Aquí residen los servicios singleton, es decir, aquellos que deben tener una única instancia en toda la aplicación (ej. AuthService, LoggerService, AnalyticsService).
core.module.ts: Un módulo que agrupa y provee los servicios singleton a toda la aplicación. Debe ser importado una única vez en app.module.ts.
/src/app/features
Aquí es donde reside la verdadera lógica de negocio. Cada funcionalidad principal de la aplicación debería tener su propio directorio y cargarse mediante Lazy Loading para optimizar los tiempos de carga.

Ejemplo de estructura para una futura funcionalidad de "productos":

/src/app/shared
Contiene elementos reutilizables que pueden ser compartidos por diferentes módulos de features. A diferencia de core, estos elementos se pueden importar en múltiples módulos de funcionalidades según se necesiten.

components/: Componentes de presentación, altamente reutilizables (ej. botones genéricos, modales, spinners, avatares).
pipes/: Pipes personalizados que se pueden usar en toda la aplicación (ej. para truncar texto o formatear una moneda).
directives/: Directivas personalizadas (ej. para resaltar un elemento al pasar el ratón por encima).
models/ o interfaces/: Definiciones de tipos y modelos de datos (ej. user.model.ts, product.model.ts).
shared.module.ts: Módulo que agrupa y exporta todos los elementos anteriores para que puedan ser fácilmente consumidos por otros módulos.
🗂️ Estructura General de Carpetas
/ (Raíz del Proyecto)

.husky/: Contiene los ganchos de Git (hooks) configurados por Husky para ejecutar tareas (como el linting) antes de un commit.

node_modules/: Almacena las dependencias del proyecto. Es gestionada por npm y está ignorada por Git.

src/: Contiene todo el código fuente de la aplicación Angular.

.gitignore: Especifica los archivos y carpetas que Git debe ignorar.

angular.json: Archivo de configuración del workspace de Angular. Define proyectos, configuraciones de build, testing, etc.

package.json: Define los scripts (npm run ...) y las dependencias del proyecto.

eslint.config.js, .prettierrc.json, .stylelintrc.json: Archivos de configuración para las herramientas de calidad y formato de código.

tsconfig.json: Configuración raíz de TypeScript para el proyecto.

/src (Código Fuente)

app/: El corazón de la aplicación, donde reside el código de Angular. Aquí se encuentran los componentes principales como app.component.ts y el enrutador app.routes.ts.

assets/: Para archivos estáticos como imágenes, fuentes e iconos.

environments/: Contiene archivos de configuración específicos para cada entorno (desarrollo, producción, etc.).

index.html: El punto de entrada HTML de la aplicación.

main.ts: El punto de entrada principal que arranca la aplicación Angular.

styles.scss: Para definir los estilos globales de la aplicación (variables CSS, resets, etc.).

Web EA
This project was generated using Angular CLI  version 19.2.5.

Development server
To start a local development server, run:


ng serve
Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.

Code scaffolding
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:


ng generate component component-name
For a complete list of available schematics (such as components, directives, or pipes), run:


ng generate --help
Building
To build the project run:


ng build
This will compile your project and store the build artifacts in the dist/ directory. By default, the production build optimizes your application for performance and speed.

Running unit tests
To execute unit tests with the Karma  test runner, use the following command:


ng test
Running end-to-end tests
For end-to-end (e2e) testing, run:


ng e2e
Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

Additional Resources
For more information on using the Angular CLI, including detailed command references, visit the Angular CLI Overview and Command Reference  page.

🧭 Buenas prácticas de Angular (resumen del proyecto)
Esta sección resume las pautas que seguimos en este repositorio. Para la versión extendida y con ejemplos, consulta AGENTS.md.

Organización y nombres
Estructura por funcionalidades (feature-based). Mantén components, services, pages, guards, interceptors claramente separados.
Archivos en kebab-case y sufijos oficiales: .component.ts, .service.ts, .pipe.ts, etc.
Clases en PascalCase; variables/funciones en camelCase; constantes en UPPER_SNAKE_CASE.
Usa el inglés para todos los identificadores y nombres (variables, funciones, clases, archivos, rutas). Evita mezclar idiomas.
Plantillas y componentes
Evita el legacy *ngFor; usa el nuevo control flow: @for (item of items; track item.id). También @if/@switch en código nuevo.
Con @for usa track para claves estables; en plantillas existentes con *ngFor, mantén trackBy hasta migrar.
Favorece componentes pequeños y enfocados. Evita lógica compleja en la plantilla; muévela a getters/métodos o pipes puros.
Estrategia de cambio: OnPush cuando sea viable y con datos inmutables.
Accesibilidad (a11y): usa etiquetas, roles y atributos aria adecuados.
Servicios y DI
Usa providedIn para alcance (root o feature). Inyecta con constructor o inject(); evita instancias manuales con new.
Mantén servicios sin estado de UI; la presentación vive en componentes.
RxJS y Signals
Prefiere AsyncPipe en plantillas. Evita suscripciones manuales; si son necesarias, usa takeUntilDestroyed() o patrón similar.
Promueve Angular Signals para estado local/UI: signal(), computed(), effect(), input(), model().
Interoperabilidad según necesidad: toObservable() / toSignal(). Observables para flujos externos (HTTP, sockets, streams).
Formularios
Evita Template-driven forms (ngModel/ngModelOptions).
Usa Reactive Forms: FormGroup, FormControl, FormArray y Validators para validación y composición.
En componentes personalizados, implementa ControlValueAccessor para integrarlos al API de formularios.
En plantillas, emplea formGroup y formControlName (o formArrayName) en lugar de bindings sueltos.
Ruteo
Carga perezosa (lazy) de features. Guards/resolvers/interceptors en carpetas dedicadas.
Estilos (SCSS)
Encapsulación por defecto; evita ::ng-deep. Usa :host y :host-context con moderación.
Convención consistente (p. ej., BEM). Variables y mixins en ficheros compartidos.
Pruebas
Cubre servicios y lógica crítica. En componentes, prueba interacción y renderizado.
Evita lógica compleja en constructores; prefiere métodos explícitos.
Rendimiento y SSR
Carga diferida de recursos, optimiza imágenes y respeta budgets del build.
Compatibilidad SSR: no accedas a window/document en server; abstrae con inyección o comprobación de plataforma.
Calidad y commits
Commits semánticos: feat, fix, perf, refactor, test, docs, chore.
Mantén el linter (ESLint) y formateo (Prettier) limpios antes de hacer PR.
Recursos rápidos:

Guía de estilos Angular: https://angular.dev/style-guide 
Control Flow (@if/@for/@switch): https://angular.dev/guide/templates/control-flow 
Signals: https://angular.dev/guide/signals 
🧠 Buenas prácticas de TypeScript (basadas en SonarQube)
Estas pautas condensan recomendaciones comunes de SonarQube/SonarSource para TypeScript, adaptadas al contexto Angular del proyecto.

Tipado y declaraciones
Habilita y respeta el tipado estricto (ya configurado en tsconfig). Evita any; usa unknown, generics o tipos precisos.
Usa const por defecto y readonly para propiedades/inmutabilidad cuando aplique. Evita var.
Prefiere tipos literales/enums y union types para dominios acotados en lugar de strings mágicas.
Nulos y comparaciones
Usa optional chaining (obj?.prop) y nullish coalescing (??) en vez de patrones frágiles.
Comparación estricta (===/!==); evita coerciones implícitas.
Control de flujo y complejidad
Mantén funciones pequeñas y enfocadas. Evita complejidad cognitiva/ciclomática alta (anidar condicionales/loops en exceso).
Extrae bloques repetidos; evita duplicación (DRY). No dejes código comentado o muerto.
Errores y logging
Lanza objetos Error (o clases derivadas), no strings. Preserva la causa (new Error(msg, { cause })).
Gestiona errores en límites asíncronos; registra con niveles adecuados. Evita console.* en producción.
Promesas y async/await
Evita promesas flotantes: maneja siempre con await/then/catch o Promise.allSettled según corresponda.
Marca funciones async que usan await; evita mezclar then/catch innecesariamente con async/await.
Seguridad y datos
Valida y sanea entradas externas (HTTP, formularios). Evita construir HTML manualmente; usa bindings seguros de Angular.
No expongas secretos en código o logs.
Estilo y legibilidad
Nombres significativos y consistentes; evita abreviaturas crípticas.
Limita el número de parámetros (prefiere objetos de opciones con tipos). Documenta decisiones no obvias.
Rendimiento
Evita trabajo innecesario en bucles; memoiza/computed cuando aporte valor. Usa estructuras adecuadas (Map/Set) en lugar de arrays si buscas búsquedas rápidas.
ESLint/SonarQube
Mantén el linter sin errores. Considera activar reglas sonarjs si se incorpora el plugin para detectar code smells adicionales.
Referencias:

SonarSource TypeScript rules: https://rules.sonarsource.com/typescript 
SonarJS plugin (conceptos aplicables): https://github.com/SonarSource/eslint-plugin-sonarjs 