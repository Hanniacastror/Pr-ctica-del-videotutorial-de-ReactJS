import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartltemCounter = ({ produc }) => {
  const {cart, setCart, buyProduct} = useContext(dataContext);

  const decrese = () => {
    const productrepeat = cart.find((item) => item.id === produc.id);

  productrepeat.quanty !== 1 &&
    setCart(cart.map((item) =>item.id === produc.id ? { ...produc, quanty: 
    productrepeat.quanty - 1 } : item));
    
  }

  return (
    <>
        <p className="counter-button" onClick={decrese}>-</p>
        <p>{produc.quanty}</p>
        <p className="counter-button" onClick={()=> buyProduct(produc)}>
          +
        </p>

    </>
  )
}

export default CartltemCounter
