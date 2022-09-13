import '../assets/bootstrap.min.css'
import {useState} from 'react'
import ListaTareas from './ListaTareas'

export default function Tareas(){

	const [title, setTitle] = useState('')
	const [tareas, setTareas] = useState([])

	const handleChange = (e) => {
		setTitle(e.target.value)
	} 

	const handleSubmit = (e) => {
		e.preventDefault()

		const item = {
			id: crypto.randomUUID(),
			title: title,
			complete: false
		}

		const task = [...tareas]
		task.unshift(item)

		setTareas(task)
		setTitle('')
	}

	const handleUpdate = (id, value) => {
		const tasks = [...tareas]
		const item = tasks.find(task => task.id === id)
		item.title = value;
		setTareas(tasks)
	}

	const handleDelete = (id) => {
		setTareas(tareas.filter(task => task.id !== id))
	}

	return (
		<div className="container text-center">
			<h1 className="mt-4">Lista de tareas</h1>
			<form onSubmit={handleSubmit} className="d-flex">
				<input 
				type="text" 
				onChange={handleChange} 
				value={title} 
				placeholder="Tarea"
				className="form-control"
				/>
				<input 
				type="submit" 
				value="Guardar" 
				className="btn btn-success btn-sm"/>
			</form>
			<div className="mt-2">
				{
					tareas.map((tarea) => (
						<ListaTareas key={tarea.id} tarea={tarea} onEdit={handleUpdate} onDelete={handleDelete}/>
					))
				}
			</div>
		</div>
	)
}