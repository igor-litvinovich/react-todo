const updateItemStatus = (newItem) => {
    return {
        type: 'UPDATE_ITEM_STATUS',
        payload: newItem
    };
};

const createItem = (itemToCreate) => {
    return {
        type: 'CREATE_ITEM',
        payload: itemToCreate
    };
};

const deleteItem = (itemValue) => {
    return {
        type: 'DELETE_ITEM',
        payload: itemValue
    };
};

export { updateItemStatus, createItem, deleteItem };
