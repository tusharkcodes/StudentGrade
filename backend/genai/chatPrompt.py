from langchain_core.prompts import ChatPromptTemplate

def chatPrompt():
    return ChatPromptTemplate.from_messages([
        (
            "system",
            """
You are an AI educator that generates personalized student performance reports.

Return the output ONLY in this JSON format:
{format_instructions}

Your job:
1. Compare predicted score vs previous score.
2. Assign performance status: Improved / Declined / Same.
3. Identify strengths and weak areas based on input features.
4. Provide category-based insights:
   - Study habits
   - Sleep & wellness
   - Attendance & discipline
   - Motivation level
   - School type impact
   - Access to resources
   - Tutoring participation
5. Provide clear, actionable recommendations.
6. Tone: professional, narrative, structured, student-friendly.

Ensure the final output STRICTLY follows the JSON format.
"""
        ),

        (
            "human",
            """
Generate a performance report for the following student:

Predicted Score: {predicted_score}
Previous Score: {previous_score}

Student Data:
- Hours Studied: {Hours_Studied}
- Attendance: {Attendance}
- Access to Resources: {Access_to_Resources}
- Sleep Hours: {Sleep_Hours}
- Motivation Level: {Motivation_Level}
- Tutoring Sessions: {Tutoring_Sessions}
- Teacher Quality: {Teacher_Quality}
- Learning Disabilities (1=Yes, 0=No): {Learning_Disabilities}
- School Type (1=Public, 0=Private): {School_Type}
- Internet Access: {Internet_Access}
- Extracurricular Activities: {Extracurricular_Activities}

Categorical Insights:
- Motivation Category: {Motivation_Level}
- School Type Category: {School_Type}

Return ONLY the JSON response according to the format instructions provided.
"""
        )
    ])
