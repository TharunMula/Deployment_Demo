import { useNavigate } from "react-router-dom";
function MainPage(){
    const navigate= useNavigate();
    return(
        <div className="w-full h-screen bg-cover bg-center
        flex justify-center items-center" style={{ backgroundImage: `url(${' https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' })`}} >
            <div>
            <h1 className='text-4xl font-extrabold'>Welcome to Shopping</h1>
            <p className='focus-visible text-sm font-bold mx-110 ' >Click button to continue</p>
            <button className='hover:bg-blue-200 mx-120 px-5 w-30 py-1 rounded-none bg-black text-white font-bold' onClick={()=>navigate('/product-list/')}>Go to shopping</button>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 text-bold text-left-sm hover:font-extrabold'>Recommended products in a shopping cart are personalized suggestions that complement the items already selected. These products are typically shown based on customer preferences, browsing history, or popular trends. The goal is to encourage additional purchases by highlighting items that enhance or complete the current selection, improving the shopping experience and boosting sales</div>
            </div>
        </div>
    )

}
export default MainPage;