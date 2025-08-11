# Curso Angular 19 Bases

## Sesion 04
En esta sección aprenderemos sobre:

* Señales
* Estado
* Propiedades
* Rutas
* Métodos
* Eventos
* Cambios en el DOM
* Cada archivo y directorio de un proyecto

El objetivo es tener una introducción a conceptos básicos y algunos no tan básicos de Angular, para comenzar a familiarizarnos y aprender esta tecnología.

Recuerden que cada persona tiene diferentes formas de aprender. Para algunos puede ser más fácil que para otros, pero lo importante es avanzar paso a paso y seguir adelante.

### Gist tarea de señales
https://gist.github.com/Klerith/b07bfb16b4d6aa27b8ccdbb991d316b2

# Tarea:
Practicar lo aprendido hasta el momento


  1. Colocar esta importación del Bootstrap en el `index.html`
```
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
```

  2. Crear el componente de Angular correspondiente para este archivo:
  `src/app/pages/hero/hero-page.component.html`
  * El contenido del HTML está en este GIST también
   
  

  3. Crear la ruta respectiva en el app.routes.ts
  ```
    {
      path: '/hero',
      component: HeroPageComponent
    }
  ```
    * Recuerden importar el componente en el app.routes.ts
    * Navegar al URL: https://localhost:4200/hero


  3. Crear dos señales con los valores de Ironman y 45 respectivamente.
  ```
    name => string  = 'Ironman'
    age => number = 45
   ```

  4. Crear un método llamado: getHeroDescription
  Debe de regresar la concatenación del nombre y la edad.
  ```
  getHeroDescription
    return `${ name } - ${ age }`;
  ```

  5. Implementar el método changeHero, no recibe argumentos y lo cambia a:
  ```
  name = Spiderman
  age = 22
  ```

  6. Implementar el método: resetForm, el cual establece
  
  ```
  name = Ironman 
  age = 45
  ```
  7. Implementar el método: chageAge, asignalor al evento click del botón respectivo.
  ```
  cambia la edad a 60
  ```

  8. Extra:
  Tratar de mostrar el nombre (name) capitalizado en mayúscula sin crear una nueva señal.

### Codigo fuente de las seccion 04
https://github.com/DevTalles-corp/angular-bases/tree/fin-seccion-04  

## Sesion 05
Temas puntuales
En esta sección veremos:

* RouterLink
* RouterLink Active
* Nuevo control flow
* @for
* @if
* ngClass - ngStyle - Alternativas
* Comunicación entre componentes
* Inputs / outputs (Como señales)
* Servicios en Angular
* Efectos y LocalStorage
* LinkedSignal
* HashRouter
* Despliegues

### Codigo fuente de las seccion 04
https://github.com/DevTalles-corp/angular-bases/tree/fin-seccion-05





This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
