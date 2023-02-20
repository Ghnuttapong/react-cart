import React from "react";
import Card from "./components/card";
import products from "./data/products";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./store/cart-slice";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function App() {
  const dispath = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const onClick = (product) => {
    dispath(addItemToCart(product));
  };
  return (
    <div className="mt-4 px-3">
      <div className="text-center text-3xl font-bold my-5">Choice Products</div>
      <Link to="/cart">
        <p className="font-bold flex my-2 gap-2 px-10 justify-end">
          <BsCart3 size={20} /> {cart.length}
        </p>
      </Link>
      <div className="grid grid-cols-3 gap-2">
        {products.length > 0 &&
          products.map((product) => (
            <div className="h-16" key={product.id}>
              <Card product={product} onClick={() => onClick(product)} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
