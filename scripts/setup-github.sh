#!/bin/bash

# ClientFuse Website - GitHub Setup Script
# This script helps you connect your local repository to GitHub

echo "🚀 ClientFuse Website - GitHub Setup"
echo "======================================"
echo ""

# Check if GitHub username and repo name are provided
if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: ./scripts/setup-github.sh YOUR_GITHUB_USERNAME REPO_NAME"
    echo ""
    echo "Example: ./scripts/setup-github.sh johnsmith clientfuse-website"
    echo ""
    echo "To create a GitHub repository:"
    echo "1. Go to https://github.com/new"
    echo "2. Name your repository (e.g., 'clientfuse-website')"
    echo "3. Don't initialize with README (we already have one)"
    echo "4. Click 'Create repository'"
    echo "5. Then run this script with your username and repo name"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME=$2

echo "📦 Adding GitHub remote..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

echo "🔄 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Success! Your code is now on GitHub."
echo ""
echo "🎯 Next Steps:"
echo "1. Go to https://vercel.com (recommended) or https://netlify.com"
echo "2. Sign up/login with your GitHub account"
echo "3. Click 'Add New Project' and import your repository"
echo "4. Your site will auto-deploy and update on every push!"
echo ""
echo "🌐 Your GitHub URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"

