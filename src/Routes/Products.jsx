import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductsComponent from '../Components/ProductsComponent'

const Products = () => {
  return (
    <div>
      <Navbar />
      <ProductsComponent />
      <Footer />
    </div>
  )
}

export default Products