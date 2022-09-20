- express -> framework para aplicaciones de servidor
- express-handlebars -> esto es la forma de integrar el motor de plantilla handlebars con express, sirven para generar html con bucles, funciones etc, pero es utilizado desde el backend | una vez tengamos el html se envia al user
- mongoose -> sirve para la conexion con la base de datos y modelar los datos dentro de la base de datos
- morgan -> permite ver por consola las peticiones que van llegando
- dotenv -> para vriables de entorno

### Dependencias de desarrollo
- @babel/core -> compilador de babel
- @babel/cli -> nos permite utilizar babel desde consola
- @babel/node -> nos permite trabajar con babel y nodejs
- @babel/preset-env -> nos permite utilizar sintaxis de js nueva
- @babel/plugin-transform-runtime ->
- ncp -> para moder archivos a la carpeta de dist

### ENV Evirotment variables
- para que funcione deven añadir las siguientes variables de entorno:
 * MONGODB_URI
 * PORT

### Scripts
- dev -> arranca servidor de desarrollo
- build -> hace el empaquetado de produccion


