import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { NavLink } from 'react-router-dom'
import { SearchContext } from '../../ContextoandAxios/ContextApi'
import './styles.css'

function Followers() {

    const sctx = React.useContext(SearchContext)

    const followersstorage2 = localStorage.getItem('followers')

    const gotouser = (valor) => {
        localStorage.setItem("tmplogin", valor)
        window.location.replace("/FollowProfile")
    }

    useEffect(() => {
        const syncdata = () => {
            const userstorage = localStorage.getItem('data')
            const followersstorage = localStorage.getItem('followers')
            if (userstorage) {
                sctx.setsearchcontext(JSON.parse(userstorage))
                sctx.setfollowerscontext(JSON.parse(followersstorage))
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
        <div className="FollowersBody">
            <nav className="navbar fixed-top navbar-expand-md navbar-dark FollowersTopBar">
                <div className="FollowersTopBarfix">
                    <NavLink to="/Profile/" className="btn FollowersTopBarButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </NavLink>
                    <h2 className="FollowersTopBarTittle">{sctx.searchcontext.followers > 1 ? sctx.searchcontext.followers + " Seguidores" : sctx.searchcontext.followers + " Seguidor"}</h2>
                </div>
            </nav>
            <div className="Followerscontainerhead">
                {(followersstorage2 ? JSON.parse(followersstorage2) : "/").map((fc) =>
                    <div onClick={() => gotouser(fc.login)} className="Followerscontainer" key={fc.id}>
                        <div className="FollowersTitle">
                            <div className="FollowersTitleDecoration"></div>
                            <div className="FollowersImageContainer">
                                <img src={fc.avatar_url} alt="" className="FollowersImage"></img>
                            </div>
                            <h2 className="FollowersTitleLabel">{"#" + fc.login}</h2>
                            <div className="FollowersArrow">
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

export default Followers