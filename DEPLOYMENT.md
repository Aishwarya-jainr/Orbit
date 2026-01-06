# Deployment Guide for Orbit

Quick reference guide for deploying your Orbit application.

## 🚀 Quick Start

### Backend (Render)
1. Go to [render.com](https://render.com) and sign up
2. New Web Service → Connect `Aishwarya-jainr/SocioEcho`
3. Settings:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variables (see below)
5. Deploy!

### Frontend (Vercel)
1. Go to [vercel.com](https://vercel.com) and sign up
2. Import Project → `Aishwarya-jainr/SocioEcho`
3. Settings:
   - Root Directory: `client`
   - Framework: Create React App
4. Add environment variable: `REACT_APP_API_URL=<your-render-url>`
5. Deploy!

## 🔑 Environment Variables

### Backend (Render)
```
MONGO_URL=<your-mongodb-atlas-url>
JWT_SECRET=<generate-a-random-string>
JWT_EXPIRE=7d
GMAIL_USER=<your-gmail>
GMAIL_PASS=<your-app-password>
PORT=8000
NODE_ENV=production
```

### Frontend (Vercel)
```
REACT_APP_API_URL=<your-render-backend-url>
```

## ✅ Post-Deployment Checklist

- [ ] Backend API is accessible
- [ ] Frontend loads correctly
- [ ] Can register new user
- [ ] Can login
- [ ] Dark mode works
- [ ] All features functional

## 📝 Notes

- **Images:** Render uses ephemeral storage. Consider Cloudinary for production.
- **CORS:** Update backend CORS to include your Vercel URL
- **Free Tier:** Both Render and Vercel offer free tiers
- **Custom Domain:** Available on both platforms

## 🆘 Troubleshooting

**Backend won't start:**
- Check Render logs
- Verify all environment variables are set

**Frontend can't connect:**
- Check `REACT_APP_API_URL` is correct
- Verify CORS settings in backend

**MongoDB errors:**
- Check connection string
- Verify IP whitelist includes `0.0.0.0/0`

For detailed instructions, see `implementation_plan.md`.
