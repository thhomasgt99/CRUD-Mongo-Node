import Task from '../models/Task'

export const renderTasks = async (req, res) => {
	const tasks = await Task.find().lean() //esto trae todos los objetos de la base de datos | lean es para que devuelva un objeto de js y no uno de mongo
	res.render('index.hbs', { tasks: tasks }) //a estos puedo quitarles el hbs ya que esa exptencion ya se configuro en el engine de  express | el objeto es como un prop le pasa info
}

export const createTask = async (req, res) => {
	try {
		const task = Task(req.body) //aqui lo llegado en body del formulrio se pasa por un modelo
		await task.save() //esto finalmente guarda en la db
		res.redirect("/") //esto redirecciona a la pagina inicial en este caso
	} catch (error) {
		console.log(error)
	}
}

export const renderTaskEdit = async (req, res) => {
	const task = await Task.findById(req.params.id).lean()
	res.render('edit.hbs', { task })
}

export const editTask = async (req, res) => {
	const { id } = req.params
	await Task.findByIdAndUpdate(id, req.body)
	res.redirect('/')
}

export const deleteTask = async (req, res) => {
	const { id } = req.params
	await Task.findByIdAndDelete(id)
	res.redirect('/')
}

export const taskToggleDone = async (req, res) => {
	const { id } = req.params
	const task = await Task.findById(id)
	task.done = !task.done
	await task.save()
	res.redirect('/')
}