/* JEITO CONVENCIONAL */

console.log(" -- CONVENCIONAL --");

type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

const todo: Todo = {
    title: "Assistir Filme",
    description: "Assistir Séries",
    completed: false,

}

console.log(todo);
todo.completed = true;
console.log(todo);

/* JEITO TYPE UTILITIES */

console.log(" -- TYPE UTILITIES --");

// Readonly
type Todos = {
    title: string;
    description: string;
    completed: boolean;
}

const todos: Readonly<Todos> = {                                                /* Definindo Readonly ele não altera o objeto todo inicial */
    title: "Assistir TV",
    description: "Assistir Esportes",
    completed: false,
}

console.log(todos);

function updateTodo(todos: Todos, fieldsToTupdate: Partial<Todos>) {            /* Partial deixa todas as propriedades opcionais apenas no nomento da funão em fielsToUpdate */
    return { ...todos, ...fieldsToTupdate }
}

const todo2: Todos = updateTodo(todos, { completed: true })
console.log(todo2);

// Pick

type TodoPreview = Pick <Todos, "title" | "completed">                          /* Pegue apenas as propriedades */

const todo3: TodoPreview = {
    title: "Jogar Video Game",
    completed: false,
}

console.log(todo3);

// Omit

type TodoPreview2 = Omit <Todos, "description">                          /* Omite as propriedades que você não que pegar */

const todo4: TodoPreview2 = {
    title: "Jogar Video Game",
    completed: false,
}

console.log(todo4);
