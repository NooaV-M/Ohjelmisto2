import requests



def fetch_chuck_joke():
    url = "https://api.chucknorris.io/jokes/random"
    response = requests.get(url).json()
    for item in response:
        if item == "value":
            return response[item]

print(fetch_chuck_joke())