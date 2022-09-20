import { Schema, model } from 'mongoose'

const taskSchema  = new Schema({
	title:{
		type: String,
		required: true,
		unique: true,
		trim: true //limpia espacias vacios de demas en el string
	},
	description: {
		type: String,
		required: true,
	},
	done: { //esta sera para saver si la tarea ya fue hecha, para tareas pendientes
		type: Boolean,
		default:false 
	},
}, {
	timestamps: true,
	versionKey: false
})

export default model('cruds', taskSchema)
