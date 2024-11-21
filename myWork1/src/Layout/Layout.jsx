import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import React, {useState} from 'react';
function Layout({size}){
 
   
    return(
        <div>
            <Navigation size1={size}/>
            <Outlet/>
        </div>
    )

}
export default Layout