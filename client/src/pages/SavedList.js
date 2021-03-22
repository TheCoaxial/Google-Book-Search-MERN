import React, { useEffect } from "react";
// import BookResults from "../components/ResultList";
// import DelBtn from "../components/DeleteButton";
// import { link } from "react-router-dom";
// import { useStoreContext } from "../utils/GlobalState";

// const SavedList = () => {
//     const [state, dispatch] = useStoreContext();

//     const removeSaved = (id) => {
//         dispatch({
//             type: "REMOVE_BOOK",
//             _id: id
//         });
//     };

//     const getSaved = () => {
//         dispatch({ type: "UPDATE_BOOK" });
//     };

//     useEffect(() => {
//         getSaved();
//     }, []);

//     return (
//         <div className="container ">
//             <h1>Here are all of your saved books</h1>
//             {state.books.length ? (
//                 <BookResults>

//                 </BookResults>
//             )}
//         </div>
//     )

// }