# Push to GitHub - Manual Steps

Your code is ready! Just run these commands:

## Commands to Run

```bash
# Add the remote (if not already added)
git remote add origin https://github.com/grayross01/ClientFuse-Website.git

# Push to GitHub
git push -u origin main
```

If you're asked for credentials:
- **Username:** Your GitHub username
- **Password:** Use a Personal Access Token (not your GitHub password)

## Get a Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "ClientFuse Website"
4. Check: `repo` (all repository permissions)
5. Click "Generate token"
6. Copy the token and use it as your password

---

## After Pushing, Deploy to Vercel

1. Go to: https://vercel.com
2. Sign up/login with GitHub
3. Click "Add New Project"
4. Select: `grayross01/ClientFuse-Website`
5. Click "Deploy"

**Your site will auto-update on every push after this!**

