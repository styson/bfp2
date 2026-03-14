# AWS Amplify Deployment Guide

Your site is configured for automatic deployment to AWS Amplify via GitHub integration.

## 🚀 How It Works

Every time you push to your GitHub repository, AWS Amplify will automatically:
1. Detect the changes
2. Pull the latest code
3. Run `npm ci` to install dependencies
4. Run `npm run build` to create production build
5. Deploy to your Amplify hosting environment
6. Make it live at your Amplify URL

## ⚙️ Configuration

The `amplify.yml` file in your project root configures the build process and includes:
- Security headers (X-Frame-Options, CSP, etc.)
- Caching strategies for optimal performance
- Build commands and artifact locations

## 🔧 Initial AWS Amplify Setup

If you haven't connected to Amplify yet:

### 1. Connect Repository

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Select "GitHub" as your repository service
4. Authorize AWS Amplify to access your GitHub account
5. Select your repository and branch (typically `main`)

### 2. Configure Build Settings

Amplify will auto-detect your `amplify.yml` file. Verify these settings:

- **Build command:** `npm run build` (from amplify.yml)
- **Base directory:** (leave empty)
- **Artifact directory:** `dist` (from amplify.yml)

### 3. Add Environment Variables

In the Amplify Console, go to:
**App settings → Environment variables → Manage variables**

Add these required variables:

```
VITE_SUPABASE_URL = https://iugmaydqyozdgyiziels.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Optional variables for production:
```
VITE_PAYPAL_CLIENT_ID = your_production_paypal_client_id
VITE_GA_TRACKING_ID = your_google_analytics_id
VITE_SENTRY_DSN = your_sentry_dsn
```

**Important:** Click "Save" after adding variables.

### 4. Deploy

Click "Save and deploy" - your first deployment will begin!

Build typically takes 3-5 minutes for the first deployment.

## 📋 Pre-Deployment Checklist

### Critical Actions:

- [ ] **Move `src/files/` to `public/files/`** (REQUIRED for performance)
  ```bash
  move src\files\* public\files\
  rmdir src\files
  ```
  Then update all code references from imports to paths: `/files/filename.pdf`

- [ ] Environment variables added in Amplify Console
- [ ] Test local build: `npm run build` (should complete successfully)
- [ ] Update `public/sitemap.xml` with your real Amplify domain
- [ ] Update `public/robots.txt` with your real Amplify domain
- [ ] Update Open Graph meta tags in `index.html` with real URLs

### Database:

- [ ] Verify Supabase RLS policies are enabled
- [ ] Enable automated backups in Supabase dashboard
- [ ] Add database indexes for performance (see DEPLOYMENT.md)

### Content:

- [ ] All product data loaded in production database
- [ ] Verify all images are accessible
- [ ] Test PayPal integration (use sandbox first!)

## 🔄 Continuous Deployment Workflow

Once connected, your workflow is simple:

```bash
# Make changes to your code
git add .
git commit -m "Your changes"
git push origin main
```

AWS Amplify will automatically:
1. Detect the push
2. Start a new build
3. Deploy when successful
4. Send you notifications (if configured)

## 📊 Monitoring Deployments

### In Amplify Console:

1. **Build History:** See all deployments, their status, and logs
2. **Build Logs:** Click any deployment to see detailed build output
3. **Access Logs:** Monitor traffic and errors
4. **Performance Metrics:** CloudWatch integration

### Key URLs:

- **Amplify Console:** https://console.aws.amazon.com/amplify
- **Your App URL:** Will be `https://[branch].[app-id].amplifyapp.com`

## 🛠️ Amplify-Specific Features

### Branch Deployments

Amplify can deploy different branches:
- `main` → Production (e.g., `https://main.d111111.amplifyapp.com`)
- `develop` → Staging (e.g., `https://develop.d111111.amplifyapp.com`)
- Feature branches → Preview deployments

Configure in: **App settings → General → Branches**

