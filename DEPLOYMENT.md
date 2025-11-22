# 🚀 Production Deployment Guide

Complete guide to deploy your portfolio and manage content in production.

## 📋 **Deployment Overview**

You'll deploy **2 things**:
1. **Your Portfolio Website** → Vercel (free)
2. **Sanity Studio (CMS)** → Sanity Cloud or Vercel (free)

---

## ✅ **Option 1: Deploy to Vercel (Recommended - Easiest)**

### **Step 1: Prepare Your Code**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

### **Step 2: Deploy Website to Vercel**

1. Go to **https://vercel.com**
2. Click **"Add New Project"**
3. **Import** your GitHub repository
4. Vercel will auto-detect Next.js
5. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add these:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=g7vofr5b
     NEXT_PUBLIC_SANITY_DATASET=production
     SANITY_API_TOKEN=skd75CXhQ8VwpE1MxUCcxkWPsnET3DWqdSI6BHJwAQIp0rSzgwmdnjVZ8QvqqAPaeIh94CIgLk6pzxE3cHPQ6MEfiJpD8vvbYwBUvPt7qGfjTDDEOkbyjOSKKKIGYpElmt0b4MGcxfcpURDZYnL00o4H0TQQi1ODdyqPanwtBxyMWmFQWyYD
     ```
6. Click **"Deploy"**
7. Done! Your site will be live at `https://your-project.vercel.app`

### **Step 3: Deploy Sanity Studio**

**EASY WAY - Use Sanity Cloud (Recommended):**

1. Sanity provides a **free hosted Studio**:
   ```bash
   npx sanity deploy
   ```
   
2. Choose a hostname (e.g., `yourname-portfolio`)
3. Your CMS will be live at: `https://yourname-portfolio.sanity.studio`
4. ✅ **You can now edit content from anywhere!**

**ALTERNATIVE - Deploy Studio to Vercel:**

1. Create a separate Vercel project for Studio
2. Point to the same GitHub repo but set:
   - **Root Directory**: `.` (same)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Studio will be at: `https://studio-your-project.vercel.app`

---

## 🔄 **How to Update Content in Production**

### **Option A: Use Sanity Cloud Studio (Easiest)**
1. Go to `https://yourname-portfolio.sanity.studio`
2. Log in with your Sanity account
3. Edit content → Click "Publish"
4. Your live website **updates automatically** within seconds!

### **Option B: Use Sanity Management Console**
1. Go to **https://www.sanity.io/manage/personal/project/g7vofr5b**
2. Click "Vision" to use GROQ playground
3. Create/edit documents via API

---

## 📊 **Complete Production Workflow**

```mermaid
┌─────────────────┐
│   You Edit      │
│  Sanity Studio  │ → https://yourname.sanity.studio
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Sanity Cloud   │ → Stores your content
│    Database     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Your Website   │ → https://yourname.vercel.app
│   on Vercel     │    Fetches content automatically
└─────────────────┘
```

---

## 🔧 **Production Setup Checklist**

### **Before Deploying:**

- [ ] All environment variables in `.env.local`
- [ ] Code pushed to GitHub
- [ ] Test locally: `npm run build` (make sure it works)

### **Vercel Deployment:**

- [ ] Create Vercel account (free)
- [ ] Import GitHub repository
- [ ] Add environment variables on Vercel
- [ ] Deploy website
- [ ] Custom domain (optional)

### **Sanity Studio Deployment:**

- [ ] Run `npx sanity deploy`
- [ ] Choose a studio hostname
- [ ] Test studio login
- [ ] Add production content

### **Post-Deployment:**

- [ ] Test website on Vercel URL
- [ ] Add initial content via Sanity Studio
- [ ] Verify content appears on website
- [ ] Set up custom domain (optional)

---

## 🎯 **Quick Deployment Commands**

```bash
# 1. Build and test locally first
npm run build
npm start  # Test production build

# 2. Push to GitHub
git add .
git commit -m "Ready for production"
git push origin main

# 3. Deploy Sanity Studio
npx sanity deploy

# 4. Go to Vercel and deploy (web interface)
# https://vercel.com/new
```

---

## 🌐 **Custom Domain Setup (Optional)**

### **For Your Website:**
1. Go to Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., `yourname.com`)
4. Update DNS records as instructed

### **For Sanity Studio:**
1. Use subdomain: `studio.yourname.com`
2. Or use Sanity's default: `yourname.sanity.studio`

---

## 🔒 **Security Best Practices**

1. **Environment Variables:**
   - Never commit `.env.local` to GitHub
   - Add `.env.local` to `.gitignore` ✅ (already done)
   - Set variables in Vercel dashboard

2. **Sanity API Token:**
   - Keep your token secret
   - Use read-only token for public website
   - Use write token only for admin tasks

3. **CORS Settings:**
   - In Sanity dashboard, allow your Vercel domain
   - Go to: https://www.sanity.io/manage → API → CORS Origins

---

## 📈 **How Updates Work**

### **When You Update Code:**
```bash
git push origin main
```
→ Vercel **auto-deploys** new version (30 seconds)

### **When You Update Content:**
1. Edit in Sanity Studio
2. Click "Publish"
3. Website **updates immediately** (0-10 seconds)

---

## 🆘 **Troubleshooting**

**Q: Website shows "content not found"**
- A: Add content in Sanity Studio first
- Check environment variables are set on Vercel

**Q: Studio not loading**
- A: Run `npx sanity deploy` again
- Check CORS settings in Sanity dashboard

**Q: Content not updating**
- A: Clear browser cache
- Check you clicked "Publish" not just "Save"

**Q: Build failed on Vercel**
- A: Check build logs
- Make sure `npm run build` works locally first

---

## 🎉 **You're Done!**

After deployment:
- 🌐 **Website**: Live on Vercel
- 📝 **CMS**: Accessible via Sanity Studio
- 🔄 **Updates**: Real-time content updates
- 🚀 **Zero maintenance**: Both auto-scale

**Update content anytime, anywhere from your Sanity Studio!**

---

## 📚 **Useful Links**

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Sanity Dashboard**: https://www.sanity.io/manage
- **Your Project**: https://www.sanity.io/manage/personal/project/g7vofr5b
- **Sanity Docs**: https://www.sanity.io/docs

---

Need help deploying? Let me know! 🚀
