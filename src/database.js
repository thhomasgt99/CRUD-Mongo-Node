import { connect } from 'mongoose'
import { MONGODB_URI } from './config'

(async () => {
	try {
		const db = await connect(MONGODB_URI)
		//lo que hara aqui es conectarse a traves de mongodb al localhost y labase de datos sera crud-mongo, esta base se creara por defecto
		console.log('DB connected to', db.connection.name)
	} catch (error) {
		console.log( 'Este es el error' + error)
	}
})()
