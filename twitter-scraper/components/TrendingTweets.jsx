import React, { useEffect, useState } from "react";
import Tweet from "./Tweet";
import tweetData from './tweets.json'; // Correct import path

export default function PersonalizedTweets() {
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
