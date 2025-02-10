from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import smtplib
import os

app = FastAPI()

# In-memory storage for simplicity (use a database in production)
saved_forms = {}

class SaveProgressRequest(BaseModel):
    token: str
    email: str
    formData: dict

@app.post("/save-progress")
async def save_progress(request: SaveProgressRequest):
    # Store the form data in a database or dictionary
    saved_forms[request.token] = request.formData

    # Generate a resume link
    resume_link = f"https://your-frontend.com/resume/{request.token}"

    # Send email with the resume link
    try:
        sender_email = "your-email@example.com"
        sender_password = "your-password"
        receiver_email = request.email

        message = f"""\
        Subject: Resume Your Registration
        Hi,
        Click the link below to resume your registration:
        {resume_link}
        """

        with smtplib.SMTP("smtp.example.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, message)

        return {"message": "Progress saved and email sent"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
