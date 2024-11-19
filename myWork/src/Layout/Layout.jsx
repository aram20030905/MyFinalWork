import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import React, {useState} from 'react';
function Layout(){
 
     const [cart, setCart] = useState([])
    return(
        <div>
            <Navigation size={cart.length}/>
            <Outlet/>
        </div>
    )

}
export default Layout