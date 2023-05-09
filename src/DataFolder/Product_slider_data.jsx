import seamlessPipes from '../Assets/ProductsAssets/pipeProduct.png'
import seamlessTubes from '../Assets/ProductsAssets/tubeProduct.png'
import weldFittings from '../Assets/ProductsAssets/weldFittingProduct.png'
import steelFittings from '../Assets/ProductsAssets/steelFittingProduct.png'
import flangs from '../Assets/ProductsAssets/flangesProduct.png'
import valves from '../Assets/ProductsAssets/valvesProduct.png'
import pump from '../Assets/ProductsAssets/CUTE_PUMP.jpeg'
import { Link } from 'react-router-dom'

const ProductSliderData = [

    {
        id: 1,
        title: "SEAMLESS PIPES",
        image: <img src={seamlessPipes} alt='Slider' />,
        buttonSlider: <Link to="/pipes">Read More</Link>
    },
    {
        id: 2,
        title: "SEAMLESS TUEBS",
        image: <img src={seamlessTubes} alt='Slider' />,
        buttonSlider: <Link to="/tubes">Read More</Link>
    },
    {
        id: 3,
        title: "BUTT WELD FITTINGS",
        image: <img src={weldFittings} alt='Slider' />,
        buttonSlider: <Link to="/weldfittings">Read More</Link>
    },
    {
        id: 4,
        title: "FORGED STEEL FITTINGS",
        image: <img src={steelFittings} alt='Slider' />,
        buttonSlider: <Link to="/steelfittings">Read More</Link>
    },
    {
        id: 5,
        title: "FLANGES",
        image: <img src={flangs} alt='Slider' />,
        buttonSlider: <Link to="/flanges">Read More</Link>
    },
    {
        id: 6,
        title: "VALVES",
        image: <img src={valves} alt='Slider' />,
        buttonSlider: <Link to="/valves">Read More</Link>
    },
    {
        id: 7,
        title: "PUMPS",
        image: <img src={pump} alt='Slider' />,
        buttonSlider: <Link to="/pumps">Read More</Link>
    },
]

export default ProductSliderData