import React from "react";


function DeleteBtn(props) {
    return (
      <span className="btn" {...props} role="button" 
       style={{color: "green", size: "large"}}>
        +
      </span>
    );
  }
  
  export default DeleteBtn;