# ⚠️ IMPORTANT: Environment Variables for Vercel

## 🚨 Required Action Before Deploying

You **MUST** add these environment variables in Vercel for the build to succeed:

### **How to Add Environment Variables in Vercel:**

1. Go to your Vercel project dashboard
2. Click on **"Settings"**
3. Click on **"Environment Variables"** in the left sidebar
4. Add each of the following variables:

---

### **Environment Variables to Add:**

#### 1. **NEXT_PUBLIC_SANITY_PROJECT_ID**
```
Value: g7vofr5b
```
- Environment: Production, Preview, Development (check all three)

#### 2. **NEXT_PUBLIC_SANITY_DATASET**
```
Value: production
```
- Environment: Production, Preview, Development (check all three)

#### 3. **SANITY_API_TOKEN** (Optional but recommended for draft content)
```
Value: 
```
- Environment: Production, Preview, Development (check all three)

---

## 📸 **Step-by-Step Screenshot Guide:**

### Step 1: Access Settings
![Vercel Settings](https://vercel.com/docs/concepts/projects/environment-variables)

### Step 2: Add Variables
Click **"Add New"** for each variable above, then:
1. Enter the **Name** (e.g., `NEXT_PUBLIC_SANITY_PROJECT_ID`)
2. Enter the **Value** (e.g., `g7vofr5b`)
3. Select **all environments** (Production, Preview, Development)
4. Click **"Save"**

### Step 3: Redeploy
After adding all variables:
1. Go to **"Deployments"** tab
2. Click the **three dots** (•••) on the latest deployment
3. Click **"Redeploy"**
4. ✅ Build should now succeed!

---

## 🔍 **Why This Error Happened:**

The error you saw:
```
TypeError: Cannot destructure property 'auth' of 'a' as it is undefined.
```

This occurred because:
1. Vercel tried to build your site
2. The Sanity client tried to connect to Sanity
3. But the environment variables weren't set
4. So the Sanity client config was incomplete
5. Causing the build to fail

---

## ✅ **After Adding Variables:**

Once you add the environment variables and redeploy:
- ✅ Build will succeed
- ✅ Pages will fetch data from Sanity
- ✅ Your portfolio will be live!

---

## 🆘 **Still Having Issues?**

If the build still fails after adding env vars:
1. Make sure you saved all three variables
2. Make sure you selected **all environments** for each
3. Make sure you triggered a **redeploy** (not just a new push)
4. Check the build logs for any new error messages

---

## 📝 **Quick Copy-Paste:**

For your convenience, here are all three variables ready to copy:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=g7vofr5b
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skd75CXhQ8VwpE1MxUCcxkWPsnET3DWqdSI6BHJwAQIp0rSzgwmdnjVZ8QvqqAPaeIh94CIgLk6pzxE3cHPQ6MEfiJpD8vvbYwBUvPt7qGfjTDDEOkbyjOSKKKIGYpElmt0b4MGcxfcpURDZYnL00o4H0TQQi1ODdyqPanwtBxyMWmFQWyYD
```

---

**After following these steps, your deployment will succeed!** 🎉
