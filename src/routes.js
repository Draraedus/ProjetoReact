import { Route, Switch } from 'react-router-dom'
import React from 'react'

import Search from './pages/search/index.jsx'
import Profile from './pages/profile/index.jsx'
import Repositories from './pages/repos/index.jsx'
import Followers from './pages/Followers/index.jsx'
import Following from './pages/following/index.jsx'
import FollowedProfile from './pages/FollowedProfile/index.jsx'
import Page404 from './pages/404/index.jsx'


const Routes = () => {

    return (
        <Switch>
            <Route path="/Profile/" exact component={Profile} />
            <Route path="/Repositories/" exact component={Repositories} />
            <Route path="/Followers/" exact component={Followers} />
            <Route path="/Following/" exact component={Following} />
            <Route path="/FollowProfile/" exact component={FollowedProfile} />
            <Route path="/404" exact component={Page404} />
            <Route path="/" component={Search} />
        </Switch>
        
    )

}

export default Routes