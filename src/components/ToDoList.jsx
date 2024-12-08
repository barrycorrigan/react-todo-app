import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const filteredToDos = useSelector((state) => {
        const todos = state.todos.todos; // Access the todos array inside the todos reducer
        const filter = state.todos.filter;
        const searchTerm = state.todos.searchTerm.toLowerCase();

        return todos.filter((todo) => {
            const matchFilter = (filter === "COMPLETED" && todo.completed) 
            || (filter === "INCOMPLETE" && !todo.completed) 
            || (filter === "ALL");

            const matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchFilter && matchSearch;
        });
    });

    return (
        <ul>
            <li className='my-2 text-sm italic'>All Your Notes Here ...</li>
            {
                filteredToDos.map((todo, index) => (
                    <ToDoItem key={index} todo={todo} index={index} />
                ))
            }
        </ul>
    );
}

export default ToDoList;