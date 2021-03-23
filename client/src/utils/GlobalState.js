import React, { createContext, useReducer, useContext } from "react";



const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => { 
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                saved: [action.payload],
                loading: false
            };
        case "FIND_BOOK":
            return {
                ...state,
                books: [action.payload],
                loading: false
            };
        
        case "REMOVE_BOOK":
            return {
                ...state,
                books: state.books.filter((book) => {
                    // return book._id !== action._id;
                    return state
                })
            };

        case "UPDATE_BOOK":
            return{
                ...state,
                books: [...state.books],
                loading: false
            };

        case "LOADING":
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        books: [],
        currentBook: {
            _id: 0,
            title: "",
            authors: "",
            description: "",
            image: "",
            link: ""
        },
        saved: [],
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { useStoreContext, StoreProvider };