### Custom Domain

To use your own domain (e.g., `www.boundingfire.com`):

1. Go to **App settings → Domain management**
2. Click "Add domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (automatic)

### Redirects and Rewrites

Already configured in `amplify.yml` for SPA routing. All routes redirect to `index.html` for client-side routing.

### Performance Features (Built-in)

- ✅ CDN distribution (CloudFront)
- ✅ Automatic HTTPS
- ✅ HTTP/2 support
- ✅ Brotli compression
- ✅ Cache-Control headers (configured in amplify.yml)

## 🚨 Troubleshooting

### Build Fails

**Check Build Logs:**
1. Go to Amplify Console
2. Click the failed build
3. Review "Provision," "Build," and "Deploy" logs

**Common Issues:**

**"npm ci: command not found"**
- Amplify uses Node.js v20 by default (specified in amplify.yml)
- Verify package-lock.json is committed

**"Build timed out"**
- Default timeout is 30 minutes
- If exceeded, optimize build process or contact AWS support

**Environment variables not found:**
- Verify variables are added in Amplify Console
- Restart build after adding variables

### Deployment Succeeds but Site Broken

**Check Browser Console:**
- Look for CORS errors
- Verify API endpoints are correct
- Check environment variables are set

**Images not loading:**
- Ensure files are in `public/` directory
- Check file paths (case-sensitive)
- Verify CloudFront cache cleared (automatic on new deploy)

**Supabase connection fails:**
- Verify environment variables are correct
- Check Supabase dashboard for service status
- Review RLS policies

### Performance Issues

**Large initial bundle:**
- Ensure `src/files/` moved to `public/files/`
- Check bundle analyzer in build logs
- Consider code splitting or lazy loading

**Slow image loading:**
- Optimize large images (see DEPLOYMENT.md)
- Consider using CloudFront image optimization
- Add responsive images with `srcset`

## 🔐 Security Best Practices

### Environment Variables

✅ **Do:**
- Store all secrets in Amplify environment variables
- Use different values for different branches
- Rotate keys regularly

❌ **Don't:**
- Commit `.env.local` to repository
- Expose server secrets in VITE_ variables
- Use development credentials in production

### Supabase Security

1. **Enable RLS on all tables:**
   ```sql
   ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;
   ```

2. **Review access policies regularly**
3. **Monitor for suspicious activity**
4. **Enable MFA for admin accounts**

### Amplify-Specific

- Enable access logs for audit trail
- Use CloudWatch alarms for monitoring
- Configure AWS WAF for DDoS protection (optional)
- Review IAM permissions regularly

## 📈 Performance Optimization

### Amplify Performance Features

**Already Enabled:**
- Global CDN via CloudFront
- Automatic compression
- SSL/TLS optimization

**Additional Optimizations:**

1. **Amplify Image Optimization:**
   - Consider using Amplify's image CDN
   - Automatic format conversion and resizing

2. **CloudFront Settings:**
   - Cache behavior configured in amplify.yml
   - Monitor cache hit ratio
   - Use query string caching if needed

3. **Build Performance:**
   - Dependencies cached between builds
   - Use `npm ci` for faster installs
   - Incremental builds when possible

## 📊 Monitoring & Analytics

### Built-in Amplify Monitoring

- **Metrics:** Request count, data transfer, errors
- **Access Logs:** Track every request
- **CloudWatch Integration:** Custom metrics and alarms

### Add Google Analytics

Already documented in DEPLOYMENT.md. Quick setup:

```bash
npm install react-ga4
```

Add to `src/main.tsx`:
```typescript
import ReactGA from 'react-ga4';
if (import.meta.env.PROD) {
  ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
}
```

### Error Tracking with Sentry

See DEPLOYMENT.md for complete Sentry setup instructions.

## 💰 Cost Considerations

### Amplify Pricing (as of 2026)

**Free Tier (12 months):**
- 1000 build minutes/month
- 15 GB storage
- 15 GB data transfer

