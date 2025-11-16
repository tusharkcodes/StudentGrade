from langchain_google_genai import GoogleGenerativeAI
from dotenv import load_dotenv

load_dotenv()
 
def getTheAnswere(prompt):
   model = GoogleGenerativeAI(model='gemini-2.5-flash')
   result = model.invoke(prompt)

   return result
