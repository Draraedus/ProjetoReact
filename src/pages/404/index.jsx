import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Page404 = () => {

    useEffect(() => {
        localStorage.removeItem("login")
    }, [])

    return (
        <div className="row align-items-center Pag404Head">
            <div className="container Pag404body">
                <h1 className="Pag404Tittle"> Erro 404 </h1>
                <h3 className="Pag404Text"> Usuario Não encontrando no Github ou Nada foi digitado.</h3>
                <NavLink to="/" className="btn btn-warning btn-md btn-block ">Voltar A busca</NavLink>
            </div>
        </div>
    )
}

export default Page404