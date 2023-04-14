// import React, {useState, useEffect} from 'react'
// import {createClient} from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

// export const client = createClient({
//   projectId: '960sslpj',
//   dataset: 'production',
//   apiVersion: '2023-04-13',
//   useCdn: true,
//   token: import.meta.env.VITE_SANITY_TOKEN,
// })

// const builder = imageUrlBuilder(client)

// export const urlFor = (source) => builder.image(source)

// const App = () => {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     client
//       .fetch('*[_type == "product"]')
//       .then((data) => setProducts(data))
//       .catch((err) => console.error(err))
//   }, [])

//   return (
//     <div>
//       <h1 className='font-bold underline'>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <p>Price: {product.price}</p>
//             {product.image && (
//               <img
//                 src={urlFor(product.image).url()}
//                 alt={product.title}
//                 style={{width: '200px', height: '200px', objectFit: 'cover'}}
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
    </div>
  )
}

export default App

