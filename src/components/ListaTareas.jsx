import '../assets/bootstrap.min.css'
import {useState} from 'react'

export default function ListaTareas({tarea, onEdit, onDelete}){

	const [isEdit,setIsEdit] = useState(false)
	const [newTitle, setNewTitle] = useState(tarea.title)

	function EditItem(){

		const handleEdit = (e) => {
			setNewTitle(e.target.value)
		}

		const handleSubmitEdit = (e) => {
			e.preventDefault();
			onEdit(tarea.id, newTitle)
			setIsEdit(false)
		}

		return (
			<form onSubmit={handleSubmitEdit} className="d-flex">
				<input 
				type="text" 
				onChange={handleEdit} 
				value={newTitle} 
				placeholder="Tarea" 
				className="form-control"
				/>
				<input 
				type="submit" 
				value="Actualizar"
				className="btn btn-info btn-sm"
				/>
			</form>
		)
	}

	function TodoItems(){

		const handleDelete = (e) => {
			onDelete(tarea.id)
		}

		return (
			<div className="d-flex mb-1">
				<input 
				type="text" 
				value={tarea.title}
				className="form-control f-bold"
				disabled
				/>
				<button onClick={() => setIsEdit(true)} className="btn btn-info btn-sm">Editar</button>
				<button onClick={handleDelete} className="btn btn-danger btn-sm">Eliminar</button>
			</div>
		)
	}
	
	return (
		<div>
			{isEdit ? <EditItem /> : <TodoItems /> }
		</div>
	)
}