from fastapi import FastAPI, File, UploadFile, HTTPException, Query
import pandas as pd
import plotly.graph_objects as go
import plotly.express as px
from io import BytesIO
import base64
from fastapi.middleware.cors import CORSMiddleware
import models 
from database import engine,SessionLocal
from typing import List

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
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


@app.post("/visualize-scatterPlot")
async def visualizeScatter(column1:str, column2:str, file:UploadFile=File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail='only csv files are allowed')
    
    contents=await file.read()

    df=pd.read_csv(BytesIO(contents))

    if column1 not in df.columns or column2 not in df.columns:
        raise HTTPException(status_code=400, detail='columns do not match')
    
    fig = px.scatter(df, x=column1, y=column2, title="Scatter Plot")
    fig.update_layout(
        xaxis_title=column1,
        yaxis_title=column2,
        template='ggplot2'
    )
    
    img_bytes = BytesIO()
    fig.write_image(img_bytes, format="png")
    img_bytes.seek(0)
    encoded_img = base64.b64encode(img_bytes.read()).decode()
    return {"image": f"data:image/png;base64,{encoded_img}"}


@app.post("/visualize-barPlot")
async def visualizeBar(column1:str, column2:str, file:UploadFile=File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail='only csv files are allowed')
    
    contents=await file.read()

    df=pd.read_csv(BytesIO(contents))

    if column1 not in df.columns or column2 not in df.columns:
        raise HTTPException(status_code=400, detail='columns do not match')
    
    fig = px.bar(df, x=column1, y=column2, title="Bar Plot")
    fig.update_layout(
        xaxis_title=column1,
        yaxis_title=column2,
        template='ggplot2'
    )
    
    img_bytes = BytesIO()
    fig.write_image(img_bytes, format="png")
    img_bytes.seek(0)
    encoded_img = base64.b64encode(img_bytes.read()).decode()
    return {"image": f"data:image/png;base64,{encoded_img}"}


@app.post("/get-columns_numeric")
async def getCols(file:UploadFile=File(...)):

    contents=await file.read()
    try:
        df=pd.read_csv(BytesIO(contents))
        columns=df.select_dtypes(include=['number']).columns.to_list()
        return {'columns':columns}
    except Exception as e:
        return {'error:'f'failed to respond{str(e)}'}

@app.post("/get-columns_categorical")
async def getCols(file:UploadFile=File(...)):

    contents=await file.read()
    try:
        df=pd.read_csv(BytesIO(contents))
        columns=df.select_dtypes(include=['category','object']).columns.to_list()
        return {'columns':columns}
    except Exception as e:
        return {'error:'f'failed to respond{str(e)}'}


@app.post("/visualize-pieChart")
async def visualizeBar(names: List[str] = Query(...), values:List[str] = Query(...), file:UploadFile=File(...)):

    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail='only csv files are allowed')
    
    contents=await file.read()

    df=pd.read_csv(BytesIO(contents))

    if not all(col in df.columns for col in names):
        raise HTTPException(status_code=400, detail='columns do not match')
    
    if not all(col in df.columns for col in values):
        raise HTTPException(status_code=400, detail='columns do not match')
    fig=px.pie(df, names=df[names[0]], values=df[values[0]], title='Pie Chart',template='ggplot2')
    img_bytes = BytesIO()
    fig.write_image(img_bytes, format="png")
    img_bytes.seek(0)
    encoded_img = base64.b64encode(img_bytes.read()).decode()
    return {"image": f"data:image/png;base64,{encoded_img}"}

@app.post("/visualize-donutChart")
async def visualizeBar(names: List[str] = Query(...), values:List[str] = Query(...), file:UploadFile=File(...)):

    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail='only csv files are allowed')
    
    contents=await file.read()

    df=pd.read_csv(BytesIO(contents))

    if not all(col in df.columns for col in names):
        raise HTTPException(status_code=400, detail='columns do not match')
    
    if not all(col in df.columns for col in values):
        raise HTTPException(status_code=400, detail='columns do not match')
    fig = go.Figure(data=[go.Pie(labels=df[names[0]], values=df[values[0]], hole=.3)])
    fig.update_layout(
        title='Donut Chart',
    )
    img_bytes = BytesIO()
    fig.write_image(img_bytes, format="png")
    img_bytes.seek(0)
    encoded_img = base64.b64encode(img_bytes.read()).decode()
    return {"image": f"data:image/png;base64,{encoded_img}"}





