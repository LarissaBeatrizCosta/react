import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()



    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }


    return (
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type="email" placeholder="Digite seu email..."
                    onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                <div>
                    <p> email é : {userEmail}</p>
                </div>
            )}
            </form>
           
        </div>
    )
}

export default Condicional