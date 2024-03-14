import { Link } from "react-router-dom"

const Item = ({name, category, price, img, id}) => {
    return (
        <article>
            <h4> Categoria: {category}</h4>
            <h3>{name}</h3>
            <img src={img} className=" w-40"/>
            <h4>${price}</h4>
            <Link to={`/item/${id}`}>Detalle</Link>
        </article>
    )
}

export default Item