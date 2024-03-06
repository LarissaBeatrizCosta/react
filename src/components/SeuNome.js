function SeuNome({setNome}){
  
    return(
        <div>
            <p>Nome:</p>
            <input type="text" placeholder="Seu nome?"
            onChange={(e) =>setNome(e.target.value)}></input>
        </div>
    )
}

export default SeuNome