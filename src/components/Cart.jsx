import React from "react";

const Cart = ({ cartItems, updateQuantity, removeItem }) => (
  <div className="bg-gray-100 min-h-screen p-6">
    {cartItems.length === 0 ? (
      <p className="text-center text-gray-500 text-lg mt-10">
        Your cart is empty.
      </p>
    ) : (
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Your Shopping Cart</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-4"
          >
            <div className="flex items-center sm:space-x-4 w-full sm:w-auto">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-cover rounded mb-4 sm:mb-0"
              />
              <div className="flex-1">
                <p className="font-medium break-words max-w-[16rem]">{item.title}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>

            <div className="flex items-center sm:space-x-3 mt-4 sm:mt-0">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="mx-3 font-bold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div className="text-right mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto">
              <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="border-t pt-4 mt-4 text-right">
          <p className="text-xl font-bold">
            Total: $
            {cartItems
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    )}
  </div>
);

export default Cart;
