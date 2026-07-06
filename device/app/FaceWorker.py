from PyQt6.QtCore import QThread, pyqtSignal
import numpy as np

class FaceWorker(QThread):

    result_signal = pyqtSignal(object)

    def __init__(self, engine, db_template):
        super().__init__()
        self.engine = engine
        self.db_template = db_template
        self.frame = None
        self.running = True

    def run(self):

        while self.running:

            if self.frame is None:
                continue

            result = self.engine.detect_face(
                self.frame,
                # self.db_template
            )

            self.result_signal.emit(result)
            self.msleep(200)  # slow processing (important)