import { useContext, useEffect, useState } from "react";
import { dataStore } from "./dataStore";

export default function ProductInCart({product}) {
  const { state, dispatch } = useContext(dataStore);

  const productArrayID = state.findIndex((prd) => prd.id === product.id)

  const handleDeleteWholeProduct = () => {
    dispatch({ type: 'DELETE', payload: { id: product.id } });
  }

  const handleChangeProductCount = (count) => {
    if (count <= 10 && count >= 1){
      dispatch({type: 'CHANGE_COUNT', payload: {id: product.id, count: count}})
    }
  }

  return (
    <div className="product-basket">
      <img src={product.imgSrc} alt={product.title} />
      <span>{product.title}</span>
      <div className="cart-right-side">
        <span className="cart-price">${product.price}</span>
        <input
          type="number"
          min={1}
          max={10}
          value={state[productArrayID].count}
          onInput={(e) => handleChangeProductCount(Number(e.target.value))}
        />

        <button onClick={handleDeleteWholeProduct}>Remove</button>
      </div>
    </div>
  );
}
