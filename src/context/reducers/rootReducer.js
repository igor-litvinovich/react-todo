import todoItemsReducer from 'src/context/reducers/todoItemsReducer';

const rootReducer = ({ todoItems }, action) => ({
    todoItems: todoItemsReducer(todoItems, action)
});

export default rootReducer;
