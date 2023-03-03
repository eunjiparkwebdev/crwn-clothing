import "./cart-item.styles.scss";

//cartItem prop is coming from cart-dropdown.component. cartItem is item
const CartItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  console.log(quantity);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
