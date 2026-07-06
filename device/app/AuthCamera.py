from PyQt6.QtWidgets import QLabel
from PyQt6.QtCore import QTimer
from PyQt6.QtGui import QImage,QPixmap
import time
import cv2
import numpy
class AuthCamera(QLabel):
    def __init__(self,engine,worker):
        super().__init__()
        self.engine = engine
        self.worker = worker
        self.cap = cv2.VideoCapture(0)

        self.current_frame = None

        self.timer = QTimer()
        self.timer.timeout.connect(self.update_frame)
        self.timer.start(30)
        
        
    def update_frame(self):

        ret, frame = self.cap.read()

        if not ret:
            return

        self.current_frame = frame.copy()
            
        rgb_frame = cv2.cvtColor(
            frame,
            cv2.COLOR_BGR2RGB
        )

        h, w, ch = rgb_frame.shape

        bytes_per_line = ch * w

        qt_image = QImage(
            rgb_frame.data,
            w,
            h,
            bytes_per_line,
            QImage.Format.Format_RGB888
        )

        pixmap = QPixmap.fromImage(qt_image)

        self.setPixmap(pixmap)
        
        self.worker.frame = frame
       
        pass