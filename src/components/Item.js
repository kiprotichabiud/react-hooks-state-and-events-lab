import React, { useState } from "react";

function Item({ name, category }) {
  const [onCart , setOnCart] = useState(false)
  function handleCart(){
    setOnCart(!onCart)
  }
  return (
    <li className={onCart ? "in-cart": " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {onCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
