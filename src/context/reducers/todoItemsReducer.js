const todoItemsReducer = (todoItems, action) => {
    switch (action.type) {
        case 'UPDATE_ITEM_STATUS':
            return todoItems.map((item) => {
                if (item.value === action.payload.value) {
                    return action.payload;
                }
                return item;
            });
        default:
            return todoItems;
    }
};

export default todoItemsReducer;
