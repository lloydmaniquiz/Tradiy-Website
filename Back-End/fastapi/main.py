from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
from pydantic import BaseModel
from typing import List
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, Column, Integer, String, DateTime
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Database configuration
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
if not SQLALCHEMY_DATABASE_URL:
    raise ValueError("DATABASE_URL not found in the environment variables")

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# SQLAlchemy User model (you likely already have this defined)
class User(Base):
    __tablename__ = "Users"
    id = Column(Integer, primary_key=True, index=True)
    FirstName = Column(String, index=True)
    LastName = Column(String, index=True)
    Email = Column(String, index=True)
    CreatedAt = Column(DateTime, default=datetime.utcnow)

# Pydantic model for User response
class UserResponse(BaseModel):
    id: int
    FirstName: str
    LastName: str
    Email: str
    CreatedAt: datetime

    class Config:
        orm_mode = True  # Tells Pydantic to read data from SQLAlchemy models

# Pydantic model for creating a new user
class CreateUserRequest(BaseModel):
    FirstName: str
    LastName: str
    Email: str

    class Config:
        orm_mode = True  # Tells Pydantic to read data from SQLAlchemy models

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# FastAPI app setup
app = FastAPI()

# Define a route to fetch all users
@app.get("/users", response_model=List[UserResponse])
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()  # Fetch all users from the database
    return users

# Define a route to create a new user
@app.post("/users", response_model=UserResponse)
def create_user(user: CreateUserRequest, db: Session = Depends(get_db)):
    # Check if the email already exists
    existing_user = db.query(User).filter(User.Email == user.Email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Create a new user instance
    new_user = User(
        FirstName=user.FirstName,
        LastName=user.LastName,
        Email=user.Email,
        CreatedAt=datetime.utcnow(),
    )

    # Add the new user to the session and commit
    db.add(new_user)
    db.commit()
    db.refresh(new_user)  # Refresh to get the updated user (including ID)

    return new_user
