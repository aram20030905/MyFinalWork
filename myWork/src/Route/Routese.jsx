import { Routes, Route, Navigate } from 'react-router-dom';
import Product from '../pages/Product/Product.jsx';
import Work from '../pages/Work/Work.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import AdminPage from '../pages/AdminPage/AdminPage.jsx';
import Admin from '../pages/Admin/Admin.jsx';
import Layout from '../Layout/Layout.jsx';
import About from '../pages/About/About.jsx';
import {  useState } from "react"

function Routese() {
const [cart, setCart] = useState([]); 
// const [show, setShow] =useState(true)

    function handleClickItem(item){
    let isPresent=false
      setCart([...cart,item])

    cart.forEach((product)=>{
    if(item.id === product.id){
        isPresent=true
    }
      console.log(product)


})
if(isPresent){
    return;
        setCart([...cart,item])
  

       }
       console.log(cart)
       console.log(isPresent)

   }
   


    return (
       
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index path="about" element={<About />} /> 
                <Route path="product" element={<Product handleClickItem={handleClickItem}/>} />
                <Route path="work" element={<Work />} />
                <Route path="contact" element={<Contact />} />
                <Route path="admin" element={<AdminPage />} />
                <Route path="adm" element={<Admin/>}/>
            </Route>
        </Routes>
       
    );
}


export default Routese;
