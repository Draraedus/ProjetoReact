import React from 'react'


export const SearchContext = React.createContext({})

export const SearchProvider = props => {
    const [searchcontext, setsearchcontext] = React.useState({})

    const [repocontext, setrepocontext] = React.useState({})

    const [followingcontext, setfollowingcontext] = React.useState({})

    const [followerscontext, setfollowerscontext] = React.useState({})

    const [followprofile, setfollowprofile] = React.useState({})


    return (
        <SearchContext.Provider value={{
            searchcontext, repocontext, followingcontext, followerscontext, followprofile,
            setsearchcontext, setrepocontext, setfollowingcontext, setfollowerscontext, setfollowprofile
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}
