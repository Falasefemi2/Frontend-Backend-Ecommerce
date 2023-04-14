import {AiOutlineShoppingCart} from 'react-icons/ai'
import {useStateContext} from '../context/stateContext'
import {useState} from 'react'
import CartPages from '../pages/CartPages'

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const {qty} = useStateContext()
  return (
    <nav className="bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-shrink-0">
          <h1 className="text-white font-bold text-lg">FEMISTORE</h1>
        </div>
        <div className="flex-1 min-w-0 ml-4">
          <div>
            <input
              type="search"
              placeholder="Search Product"
              className="w-full bg-gray-800 text-white rounded-full px-4 pl-12 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="relative flex-shrink-0">
          <AiOutlineShoppingCart
            className="text-white text-4xl"
            onClick={() => setIsCartOpen(!isCartOpen)}
          />
          <div className="absolute bottom-0 right-0 rounded-full bg-red-500 text-white text-xs px-1">
            {qty}
          </div>
          <div className={`fixed inset-0 z-50 ${isCartOpen ? 'block' : 'hidden'}`}>
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="absolute inset-y-0 right-0 max-w-full flex">
              <div className="w-96 bg-white px-4 py-6">
                <CartPages />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
