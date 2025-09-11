# LifecycleHooks

## Temas

* Todos los pasos del ciclo de vida tradicional
* Nuevos hooks basados en señales
* Ciclo de vida cuando cambian inputs (comunicación entre componentes)

## Component Lifecycle

https://angular.dev/guide/components/lifecycle

* ngOnInit
* ngOnChanges
* ngOnDestroy
* ngDoCheck
* ngAfterContentInit
* ngAfterContentChecked
* ngAfterViewInit
* ngAfterViewChecked
* afterEveryRender and afterNextRender
* Lifecycle interfaces
* Execution order
* During initialization
* Subsequent updates
* Ordering with directives

## Zoneless

https://angular.dev/guide/zoneless

### ¿Por qué usar Zoneless? 
Las principales ventajas de eliminar ZoneJS como dependencia son: 
* **Rendimiento mejorado:** ZoneJS utiliza eventos DOM y tareas asíncronas como indicadores de cuándo el estado de la aplicación podría haberse actualizado y, posteriormente, activa la sincronización de la aplicación para ejecutar la detección de cambios en las vistas de la aplicación. ZoneJS no tiene información sobre si el estado de la aplicación realmente cambió, por lo que esta sincronización se activa con más frecuencia de la necesaria. 
**Core Web Vitals mejorado:** ZoneJS genera una sobrecarga considerable, tanto en tamaño de carga útil como en tiempo de inicio. 
**Experiencia de depuración mejorada:** ZoneJS dificulta la depuración de código. Los seguimientos de pila son más difíciles de entender con ZoneJS. También es difícil comprender cuándo el código falla por estar fuera de Angular Zone. 
**Mejor compatibilidad con el ecosistema:** ZoneJS funciona parcheando las API del navegador, pero no tiene parches automáticos para cada nueva API. Algunas API no se pueden parchear de forma eficaz, como las asíncronas.

## Codigo fuente de la seccion 16
https://github.com/DevTalles-corp/angular-lifecycle/tree/fin-seccion-16




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
