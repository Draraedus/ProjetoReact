import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import api from '../../ContextoandAxios/Axiosget'
import { SearchContext } from '../../ContextoandAxios/ContextApi'
import "./styles.css"

function FollowedProfile() {
    const sctx = React.useContext(SearchContext)


    const savesearch = (valor) => {
        localStorage.setItem("login", valor)
        edituser(valor)
    }

    async function edituser(param) {
        try {
            const read = await api.get('/' + param)
            const readrepo = await api.get('/' + param + '/repos')
            const readfollowing = await api.get('/' + param + '/following')
            const readfollowers = await api.get('/' + param + '/followers')

            localStorage.setItem("data", JSON.stringify(read.data))
            localStorage.setItem("repodata", JSON.stringify(readrepo.data))
            localStorage.setItem("followingdata", JSON.stringify(readfollowing.data))
            localStorage.setItem("followers", JSON.stringify(readfollowers.data))

            window.location.replace("/Profile")
        } catch (err) {
            window.location.replace("/404");
        }
    }

    useEffect(() => {
        async function getSearchValue() {
            try {
                const read = await api.get('/' + localStorage.getItem("tmplogin"))

                sctx.setfollowprofile(read.data)

            } catch (err) {
                window.location.replace("/404");
            }
        }

        const returnsearch = () => {
            if (localStorage.getItem('login') == null) {
                window.location.replace("/");
            }
        }

        returnsearch()

        getSearchValue()
    }, [])


    return (
        <div className="FollowedProfileBody">

            <nav className="navbar fixed-top navbar-expand-md navbar-dark FollowedProfileTop">
                <a className="navbar-brand FollowedProfileTopBarLogo" href={"/" + sctx.followprofile.login}>{"#" + sctx.followprofile.login}</a>
                <div className="FollowedProfileTopBarButton">
                    <button onClick={() => savesearch(sctx.followprofile.login)} className="btn  mr-md-0" type="submit">
                        <b className="FollowedProfileTopBarWords">Salvar </b>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green" className="bi bi-save" viewBox="0 0 16 16">
                            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                        </svg>
                    </button>
                </div>
            </nav>

            <div className="FollowedProfileMidContainer">
                <div className=" FollowedProfileHead">
                    <div className="FollowedProfileHeadImageContainer">
                        <img src={sctx.followprofile.avatar_url} alt="" className="FollowedProfileHeadImage"></img>
                    </div>

                    <div className=" FollowedProfileHeadInfo">
                        <div className="FollowedProfileHeadInfoLabel">
                            <div className="FollowedProfileHeadInfoTittle">
                                <div className="FollowedProfileHeadInfoDecoration"></div>
                                <h1 className="FollowedProfileHeadInfoTittleText">{sctx.followprofile.name}</h1>
                            </div>
                            <br />
                            <div className="FollowedProfileHeadInfoDescripition">
                                <span className="FollowedProfileHeadInfoDescripitionText">{sctx.followprofile.email ? sctx.followprofile.email : "Email Privado."}</span>
                                <br />
                                <span className="FollowedProfileHeadInfoDescripitionText">{sctx.followprofile.location ? sctx.followprofile.location : "Localização Privada."}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="FollowedProfileMidBar">
                        <div className="btn btn-secondary FollowedProfileMidBarButton">
                            <h1 className="infotitle-label FollowedProfileMidBarButtonTittle">{sctx.followprofile.followers}</h1><br></br>
                            Seguidores
                        </div>
                        <div className="btn btn-secondary FollowedProfileMidBarButton">
                            <h1 className="infotitle-label FollowedProfileMidBarButtonTittle">{sctx.followprofile.following}</h1><br></br>
                            Seguindo
                        </div>
                        <div className="btn btn-secondary FollowedProfileMidBarButton">
                            <h1 className="infotitle-label FollowedProfileMidBarButtonTittle">{sctx.followprofile.public_repos}</h1><br></br>
                            Repositórios
                        </div>
                    </div>
                </div>
                <div className="FollowedProfileBiorContainer">
                    <div className="infotittle">
                        <div className="FollowedProfileBioTittleLabel"></div>
                        <h1 className="FollowedProfileBioTittleText">BIO</h1>
                    </div>
                    <br />
                    <div className="FollowedProfileBioDescripition">
                        <span className="FollowedProfileBioDescripitionText">{sctx.followprofile.bio ? sctx.followprofile.bio : "O usuário não adicionou Bio."}</span>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default FollowedProfile