from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import requests

app = FastAPI()

# Mount static files for CSS & JS
app.mount("/static", StaticFiles(directory="static"), name="static")

# Set up templates directory
templates = Jinja2Templates(directory="templates")

API_URL = "https://positiveheadlinegenerator.onrender.com/predict/"

@app.get("/")
async def serve_homepage(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/predict/")
async def get_prediction(text: str = Form(...)):  # Accept input from form
    response = requests.post(API_URL, json={"text": text})
    return response.json()
