from typing import Any, Dict

def map_ternary(value: int) -> str:
    """
    Map 1/2/3 (or similar) to Low/Medium/High.
    Defaults to 'Unknown' when out of expected range.
    """
    if value == 1:
        return "Low"
    if value == 2:
        return "Medium"
    if value == 3:
        return "High"
    return "Unknown"


def map_binary(value: int) -> str:
    """
    Map typical binary flags to Yes/No.
    Accepts 1 => Yes, 0 => No, 2 => No (if your data uses 1/2).
    """
    if value == 1:
        return "Yes"
    if value == 0:
        return "No"
    if value == 2:
        return "No"
    return "None"


def build_prompt_inputs(predicted_score: float, student: Any) -> Dict[str, Any]:
    """
    Create a dictionary of values (both raw and human-readable categories)
    to pass into the ChatPromptTemplate.
    `student` is expected to be a Pydantic model or object with attributes.
    """
    return {
        "predicted_score": predicted_score,
        "previous_score": getattr(student, "Previous_Scores", getattr(student, "previous_score", None)),
        "Hours_Studied": getattr(student, "Hours_Studied", None),
        "Attendance": getattr(student, "Attendance", None),
        "Access_to_Resources": map_ternary(getattr(student, "Access_to_Resources", None)),
        "Sleep_Hours": getattr(student, "Sleep_Hours", None),
        "Motivation_Level": map_ternary(getattr(student, "Motivation_Level", None)),
        "Tutoring_Sessions": map_ternary(getattr(student, "Tutoring_Sessions", None)),
        "Teacher_Quality": map_ternary(getattr(student, "Teacher_Quality", None)),
        "Learning_Disabilities": map_binary(getattr(student, "Learning_Disabilities_Yes", None)),
        "School_Type": "Public" if getattr(student, "School_Type_Public", 0) == 1 else "Private",
        "Internet_Access": map_binary(getattr(student, "Internet_Access_Yes", None)),
        "Extracurricular_Activities": map_binary(getattr(student, "Extracurricular_Activities_Yes", None)),
        # convenience duplicates for categorical insights
        "motivation_category": map_ternary(getattr(student, "Motivation_Level", None)),
        "school_category": "Public" if getattr(student, "School_Type_Public", 0) == 1 else "Private",
    }
