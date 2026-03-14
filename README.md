# Quill Language Website

This is the official Quill programming language website.
It's a static site that can be hosted for FREE on GitHub Pages.

## How to deploy to GitHub Pages (free hosting)

### Step 1 — Create a GitHub account
1. Go to https://github.com
2. Click "Sign Up" and create a free account

### Step 2 — Create a new repository
1. Click the "+" icon → "New repository"
2. Name it: `quill-lang.github.io` (or any name)
3. Set to **Public**
4. Click "Create repository"

### Step 3 — Upload the website files
1. On your new repo page, click "uploading an existing file"
2. Drag ALL files from the `website/` folder into the upload box
3. Click "Commit changes"

### Step 4 — Enable GitHub Pages
1. Go to your repo → Settings tab
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch, "/ (root)" folder
5. Click Save

### Step 5 — Your site is live!
After 1-2 minutes, your site will be at:
`https://YOUR-USERNAME.github.io/quill-lang.github.io/`

### Step 6 — Custom domain (optional, still free)
To use `quill-lang.org` or any domain:
1. Buy a domain at Namecheap (~$10/year) or Cloudflare (cheap)
2. In your domain registrar, add a CNAME record:
   - Name: `@` or `www`
   - Value: `YOUR-USERNAME.github.io`
3. In GitHub Pages settings, enter your custom domain
4. Check "Enforce HTTPS" (free SSL)
5. Update the `CNAME` file with your domain

### Updating the site
Just upload new files to the same GitHub repo — changes go live in ~1 minute.
