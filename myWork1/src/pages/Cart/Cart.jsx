import React,{useState} from 'react'


function Cart({cart, setCart}){
	const [price, setPrice] = useState(0)
	return(

	<article>
	{
           cart.map((item)=>(
                 <div className="cart_box" key={item.id}>
                 <h3>item.title}</h3>
                <h2>{item.price}</h2>
                 <div className="cart_img">
                 
                 <img src={item.image}/>
                 <p>{item.description}</p>
                 </div>
                 <div>
                 	<button>+</button>
                 	<button>-</button>
                 </div>
                 </div>


           ))
	}
	</article>
	)
}


export default Cart