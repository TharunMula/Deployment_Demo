import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function CartSingleItem({singleItem}){

    const navigate= useNavigate();
    function navigatetoDetailsPage(getcurrentId){
        console.log(getcurrentId);
        navigate(`/product-details/${getcurrentId}`)

    }
    
    
    
    const {handleRemoveFromCart,handleClickGoToCart}=useContext(ShoppingCartContext)

    
    
    console.log(singleItem?.quantity)
    return (
    <Fragment>
        <div className="gird grid-cols-3 items-start gap-5">
            <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-20 bg-gray-400 rounded-sm ">

                
            <img onClick={()=> navigatetoDetailsPage(singleItem?.id)} src={singleItem?.thumbnail}
            className="w-full h-full object-contain"
            />
            </div>
            <div >
                <h3 className="text-bold font-bold text-gray-800">{singleItem?.title}</h3>
                <div className="w-30 mt-1" >
                <h4 className={`hover:bg-red-500 px- 0.5 py-1 text-sm ${singleItem?.discountPercentage >= 1 ? 'bg-yellow-200 text-black' :''}`} >Discount: {singleItem?.discountPercentage}%</h4>
            </div>
                <button className=" mt-2 text-sm px-4 py-3 text-white font-extrabold rounded-2xl bg-black" onClick={()=>handleRemoveFromCart(singleItem, true)}>Remove</button>
                </div>
        
        <div className="ml-auto">
            <h3 className="text-lg font-bold text-gray-900">
                $ {singleItem?.totalPrice}
            </h3>
            <div className="mt-3 flex gap-2">
                <button className='border border-[#000] w-6 opacity-65' disabled={singleItem?.quantity === 1} onClick={()=>handleRemoveFromCart(singleItem, false)}> - </button><h6>{singleItem.quantity}</h6>
                <button className='border border-[#000] w-6' onClick={()=>handleClickGoToCart(singleItem)}>  + </button>
            </div>
            <div className="ml-auto">
                <h4 className={` my-1 py-0.5 px-1 rounded ${singleItem?.availabilityStatus === 'Low Stock' ? 'bg-red-500 text-black' : 'bg-green-300 text-black'}`} >{singleItem?.availabilityStatus}</h4>
            </div>
            
            </div>

        </div>
        </div>
        <hr className="border-gray-500"/>
        </Fragment>
    )
}

export default CartSingleItem;