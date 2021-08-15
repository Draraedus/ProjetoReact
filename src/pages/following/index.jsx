import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { NavLink } from 'react-router-dom'
import { SearchContext } from '../../ContextoandAxios/ContextApi'
import './styles.css'

function Following() {

    const sctx = React.useContext(SearchContext)

    const followingstorage2 = localStorage.getItem('followingdata')

    const gotouser = (valor) => {
        localStorage.setItem("tmplogin", valor)
        window.location.replace("/FollowProfile")
    }

    useEffect(() => {
        const syncdata = () => {
            const userstorage = localStorage.getItem('data')
            const followingstorage = localStorage.getItem('followingdata')
            if (userstorage && followingstorage) {
                sctx.setsearchcontext(JSON.parse(userstorage))
                sctx.setfollowingcontext(JSON.parse(followingstorage))
            }
            else {
                window.location.replace("/")
            }

        }

        const returnsearch = () => {
            if (localStorage.getItem('login') == null) {
                window.location.replace("/");
            }
        }

        returnsearch()

        syncdata()
    }, [])


    return (
        <div className="FollowingBody">
            <nav className="navbar fixed-top navbar-expand-md navbar-dark FollowingTopBar">
                <div className="FollowingTopBarfix">
                    <NavLink to="/Profile/" className="btn FollowingTopBarButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </NavLink>
                    <h2 className="FollowingTopBarTittle">{sctx.searchcontext.following > 1 ? "Seguindo " + sctx.searchcontext.following + " Usuários" : "Seguindo " + sctx.searchcontext.following + " Usuário" }</h2>
                </div>
            </nav>
            <div className="Followingcontainerhead">
                {(followingstorage2 ? JSON.parse(followingstorage2) : "/").map((fc) =>
                    <div className="Followingcontainer" key={fc.id}>
                        <div onClick={() => gotouser(fc.login)} className="FollowingTitle" >
                            <div className="FollowingTitleDecoration"></div>
                            <div className="FollowingImageContainer">
                                <img src={fc.avatar_url} alt="" className="FollowingImage"></img>
                            </div>
                            <h2 className="FollowingTitleLabel">{"#" + fc.login}</h2>
                            <div className='FollowingArrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Navbar />
        </div>
    )
}

export default Following