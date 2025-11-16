from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import Annotated
import pickle
import numpy as np
from genai.model import getTheAnswere

app = FastAPI()

# ✅ Load the model correctly
model = pickle.load(open("model.pkl", "rb"))

class Student(BaseModel):
    Hours_Studied : Annotated[int, Field(...)]
    Attendance : Annotated[int, Field(...)]
    Access_to_Resources : Annotated[int, Field(...)]
    Sleep_Hours : Annotated[int, Field(...)]
    Previous_Scores : Annotated[int, Field(...)]
    Motivation_Level : Annotated[int, Field(...)]
    Tutoring_Sessions : Annotated[int, Field(...)]
    Teacher_Quality : Annotated[int, Field(...)]
    Learning_Disabilities_Yes : Annotated[int, Field(...)]
    School_Type_Public : Annotated[int, Field(...)]
    Internet_Access_Yes : Annotated[int, Field(...)]
    Extracurricular_Activities_Yes : Annotated[int, Field(...)]

@app.get("/")
def hello():
    return {'message': 'Hello world'}

@app.post("/predict")
def predict_score(student: Student):

    # Extract input features
    features = [
        student.Hours_Studied,
        student.Attendance,
        student.Access_to_Resources,
        student.Sleep_Hours,
        student.Previous_Scores,
        student.Motivation_Level,
        student.Tutoring_Sessions,
        student.Teacher_Quality,
        student.Learning_Disabilities_Yes,
        student.School_Type_Public,
        student.Internet_Access_Yes,
        student.Extracurricular_Activities_Yes
    ]

    # Convert to numpy 2D array
    final_input = np.array([features])

    # Predict
    result = model.predict(final_input)
    ans = getTheAnswere()
    print("Answere of the getTheAnswere is here :", ans)
    return {'result': float(result[0])}
