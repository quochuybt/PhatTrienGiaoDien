import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartAtom } from "../../recoil/CartAtom";
import { useRecoilState } from "recoil";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useRecoilState(cartAtom);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleAddToCart = (p) => {
    const exist = cart.find((item) => item.title === p.title);
    if (exist) {
      const newCart = cart.map((item) => {
        return item.title === p.title
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...p, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Link to="/cart">Cart</Link>
      <ul>
        {products.map((p, i) => {
          return (
            <div key={i}>
              <h3>{p.title}</h3>
              <p>{p.price}</p>
              <button onClick={() => handleAddToCart(p)}>Add to cart</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListProduct;
