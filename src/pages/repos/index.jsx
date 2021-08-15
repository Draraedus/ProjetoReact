import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import './styles.css'
import { SearchContext } from '../../ContextoandAxios/ContextApi'

function Repositories() {
    const sctx = React.useContext(SearchContext)

    const repostorage2 = localStorage.getItem('repodata')

    useEffect(() => {
        const syncdata = () => {
            const userstorage = localStorage.getItem('data')
            const repostorage = localStorage.getItem('repodata')
            if (userstorage && repostorage) {
                sctx.setsearchcontext(JSON.parse(userstorage))
                sctx.setrepocontext(JSON.parse(repostorage))
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
        <div className="RepoBody">
            <nav className="navbar fixed-top navbar-expand-md navbar-dark RepoTopBar">
                <div className="RepoTopBarfix">
                    <NavLink to="/Profile/" className="btn RepoTopBarButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </NavLink>
                    <h2 className="RepoTopBarTittle">{sctx.searchcontext.public_repos > 1 ? sctx.searchcontext.public_repos + " Repositórios" : sctx.searchcontext.public_repos + " Repositório"}</h2>
                </div>
            </nav>
            <div className="repocontainer">
                {(repostorage2 ? JSON.parse(repostorage2) : "/").map((rp) =>
                    <div className="reporendercontainer" key={rp.id}>
                        <div className="RepoRenderTitle">
                            <div className="RepoRenderTitleDecoration"></div>
                            <h2 className="RepoRenderTitleLabel">{rp.name}</h2>
                        </div>
                        <div className="reporenderdescripition">
                            <span className="reporenderdescripitiontext">{rp.description ? rp.description : "Sem Descrição"}</span>
                        </div>
                        <div className="reporendercontainericons">
                            <div className="reporenderfirsticons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                <span className="reporenderstars"> {rp.stargazers_count}</span>
                            </div>
                            <div className="reporendersecondicons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-unlock" viewBox="0 0 16 16">
                                    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
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

export default Repositories