import { useContext, useState } from "react";
import { dataStore } from "./dataStore";

export function AddToCardManager({ product }) {
  const { state, dispatch } = useContext(dataStore);
  const [itemCount, setItemCount] = useState(1);

  const handleAdd = () => {
    dispatch({ type: 'ADD', payload: { id: product.id, count: itemCount } });
  };

  return (
    <div className="add-to-card">
      <input type="number" min={1} max={10} value={itemCount} onInput={(e) => setItemCount(Number(e.target.value))} />
      <button onClick={() => handleAdd()} type="button">Add to cart</button>
    </div>
  );
}
