import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartltemCounter from "./CartltemCounter";

const CartElements = () => {
const { cart, setCart  } = useContext (dataContext);


const deleteProduct = (id) =>{
  const foundId = cart.find((element)=> element.id === id);

  const newCart = cart.filter((element)=> {
    return element !== foundId;
  })

  setCart(newCart);
}
  return cart.map ((produc)=>{
    return (
        <div className="cartContent" key={produc.id}>
            <img src={produc.img} alt="produc-card"/>
            <h3 className="name">{produc.name}</h3>
            <CartltemCounter produc={produc}/>
            <h4 className="price">{produc.price * produc.quanty}$</h4>
            <h3 className="cart-delete-button" onClick={() =>deleteProduct(produc.id)}>❌</h3>
        </div>
    )
  })
}

export default CartElements;
