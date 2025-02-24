// interface 
interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

let todos: Todo[] = [];

// add new todo
function addTodo(task: string): void {
    const newTodo: Todo ={
        id: todos.length + 1,
        task,
        completed: false,
    };
    todos.push(newTodo);
    console.log(`Added: "${task}"`);
}
