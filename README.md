# Musharaf Hussain - Personal Portfolio

A full-stack dynamic portfolio web application with admin dashboard, built with React, Node.js, Express, and Supabase.

## Tech Stack

- **Frontend:** React 18 + Vite, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend:** Node.js, Express.js
- **Database:** Supabase (PostgreSQL)
- **Auth:** JWT (JSON Web Tokens)
- **Deployment:** Vercel (frontend) + Render (backend)

## Project Structure

```
apna_portfolio/
├── frontend/                 # React frontend
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── admin/
│   │   │       ├── AdminLogin.jsx
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── DashboardOverview.jsx
│   │   │       ├── ProjectManager.jsx
│   │   │       ├── SkillManager.jsx
│   │   │       └── MessageViewer.jsx
│   │   ├── context/
│   │   │   ├── ThemeContext.jsx
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Admin.jsx
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── data.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vercel.json
│   └── package.json
├── backend/                  # Express backend
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   ├── messageController.js
│   │   └── profileController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── upload.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── messages.js
│   │   └── profile.js
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── supabase/
│   └── schema.sql
└── README.md
```

## Quick Start

### 1. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to **SQL Editor** in your Supabase dashboard
3. Copy and paste the contents of `supabase/schema.sql` and run it
4. Go to **Project Settings > API** to get your:
   - Project URL (`SUPABASE_URL`)
   - Anon/Public key (`SUPABASE_ANON_KEY`)
   - Service role key (`SUPABASE_SERVICE_KEY`)

### 2. Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env with your Supabase credentials and other settings
npm install
npm run dev
```

**Seed the admin user:** After starting the server for the first time, create the admin user by running:

```bash
# In a separate terminal
curl -X POST http://localhost:5000/api/auth/seed
```

Or manually insert via Supabase SQL Editor (the password must be bcrypt hashed).

### 3. Frontend Setup

```bash
cd frontend
cp .env.example .env
# Edit .env with your API URL and Supabase credentials
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 4. Environment Variables

**Backend (.env):**
| Variable | Description |
|---|---|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_KEY` | Supabase service role key |
| `JWT_SECRET` | Secret key for JWT tokens |
| `ADMIN_EMAIL` | Admin email for seeding |
| `ADMIN_PASSWORD` | Admin password for seeding |
| `PORT` | Server port (default: 5000) |
| `FRONTEND_URL` | Frontend URL for CORS |
| `EMAIL_USER` | (Optional) Gmail for Nodemailer |
| `EMAIL_PASS` | (Optional) Gmail app password |

**Frontend (.env):**
| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API URL |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key |

## API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/login` | No | Admin login |
| GET | `/api/auth/verify` | Yes | Verify token |
| GET | `/api/projects` | No | Get all projects |
| POST | `/api/projects` | Yes | Create project |
| PUT | `/api/projects/:id` | Yes | Update project |
| DELETE | `/api/projects/:id` | Yes | Delete project |
| GET | `/api/skills` | No | Get all skills |
| POST | `/api/skills` | Yes | Create skill |
| PUT | `/api/skills/:id` | Yes | Update skill |
| DELETE | `/api/skills/:id` | Yes | Delete skill |
| POST | `/api/messages` | No | Send contact message |
| GET | `/api/messages` | Yes | Get all messages |
| PATCH | `/api/messages/:id/read` | Yes | Mark message as read |
| DELETE | `/api/messages/:id` | Yes | Delete message |
| GET | `/api/profile` | No | Get profile data |
| PUT | `/api/profile` | Yes | Update profile |

## Admin Panel

1. Navigate to `/admin/login`
2. Login with admin credentials (default: email from `ADMIN_EMAIL`, password from `ADMIN_PASSWORD`)
3. Dashboard features:
   - **Overview:** Stats at a glance
   - **Projects:** Add, edit, delete projects with image upload
   - **Skills:** Manage skills with proficiency levels
   - **Messages:** View and manage contact form submissions

## Deployment

### Frontend → Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Set root directory to `frontend`
4. Framework preset: **Vite**
5. Add environment variables from `.env.example`
6. Deploy

### Backend → Render

1. Go to [render.com](https://render.com) → New Web Service
2. Connect your GitHub repo
3. Set root directory to `backend`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add environment variables from `.env.example`
7. Deploy

**Important:** Update `VITE_API_URL` in Vercel to point to your Render backend URL, and update `FRONTEND_URL` in Render to point to your Vercel frontend URL.

### File Uploads Note

For production, consider using Supabase Storage or Cloudinary for project image uploads instead of local `uploads/` folder, as serverless platforms like Render don't persist local files.

## Features

- ✅ Responsive design (mobile + desktop)
- ✅ Dark/light mode toggle
- ✅ Smooth Framer Motion animations
- ✅ JWT admin authentication
- ✅ Dynamic project management (CRUD)
- ✅ Dynamic skill management with progress bars
- ✅ Contact form with database storage
- ✅ Optional email notifications (Nodemailer)
- ✅ Admin dashboard with stats
- ✅ Resume download button
- ✅ SEO meta tags
- ✅ Loading animations
- ✅ Professional blue/white minimal theme

## License

MIT
