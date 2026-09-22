from fastapi import FastAPI
from database import engine

app = FastAPI(
    title="Queue API",
    description="Backend API for the Queue scheduling platform.",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "Queue API is running",
        "status": "ok",
    }


@app.get("/health")
def health_check():
    try:
        with engine.connect() as connection:
            return {
                "status": "healthy",
                "database": "connected",
            }
    except Exception as error:
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(error),
        }