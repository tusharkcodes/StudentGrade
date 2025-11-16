from langchain_google_genai import GoogleGenerativeAI
from dotenv import load_dotenv

load_dotenv()

def llm_model():
    return GoogleGenerativeAI(
        model="gemini-2.5-flash",
        temperature=0.3
    )
