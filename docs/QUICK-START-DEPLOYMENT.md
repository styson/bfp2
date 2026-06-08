# Quick Start Deployment Guide

This is a condensed version of DEPLOYMENT.md for rapid deployment. For full details, see DEPLOYMENT.md.

## 🚨 Critical Actions Before Deployment

### 1. Move Large Files to Public Directory

**IMPORTANT:** Your `src/files/` directory contains 150+ MB of PDFs and ZIP files that are currently being bundled. This will make your initial page load extremely slow.

**Action Required NOW:**

```bash
# Create public/files directory if it doesn't exist
mkdir -p public/files

# Move all files from src/files to public/files
# On Windows:
move src\files\* public\files\

# Then delete the empty src/files directory
rmdir src\files
```

**Update all file references in your code:**

Search for imports like:
```typescript
import pdfFile from '../files/something.pdf'
```

Replace with:
```typescript
const pdfFile = '/files/something.pdf'
```

### 2. Verify Environment Variables

Your `.env.local` contains sensitive credentials. **NEVER commit this file to git** (it's already in .gitignore).

When deploying, add these environment variables in your hosting platform:

```
VITE_SUPABASE_URL=https://iugmaydqyozdgyiziels.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 📦 Deploy to Netlify (Recommended)

### Quick Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Add Environment Variables:**
   - Site Settings → Environment Variables
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

4. **Deploy:**
   - Click "Deploy site"
   - Wait 2-3 minutes
   - Your site is live!

The `netlify.toml` file in your project root is already configured with all necessary settings.

## 📦 Alternative: Deploy to Vercel

1. **Push to GitHub** (same as above)

2. **Connect to Vercel:**
   - Go to https://vercel.com
   - Click "Import Project"
   - Connect your GitHub repository
   - Framework preset: Vite (auto-detected)

3. **Add Environment Variables:**
   - Settings → Environment Variables
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

4. **Deploy:**
   - Click "Deploy"
   - Your site is live!

The `vercel.json` file is already configured.

## ✅ Pre-Deployment Checklist

### Must Do:
- [ ] Move files from `src/files/` to `public/files/` and update references
- [ ] Test build locally: `npm run build`
- [ ] Verify no errors in console
- [ ] Test PayPal integration with production credentials
- [ ] Update `public/sitemap.xml` with your real domain
- [ ] Update `public/robots.txt` with your real domain
- [ ] Update Open Graph meta tags in `index.html` with real URLs

### Database:
- [ ] Verify Supabase RLS policies are enabled
- [ ] Enable automated backups in Supabase dashboard
- [ ] Test database connections in production

### Should Do:
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Verify all images load correctly
- [ ] Test cart functionality
- [ ] Test user registration/login

## 🔍 Testing Production Build Locally

Before deploying, test the production build:

```bash
# Build the project
npm run build

# Preview the production build
npx vite preview

# Open http://localhost:4173 in your browser
```

## 📊 Current Build Stats

Your latest build (successful):
- Main bundle: 586.59 kB (160.48 kB gzipped)
- Total assets: ~14 MB (includes large images)
- Build time: 43 seconds

**⚠️ Performance Note:** Some of your product images are very large:
- `corregidor.gif`: 2.4 MB
- Several images over 1 MB

Consider optimizing these images:
```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize images (example)
sharp -i public/images/large-image.png -o public/images/large-image-optimized.png --webp
```

## 🚀 After Deployment

1. **Update DNS (if using custom domain):**
   - Add CNAME or A record pointing to your hosting provider
   - Enable HTTPS (automatic on Netlify/Vercel)

2. **Test Critical Paths:**
   - Browse products
   - Add to cart
   - Complete a test purchase (use PayPal sandbox first!)
   - Test user registration

3. **Monitor:**
   - Check Supabase logs for errors
   - Monitor site performance
   - Watch for user feedback

4. **Submit to Search Engines:**
   ```
   Google: https://search.google.com/search-console
   Bing: https://www.bing.com/webmasters
   ```

## 🆘 Troubleshooting

### Build Fails

**Error: "Cannot find module 'path'"**
Solution: Already fixed in vite.config.ts

**Large bundle warnings:**
Solution: Already configured to split chunks, but consider lazy loading more components

### Runtime Errors

**PayPal not loading:**
- Verify PayPal production client ID is set
- Check browser console for errors
- Ensure CSP headers allow PayPal domains

**Supabase connection fails:**
- Verify environment variables are set correctly
- Check RLS policies are not blocking legitimate requests
- Review Supabase logs for authentication errors

**Images not loading:**
- Verify all images are in `public/` directory
- Check file paths (use `/images/file.png` not `./images/file.png`)
- Ensure file names match exactly (case-sensitive)

### Rollback

If something goes wrong:
- Netlify/Vercel: Go to Deployments → Previous deployment → "Publish deploy"
- Database: Restore from Supabase backup (Settings → Backups)

## 📚 Additional Resources

- Full deployment guide: `DEPLOYMENT.md`
- Vite deployment docs: https://vitejs.dev/guide/build.html
- Netlify docs: https://docs.netlify.com/
- Vercel docs: https://vercel.com/docs

## 🎯 Next Steps After Going Live

1. **Week 1:**
   - Monitor error logs daily
   - Fix critical bugs immediately
   - Gather user feedback

2. **Month 1:**
   - Analyze user behavior with analytics
   - Optimize conversion funnel
   - A/B test key pages

3. **Ongoing:**
   - Keep dependencies updated
   - Regular security audits
   - Performance monitoring

---

**Ready to deploy?** Make sure you've completed the "Must Do" checklist above, then follow the Netlify or Vercel steps!

Good luck! 🚀