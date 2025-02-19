import { useContext } from "react";
import {ShoppingCartContext} from "../../context";
import ProductItem from "../../components/product-item";
function ProductList(){
    const {listOfProducts}= useContext(ShoppingCartContext);
    console.log(listOfProducts)
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-width-md mx-auto text-center">
                    <h2 className='text-3xl font-extrabold text-gray-950 sm:text-4xl'>Our Recommended Products</h2>
                </div>
                <div className="grid gird-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
                    {
                    listOfProducts && listOfProducts.length > 0 ? listOfProducts.map((singleProduct)=><ProductItem singleProduct={singleProduct} />): null
                    }

                </div>
                 </div>
                 </section>
    )
}

export default ProductList;