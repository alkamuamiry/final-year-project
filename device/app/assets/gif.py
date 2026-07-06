from PyQt6.QtWidgets import QApplication,QWidget,QVBoxLayout,QLabel,QGridLayout,QPushButton
from PyQt6.QtGui import QMovie
from PyQt6.QtCore import QSize,Qt
from PyQt6.QtMultimedia import *

class Hello(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        
        self.setLayout(layout)
    def handle_click(self):
        pass
        
        
app = QApplication([])
window = Hello()
window.show()
app.exec()
        