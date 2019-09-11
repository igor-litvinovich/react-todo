const updateItemStatus = (newItem) => {
    return {
        type: 'UPDATE_ITEM_STATUS',
        payload: newItem
    };
};

export { updateItemStatus };
