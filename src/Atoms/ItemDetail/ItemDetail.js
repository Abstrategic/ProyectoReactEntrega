import FunctionCounter from "../FunctionCounter/FunctionCounter";
import './ItemDetail.css'

const ItemDetail = (products) => {
    console.log(products)
    

    const onAdd = (quantity) =>{
        console.log(quantity)
    }

    return (
        
        <div className ="ItemDetail">
            <div className="headerItem">
                <img className="itemImg" src={products.img} alt="PicProduct"/>
                <div className="descContainer">
                        <div className="titleContent">
                            <h3 className="itemTitle">{products.name}</h3>
                            <p className="ItemCategory">{products.category}</p>
                        </div>
                        <p className="shortItem">{products.description}</p>
                        <FunctionCounter initial={0} stock={15} onAdd={onAdd} />
                </div>
            </div>
            <div className="Divider"></div>
            <div className="desContainer">
                <h3 className="descTitle">Description</h3>
                <p className="longDesc">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
                laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et 
                voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente 
                delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                repellat."</p>
            </div>
        </div>  
    )
}
    export default ItemDetail;