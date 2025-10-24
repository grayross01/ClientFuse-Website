#!/bin/bash

echo "🚀 Pushing ClientFuse Website to GitHub..."
echo ""

# Switch back to HTTPS
git remote set-url origin https://github.com/grayross01/ClientFuse-Website.git

# Try to push
echo "Attempting to push..."
git push -u origin main

echo ""
echo "✅ Done! Check the output above for success or any errors."
echo ""
echo "If you got authentication errors, you may need to:"
echo "1. Create a Personal Access Token at: https://github.com/settings/tokens"
echo "2. Use it as your password when prompted"
echo ""
echo "Or run manually:"
echo "  git push -u origin main"


