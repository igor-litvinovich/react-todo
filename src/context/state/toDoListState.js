import React, {createContext, useContext, useReducer} from "react";
import rootReducer from "src/context/reducers/rootReducer";
import todoItems from "src/constants/listItems";


const ToDoListStateContext = createContext();
const ToDoListDispatchContext = createContext();

export const ToDoListStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, {todoItems});
    return (
        <ToDoListStateContext.Provider value={state}>
            <ToDoListDispatchContext.Provider value={dispatch}>
                {children}
            </ToDoListDispatchContext.Provider>
        </ToDoListStateContext.Provider>
    )
};

export const useTodoListState = () => {
    return useContext(ToDoListStateContext);
};

export const useTodoListDispatch = () => {
    return useContext(ToDoListDispatchContext);
};
