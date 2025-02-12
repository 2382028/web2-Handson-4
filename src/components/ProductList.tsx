import React from 'react'
import Product from './Product'

const ProductList = () => {
        const product: Product[] = [
            {
                name: 'Laptop',
                description: 'High-performance laptop for work and play',
                price: '$999',
                imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww'
            },
            {
              name: 'Headphone',
              description: 'Noise-canceling headphones with premium sound',
              price: '$199',
              imageUrl: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww'
            },
            {
              name: 'Smartphone',
              description: 'Latest generation smartphone with AI camera',
              price: '$799',
              imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
              name: 'Smartwatch',
              description: 'Fitness and health tracking smartwatch',
              price: '$299',
              imageUrl: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
              name: 'Wireless Mouse',
              description: 'Ergonomic wireless mouse with fast response',
              price: '$49',
              imageUrl: 'https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D'
            }
          ];
        
  return (

    <>
    <h1> Product List</h1>
    {
        product.map((product, index) =>{
            return (
                <Product key={index} {...product}/>
            )
        })
    }
    </>
  )
}

export default ProductList