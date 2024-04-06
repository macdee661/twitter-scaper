import os
import requests
# import pandas as pd
import json

url = 'https://api.scraperapi.com/structured/twitter/search'

api_keys = ['5c01fb2cd94216e201a52fcdb12706a4', '', '5c01fb2cd94216e201a52fcdb12706a4']
n = 0


payload = {
'api_key': api_keys[n],
    'query':'',
    'num': '25'
}




def obtain_query():
    json_file = open('keywords.json', 'r')
    data = json.load(json_file)
    query = []
    
    return [keyword for keyword in data.values()]



def obtain_tweets(url, query):
    global n
    
    payload['query'] = query

    while True:
        response = requests.get(url, params=payload)
     
        if response.status_code == 401:
            n = n+1
            payload['api_key'] = api_keys[n]


        elif response.status_code != 401:
            break


    print(response)
    data = response.json()
    all_tweets = data['organic_results']

    twitter_data = []   
    for tweet in all_tweets:
        twitter_data.append(tweet)

    return data['organic_results']

def generate_dict(all_tweets):
   

    tweets_dict = {}

    new_batch_tweets = []
    counts =0
    for tweet_set in all_tweets:

        for tweet in tweet_set:

            if (tweet['link'].split('/')[-2]) == 'status':
                new_batch_tweets.append(tweet)




    for sample_tweet in new_batch_tweets:
        counts +=1
        username = sample_tweet['title']
        tweet_text = sample_tweet['snippet']
        link = sample_tweet['link']

        user_dict = {}
        user_dict['tweet_text'] = tweet_text
        user_dict['link'] = link
        user_dict['username'] = username

        tweets_dict[counts] = user_dict
    return tweets_dict

queries = obtain_query()

all_tweets = [obtain_tweets(url, query) for query in queries]

print(generate_dict(all_tweets))