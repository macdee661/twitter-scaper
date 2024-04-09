import React, { useEffect, useState } from "react";
import Tweet from "./Tweet";
import tweetData from './data.json'; // Correct import path

export default function TrendingTweets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(tweetData);
    }, []);

    return (
        <>
            <br />
            <br />
            {Object.keys(data).map(key => (
                <Tweet
                    key={key}
                    username={data[key].username}
                    tweetText={data[key].tweet_text}
                    link={data[key].link}
                />
            ))}
        </>
    );
}
