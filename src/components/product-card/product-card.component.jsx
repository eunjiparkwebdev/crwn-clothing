import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span class="name">{name}</span>
        <span class="price">{price}</span>
      </div>

      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
