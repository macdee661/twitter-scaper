import React from 'react';

export default function Navbar({ setHeading }) {
    const handleClick = (newHeading, event) => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        setHeading(newHeading);
    };

    return (
        <nav className='nav'>
            <a href="/" className='site-title'><i className="fa-solid fa-people-group"></i>TwitterPro</a>
            <ul>
                <li>
                    <a href="/" onClick={(event) => handleClick('Welcome. Here are your personalized tweets', event)}>Personalized Tweets</a>
                </li>
                <li>
                    <a href="/about" onClick={(event) => handleClick('Here are your most trending tweets', event)}>Trending Tweets</a>
                </li>
                <li className='update-keywords'>
                    <a href="/" onClick={(event) => handleClick('Please enter your desired keywords', event)}>Update Keywords</a>
                </li>
            </ul>
        </nav>
    );
}
