#!/bin/bash

echo "🚀 Deploying Your Portfolio..."
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Portfolio setup"
    echo "✅ Git initialized"
else
    echo "✅ Git repository already exists"
fi

# Build the project to check for errors
echo ""
echo "🔨 Testing production build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Fix errors before deploying."
    exit 1
fi

echo ""
echo "📤 Deploying Sanity Studio..."
npx sanity deploy

echo ""
echo "✅ Deployment Steps:"
echo ""
echo "1. ✅ Code is ready for GitHub"
echo "2. ✅ Sanity Studio deployed"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Push to GitHub:"
echo "   git remote add origin <your-github-repo-url>"
echo "   git push -u origin main"
echo ""
echo "2. Deploy to Vercel:"
echo "   - Go to https://vercel.com/new"
echo "   - Import your GitHub repository"
echo "   - Add environment variables (see DEPLOYMENT.md)"
echo "   - Click Deploy!"
echo ""
echo "3. Your Sanity Studio is live at the URL shown above"
echo ""
echo "📖 Read DEPLOYMENT.md for detailed instructions"
echo ""
echo "🎉 Happy deploying!"
