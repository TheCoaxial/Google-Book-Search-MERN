import React from  "react";


function BookResults({ children }) {

    

    <li>
        <div className="float-container">
            <div className="float-child"><p>{children}</p></div>
            {console.log(children)}
        </div>
    </li>



    return(
        <ul className="lItem"> {children} </ul>
    )
}

export default BookResults;


