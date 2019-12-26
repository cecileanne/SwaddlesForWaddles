# -*- coding: utf-8 -*-
"""
Created on Tue Dec 17 10:59:56 2019

@author: srolz1
"""

#script used for custom model detection
#imageAI uses YOLOv3 architecture to train object detection models

#preparing your dataset: 
    #Pascal VOC format is required
    #200 images of each object type
    #annotate objects in images saved as xml files(use https://github.com/tzutalin/labelImg)
    #parent folder for dataset (pinguins) --> child folders: train + validation
    #train folder: images + annotations subfolders  (80% of images)
    #validation folder: images + annotations subfolders (20% of images)
    
from imageai.Detection.Custom import DetectionModelTrainer
#create instance of class DetectionModelTrainer
trainer = DetectionModelTrainer()

#model type will use YOLOv3 algorithm
trainer.setModelTypeAsYOLOv3()

#set directory of dataset folder
trainer.setDataDirectory(data_directory=r"C:\Users\srolz1\Desktop\Coding Bootcamp\Project3\SwaddlesForWaddles\imageAI\penguins")

#save results 
#metrics = trainer.evaluateModel(model_path="penguins/train", json_path="penguins/json/detection_config.json", iou_threshold=0.5, object_threshold=0.3, nms_threshold=0.5)
#print(metrics)

#object_names_array= contains names of all objects in dataset
trainer.setTrainConfig(object_names_array=["penguin", "pinguin"], batch_size=32, num_experiments=100)#, train_from_pretrained_model="pretrained-yolov3.h5")
trainer.trainModel()

#RESULT: 
#detection_config.json
#tensorboard report
#models generated from training
#model with highest accuracy will have highest mAP