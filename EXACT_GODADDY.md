# Exact Steps for GoDaddy

## You're on the WRONG tab!

You're currently on "DS Records" tab. You need to click "DNS Records" tab instead.

## Do This:

1. Look at the tabs at the top:
   - DNS Records ← CLICK THIS ONE!
   - Forwarding
   - Nameservers
   - Hostnames
   - DS Records (you're here now)

2. Click "DNS Records" tab

3. Click the "Add" button

4. Fill in:
   - **Type:** Select "A" from dropdown
   - **Name:** Type `@`
   - **Value:** Type `216.198.79.1`
   - **TTL:** Leave as default (3600)

5. Click "Save"

6. Then do the same for www:
   - Click "Add" again
   - **Type:** Select "CNAME" from dropdown
   - **Name:** Type `www`
   - **Value:** Type `cname.vercel-dns.com`
   - **TTL:** Leave as default

7. Click "Save"

Done! Wait 5-60 minutes for DNS to propagate.

