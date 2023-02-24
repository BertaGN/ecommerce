import "./Card.css";
import React from "react";

export const Card = ({children}) => {
  return (
    <div className="card-item">
        <p>{children}</p>
    </div>
  )
}