**Beyond Free Tier:**
- Build: $0.01/minute
- Storage: $0.023/GB/month
- Data transfer: $0.15/GB

**Estimate for Your Site:**
- ~3 min build × 30 deploys/month = 90 minutes (within free tier)
- ~14 MB site × 15 GB = well within storage
- Data transfer depends on traffic

### Cost Optimization

1. **Reduce build frequency:**
   - Batch changes before pushing
   - Use feature branches for development

2. **Optimize assets:**
   - Compress images
   - Use proper caching
   - Minimize bundle size

3. **Monitor usage:**
   - Check Amplify Console billing dashboard
   - Set up cost alerts in AWS Billing

## 🎯 Post-Deployment Tasks

### Immediate (First 24 Hours)

1. **Test Critical Flows:**
   - [ ] Browse products
   - [ ] Add items to cart
   - [ ] Complete test purchase
   - [ ] User registration/login
   - [ ] Download files

2. **Verify Monitoring:**
   - [ ] Check Amplify access logs
   - [ ] Review Supabase logs
   - [ ] Test error tracking
   - [ ] Verify analytics

3. **Performance Check:**
   - [ ] Run Lighthouse audit
   - [ ] Test on mobile devices
   - [ ] Check Core Web Vitals
   - [ ] Monitor CloudFront cache hit ratio

### First Week

1. **Monitor & Optimize:**
   - Review error logs daily
   - Track user behavior
   - Optimize slow queries
   - Fix critical bugs

2. **SEO:**
   - Submit sitemap to Google Search Console
   - Submit to Bing Webmaster Tools
   - Verify Open Graph tags
   - Check mobile-friendliness

3. **Marketing:**
   - Update social media links
   - Send announcement email
   - Update any external links

### Ongoing

- **Weekly:** Review error logs and performance metrics
- **Monthly:** Analyze user behavior and conversion rates
- **Quarterly:** Update dependencies, security audit
- **Annually:** Review costs and optimize infrastructure

## 🆘 Support Resources

### AWS Amplify

- **Documentation:** https://docs.amplify.aws/
- **Support:** AWS Support Console
- **Community:** https://github.com/aws-amplify/amplify-hosting

### Your Project

- **Full Deployment Guide:** `DEPLOYMENT.md`
- **Quick Start:** `QUICK-START-DEPLOYMENT.md`
- **Supabase Docs:** https://supabase.com/docs

## 🔄 Rollback Procedure

If a deployment breaks your site:

### Option 1: Redeploy Previous Version (Fastest)

1. Go to Amplify Console
2. Click "Deployments"
3. Find the last working deployment
4. Click "Redeploy this version"

### Option 2: Git Revert

```bash
# Find the last good commit
git log

# Revert to that commit
git revert HEAD
git push origin main

# Amplify will auto-deploy the reverted version
```

### Option 3: Git Reset (Nuclear Option)

```bash
# Reset to specific commit
git reset --hard <commit-hash>
git push origin main --force

# ⚠️ Use with caution - rewrites history
```

## ✅ Success Checklist

Your site is production-ready when:

- [x] `amplify.yml` configured (✅ Done)
- [x] Production build successful (✅ Tested)
- [x] Vite config optimized (✅ Done)
- [ ] Environment variables set in Amplify
- [ ] `src/files/` moved to `public/files/`
- [ ] Supabase RLS policies enabled
- [ ] Custom domain configured (if needed)
- [ ] All tests pass
- [ ] PayPal production credentials set
- [ ] Monitoring configured
- [ ] Backup strategy in place

---

## 🚀 Ready to Deploy!

Once you've completed the checklist:

```bash
git add .
git commit -m "Production ready for Amplify"
git push origin main
```

Watch your deployment in the Amplify Console!

**Your site will be live at:** `https://[branch].[app-id].amplifyapp.com`

Good luck! 🎉