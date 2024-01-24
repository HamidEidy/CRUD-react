import { useState } from "react";

const TodosPage = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    const fetchTodos = async () => {
        const res = await fetch('/api/todos');
        const data = await res.json();
        setTodos(data)
    }

    const submitTodo = async () => {
        const res = await fetch('/api/todos', {
            method: "POST",
            body: JSON.stringify({ todo }),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();
        fetchTodos()
    }

    const deleteTodo = async (todoId) => {
        const res = await fetch(`/api/todos/${todoId}`, {
            method: "DELETE"
        });
        const data = await res.json();
        fetchTodos();
    }

    return (
        <>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            <button onClick={submitTodo}>Submit</button>
            <hr />
            <button onClick={fetchTodos}>Load Todos</button>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        {todo.id} - {todo.title}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default TodosPage