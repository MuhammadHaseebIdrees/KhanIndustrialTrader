import React from 'react'
import { Link } from 'react-router-dom'
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
                        <li>
                            <Link to='/pipes'>
                                Pipes & Pipe Fittings
                            </Link>
                        </li>
                        <li>
                            <Link to='/valves'>
                                Valves & Valves Fittings
                            </Link>
                        </li>
                        <li>
                            <Link to='/tubes'>
                                Tubes
                            </Link>
                        </li>
                        <li>
                            <Link to='/flanges'>
                                Flanges
                            </Link>
                        </li>
                        <li>
                            <Link to='/weldfittings'>
                                Joints / BUTT WELD FITTINGS
                            </Link>
                        </li>
                        <li>
                            <Link to='/steelfittings'>
                                FORGED STEEL FITTINGS
                            </Link>
                        </li>
                        <li>
                            <Link to='/pumps'>
                                Water Pumps
                            </Link>
                        </li>
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