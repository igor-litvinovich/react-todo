const todoItemsReducer = (todoItems, action) => {
    switch (action.type) {
        case 'UPDATE_ITEM_STATUS':
            return todoItems.map((item) => {
                if (item.value === action.payload.value) {
                    return action.payload;
                }
                return item;
            });
        case 'CREATE_ITEM':
            return todoItems.concat(action.payload);
        case 'DELETE_ITEM':
            return todoItems.filter(item => item.value !== action.payload);

        case 'UPDATE_ITEM':
            return todoItems.map((item) => {
                if (item.value === action.payload.oldValue) {
                    return { ...item, value: action.payload.newItemValue }
                }
                return item;
            });
        default:
            return todoItems;
    }
};

export default todoItemsReducer;
