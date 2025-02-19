import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";
function ProductDetails(){
    const {id} = useParams() 
    const navigate = useNavigate();
   
    const {productDetailsView, setProductDetailsView,loading, setLoading,handleClickGoToCart}= useContext(ShoppingCartContext);
   
    async function fetchProductDetails(){
        const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
        const results = await apiResponse.json();
        if(results){
            setProductDetailsView(results)
            setLoading(false);
        }

    }
    function handleVisitToCart(){
        navigate('/product-cart/')

    }

    useEffect(() =>{
        fetchProductDetails();
    },[id])
    console.log(productDetailsView);
    if(loading) return <h1> Please Wait Product Deatils Loading!!!!...</h1>
    return (
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-md p-6">
                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                
                <div className="px-4 py-10 rounded-xl shadow-lg relative"> 
                <div className="lg:col-span-2">
                    <h4 className="text-2xl font-extrabold text-[#3333333] ">{productDetailsView?.title}</h4>
                </div>
                <h4 className=" pt-6 text-sm font-bold ">{productDetailsView?.description}</h4>
                <div className="ml-auto">
                <h4 className={`float-right py-0.5 px-1 my-80 rounded ${productDetailsView?.availabilityStatus === 'Low Stock' ? 'bg-red-500 text-black' : 'bg-green-300 text-black'}`} >{productDetailsView?.availabilityStatus}</h4>
                   </div>
                <img 
                    className=" w-4/5 rounded object cover"
                    src={productDetailsView?.thumbnail}
                    alt={productDetailsView?.title}/>
                    </div>
                    
                <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                    {
                        productDetailsView?.images?.length ? productDetailsView?.images.map(imageItem =>
                        <div className ="rounded-xl p-4 shadow-md "key={imageItem}>
                            <img src={imageItem}
                            className="w-24 cursor-pointer"
                                 alt='Product Secoundary Image'
                            />
                        </div>): null
                    }

                </div>
                   
                </div>
                <div className="lg:col-span-2">
                    <h1 className="text-2xl font-extrabold text-[#3333333] ">{productDetailsView?.title}</h1>
                    <h1 className="text-md font-bold text-[#3333333] ">Brand : {productDetailsView?.brand}</h1>
                    <h1 className={`mt-2.5 w-45 text-sm font-bold text-[#3333333] ${productDetailsView?.rating >= 3 ? 'bg-green-200 text-black' :'bg-red-200 text-black'}`} >Review Rating: {productDetailsView?.rating}/5</h1>
                    <h3 className={` mt-2.5 w-45 text-sm font-bold text-[#3333333] ${productDetailsView?.discountPercentage >= 1 ? 'bg-yellow-200 text-black' :''}`} >Discount: {productDetailsView?.discountPercentage}</h3>
                    

                    <div className="flex flex-wrap gap-4 mt-4">
                        <p className="font-bold text-xl">
                            $ {productDetailsView?.price}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleClickGoToCart(productDetailsView)}className=" mt-5 min-w-[400px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold ">Add to Cart</button>
                    </div>
                    <div>
                        <button onClick={()=>handleVisitToCart(productDetailsView)}className=" mt-5 min-w-[400px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold ">Go to Cart</button>
                    </div>

                </div>
               
            </div>
        </div>
    )
}

export default ProductDetails;