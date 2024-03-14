import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()


    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId)
        .then(result => {
            setProducts(result)
        })
    }, [categoryId])


    return(
        <>
        <div>
            <h1 className="text-center text-xl uppercase text-white p-6 bg-gradient-to-r from-purple-600 to-blue-600">{greeting}</h1>
            <ItemList products={products}/>
        </div>
        </>
    )
}

export default ItemListContainer