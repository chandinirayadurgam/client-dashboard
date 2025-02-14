from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from models import ClientData, SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/clients")
def get_clients(db: Session = Depends(get_db)):
    return db.query(ClientData).all()

@app.post("/clients")
def add_client(client: ClientData, db: Session = Depends(get_db)):
    db.add(client)
    db.commit()
    return {"message": "Client added successfully"}
