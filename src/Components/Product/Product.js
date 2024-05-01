import { useContext, useState, useEffect} from "react";
import { dataContext } from "../Context/DataContext";
import "./Procuct.css";
import axios from "axios";

const Product = () => {
const [data, setData] = useState ([]);
const { buyProduct } = useContext(dataContext);

useEffect(()=>{
  axios("data.json").then((res)=> setData(res.data));
},[])

  return data.map ((produc)=>{
    return (
        <div className="card"  key={produc.id}>
            <img src={produc.img} alt="img-produc-card"/>
            <h3>{produc.name}</h3>
            <h4>{produc.price}$</h4>
            <button onClick={()=> buyProduct(produc)}>buy</button>
        </div>
    )

  })
}

export default Product;
