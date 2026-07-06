from PyQt6.QtWidgets import (QApplication,
QWidget,QPushButton,QVBoxLayout,QStackedLayout,QHBoxLayout
,QStackedWidget,QLabel)
from PyQt6.QtCore import QDateTime,Qt,QSize,QTimer
from PyQt6.QtGui import QImage,QPixmap
import sys
import cv2
import face_recognition
# from device.source.authentication import AuthPage
from face_engine import FaceEngine
from AuthCamera import AuthCamera
from FaceWorker import FaceWorker
from ApiWorkers import ApiWorker
class MainWindow(QWidget):
    
    def __init__(self):
        super().__init__()
        self.engine = FaceEngine()
        
        self.worker = FaceWorker(self.engine,db_template=None)
        self.worker.result_signal.connect(self.on_result)
        self.worker.start()
        
        self.api_worker = ApiWorker(api_url="http://127.0.0.1:8000/student/embed")
        self.api_worker.finished.connect(self.save_face_template)
        self.api_worker.start()
        
        self.setWindowFlag(Qt.WindowType.FramelessWindowHint)
        self.setFixedSize(400,600)
        main_layout = QVBoxLayout() #this is the main layout
        main_layout.setContentsMargins(0,0,0,0)
        main_layout.setSpacing(0)
        # top bar
        top_bar = QWidget()
        top_bar_layout = QHBoxLayout()#5his is the top bar
        top_bar.setStyleSheet("background-color:red;")
        top_bar.setFixedHeight(35)
        top_bar.setLayout(top_bar_layout)
        
        # middle window
        self.stacked_widget = QStackedWidget()#this is middle display
        self.stacked_widget.setStyleSheet("background-color:yellow;")
        # self.stacked_widget.addWidget(AuthPage(cv2,np,face_recognition))
        self.auth_camera = AuthCamera(self.engine,self.worker) 
        self.stacked_widget.addWidget(self.auth_camera)  
        
        # bottom bar 
        bottom_bar = QWidget()
        bottom_bar_layout = QHBoxLayout()#this is bottom taskbar
        bottom_bar.setStyleSheet("background-color:blue;")
        bottom_bar.setFixedHeight(40)
        botton = QPushButton("exit")
        botton.clicked.connect(self.exitfunc)
        bottom_bar_layout.addWidget(botton)
        bottom_bar.setLayout(bottom_bar_layout)
        
        
        main_layout.addWidget(top_bar)
        main_layout.addWidget(self.stacked_widget)
        main_layout.addWidget(bottom_bar)
        self.setLayout(main_layout)
    def on_result(self,result):
        if result:
            print(result)
        else:
            print ("none")
    def save_face_template(self,result):
        if result is None:
            print("none")
        else:
            print(result)
    def exitfunc(self):
        sys.exit(self)
        

        
        
if __name__ == "__main__":       
    app= QApplication([])
    mainwindow = MainWindow()
    mainwindow.show()
    sys.exit(app.exec())
        

