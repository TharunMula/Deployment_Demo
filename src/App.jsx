
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/product-list'
import ProductDetails from './pages/product-details'
import ProductCart from './pages/product-cart'
import { useNavigate } from 'react-router-dom'
import MainPage from './pages/main-page'



function App() {
 

  return(
   

    <Fragment  >
      
      
      <Routes>
        <Route path='' element={<MainPage/>}/>
        <Route path='/product-list/' element={<ProductList/>}/>
        <Route path='/product-details/:id/' element={<ProductDetails/>}/>
        <Route path='/product-cart/' element={<ProductCart/>}/>
      </Routes>
      

    </Fragment>
  )
}

export default App
