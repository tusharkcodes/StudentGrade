from fastapi import FastAPI
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field
from typing import Annotated
import pickle
import numpy as np
from genai.helper import build_prompt_inputs
from genai.chatPrompt import chatPrompt
from genai.model import llm_model
from Student import Student, StudentReport


app = FastAPI()

model = pickle.load(open("model.pkl", "rb"))

@app.get("/")
def hello():
    return {'message': 'Hello world'}


@app.post("/predict")
def predict_score(student: Student):

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
    predicted_score = model.predict(final_input)

    # Helper function for taking formatted input
    build_input = build_prompt_inputs(predicted_score[0], student)


    parser = PydanticOutputParser(pydantic_object=StudentReport)
    format_instructions = parser.get_format_instructions()

    # Get the prompt template (NOT formatted yet)
    prompt = chatPrompt()

    llm = llm_model()

    # Create runnable chain
    chain = prompt | llm | parser

    # Inputs to inject at runtime
    inputs = {
        "predicted_score": predicted_score[0],
        **build_input,
        "format_instructions": format_instructions
    }

    # Invoke chain
    result = chain.invoke(inputs)

    print("Resultssss", result)

    return {'result': float(predicted_score[0]), 'report' : result}
