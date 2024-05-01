import { createContext, useState, useEffect} from "react";

export const dataContext = createContext();

const DataProvider = ({children}) => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState (savedCart);

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    const buyProduct =(produc) =>{
        const productrepeat = cart.find((item)=> item.id === produc.id);
      
        if (productrepeat) {
          setCart(cart.map((item)=> item.id === produc.id ?{...produc, quanty: 
          productrepeat.quanty + 1 } : item));
        } else{
          setCart([...cart, produc])
        }
        }
    return <dataContext.Provider value={{ cart, setCart, buyProduct}}>{children}</dataContext.Provider>;
}

export default DataProvider;