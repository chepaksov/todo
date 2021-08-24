let itemId = 1;

const createTodoItem = (label, completed , editing , selected = undefined) => {
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
const todoData = [
    createTodoItem('Completed task', false, false),
    createTodoItem('Editing task', false, false),
    createTodoItem('Active task', false, false),
];
export {filterElem, todoData, createTodoItem};