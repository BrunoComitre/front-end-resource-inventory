/* JEITO CONVENCIONAL */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log(" -- CONVENCIONAL --");
var todo = {
    title: "Assistir Filme",
    description: "Assistir Séries",
    completed: false
};
console.log(todo);
todo.completed = true;
console.log(todo);
/* JEITO TYPE UTILITIES */
console.log(" -- TYPE UTILITIES --");
var todos = {
    title: "Assistir TV",
    description: "Assistir Esportes",
    completed: false
};
console.log(todos);
function updateTodo(todos, fieldsToTupdate) {
    return __assign(__assign({}, todos), fieldsToTupdate);
}
var todo2 = updateTodo(todos, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Jogar Video Game",
    completed: false
};
console.log(todo3);
var todo4 = {
    title: "Jogar Video Game",
    completed: false
};
console.log(todo4);
