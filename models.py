from sqlalchemy import Column, Integer, String, Float, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://postgres:password@localhost/client_db"

Base = declarative_base()

class ClientData(Base):
    __tablename__ = "client_data"

    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String, index=True)
    revenue = Column(Float)
    expenses = Column(Float)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
