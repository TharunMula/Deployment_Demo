import { createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";



export const ShoppingCartContext=createContext(null);

function ShoppingCartProvider({children}){
    const[loading,setLoading] = useState(false);
    const[listOfProducts,setListOfProducts] = useState([ ]);
    const[productDetailsView, setProductDetailsView] = useState(null);
    const[inCart, setInCart] = useState([]);
    const navigate = useNavigate();
    
    

    async function fetchListOfProducts()
    { 
      const results= await fetch('https://dummyjson.com/products');
      const finalFetch= await results.json();
      if(finalFetch && finalFetch?.products){
        setListOfProducts(finalFetch?.products);
      }
        
    }
    function handleClickGoToCart(getProductDetails){
      let existItem = [...inCart];
      
      console.log(existItem?.quantity);
      const findIndexOfProduct= existItem.findIndex(inCart=>inCart?.id === getProductDetails?.id)


      if (findIndexOfProduct === -1 ){
        existItem.push({
          ...getProductDetails,
          quantity : 1,
          totalPrice: getProductDetails?.price,
        });
      }
        else{
          
          console.log("---ist coming here:")
          existItem[findIndexOfProduct]={
            ...existItem[findIndexOfProduct],
            quantity : existItem[findIndexOfProduct].quantity+1,
            totalPrice: (existItem[findIndexOfProduct].quantity+1)* existItem[findIndexOfProduct].price,
          };
         
            }
          setInCart(existItem);
          localStorage.setItem('inCart', JSON.stringify(existItem));

          navigate('/product-cart/')

    }

    function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
      let existItem = [...inCart];
      const FindIndexItemExist= existItem.findIndex(inCart=>inCart?.id===getProductDetails?.id);
      if(isFullyRemoveFromCart) {
        existItem.splice(FindIndexItemExist,1)
      }else{
        console.log("---ist coming here:")
        console.log(existItem[FindIndexItemExist].quantity)
          existItem[FindIndexItemExist]={
            ...existItem[FindIndexItemExist],
            quantity : existItem[FindIndexItemExist].quantity-1,
            totalPrice: (existItem[FindIndexItemExist].quantity-1)* existItem[FindIndexItemExist].price,
            
          }
          


        console.log('its been here since long time')
      }
      localStorage.setItem('setCart', JSON.stringify(existItem));
      setInCart(existItem);

    }
    

      

      console.log(inCart);

    
    useEffect(()=>{
        fetchListOfProducts();
        setInCart(JSON.parse(localStorage.getItem('inCart')||[]));
        

        
    },[]);
    console.log(listOfProducts)
    

    return <ShoppingCartContext.Provider value={{listOfProducts,loading, setLoading, productDetailsView, setProductDetailsView,handleClickGoToCart,handleRemoveFromCart ,  inCart }}>{children}</ShoppingCartContext.Provider>;


}

export default ShoppingCartProvider;
