url = 'https://api.scraperapi.com/structured/twitter/search'

api_keys = ['4045b5dc0b0e1198ef48dc5bbb12e0e1', '5a8854b4b586dd9340e474e4394e5fb1', '5c01fb2cd94216e201a52fcdb12706a4']



payload = {
    'api_key': api_keys[2],
    'query': '',
    'num': '25'
}

response = requests.get(url,params=payload)