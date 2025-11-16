from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import Annotated
import pickle
import numpy as np

app = FastAPI()
model = pickle.load

class Student(BaseModel):
    Hours_Studied : Annotated[int, Field(..., description='How much hours student studied...',examples=['7 8 hrs'])]
    Attendance :Annotated[int, Field(..., description="Attendace of Student", examples=['70'])]
    Access_to_Resources : Annotated[int, Field(..., description="Access_to_Resources of Student", examples=['1 2 3'])]
    Sleep_Hours : Annotated[int, Field(..., description="Sleep hours of Student", examples=['7 8 10'])]
    Previous_Scores : Annotated[int, Field(..., description="Previous Exam Score of Student", examples=['85 90'])]
    Motivation_Level : Annotated[int, Field(..., description="Motivation level of Student", examples=['1, 2 , 3'])]
    Tutoring_Sessions : Annotated[int, Field(..., description="Tutoring session of the  Student", examples=['0 1 2 3'])] 
    Teacher_Quality : Annotated[int, Field(..., description="Quality of teacher teaching", examples=['1 , 2, 3 '])] 
    Learning_Disabilities_Yes : Annotated[int, Field(..., description="Any Learning Disabilities", examples=['0, 1'])]  
    School_Type_Public : Annotated[int, Field(..., description="School type of student public private", examples=['0 1'])] 
    Internet_Access_Yes : Annotated[int, Field(..., description="Internet access have student", examples=['0 1'])]  
    Extracurricular_Activities_Yes : Annotated[int, Field(..., description="Extra curricular Activities", examples=['0 1'])] 

@app.get("/")
def hello():
    return {'message' : 'Hello world'}


@app.post('/predict')
def predict_score(student : Student):
   Hours_Studied = student.Hours_Studied
   Attendance = student.Attendance
   Access_to_Resources = student.Access_to_Resources
   Sleep_Hours = student.Sleep_Hours
   Previous_Scores = student.Previous_Scores
   Motivation_Level = student.Motivation_Level
   Tutoring_Sessions =student.Tutoring_Sessions
   Teacher_Quality = student.Teacher_Quality
   Learning_Disabilities_Yes = student.Learning_Disabilities_Yes
   School_Type_Public =student.School_Type_Public
   Internet_Access_Yes = student.Internet_Access_Yes
   Extracurricular_Activities_Yes = student.Extracurricular_Activities_Yes
   

   result = model.predict(np.array[Hours_Studied,Attendance,Access_to_Resources,Sleep_Hours,Previous_Scores,Motivation_Level,Tutoring_Sessions,Teacher_Quality,Learning_Disabilities_Yes,School_Type_Public,Internet_Access_Yes,Extracurricular_Activities_Yes])

   return {'result' : result}