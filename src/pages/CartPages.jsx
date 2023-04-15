import {useStateContext} from '../context/stateContext'
import {urlFor} from '../components/ProductCard'
import {formatCurrency} from '../utilities/formatcurrency'
import {MdOutlineCancel} from 'react-icons/md'

const CartPages = ({handleClose }) => {
  const {cartItems, handleIncrement, handleDecrement} = useStateContext()



  return (
    <>
    <div className="flex justify-end">
        <button onClick={handleClose}>
            <MdOutlineCancel className="text-red-500 text-4xl" />
        </button>
    </div>
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <li key={item.description} className="py-4 flex">
              <img
                src={urlFor(item.image).width(80).url()}
                alt=""
                className="h-16 w-16 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="font-bold">{item.description}</h3>
                <p className="text-gray-600">{formatCurrency(item.price)}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full mr-2"
                    onClick={() => handleDecrement(item._id)}
                  >
                    -
                  </button>

                  <button
                    className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full ml-2"
                    onClick={() => handleIncrement(item._id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

    </>
  )
}

export default CartPages
