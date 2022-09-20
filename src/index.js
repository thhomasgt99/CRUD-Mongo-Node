import app from './app'
import './database' //esto es asi pq ese archivo se ejecuta en el
import { PORT } from './config'

app.listen(3000)
console.log('Server on port', PORT)