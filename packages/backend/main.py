from fastapi import FastAPI, File, UploadFile, HTTPException
import pandas as pd
import plotly.express as px
from io import BytesIO
import base64
from fastapi.middleware.cors import CORSMiddleware
import models 
from database import engine,SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/visualize")
async def visualize(column1:str, column2:str, file:UploadFile=File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail='only csv files are allowed')
    
    contents=await file.read()

    df=pd.read_csv(BytesIO(contents))

    if column1 not in df.columns or column2 not in df.columns:
        raise HTTPException(status_code=400, detail='columns do not match')
    
    fig = px.scatter(df, x=column1, y=column2, title="Scatter Plot")
    
    img_bytes = BytesIO()
    fig.write_image(img_bytes, format="png")
    img_bytes.seek(0)
    encoded_img = base64.b64encode(img_bytes.read()).decode()
    return {"image": f"data:image/png;base64,{encoded_img}"}

