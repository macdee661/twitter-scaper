import os
import requests
import pandas as pd
import json

url = 'https://api.scraperapi.com/structured/twitter/search'

payload = {
    'api_key': '4045b5dc0b0e1198ef48dc5bbb12e0e1',
    'query':['steph curry','machine learning'],
    'num': '25'
}




def obtain_query():
    json_file = open('keywords.json', 'r')
    data = json.load(json_file)
    query = []
    
    return [keyword for keyword in data.values()]



def obtain_tweets(url, query):
    
    payload['query'] = query

    response = requests.get(url,params=payload)

    data = response.json()
    all_tweets = data['organic_results']

    twitter_data = []   
    for tweet in all_tweets:
        twitter_data.append(tweet)

    return data['organic_results']



queries = obtain_query()




all_tweets = [obtain_tweets(url, query) for query in queries]


