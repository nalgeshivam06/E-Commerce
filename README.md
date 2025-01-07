# E-Commerce Website

An e-commerce web application built with React, Tailwind CSS, and React Router. The application allows users to browse products, add them to a cart, and manage the cart.

---

## **Features**
- Browse a list of products.
- View product details.
- Add and remove items from the cart.
- Update the quantity of items in the cart.
- Responsive design using Tailwind CSS.

---

## **Technologies Used**
- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: API integration (fake API for fetching products)

---

## **Setup Instructions**

### **1. Clone the repository**
```bash
git clone https://github.com/nalgeshivam06/E-Commerce.git
cd E-Commerce
npm install


# Live Demo

You can view the live demo of this project at: [Live Demo](https://e-commercebyshivamnalge.netlify.app)


## How it works

The data is fetched using the following function:

```javascript
export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

Note: The data fetching might take some time to load. Please be patient while the products are being fetched from the external API.