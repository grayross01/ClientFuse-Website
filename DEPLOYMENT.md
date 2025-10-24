# Deployment Guide for ClientFuse Website

## Quick Answer: GitHub Auto-Updates

**No, changes won't automatically push to GitHub.** You need to manually commit and push your changes.

## How to Connect to GitHub and Enable Auto-Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `clientfuse-website` or `clientfuse-marketing`
3. Don't initialize it with a README (since we already have one)

### Step 2: Connect Your Local Repository

```bash
# Add the remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push your code
git branch -M main
git push -u origin main
```

### Step 3: Enable Auto-Deployment

#### Option A: Vercel (Recommended - FREE)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**Benefits:**
- ✅ Every push to GitHub automatically deploys
- ✅ Custom domain support
- ✅ SSL certificates included
- ✅ Preview deployments for every branch
- ✅ FREE tier is generous

#### Option B: Netlify (Also FREE)

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click "Deploy site"

**Benefits:**
- ✅ Auto-deploys on every push
- ✅ Custom domain support
- ✅ FREE tier available

#### Option C: GitHub Pages (FREE but requires static export)

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "export": "next export",
     "deploy": "npm run build && npm run export && gh-pages -d out"
   }
   ```

3. Update `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     reactStrictMode: true,
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Step 4: Future Updates

Once connected, you just need to:

```bash
# Make your changes to files
# Then commit and push:
git add .
git commit -m "Your commit message"
git push
```

**With Vercel/Netlify:** Your site will automatically rebuild and deploy!
**With GitHub Pages:** Run `npm run deploy` after each change.

## Local Development

```bash
# Install dependencies (first time only)
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Git Issues
```bash
# Check your remote
git remote -v

# If wrong, remove and re-add
git remote remove origin
git remote add origin YOUR_REPO_URL
```

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

