import { useState, useEffect } from "react";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../../Atoms/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [ products, setProduct] = useState()
    const {id} = useParams()

    console.log(products)

    useEffect(() => {
        getProductById(id).then(prod => {
            setProduct(prod)
        })

    },[id])
    
    
    return (
        
        <div className ="ItemDetailContainer">
            <ItemDetail {...products}> </ItemDetail>
        </div>  
    )
    }
    export default ItemDetailContainer;