import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {useQuery} from 'react-query'
import LoadingPage from '../pages/LoadingPage'
import ProductCard from './ProductCard'


const client = createClient({
  projectId: '960sslpj',
  dataset: 'production',
  apiVersion: '2023-04-13',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

const Product = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery('products', async () => {
    const products = await client.fetch(`*[_type == "product"]`)
    return products
  })

  if (isLoading) return <LoadingPage />
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div>
          {products.map((product) => (
            <div key={product._id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
