const ItemListContainer = ({greeting}) => {
    return(
        <>
        <div>
            <h1 className="text-center text-xl uppercase text-white p-6 bg-gradient-to-r from-purple-600 to-blue-600">{greeting}</h1>
        </div>
        </>
    )
}

export default ItemListContainer