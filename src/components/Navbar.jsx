import {AiOutlineShoppingCart} from 'react-icons/ai'

function Navbar() {
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
          <AiOutlineShoppingCart className="text-white text-4xl" />
          <div className="absolute bottom-0 right-0 rounded-full bg-red-500 text-white text-xs px-1">
            5
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
