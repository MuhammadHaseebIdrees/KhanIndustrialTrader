import React from 'react'
import '../AStyles/ProductsComponent.css'
import ProductsSlider from '../Components/ProductsSlider'

const ProductsComponent = () => {
    return (
        <div className='products_main_div'>

            <div className="products_left_side">

                <div className="products_heading">
                    Our Products
                </div>

                <div className="products_text">
                    We Deals in All Kinds of:
                </div>

                <div className="products_list">
                    <ul>
                        <li>Pipes & Pipe Fittings</li>
                        <li>Valves & Valves Fittings</li>
                        <li>Tubes</li>
                        <li>Flanges</li>
                        <li>BUTT WELD FITTINGS</li>
                        <li>FORGED STEEL FITTINGS</li>
                        <li>Water Pumps</li>
                    </ul>
                </div>

            </div>

            <div className="right_side_products">
                <ProductsSlider />
            </div>

        </div>
    )
}

export default ProductsComponent