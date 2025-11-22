# Sanity CMS Setup Guide

Your website is now configured to use Sanity CMS! Here's how to set up your content.

## ✅ What's Already Done

- ✅ Sanity client configured in `/src/lib/sanityClient.ts`
- ✅ Environment variables set in `.env.local`
- ✅ All pages updated to fetch data from Sanity
- ✅ Mock data removed (no longer used)

## 🚀 Step-by-Step: Adding Content to Sanity

### **Option 1: Use Sanity Studio (Recommended)**

1. **Create a Sanity Studio in Your Project**
   ```bash
   npm install -D sanity @sanity/vision
   npx sanity init --project g7vofr5b --dataset production
   ```

2. **Create Schema Files**

   Create a folder: `sanity/schemas/`
   
   Then create these schema files:

   **`sanity/schemas/about.ts`:**
   ```typescript
   export default {
     name: 'about',
     title: 'About',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Title',
         type: 'string',
       },
       {
         name: 'bio',
         title: 'Bio',
         type: 'text',
       },
       {
         name: 'profile_photo',
         title: 'Profile Photo',
         type: 'url',
       },
       {
         name: 'cv_url',
         title: 'CV URL',
         type: 'url',
       },
     ],
   }
   ```

   **`sanity/schemas/experience.ts`:**
   ```typescript
   export default {
     name: 'experience',
     title: 'Experience',
     type: 'document',
     fields: [
       {
         name: 'job_title',
         title: 'Job Title',
         type: 'string',
       },
       {
         name: 'company',
         title: 'Company',
         type: 'string',
       },
       {
         name: 'start_date',
         title: 'Start Date',
         type: 'string',
       },
       {
         name: 'end_date',
         title: 'End Date (or null for Present)',
         type: 'string',
       },
       {
         name: 'description',
         title: 'Description',
         type: 'text',
       },
       {
         name: 'achievements',
         title: 'Achievements',
         type: 'array',
         of: [{type: 'string'}],
       },
       {
         name: 'logo',
         title: 'Company Logo',
         type: 'url',
       },
     ],
   }
   ```

   **`sanity/schemas/education.ts`:**
   ```typescript
   export default {
     name: 'education',
     title: 'Education',
     type: 'document',
     fields: [
       {
         name: 'degree',
         title: 'Degree',
         type: 'string',
       },
       {
         name: 'university',
         title: 'University',
         type: 'string',
       },
       {
         name: 'start_date',
         title: 'Start Date',
         type: 'string',
       },
       {
         name: 'end_date',
         title: 'End Date',
         type: 'string',
       },
       {
         name: 'description',
         title: 'Description',
         type: 'text',
       },
       {
         name: 'logo',
         title: 'University Logo',
         type: 'url',
       },
     ],
   }
   ```

   **`sanity/schemas/project.ts`:**
   ```typescript
   export default {
     name: 'project',
     title: 'Project',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Title',
         type: 'string',
       },
       {
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
           source: 'title',
           maxLength: 96,
         },
       },
       {
         name: 'short_summary',
         title: 'Short Summary',
         type: 'string',
       },
       {
         name: 'description',
         title: 'Description',
         type: 'text',
       },
       {
         name: 'project_url',
         title: 'Project URL',
         type: 'url',
       },
       {
         name: 'tech_stack',
         title: 'Tech Stack',
         type: 'array',
         of: [{type: 'string'}],
       },
       {
         name: 'images',
         title: 'Images',
         type: 'array',
         of: [{type: 'url'}],
       },
       {
         name: 'video_url',
         title: 'Video URL',
         type: 'url',
       },
       {
         name: 'featured',
         title: 'Featured',
         type: 'boolean',
       },
     ],
   }
   ```

   **`sanity/schemas/service.ts`:**
   ```typescript
   export default {
     name: 'service',
     title: 'Service',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Title',
         type: 'string',
       },
       {
         name: 'tagline',
         title: 'Tagline',
         type: 'string',
       },
       {
         name: 'description',
         title: 'Description',
         type: 'text',
       },
       {
         name: 'icon',
         title: 'Icon (Lucide Icon Name)',
         type: 'string',
       },
       {
         name: 'price_range',
         title: 'Price Range',
         type: 'string',
       },
     ],
   }
   ```

3. **Start Sanity Studio**
   ```bash
   npx sanity dev
   ```
   
   This will open Sanity Studio at `http://localhost:3333`

4. **Add Your Content**
   - Go to `http://localhost:3333`
   - Click on each document type (About, Experience, Education, etc.)
   - Add your content through the visual editor

---

### **Option 2: Use Sanity Management UI (Easier)**

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project: **g7vofr5b**
3. Click **"Vision"** or **"Datasets"**
4. Use the GraphQL or GROQ playground to create documents

---

### **Option 3: API Import (For Bulk Data)**

Create a script to import data via the Sanity API:

```javascript
// scripts/import-data.js
const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: 'g7vofr5b',
  dataset: 'production',
  useCdn: false,
  token: 'YOUR_WRITE_TOKEN',
  apiVersion: '2024-01-01',
})

// Import about page
client.create({
  _type: 'about',
  title: "Hi, I'm Alex Doe",
  bio: "I am a **Full Stack Developer**...",
  profile_photo: "https://your-image-url.com/photo.jpg",
  cv_url: "https://your-cv-url.com/cv.pdf"
}).then(console.log)
```

Run: `node scripts/import-data.js`

---

## 📊 Data Structure Summary

### About (Single Document)
- title (string)
- bio (text/markdown)
- profile_photo (URL)
- cv_url (URL)

### Experience (Multiple Documents)
- job_title (string)
- company (string)
- start_date (string, e.g., "2022-01-01")
- end_date (string or null for "Present")
- description (text/markdown)
- achievements (array of strings)
- logo (URL)

### Education (Multiple Documents)
- degree (string)
- university (string)
- start_date (string)
- end_date (string)
- description (text/markdown)
- logo (URL)

### Project (Multiple Documents)
- title (string)
- slug (slug object: `{current: "project-name"}`)
- short_summary (string)
- description (text/markdown)
- project_url (URL)
- tech_stack (array of strings)
- images (array of URLs)
- video_url (URL, optional)
- featured (boolean)

### Service (Multiple Documents)
- title (string)
- tagline (string)
- description (text/markdown)
- icon (string - Lucide icon name like "Code", "PenTool")
- price_range (string, e.g., "$1000 - $5000")

---

## 🔧 Testing Your Setup

1. Start your Next.js dev server:
   ```bash
   npm run dev
   ```

2. Visit each page:
   - http://localhost:3000 (Home)
   - http://localhost:3000/about
   - http://localhost:3000/experience
   - http://localhost:3000/education
   - http://localhost:3000/projects
   - http://localhost:3000/services
   - http://localhost:3000/contact

3. If you see "content not found" messages, it means you need to add data to Sanity

---

## 🎯 Quick Start Checklist

- [ ] Run `npx sanity init` in your project
- [ ] Create schema files in `sanity/schemas/`
- [ ] Start Sanity Studio with `npx sanity dev`
- [ ] Add content in Sanity Studio (http://localhost:3333)
- [ ] Refresh your website to see the data!

---

## 🆘 Troubleshooting

**Q: I see "content not found" on pages**
A: You need to add content in Sanity Studio first

**Q: Images not loading**
A: Make sure you use full URLs for images (starting with https://)

**Q: How do I update my API token?**
A: Go to [https://www.sanity.io/manage](https://www.sanity.io/manage) → Your Project → API → Tokens

---

Need help? Check the [Sanity Docs](https://www.sanity.io/docs) or ask me!
