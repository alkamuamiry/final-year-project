# from PyQt6.QtWidgets import QApplication, QLabel, QWidget, QVBoxLayout
# from PyQt6.QtCore import QTimer
# from PyQt6.QtGui import QImage, QPixmap
# import cv2

# class CameraApp(QWidget):
#     def __init__(self):
#         super().__init__()

#         self.label = QLabel("Camera")
#         layout = QVBoxLayout()
#         layout.addWidget(self.label)
#         self.setLayout(layout)

#         self.cap = cv2.VideoCapture(0)

#         self.timer = QTimer()
#         self.timer.timeout.connect(self.update_frame)
#         self.timer.start(30)  # ~30 FPS

#     def update_frame(self):
#         ret, frame = self.cap.read()
#         if ret:
#             frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

#             h, w, ch = frame.shape
#             img = QImage(frame.data, w, h, ch * w, QImage.Format.Format_RGB888)

#             self.label.setPixmap(QPixmap.fromImage(img))

#     def closeEvent(self, event):
#         self.cap.release()

# app = QApplication([])
# window = CameraApp()
# window.show()
# app.exec()