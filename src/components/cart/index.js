import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layout";
import { BsFillTrashFill } from "react-icons/bs";
import { removeItemFromCart } from "../../store/cart-slice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((acc, curr) => (acc + curr.price) * curr.quantity, 0);
  const tax =  total * 0.07;
  return (
    <Layout title={"Shopping Cart"}>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-2/3">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="border-b-2 border-gray-200 pb-4">
              <h2 className="text-lg font-semibold mb-2">Items in Your Cart</h2>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Product</span>
                <span className="font-semibold">Price</span>
              </div>
            </div>
            <div className="py-4">
              {cart.length > 0 ? (
                cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center mt-4"
                  >
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-gray-500">{product.description}</p>
                    </div>
                    <div className="flex gap-2 flex-col text-right">
                      <div className="font-medium">${product.price}</div>
                      <div className="flex gap-2">
                        <button
                          className="hover:text-red-500"
                          onClick={() =>
                            dispatch(removeItemFromCart(product.id))
                          }
                        >
                          <BsFillTrashFill size={20} />
                        </button>
                        <div className="bg-red-500 rounded-full px-3  text-sm font-semibold text-white py-1/4">
                          {product.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">Empty Items.</p>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Subtotal:</span>
              <span className="font-medium">
                ${cart.length > 0 ? total : 0}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Tax 7%:</span>
              <span className="font-medium">
                ${cart.length > 0 ? tax.toLocaleString("en-US", { maximumFractionDigits: 2}) : 0}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Shipping:</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${(total + tax).toLocaleString("en-US", { maximumFractionDigits: 2})}</span>
            </div>
            <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
