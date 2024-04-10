import React from 'react';
import UpdateKeywords from './UpdateKeywords';
import TrendingTweets from './TrendingTweets';
import PersonalizedTweets from './PersonalizedTweets';

export default function Navbar({ setHeading, setPage }) {
    const handleClick = (newHeading, newPage, event) => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        setHeading(newHeading);
        setPage(newPage)

    };

    return (
        <nav className='nav'>
            <a href="/" className='site-title'><i className="fa-solid fa-people-group"></i>TwitterPro</a>
            <ul>
                <li>
                    <a href="/" onClick={(event) => handleClick('Here are your personalized tweets',<PersonalizedTweets/>, event)}>Personalized Tweets</a>
                </li>
                <li>
                    <a href="/about" onClick={(event) => handleClick('Here are your most trending tweets',<TrendingTweets/>, event)}>Trending Tweets</a>
                </li>
                <li className='update-keywords'>
                    <a href="/" onClick={(event) => handleClick('Please enter your desired keywords',<UpdateKeywords/>, event)} >Update Keywords</a>
                </li>
            </ul>
        </nav>
    );
}
