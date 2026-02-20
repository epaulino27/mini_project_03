import { useState } from 'react'
import cereal from './assets/cereal.jpeg'
import chicken from './assets/chicken.jpg'
import cleaner from './assets/cleaner.jpg'
import corn from './assets/corn.jpg'
import deodorant from './assets/deodorant.jpeg'
import './App.css'
import Item from './Item'
import Cart from './Cart'

function App() {

  const [cart, setCart] = useState([])

  function addToCart(item) {
    // is item already in cart?
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      // if yes add to quantity and update
      const updatedCart = cart.map(cartItem => cartItem.name === item.name 
        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem 
      ); 
      setCart(updatedCart); 
    } else { 
      // if no add as new item using setter 
      setCart([...cart, { ...item, quantity: 1 }]); 
    } 
  }

  function removeFromCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      // if yes remove from quantity
      const updatedCart = cart.map(cartItem => cartItem.name === item.name 
        ? { ...cartItem, quantity: cartItem.quantity - 1 } 
        : cartItem 
      );
      //remove item in full if theres a quantity of 0 and update
      const cleanCart = updatedCart.filter(cartItem => cartItem.quantity > 0)
      setCart(cleanCart)
    }
  }

  return (
    <>
    <div className='layout_container'>
      <div className='item_container'>
        <Item
          img={cereal}
          name="Honey Clumps of Hmm.."
          description="What's in it? Wouldn't you like to know!"
          onAdd={addToCart}
        ></Item>
        <Item
          img={chicken}
          name="Canned Tattoo Chicken"
          description="Caught in their rebelious teenage phases and freshly slaughtered."
          onAdd={addToCart}
        ></Item>
        <Item
          img={cleaner}
          name="Wake Up!"
          description="Huh? I don't know what your talking about there's no product here. Stop looking."
          onAdd={addToCart}
        ></Item>
        <Item
          img={corn}
          name="Impact Corn"
          description="How is it used? That's for you to decide!"
          onAdd={addToCart}
        ></Item>
        <Item
          img={deodorant}
          name="Whale Song"
          description="The best anti-depresent on the market made out of the vocal cords of all the earths whales."
          onAdd={addToCart}
        ></Item>
      </div>
      <div className='align_right'>
        <Cart 
          items={cart} 
          onRemove={removeFromCart}
        ></Cart>
      </div>
    </div>
    </>
  )
}

export default App
