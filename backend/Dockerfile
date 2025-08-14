
# # syntax=docker/dockerfile:1
# FROM python:3.11-slim

# ENV PYTHONDONTWRITEBYTECODE=1     PYTHONUNBUFFERED=1

# WORKDIR /app

# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

# COPY . .

# ENV PORT=5000
# EXPOSE 5000

# CMD ["gunicorn", "-c", "gunicorn.conf.py", "app:app", "-w", "2", "-b", "0.0.0.0:5000"]
FROM python:3.10

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
