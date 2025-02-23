export function Todos({ todos }) {
    async function markAsComplete(id) {
        try {
            await fetch("http://localhost:3004/completed", {
                method: "PUT",
                body: JSON.stringify({ id }), 
                headers: { "Content-Type": "application/json" }
            });
        } catch (error) {
            console.error("Failed to update todo:", error);
        }
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button 
                        onClick={() => markAsComplete(todo._id)}
                        disabled={todo.completed} 
                    >
                        {todo.completed ? "✅ Completed" : "Mark as Complete"}
                    </button>
                </div>
            ))}
        </div>
    );
}
