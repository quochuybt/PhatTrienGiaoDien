import { useRecoilValue } from "recoil";
import { cartAtom, totalPrice } from "../../recoil/CartAtom";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const total = useRecoilValue(totalPrice);
  const products = useRecoilValue(cartAtom);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>{total}</p>
      <ul>
        {products.map((p, i) => {
          return (
            <div key={i}>
              <h3>{p.title}</h3>
              <p>Giá : {p.price}</p>
              <p>Số lượng : {p.quantity}</p>
            </div>
          );
        })}
      </ul>
      <button onClick={handleClick}>Back to List Product</button>
    </div>
  );
};

export default Cart;
