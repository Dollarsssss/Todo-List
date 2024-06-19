import { ChangeEvent, FormEvent, useState } from "react";

type TodoProps = {
    id: string
    task: string;
    onDelete: (id: string) => void;
    onEdit: (id: string, task: string) => void;
};

function Todo({ id, task, onDelete, onEdit }: TodoProps) {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [inputNewTask, setInputNewTask] = useState<string>(task);


    function handleDeleteClick() {
        onDelete(id)
    }

    function handleEditClick() {
        setIsEditing(!isEditing);
        
    }

    function handleInputNewTask(event: ChangeEvent<HTMLInputElement>) {
        setInputNewTask(event.target.value);
    }

    function handleSaveNewTask(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const editTodo = {
            id: id,
            task: inputNewTask
          }

        onEdit(editTodo.id, editTodo.task)
        setIsEditing(!isEditing);
    }

    let results;

    if (isEditing) {
        results = (
        <div className='todo-task-edit-wrapper'>
            <div className="todo-task-edit">
                    <form onSubmit={handleSaveNewTask}>
                        <input className="todo-task-input-edit" value = {inputNewTask} onChange={handleInputNewTask} />
                        <button className="todo-task-btn-edit"> save</button>
                    </form>
            </div>
        </div>
        )
    } else {
        results = (
            <div className='todo-task-wrapper'>
                <div className='todo-task-content'>
                    <div className='todo-task-title'>
                        <label>{task}</label>
                    </div>
                    <div className='todo-task-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16" onClick={handleEditClick}>
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16" onClick={handleDeleteClick}>
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg>
                    </div>

                </div>
            </div>
        )

    }
    return results;
}

export default Todo