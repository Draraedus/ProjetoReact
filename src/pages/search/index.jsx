import React, { useState} from 'react'
import Logo from '../../Components/Logo.png'
import './styles.css'
import { NavLink} from 'react-router-dom'

import api from '../../ContextoandAxios/Axiosget.js'



export default function Search() {

    const [login , setlogin] = useState()

    const searchstorage = (valor) => {
        localStorage.setItem("login",valor)
        getSearchValue()
    }

    async function getSearchValue () {
        try{
            const read = await api.get('/' + login)
            const readrepo = await api.get ('/' + login + '/repos')
            const readfollowing = await api.get ('/' + login + '/following')
            const readfollowers = await api.get ('/' + login + '/followers')

            localStorage.setItem("data", JSON.stringify(read.data))
            localStorage.setItem("repodata", JSON.stringify(readrepo.data))
            localStorage.setItem("followingdata", JSON.stringify(readfollowing.data))
            localStorage.setItem("followers", JSON.stringify(readfollowers.data))

        }catch(err) {
            window.location.replace("/404");
        }
    }


    return (
        <div className="container-md SearchBar">
            <form className="SearchTable">
                <div className = "form-group">
                    <img src={Logo} className="img-fluid" alt="" /> <br></br>
                    <input value = {login} className='form-control SearchInput' required placeholder="Usuário" onChange={e => setlogin(e.target.value)}></input> <br></br>

                    <NavLink onClick={() => searchstorage(login)} to={login ? "/Profile/" : "/"} className="SearchButton" type="submit">
                        <b className="SearchName">Entrar</b>
                        <i className="bi bi-arrow-right" fill="#292929"></i>
                    </NavLink>
                </div>
            </form>
        </div>
    )
}
