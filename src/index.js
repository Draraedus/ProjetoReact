import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes.js'
import './index.css'
import { SearchProvider } from './ContextoandAxios/ContextApi'


ReactDOM.render(
    <BrowserRouter> 
        <SearchProvider>
            <Routes />
        </SearchProvider>
    </BrowserRouter>,
    document.getElementById('root')
)