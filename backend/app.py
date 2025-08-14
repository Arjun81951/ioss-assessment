from fastapi import FastAPI, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl
import string
import random

app = FastAPI()

# Allow all origins for development (React frontend will work without CORS issues)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage: { short_code: original_url }
url_store = {}

class URLItem(BaseModel):
    url: HttpUrl

def generate_short_code(length: int = 6) -> str:
    """Generate a random short code."""
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(length))

@app.get("/api/health")
def health_check():
    return {"status": "OK"}

@app.post("/shorten")
def shorten_url(item: URLItem):
    """Accepts a long URL and returns a shortened code."""
    short_code = generate_short_code()
    while short_code in url_store:
        short_code = generate_short_code()
    url_store[short_code] = item.url
    return {"short_url": f"http://127.0.0.1:8000/{short_code}"}

@app.get("/{short_code}")
def redirect_to_url(short_code: str):
    """Redirects the short code to the original URL."""
    if short_code in url_store:
        return {"redirect_to": url_store[short_code]}
    raise HTTPException(status_code=404, detail="Short code not found")
