import { BsPlus, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, updateSearchTerm } from "../redux/actions";
import FilterButton from "./FilterButton";
import ToDoList from "./ToDoList";

const Todo = () => {
    const dispatch = useDispatch();
    const [newToDoText, setNewToDoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddToDo = (text) => {
        dispatch(addToDo(text));
    }
    const handleAddToDoClick = () => {
        if (newToDoText.trim() !== "") {
            handleAddToDo(newToDoText.trim());
            setNewToDoText("");
        };
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    }

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="uppercase mt-3 mb-6 text-2xl font-bold text-center">Personal Todo App</h2>
            
            {/* input text and btn */}
            <div className="flex items-center mb-4">
                <input value={newToDoText} onChange={(e) => setNewToDoText(e.target.value)} type="text" name="text" id="addTodoInput" placeholder="Add Todo" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <button onClick={handleAddToDoClick} className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"><BsPlus /></button>
            </div>

            {/* Filter and Search */}
            <div className="flex items-center justify-between">
                <FilterButton />
                <div className="flex items-center mb-4">
                    <input value={searchTerm} placeholder="Search"
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"><BsSearch /></button>
                </div>
            </div>

            <ToDoList />
        </div>
    );
}

export default Todo;