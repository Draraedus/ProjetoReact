import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import './styles.css'
import { SearchContext } from '../../ContextoandAxios/ContextApi'
import { NavLink } from 'react-router-dom'
import api from '../../ContextoandAxios/Axiosget'


function Profile() {
    const sctx = React.useContext(SearchContext)


    function deleteseacrh() {
        localStorage.removeItem("login")
        window.location.replace("/")
    }

    useEffect(() => {
    async function getSearchValue () {
        try{
            const read = await api.get('/' + localStorage.getItem("login"))

            sctx.setsearchcontext(read.data)

        }catch(err) {
            window.location.replace("/404");
        }
    }

    const returnsearch = () => {
        if(localStorage.getItem('login') == null){
            window.location.replace("/");
        }
    }

    returnsearch()

    getSearchValue()
    }, [])



    return (
        <div className="ProfileBody">

            <nav className="navbar fixed-top navbar-expand-md navbar-dark ProfileTop">
                <a className="navbar-brand ProfileTopBarLogo" href={"/" + sctx.searchcontext.login}>{"#" + sctx.searchcontext.login}</a>
                <div className="ProfileTopBarButton">
                    <button onClick={deleteseacrh} className="btn  mr-md-0" type="submit">
                        <b className="ProfileTopBarWords">Sair </b>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                    </button>
                </div>
            </nav>

            <div className="ProfileMidContainer">
                <div className=" ProfileHead">
                    <div className="ProfileHeadImageContainer">
                        <img src={sctx.searchcontext.avatar_url} alt="" className="ProfileHeadImage"></img>
                    </div>

                    <div className=" ProfileHeadInfo">
                        <div className="ProfileHeadInfoLabel">
                            <div className="ProfileHeadInfoTittle">
                                <div className="ProfileHeadInfoDecoration"></div>
                                <h1 className="ProfileHeadInfoTittleText">{sctx.searchcontext.name}</h1>
                            </div>
                            <br />
                            <div className="ProfileHeadInfoDescripition">
                                <span className="ProfileHeadInfoDescripitionText">{sctx.searchcontext.email ? sctx.searchcontext.email : "Email Privado"}</span>
                                <br />
                                <span className="ProfileHeadInfoDescripitionText">{sctx.searchcontext.location ? sctx.searchcontext.location : "Localização Privada"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="btn-group ProfileMidBar" role="group" >
                        <NavLink to="/Followers" type="button" className="btn btn-secondary ProfileMidBarButton">
                            <h1 className="infotitle-label ProfileMidBarButtonTittle">{sctx.searchcontext.followers}</h1><br></br>
                            Seguidores
                        </NavLink>
                        <NavLink to="/Following"  type="button" className="btn btn-secondary ProfileMidBarButton">
                            <h1 className="infotitle-label ProfileMidBarButtonTittle">{sctx.searchcontext.following}</h1><br></br>
                            Seguindo
                        </NavLink>
                        <NavLink to="/Repositories"  type="button" className="btn btn-secondary ProfileMidBarButton">
                            <h1 className="infotitle-label ProfileMidBarButtonTittle">{sctx.searchcontext.public_repos}</h1><br></br>
                            Repositórios
                        </NavLink>
                    </div>
                </div>
                <div className="ProfileBiorContainer">
                    <div className="infotittle">
                        <div className="ProfileBioTittleLabel"></div>
                        <h1 className="ProfileBioTittleText">BIO</h1>
                    </div>
                    <br />
                    <div className="ProfileBioDescripition">
                        <span className="ProfileBioDescripitionText">{sctx.searchcontext.bio ? sctx.searchcontext.bio : "O usuário não adicionou Bio."}</span>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Profile