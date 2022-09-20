import express from 'express'
// import exphbs from 'express-handlebars'
import {engine} from 'express-handlebars'
import indexRoutes from './routes/index.routes'
import path from 'path'
import morgan from 'morgan'

const app = express() //express es una funcion a si que se deve ejecutar y debuelve un objeto
//app sera en si la app del sevidor

app.set('views', path.join(__dirname + '/views')) //esto es para que expres sepa donde esta la carpeta views | el path es solo para hacerlo mas multiplataforma

app.engine('.hbs', engine({ //engine es para configurar un motor de plantilla en este caso handlebars | el primer argumento es la extencion
	layoutsDir: path.join(app.get("views"), "layouts"), //esto sera una parte de html que se compartira entre entre todos
	partialsDir: path.join(app.get("views"), "partials"), //esto es para que sepa de donde sacar los partiasl, aunque en este caso no se necesita solo es para cuando la carpeta cambia de nombre
	defaultLayout: "main",
	extname: ".hbs", //estas configuraciones son para handlebars
})
)
app.set('view engine', '.hbs') //esto ya setea las anteriores cnfiguraciones

//midlewares
app.use(morgan('dev'))//esto lo que hace es mostrar por consola las peticiones
app.use(express.urlencoded({extended: false})) //esto convierte las peticiones en json alparcer


//Routes
app.use(indexRoutes) //use es para que la app use eso, en este caso es el enrutador

//Static files
app.use(express.static(path.join(__dirname, 'public')))//esto indica a expres que va a ser accedido desde el navegador

export default app