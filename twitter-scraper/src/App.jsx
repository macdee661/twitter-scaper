import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import PersonalizedTweets from '../components/PersonalizedTweets';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tweet from '../components/Tweet';

function App() {
    const [header, changeHeading] = useState('Welcome. Here are your personalized tweets');
    const [page, changePage] = useState(<PersonalizedTweets />)

    const setHeading = (newHeading) => {
        changeHeading(newHeading);
    };

    const setPage = (newPage) => {
        changePage(newPage);
    };

    return (
        <>
            <br />
            <br />
            <Navbar setHeading={setHeading} setPage={setPage}/>
            <Header heading={header} />
            {page}
        </>
    );
}

export default App;
