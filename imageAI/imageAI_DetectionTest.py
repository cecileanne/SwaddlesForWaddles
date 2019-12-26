# -*- coding: utf-8 -*-
"""
Created on Tue Dec 17 11:15:26 2019

@author: srolz1
"""

#script to test detection model
from imageai.Detection.Custom import CustomObjectDetection
import os

execution_path = os.getcwd()

#create a new instance of custom object detection class
detector = CustomObjectDetection()
#algorithm that will be used
detector.setModelTypeAsYOLOv3()

#path to model file with highest accuracy
detector.setModelPath(os.path.join(execution_path, "detection_model-ex-001--loss-0983.564.h5"))


#sets path to json file
detector.setJsonPath(os.path.join(execution_path, "detection_config.json"))

#function will load model into prediction instance and num_objects = number of object types in dataset
detector.loadModel()

detections = detector.detectObjectsFromImage(input_image="penguin_test.jpg", output_image_path="penguin-detected.jpg")
for detection in detections:
    print(detection["name"], " : ", detection["percentage_probability"], " : ", detection["box_points"])
    
    


