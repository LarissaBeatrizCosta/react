import Item from './Item'

function List (){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="ferrari" ano={1985}/>
            <Item marca="mercedes" ano={1995}/>

        </ul>
        </>
    )
}

export default List