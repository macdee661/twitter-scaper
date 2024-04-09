import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import PersonalizedTweets from '../components/PersonalizedTweets';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tweet from '../components/Tweet';
import TrendingTweets from '../components/TrendingTweets';

function App() {
    const [header, changeHeading] = useState('Welcome. Here are your new tweets');

    const setHeading = (newHeading) => {
        changeHeading(newHeading);
    };

    const [page, changePage] = useState(<PersonalizedTweets/>)

    return (
        <>
            <br />
            <br />
            <Navbar setHeading={setHeading} />
            <Header heading={header} />
 
            <TrendingTweets/>
        </>
    );
}

export default App;
