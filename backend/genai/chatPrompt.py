from langchain_core.prompts import ChatPromptTemplate

def chatPrompt(predicted_score, build_input):
    student_feedback_prompt = ChatPromptTemplate.from_messages([
        ("system",
        """You are an AI educator that generates personalized student performance reports.
        You receive:
        - Predicted exam score
        - Previous exam score
        - Student's behavioral and learning features
        - Categorical interpretations (example: school_type = Public/Private, motivation_level = Low/Medium/High)

        Your job:
        1. Compare predicted score vs previous score.
        2. Assign performance status: Improved / Declined / Same.
        3. Identify strengths and weak areas based on input features.
        4. Provide category-based insights such as:
           - Study habits
           - Sleep & wellness
           - Attendance & discipline
           - Motivation level
           - School type impact
           - Access to resources
           - Tutoring participation
        5. Provide clear, actionable recommendations.
        6. Tone: professional + narrative + student-friendly.
        7. Report must be short, structured, and motivating.
        """
        ),

        ("human",
        """
        Generate a performance report for the following student.

        **Predicted Score:** {predicted_score}  
        **Previous Score:** {previous_score}  

        **Student Data:**  
        - Hours Studied: {Hours_Studied}  
        - Attendance: {Attendance}  
        - Access to Resources: {Access_to_Resources}  
        - Sleep Hours: {Sleep_Hours}  
        - Motivation Level: {Motivation_Level}  
        - Tutoring Sessions: {Tutoring_Sessions}  
        - Teacher Quality: {Teacher_Quality}  
        - Learning Disabilities (Yes=1 No=0): {Learning_Disabilities}  
        - School Type (Public=1 Private=0): {School_Type}  
        - Internet Access: {Internet_Access}  
        - Extracurricular Activities: {Extracurricular_Activities}

        **Categorical Insights:**  
        - Motivation Category: {Motivation_Level}  
        - School Type Category: {School_Type}  

        Now generate:

        1. **Performance Summary**  
        2. **Score Analysis**  
        3. **Strengths**  
        4. **Weak Areas**  
        5. **Category-wise Insights**  
        6. **Personalized Recommendations**  
        7. **Final Encouragement Message**
        """
        )
    ])

    # Format the prompt with actual values
    return student_feedback_prompt.format(
    predicted_score=predicted_score,
    previous_score=build_input["previous_score"],
    Hours_Studied=build_input["Hours_Studied"],
    Attendance=build_input["Attendance"],
    Access_to_Resources=build_input["Access_to_Resources"],
    Sleep_Hours=build_input["Sleep_Hours"],
    Motivation_Level=build_input["Motivation_Level"],
    Tutoring_Sessions=build_input["Tutoring_Sessions"],
    Teacher_Quality=build_input["Teacher_Quality"],
    Learning_Disabilities=build_input["Learning_Disabilities"],
    School_Type=build_input["School_Type"],
    Internet_Access=build_input["Internet_Access"],
    Extracurricular_Activities=build_input["Extracurricular_Activities"]
)
