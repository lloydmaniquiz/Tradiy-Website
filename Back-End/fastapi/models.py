from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from fastapi.database import Base

from datetime import datetime

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column('FirstName', String, index=True)
    last_name = Column('LastName', String, index=True)
    email = Column('Email', String, unique=True, index=True)
    created_at = Column('CreatedAt', DateTime, default=datetime.utcnow)
