import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Card.css";
import { useEffect } from "react";

function Card({ id, src, title, description, price }) {

 
  
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <div className="price">
          <small>$</small>

          <h3>{price}</h3>
          <small>/hour</small>
        </div>
      </div>
      <Button>Add to Cart</Button>
    </div>
  );
}

export default Card;