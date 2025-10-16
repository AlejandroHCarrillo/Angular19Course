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


