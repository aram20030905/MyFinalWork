import { Routes, Route, Navigate } from 'react-router-dom';
import Product from '../pages/Product/Product.jsx';
import Work from '../pages/Work/Work.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import AdminPage from '../pages/AdminPage/AdminPage.jsx';
import Admin from '../pages/Admin/Admin.jsx';
import Layout from '../Layout/Layout.jsx';
import About from '../pages/About/About.jsx';
import Cart from '../pages/Cart/Cart.jsx'
import {  useState, useEffect } from "react"
import "./routese.css"

function Routese() {
const [cart, setCart] = useState([]); 
    const [warning, setWarning] = useState(false)
  
    // const [show, setShow] =useState(true)

useEffect(() => {
        if (warning) {
            const timer = setTimeout(() => setWarning(false), 3000); // Hide warning after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [warning]);


    function handleClickItem(item) {
        let isPresent = cart.some((product) => item.id === product.id);
        if (!isPresent) {
            setCart([...cart, item]);
            setWarning(true)

        }
        else{
               setWarning(false)

        }
     
    }

return (
        <>
            <Routes>
                <Route path="/" element={<Layout size={cart.length} />}>
                    <Route path="about" element={<About />} />
                    <Route path="product" element={<Product handleClickItem={handleClickItem} />} />
                    <Route path="work" element={<Work />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="admin" element={<AdminPage />} />
                    <Route path="adm" element={<Admin />} />
                    <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>} />
                </Route>
            </Routes>
            {warning && <p className="warning">This product is already in the basket.</p>}
        </>
    );
}

export default Routese;