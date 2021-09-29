import trimText from "../helpers/trimText";
import { DESCRIPTION_LENGTH } from "../CONSTANTS";
import "../styles/product.css";
import { AddToCardManager } from "./AddToCardManager";

export default function Product({ product }) {
  return (
    <div className="box product">
      <img src={product.imgSrc} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <span className="price">${product.price}</span>
      </div>
      <p>{trimText(product.description, DESCRIPTION_LENGTH)}</p>
      <AddToCardManager product={product} />
    </div>
  );
}


