let itemId = 1;
const createTodoItem = (label, completed=false , editing=false , selected = undefined) => {
    return {
        label,
        id: itemId++,
        completed,
        editing,
        selected,
    };
};
const filterElem = [
    createTodoItem('All', undefined, undefined, false),
    createTodoItem('Active', undefined, undefined, false),
    createTodoItem('Completed', undefined, undefined, false),
];
const todoData = [];
export {filterElem, todoData, createTodoItem};