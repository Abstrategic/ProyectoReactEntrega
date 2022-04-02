import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../asyncmock';
import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(()  => {
        if (categoryId) {
            getProductsByCategory(categoryId).then(items =>{
                setProducts(items)
            }).catch(err =>{
                console.log(err)
            })
            
        } else {
            getProducts().then( response =>{
                setProducts(response);
            }) 
        }
    },[categoryId])

    // useEffect(()  => {
    //     fetch ('https://api.mercadolibre.com/sites/MLA/search?q=notebook').then(response => {
    //         return response.json()
    //     }).then( res => {
    //         setProducts(res.results)
    //     })
    // },[])

    console.log(products)
    return (
        
        <div className ="containerItemlist">
            <h1>{categoryId}</h1>
            <ItemList products ={products}/>

        </div>  
    )
    }
    export default ItemListContainer;