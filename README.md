
# iOSS Assessment Starter (Flask + React + Docker)

One-command start (`docker-compose up`) for a full-stack app:
- **Backend:** Python Flask (port 5000)
- **Frontend:** React + Vite + Tailwind (port 5173)
- **CORS ready** (frontend ↔ backend)
- **Dockerized** for quick run
- **Deploy-ready:** Vercel (frontend) & Render (backend)

---

## Quick Start (Local, no installs besides Docker)

```bash
docker-compose up --build
```
- Frontend: http://localhost:5173
- Backend:  http://localhost:5000/api/health

Edit code, the containers will rebuild when you re-run the command.

---

## Project Structure
```
project-root/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── gunicorn.conf.py
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   ├── Dockerfile
│   └── src/
│       ├── main.jsx
│       └── App.jsx
├── docker-compose.yml
├── render.yaml
├── .github/workflows/
│   ├── frontend-vercel.yml
│   └── backend-render.yml
└── README.md
```

---

## Environment Variables

### Frontend (Vite)
- `VITE_API_URL` (default `http://localhost:5000`)

### Backend (Flask)
- `PORT` (default `5000`)
- `FLASK_ENV` (optional, e.g., `production`)

---

## API Examples
- `GET /api/health` → `{ "status": "ok" }`
- `GET /api/example` → `{ "message": "Hello from Flask" }`

---

## Deployment (Recommended)

### Frontend → Vercel
1. Create a new Project in Vercel and **import this GitHub repo**.
2. Framework: **Vite** (Auto-detected).
3. Environment Variables: set `VITE_API_URL` to your backend URL on Render.
4. Build Command: `npm run build` | Output: `dist`
5. Deploy — Vercel will auto-deploy on pushes to `main`.

> **Optional GitHub Action** (`.github/workflows/frontend-vercel.yml`) included with placeholders for `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`. Create these as repo secrets if you want CI deploys via Actions.

### Backend → Render
Two options:
- **Connect repo in Render dashboard** and pick `backend/` as the root for a Web Service.
- Or use **render.yaml** (included) and select "Blueprint" deploy in Render.

Render settings for backend:
- Build Command: `pip install -r backend/requirements.txt`
- Start Command: `gunicorn -c backend/gunicorn.conf.py app:app -w 2 -b 0.0.0.0:$PORT`
- Root directory: repo root (Render uses `render.yaml` automatically).

---

## Docker (One Command)

```bash
docker-compose up --build
```
- Frontend available on http://localhost:5173
- Backend available on http://localhost:5000

---

## Screen Recording (Loom)

Record a 1–2 minute video showing:
- App running locally or deployed
- Brief overview of code structure
- How to run locally (`docker-compose up`)
- Where the API routes are

Include the Loom **share link** in your submission.

---

## Submission Checklist

- [ ] Public GitHub repository link
- [ ] Screen recording link (1–2 minutes)
- [ ] Live demo link(s) (Vercel + Render if available)
- [ ] Final commit pushed **before 12:45 PM**

Good luck!
