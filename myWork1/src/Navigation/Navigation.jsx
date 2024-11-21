import { NavLink,useNavigate } from "react-router-dom";
import "./navigation.css"





function Navigation({size1}){
    const navigate = useNavigate();

    function loginadmin(){
        navigate("admin")
    }
    return(
        <div class="menu">
            <NavLink to="about">Մեր Մասին</NavLink>
            <NavLink to="product">Ապրանքներ</NavLink>
            <NavLink to="work">Աշխատանք</NavLink>
            <NavLink to="contact">Կապ</NavLink>
            <NavLink to="admin"  className="adm" onClick={loginadmin}>Admin</NavLink>
           <div className="basket">
            <i    class="fa fa-shopping-basket" aria-hidden="true"></i>
    
            </div>
                    <span className="a4">{size1}</span>
            </div>
     
    )
}

export default Navigation