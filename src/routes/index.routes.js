import { Router } from 'express' //router es un enrutador, sirve para separar rutas en otro archivo que no es el de entrada
import { renderTasks, createTask, renderTaskEdit, deleteTask, editTask, taskToggleDone } from '../controllers/task.controller'

const router = Router() //Router es un funcion y tambien devuelbe un objeto

router.get('/', renderTasks)

router.post('/tasks/add', createTask)

router.get('/tasks/:id/toggleDone', taskToggleDone)

router.get('/tasks/:id/edit', renderTaskEdit)

router.post('/tasks/:id/edit', editTask)

router.get('/tasks/:id/delete', deleteTask)


export default router