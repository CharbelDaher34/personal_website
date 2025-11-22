# 🚀 Quick Start - Add Your Content in 2 Steps!

Everything is set up! Just follow these 2 simple steps:

## Step 1: Start Sanity Studio

Open a **new terminal** and run:

```bash
npm run studio
```

This will open Sanity Studio at: **http://localhost:3333**

## Step 2: Add Your Content

1. Go to **http://localhost:3333** in your browser
2. You'll see a visual editor with these sections:
   - 📄 **About** - Add your bio and profile
   - 💼 **Work Experience** - Add your jobs
   - 🎓 **Education** - Add your degrees
   - 🚀 **Projects** - Add your portfolio projects
   - 💡 **Services** - Add services you offer

3. Click on any section and fill in your information
4. Click **Publish** after adding content

## That's It! 🎉

Your website at **http://localhost:3000** will automatically show the content you add in Sanity Studio!

---

## 📋 Quick Tips

### For Projects:
- After entering the title, click "Generate" next to "Slug" to create the URL
- Mark projects as "Featured" to show them on the homepage
- Add multiple image URLs separated by commas

### For Images:
- Use full URLs like: `https://images.unsplash.com/photo-xxxxx`
- Or upload images to a hosting service (Cloudinary, Imgur, etc.)

### For Icons (Services):
- Use Lucide icon names: `Code`, `PenTool`, `MessageSquare`, `Palette`, `Laptop`
- See all icons: https://lucide.dev/icons/

---

## 🆘 Need Help?

**Q: Sanity Studio won't start**
```bash
# Make sure nothing is running on port 3333, then:
npm run studio
```

**Q: Changes not showing on website**
- Make sure you clicked "Publish" in Sanity Studio
- Refresh your browser at localhost:3000

**Q: Want to run both at once?**
```bash
# Terminal 1:
npm run dev

# Terminal 2:  
npm run studio
```

---

## 🎨 You're All Set!

1. **Add content** → http://localhost:3333 (Sanity Studio)
2. **View website** → http://localhost:3000 (Your Portfolio)

Enjoy building your portfolio! 🎉
