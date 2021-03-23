import React from "react";


export function Container(props) {
  return <div className="container" style={props.style}>{props.children}</div>;
}

export function Col(props) {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  
    return <div className={size}>{props.children}</div>;
}

export function Row(props) {
    return <div className="row">{props.children}</div>;
}
  
  

 