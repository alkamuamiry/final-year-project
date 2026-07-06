import requests

def load_data():
    urls= "http://127.0.0.1:8000/"
    responses = requests.get(urls)
    print(responses.json())
    
try:
    load_data()
except Exception as e:
    print(e)