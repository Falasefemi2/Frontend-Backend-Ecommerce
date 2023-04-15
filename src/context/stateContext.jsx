import {useContext, createContext, useState} from 'react'

const Context = createContext()

export const StateContext = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState()
  const [totalQty, setTotalQty] = useState()
  const [qty, setQty] = useState(0)

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
    setQty(qty + 1)
  }

  const handleDecrement = (itemId) => {
    const updatedCartItems = [...cartItems]
    const itemIndex = updatedCartItems.findIndex((item) => item._id === itemId)
    updatedCartItems[itemIndex].quantity--
    if (updatedCartItems[itemIndex].quantity === 0) {
      updatedCartItems.splice(itemIndex, 1)
    }
    setCartItems(updatedCartItems)
  }

  const handleIncrement = (itemId) => {
    const updatedCartItems = [...cartItems]
    const itemIndex = updatedCartItems.findIndex((item) => item._id === itemId)
    updatedCartItems[itemIndex].quantity++
    setCartItems(updatedCartItems)
  }

  const getTotalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQty,
        qty,
        addToCart,
        handleDecrement,
        handleIncrement,
        getTotalPrice,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
