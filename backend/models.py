from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Task(Base):
    __tablename__ = "tasks"
    id = Column(Integer, primary_key=True)
    title = Column(String)
    mode = Column(String)
    points = Column(Integer, default=0)
    streak = Column(Integer, default=0)
    steps = relationship("Step", back_populates="task")

class Step(Base):
    __tablename__ = "steps"
    id = Column(Integer, primary_key=True)
    task_id = Column(Integer, ForeignKey('tasks.id'))
    description = Column(String)
    is_done = Column(Boolean, default=False)
    task = relationship("Task", back_populates="steps")
