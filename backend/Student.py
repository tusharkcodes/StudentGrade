from pydantic import BaseModel, Field
from typing import Annotated

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
