import DesertMenu from './Components/DesertMenu';
import Cart from './Components/Cart';
import OrderConfirmed from './Components/OrderConfirmed';
import './style.css';
import { useState, useEffect } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderConfirmedVisible, setOrderConfirmedVisible] = useState(false);

  const handleConfirmOrder = () => {
    setOrderConfirmedVisible(true);
  }

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((accumulator, item) => {
      return accumulator += item.quantity * item.price;
    }, 0)

    setTotalPrice(newTotalPrice)
  }, [cartItems])

  const modifyTotalPrice = (newPrice) => {
    setTotalPrice(newPrice);
  }

  const addToCart = (dessert) => {
    const existingItem = cartItems.find(item => item.name === dessert.name);

    if (existingItem) {
      if (dessert.quantity === 0) {
        setCartItems(cartItems.filter(item => item.name !== dessert.name));
      } else {
        setCartItems(
          cartItems.map(item =>
            item.name === dessert.name
              ? { ...item, quantity: dessert.quantity }
              : item
          )
        );
      }
    } else {
      if (dessert.quantity > 0) {
        setCartItems([...cartItems, dessert]);
      }
    }
  };

  const updateCartItems = (dessertName) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== dessertName)
    setCartItems(updatedCartItems);
  }

  return (
    <div className='relative bg-amber-50'>
      <OrderConfirmed orderedItems={cartItems} totalPrice={totalPrice} className={orderConfirmedVisible ? "flex" : "hidden"} />
      <div className='flex flex-col lg:flex-row justify-center lg:space-x-4 p-5 max-w-screen-xl mx-auto'>
        <DesertMenu addToCart={addToCart} />
        <Cart cartItems={cartItems} updateCartItems={updateCartItems} totalPrice={totalPrice} modifyTotalPrice={modifyTotalPrice} onConfirmOrder={handleConfirmOrder} />
        {console.log(cartItems)}
      </div>
    </div>
  );
}

export default App;
