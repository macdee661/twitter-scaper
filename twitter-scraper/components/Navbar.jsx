import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Navbar(){
    
    return <><nav className='nav'>
        <a href="/" className='site-title'>Site Name</a>
        <ul>
            <li>
                <a href="/">Personalized Tweets</a>
            </li>
            <li>
                <a href="/about">Trending Tweets</a>
            </li>
            <li  className='update-keywords'>
                <a href="/">Update Keywords</a>
            </li>
           
        </ul>

    </nav>
    </>

}