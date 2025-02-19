import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import CartSingleItem from "../../components/cartItems"
import { useState } from "react";


function ProductCart(){
    const {inCart}= useContext(ShoppingCartContext);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const amount = inCart.reduce((sum, inCart)=>(sum+inCart?.totalPrice),0).toFixed(2);
    console.log(amount)
    if(inCart?.totalPrice === 0){
        console.log("came here")
        setDisabled(true);
    }
    


    return (
        <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
            <h1 className="text-2xl font-bold text-gray-800 text-center"> My Cart Page</h1>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="md:col-span-2 space-y-4">
                    {
                        inCart?.length ? 
                        inCart.map((singleItem)=><CartSingleItem singleItem={singleItem}/>)
                        :  <h1 className="text-2xl ">No Cart Item Avalible </h1>
                    }
                    
                </div>
                <div className=" bg-gray-100 rounded-lg p-4 h-max">
                    <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
                        Order Summary

                    </h3>
                    <ul className="text-gray-700 mt-4 space-y-2">
                        <p className="flex flex-wrap gap-4 text-sm font-bold">Total : <span className="flex flex-wrap gap-4 text-sm font-bold">{amount}</span></p>

                    </ul>
                    <div className="mt-5 flex gap-2">
                        <button disabled={disabled} className=" disabled: opacity-40 text-sm px-4 py-3 bg-black text-white font-extrabold rounded-2xl ">CheckOut</button>
                        <button className="text-sm px-4 py-3 bg-black text-white font-extrabold rounded-2xl" onClick={()=>navigate('/product-list/')}>Continue Shopping</button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductCart;