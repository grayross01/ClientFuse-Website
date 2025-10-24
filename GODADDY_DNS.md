# Add DNS Records in GoDaddy

## Step 1: Log into GoDaddy
1. Go to: https://www.godaddy.com
2. Sign in
3. Click "My Products" at the top

## Step 2: Find Your Domain
1. Scroll down to "Domains"
2. Find "clientfuse.io"
3. Click the **"DNS"** button (next to the domain)

## Step 3: Add DNS Records

You'll see a list of records. Look for Vercel's instructions and add these:

### For clientfuse.io (root domain):
- **Type:** A
- **Name:** @
- **Value:** (Vercel will give you an IP address, usually 76.76.21.21)
- **TTL:** 3600 (or leave default)

### For www.clientfuse.io:
- **Type:** CNAME
- **Name:** www
- **Value:** cname.vercel-dns.com
- **TTL:** 3600 (or leave default)

## Step 4: Save
Click "Save" on each record

## Step 5: Wait
DNS changes take 5-60 minutes to propagate

## What to Do Now:
1. Tell me what DNS records Vercel showed you
2. Or I can give you the exact values to add

**What does Vercel show you when you click "Edit" on clientfuse.io?**

