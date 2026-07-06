from PyQt6.QtCore import QThread, pyqtSignal
import requests
import json

class ApiWorker(QThread):

    finished = pyqtSignal(object)

    def __init__(self, api_url):
        super().__init__()
        self.api_url = api_url

    def run(self):

        try:
            response = requests.get(self.api_url)

            data = json.loads(response.json())

            self.finished.emit(data)

        except Exception as e:
            print("API Error:", e)
            self.finished.emit({})