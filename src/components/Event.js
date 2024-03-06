import Button from "./evento/Button"


function Evento(){
    
    function meuEvento(){
        console.log('primeiro evento')
    }
    function segundoEvento(){
        console.log('segundo evento')
    }
    
    
    return(
        <>
        <p>Clique para ver o evento:</p>
        <Button event={meuEvento} text="Primeiro Evento"/>
        <Button event={segundoEvento} text="Segundo Evento"/>

        </>
    )
}

export default Evento