import React from "react";
import ReactDOM from 'react-dom/client'

export default function Tweet({username, tweetText, link }){



    return <>

        <hr/>
        <div className="tweet-box">
        <p className="username">{username}</p>
        <p className="tweet-text">{tweetText}</p>
        <a className="link" href={link} target="_blank" >{link} </a>
        </div>
        
        <br />
    



    </>
}