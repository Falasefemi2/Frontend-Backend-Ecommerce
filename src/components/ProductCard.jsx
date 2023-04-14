import {createClient} from '@sanity/client'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import imageUrlBuilder from '@sanity/image-url'
import { formatCurrency } from '../utilities/formatcurrency';
import { useStateContext } from '../context/stateContext'


const client = createClient({
    projectId: '960sslpj',
    dataset: 'production',
    apiVersion: '2023-04-13',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_TOKEN,
  })
  
  const builder = imageUrlBuilder(client)
  
  export const urlFor = (source) => builder.image(source)

const ProductCard = ({ description, price, image, title }) => {
  const { addToCart } = useStateContext()
  const handleAddToCart = () => {
    addToCart({ description, price, image })
  }
  
  // const {incQty} = useStateContext()
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md p-3 flex">
      {image && (
        <div className="relative aspect-w-1 aspect-h-1">
          <img src={urlFor(image).url()} alt={title} className='w-[200px] h-[200px] object-contain' />
        </div>
      )}

      <div className="px-4 py-3">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-lg font-semibold mb-2">{formatCurrency(price)}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={handleAddToCart}>
          <AiOutlineShoppingCart className="inline-block mr-2"   />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
