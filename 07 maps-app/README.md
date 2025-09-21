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

