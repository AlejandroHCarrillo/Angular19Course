# MapsApp

## Mapbox
https://www.mapbox.com/

Obtener Mapbox Key


## Generar environments en angular
1. Generamos los environments que son compatibles con Angular
```
ng g environments
```

2. Creamos un archivo .env en la raiz del projecto y ponemos la key
```
MAPBOX_KEY = XXX.XXXX.XXXX
```

3. Creamos una copia del .env y la renombramos .env.template, ahi ponemos un recordatorio
de donde podemos obtener la key y el formato
```
# https://console.mapbox.com/account/access-tokens

MAPBOX_KEY = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

4. Agregamos los siguientes archivos al .gitignore 
* .env
* environment.ts 
* environment.development.ts 

5. Crear script set-envs.js para genenrar los environments 

* Primero Instalar dotenv
```
npm install -D dotenv
```

* Crear el script

* Ejecutar el script
```
node ./scripts/set-envs.js
```

* Agregar el comando a los scripts del package json
```
 "set-envs": "node ./scripts/set-envs.js"
 ```

 Esto nos permite ejecutar el script desde node usando

```
npm run set-envs
```

## Documentacion de Mapbox GL JS

https://docs.mapbox.com/#maps

### Instalacion 
https://docs.mapbox.com/mapbox-gl-js/guides/install/

```
npm install --save mapbox-gl
```

## Hash strategy

1. Ir al app.config.ts y agregar el siguiente codigo

```
    // HashStrategy
    {
    provide: LocationStrategy, 
    useClass: HashLocationStrategy
    }
```

## Instalar UUID para asignar ids
Es un paquete muy utilizado

```
    npm i uuid
```

## Gist multiple maps
https://gist.github.com/Klerith/5cebe289e7457e92aeb5de8d53aebd91

## Deploy 

### Proceso para hacer el deploy
Al hacer el deplpoy con el **ng build** vamos a obtener 2 warnings y 1 error
```
▲ [WARNING] bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 1.44 MB with a total of 1.94 MB.

▲ [WARNING] Module 'mapbox-gl' used by 'src/app/pages/full-screen-map-page/full-screen-map-page.component.ts' is not ESM

X [ERROR] bundle initial exceeded maximum budget. Budget 1.00 MB was not met by 936.80 kB with a total of 1.94 MB.
```

EL primer warning es debido a que mapbox no esta optimizado y el archivo js es demasiado grande.
El error se debe a que se excede el estimado máximo del paquete de salida.

Para solucionar estos problemas debemos:

1. Vamos al archivo angular.json dentro de  projects -> maps-app -> architect -> build -> options
    agregar la siguiente propiedad:
```
    "allowedCommonJsDependencies": [
        "mapbox-gl" 
    ],
```

2. En ese mismo archivo buscamos configurations -> production -> budgets y modificamos los valores de maximumWarning y maximumError para el initial budget aumentamos maximumWarning a 1Mb y maximumError a 3MB.

```
    "configurations": {
        "production": {
            "budgets": [
            {
                "type": "initial",
                "maximumWarning": "1MB",
                "maximumError": "3MB"
            },
            {
                "type": "anyComponentStyle",
                "maximumWarning": "4kB",
                "maximumError": "8kB"
            }
            ],
```

3. Volvemos a ejecutar **ng build**
