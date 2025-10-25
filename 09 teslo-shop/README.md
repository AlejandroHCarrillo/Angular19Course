## Temas seccion 18

* Separación por feature module
* TailwindCSS y DaisyUI
* Assets estáticos como imágenes y fuentes
* Un poco de Docker
* Peticiones HTTP
* Variables de entorno
* Pipes personalizados en acción
* Señales y recursos (rxResources)


NavBar
https://daisyui.com/components/navbar/

Fuentes google

https://fonts.google.com/specimen/Montserrat


## Declarar alias para simplificar paths
En el archivo tsconfig.json agregar las siguientes lineas dentro de compilerOptions

```
    "baseUrl": "./",
    "paths": {
      // "@/*": ["./src/app/*"],
      "@/auth/*": ["./src/app/auth/*"],
      "@/dashboard/*": ["./src/app/admin-dashboard/*"],
      "@/products/*": ["./src/app/products/*"],
      "@/shared/*": ["./src/app/shared/*"],
      "@/store-front/*": ["./src/app/store-front/*"],
    },
```

## Implementar swiper

```
https://swiperjs.com/
```

```
npm install swiper
```

## Codigo fuente de la seccion 18
### Backend
https://github.com/Klerith/nest-teslo-shop/tree/complete-backend-paginated

### Frontend
https://github.com/DevTalles-corp/angular-tesloshop/tree/fin-seccion-18


## Temas seccion 19

* Paginación via URL
* Re-utilización de componentes y servicios
* Caché de productos y producto
* Organización de archivos y directorios

## TanStack Query 

https://tanstack.com/query/latest

## Codigo fuente de las seccion 19
### TesloShop - Frontend
https://github.com/DevTalles-corp/angular-tesloshop/tree/fin-seccion-19

### TesloShop - Backend
https://github.com/Klerith/nest-teslo-shop/tree/complete-backend-paginated