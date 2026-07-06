import cv2
import numpy as np
import face_recognition


class FaceEngine:
    def __init__(self, tolerance=0.5):
        self.tolerance = tolerance

    def detect_face(self, frame):
        """
        Step 1: Check if face exists
        Returns face_locations or None
        """
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        face_locations = face_recognition.face_locations(rgb)

        if len(face_locations) == 0:
            return None

        return face_locations

    def extract_template(self, frame, face_locations):
        """
        Step 2: Extract 128D face encoding
        """
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        encodings = face_recognition.face_encodings(rgb, face_locations)

        if len(encodings) == 0:
            return None

        return encodings[0]  # 128-d vector

    def compare(self, template, db_template):
        """
        Step 3: Compare with database vector
        """
        distance = face_recognition.face_distance(
            [db_template],
            template
        )[0]

        return distance < self.tolerance

    def scan_and_verify(self, frame, db_template):
        """
        FULL PIPELINE:
        detect → extract → compare → return True/False
        """

        face_locations = self.detect_face(frame)

        if face_locations is None:
            return False  # no face detected

        template = self.extract_template(frame, face_locations)

        if template is None:
            return False

        return self.compare(template, db_template)