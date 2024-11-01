import requests

API_key = "f440c7f799d7df54011d7d0e074d3ee8"

def fetch_weather(location,API_key):
    geo_url = f"http://api.openweathermap.org/geo/1.0/direct?q={location}&limit={1}&appid={API_key}"
    response = requests.get(geo_url).json()
    lat = response[0]['lat']
    lon = response[0]['lon']

    weather_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}&units=metric"
    response = requests.get(weather_url).json()
    description = response['weather'][0]['description']
    temp = response['main']['temp']
    print(f"In {location},\nit's {temp} degrees\nand {description}")

while True:
    city = input("Enter city name or type exit to quit: ")
    if city == "exit":
        break
    try:
        fetch_weather(city, API_key)
    except:
        print(f"Please enter a valid city")