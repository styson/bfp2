# Production Deployment Guide

This guide covers everything needed to deploy the Bounding Fire Productions e-commerce site to production.

## Table of Contents
1. [Environment Variables & Secrets](#environment-variables--secrets)
2. [Build Optimization](#build-optimization)
3. [Security Configuration](#security-configuration)
4. [Database Setup](#database-setup)
5. [Hosting Options](#hosting-options)
6. [CI/CD Pipeline](#cicd-pipeline)
7. [Monitoring & Error Tracking](#monitoring--error-tracking)
8. [Performance Optimization](#performance-optimization)
9. [SEO & Meta Tags](#seo--meta-tags)
10. [Pre-Deployment Checklist](#pre-deployment-checklist)

---

## Environment Variables & Secrets

### ⚠️ CRITICAL: Secure Your Environment Variables

**DO NOT commit `.env.local` to git** - it contains sensitive credentials.

### Production Environment Variables

Create these environment variables in your hosting platform (Netlify, Vercel, etc.):

```bash
VITE_SUPABASE_URL=https://iugmaydqyozdgyiziels.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Additional variables you may need:
```bash
# PayPal Configuration (if using server-side)
VITE_PAYPAL_CLIENT_ID=your_production_paypal_client_id

# Analytics (optional)
VITE_GA_TRACKING_ID=your_google_analytics_id

# Error Tracking (optional)
VITE_SENTRY_DSN=your_sentry_dsn
```

### Environment Configuration Best Practices

1. **Never expose server secrets in VITE_ variables** - they are embedded in the client bundle
2. **Use Supabase Row Level Security (RLS)** to protect data even if anon key is exposed
3. **Rotate keys regularly** and have a plan for emergency rotation
4. **Use different Supabase projects** for development, staging, and production

---

## Build Optimization

### 1. Update `vite.config.ts` for Production

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  // Build optimization
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable for production, enable for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material'],
          'supabase': ['@supabase/supabase-js'],
          'paypal': ['@paypal/react-paypal-js'],
        }
      }
    },
    // Increase chunk size warning limit if needed
    chunkSizeWarningLimit: 1000,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },

  // Path aliases for cleaner imports (optional)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})
```

### 2. Optimize Assets

**Large Files in `src/files/`:**
- Your `src/files/` directory contains many PDFs and ZIP files
- These should NOT be in `src/` as they'll be included in the bundle
- Move them to `public/files/` instead
- Update all references in your code

**Action Required:**
```bash
# Move files to public directory
mkdir -p public/files
mv src/files/* public/files/

# Update all imports/references from:
import fileUrl from './files/something.pdf'
# To:
const fileUrl = '/files/something.pdf'
```

### 3. Image Optimization

**Current images in `public/images/`:**
- Consider using WebP format for better compression
- Add responsive images with different sizes
- Implement lazy loading for images below the fold

**Recommended tools:**
- Use `sharp` or `imagemin` to optimize images before deployment
- Consider using a CDN for image delivery

### 4. Code Splitting

Your app already has route-based splitting with React Router. Consider additional lazy loading:

```typescript
// Example: Lazy load heavy components
const ProductModal = lazy(() => import('./components/products/ProductModal'));
const CartDrawer = lazy(() => import('./components/cart/CartDrawer'));
```

---

## Security Configuration

### 1. HTTP Security Headers

Configure these headers in your hosting platform or via `_headers` file (for Netlify/Vercel):

```
/*
  # Security Headers
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  
  # Content Security Policy (adjust as needed)
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.paypal.com https://www.paypalobjects.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://iugmaydqyozdgyiziels.supabase.co https://www.paypal.com; frame-src https://www.paypal.com;

  # HSTS (enable after testing)
  # Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### 2. Supabase Security

**Row Level Security (RLS) Policies:**

Ensure all tables have RLS enabled:

```sql
-- Example for cart_items table
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

-- Users can only access their own cart
CREATE POLICY "Users can view their own cart items"
  ON cart_items FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own cart items"
  ON cart_items FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cart items"
  ON cart_items FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cart items"
  ON cart_items FOR DELETE
  USING (auth.uid() = user_id);
```

**Review all RLS policies in `supabase/migrations/001_schema.sql`**

### 3. Input Validation

- Validate all user inputs on both client and server
- Sanitize data before storing in database
- Use parameterized queries (Supabase client does this automatically)

### 4. Authentication

- Enable email confirmation for new accounts
- Configure password requirements in Supabase
- Set up rate limiting for auth endpoints
- Consider enabling 2FA (if Supabase plan supports it)

---

## Database Setup

### 1. Run Migrations on Production Supabase

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Link to your production project
supabase link --project-ref iugmaydqyozdgyiziels

# Run migrations
supabase db push
```

### 2. Database Backups

- Enable automated backups in Supabase dashboard
- Schedule: Daily backups, retain for 30 days minimum
- Test restore process before going live

### 3. Performance

**Add indexes for frequently queried columns:**

```sql
-- Add indexes if not already present
CREATE INDEX IF NOT EXISTS idx_cart_items_user_id ON cart_items(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
```

### 4. Data Seeding

- Ensure all products are properly loaded in production database
- Verify product images are accessible
- Test all product data, prices, and inventory

---

## Hosting Options

### Recommended Platform: Netlify or Vercel

Both are excellent for React/Vite applications with automatic deployments.

### Option 1: Netlify

**Advantages:**
- Easy deployment from Git
- Automatic HTTPS
- Serverless functions support
- Built-in form handling
- Generous free tier

**Deployment Steps:**

1. **Connect Repository:**
   - Sign up at netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository

2. **Configure Build Settings:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Add Environment Variables:**
   - Go to Site Settings → Environment Variables
   - Add all VITE_ variables

4. **Create `netlify.toml`:**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Option 2: Vercel

**Advantages:**
- Optimized for frontend frameworks
- Excellent performance
- Easy previews for PRs
- Great DX

**Deployment Steps:**

1. **Connect Repository:**
   - Sign up at vercel.com
   - Click "Import Project"
   - Connect to GitHub repository

2. **Configure:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Add Environment Variables:**
   - Go to Settings → Environment Variables
   - Add all VITE_ variables

4. **Create `vercel.json`:**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

### Option 3: Cloudflare Pages

- Excellent global CDN
- DDoS protection included
- Very fast

### Option 4: AWS S3 + CloudFront

- More complex but highly scalable
- Best for larger applications
- Requires more DevOps knowledge

---

## CI/CD Pipeline

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm run test
      
      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      
      # Netlify deployment
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod
```

### Add GitHub Secrets

Go to GitHub Repository → Settings → Secrets and add:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `NETLIFY_AUTH_TOKEN` (or Vercel equivalent)
- `NETLIFY_SITE_ID`

---

## Monitoring & Error Tracking

### 1. Error Tracking: Sentry

**Install Sentry:**

```bash
npm install @sentry/react
```

**Configure in `src/main.tsx`:**

```typescript
import * as Sentry from "@sentry/react";

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}
```

### 2. Analytics: Google Analytics

**Install GA4:**

```bash
npm install react-ga4
```

**Configure:**

```typescript
import ReactGA from 'react-ga4';

if (import.meta.env.PROD) {
  ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
}
```

### 3. Performance Monitoring

**Supabase Built-in Monitoring:**
- Monitor database performance in Supabase dashboard
- Set up alerts for slow queries
- Track API usage

**Web Vitals:**

```bash
npm install web-vitals
```

```typescript
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics({ name, delta, value, id }) {
  // Send to your analytics service
  console.log({ name, delta, value, id });
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onFCP(sendToAnalytics);
onLCP(sendToAnalytics);
onTTFB(sendToAnalytics);
```

### 4. Uptime Monitoring

Use services like:
- UptimeRobot (free)
- Pingdom
- StatusCake

---

## Performance Optimization

### 1. Enable Compression

Most hosting platforms enable this automatically, but verify:
- Brotli compression for modern browsers
- Gzip fallback

### 2. CDN Configuration

- Use a CDN for static assets
- Consider Cloudflare for DDoS protection
- Enable HTTP/2 or HTTP/3

### 3. Caching Strategy

**Configure in `_headers` (Netlify) or `vercel.json`:**

```
# Cache static assets aggressively
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Cache HTML with revalidation
/*.html
  Cache-Control: public, max-age=0, must-revalidate

# Cache other files for a shorter time
/*
  Cache-Control: public, max-age=3600
```

### 4. Preload Critical Resources

Update `index.html`:

```html
<head>
  <!-- Preload critical fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Preconnect to external services -->
  <link rel="preconnect" href="https://iugmaydqyozdgyiziels.supabase.co">
  <link rel="dns-prefetch" href="https://www.paypal.com">
</head>
```

### 5. Lazy Loading

Implement lazy loading for images:

```typescript
<img 
  src="/images/product.jpg" 
  loading="lazy" 
  alt="Product"
/>
```

---

## SEO & Meta Tags

### 1. Update `index.html` Meta Tags

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Basic Meta Tags -->
    <title>Bounding Fire Productions | Premium ASL Gaming Products</title>
    <meta name="description" content="Premium scenarios, rules, counters and maps for Advanced Squad Leader. High-quality gaming products from Bounding Fire Productions." />
    <meta name="keywords" content="Advanced Squad Leader, ASL, tactical gaming, board games, wargames, scenarios, counters, maps" />
    <meta name="author" content="Bounding Fire Productions" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://boundingfire.com/" />
    <meta property="og:title" content="Bounding Fire Productions | Premium ASL Gaming Products" />
    <meta property="og:description" content="Premium scenarios, rules, counters and maps for Advanced Squad Leader." />
    <meta property="og:image" content="https://boundingfire.com/images/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://boundingfire.com/" />
    <meta name="twitter:title" content="Bounding Fire Productions" />
    <meta name="twitter:description" content="Premium scenarios, rules, counters and maps for Advanced Squad Leader." />
    <meta name="twitter:image" content="https://boundingfire.com/images/twitter-card.png" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://boundingfire.com/" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 2. Generate Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://boundingfire.com/</loc>
    <lastmod>2026-03-14</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://boundingfire.com/account</loc>
    <priority>0.8</priority>
  </url>
  <!-- Add product URLs if individual pages exist -->
</urlset>
```

### 3. Create `robots.txt`

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://boundingfire.com/sitemap.xml
```

### 4. Schema.org Structured Data

Add structured data for products (consider adding to ProductModal or ProductGrid):

```typescript
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": product.name,
  "image": product.image,
  "description": product.description,
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};
```

---

## Pre-Deployment Checklist

### Code Quality
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run test` - all tests pass
- [ ] Run `npm run build` - builds successfully
- [ ] Test production build locally: `npm run preview`

### Security
- [ ] Environment variables configured in hosting platform
- [ ] `.env.local` is in `.gitignore` and not committed
- [ ] Supabase RLS policies are enabled and tested
- [ ] Security headers configured
- [ ] HTTPS enforced (automatic with Netlify/Vercel)
- [ ] Rate limiting configured for auth endpoints

### Performance
- [ ] Large files moved from `src/files/` to `public/files/`
- [ ] Images optimized (consider WebP format)
- [ ] Code splitting implemented
- [ ] Lazy loading for images enabled
- [ ] Bundle size analyzed: `npm run build` (check output)

### Database
- [ ] Migrations run on production Supabase
- [ ] Automated backups enabled
- [ ] Database indexes created
- [ ] Test data cleared from production

### Content
- [ ] All product data loaded
- [ ] All images accessible
- [ ] Prices verified
- [ ] Contact email updated
- [ ] About section content finalized

### SEO
- [ ] Meta tags updated with real domain
- [ ] Open Graph images created (1200x630px)
- [ ] Sitemap generated
- [ ] Robots.txt created
- [ ] Canonical URLs set

### Third-Party Services
- [ ] PayPal production credentials configured
- [ ] PayPal sandbox mode disabled
- [ ] Test payment flow in production
- [ ] Analytics installed (GA4)
- [ ] Error tracking configured (Sentry)

### Testing
- [ ] Test checkout flow end-to-end
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Test with slow network (throttle in DevTools)
- [ ] Verify all download links work
- [ ] Test user registration and login
- [ ] Verify cart persistence

### Legal
- [ ] Privacy policy created and linked
- [ ] Terms of service created
- [ ] Cookie consent (if required by your region)
- [ ] Return/refund policy

### Monitoring
- [ ] Uptime monitoring configured
- [ ] Error alerts set up
- [ ] Analytics tracking verified
- [ ] Performance monitoring active

### Documentation
- [ ] README updated with deployment info
- [ ] Environment variables documented
- [ ] Deployment process documented
- [ ] Emergency rollback plan documented

---

## Post-Deployment

### Immediate Actions (First 24 Hours)

1. **Monitor Error Logs:**
   - Check Sentry for errors
   - Review Supabase logs
   - Check browser console in production

2. **Test Critical Flows:**
   - Complete a test purchase
   - Verify email notifications (if configured)
   - Test cart sync across devices

3. **Performance Check:**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Verify page load times

4. **Monitor Traffic:**
   - Check analytics setup
   - Verify conversion tracking
   - Monitor server response times

### First Week

1. **User Feedback:**
   - Monitor for bug reports
   - Track user behavior
   - Identify pain points

2. **Optimization:**
   - Analyze slow queries
   - Optimize heavy pages
   - Fine-tune caching

3. **Marketing:**
   - Submit to search engines
   - Update social media links
   - Announce launch

### Ongoing Maintenance

- **Weekly:** Review error logs and fix critical bugs
- **Monthly:** Review analytics and optimize conversion funnel
- **Quarterly:** Update dependencies, run security audit
- **Annually:** Review hosting costs and optimize infrastructure

---

## Rollback Plan

If something goes wrong:

1. **Immediate Rollback (Netlify/Vercel):**
   - Go to Deployments
   - Find previous successful deployment
   - Click "Publish deploy"

2. **Database Issues:**
   - Restore from backup in Supabase dashboard
   - Test thoroughly before announcing

3. **Communication:**
   - Notify users if service is impacted
   - Post status updates
   - Have incident post-mortem

---

## Additional Resources

- [Vite Production Build Guide](https://vitejs.dev/guide/build.html)
- [React Production Deployment](https://react.dev/learn/start-a-new-react-project#deploying-to-production)
- [Supabase Production Checklist](https://supabase.com/docs/guides/platform/going-into-prod)
- [Web.dev Performance Best Practices](https://web.dev/learn-core-web-vitals/)
- [OWASP Security Checklist](https://owasp.org/www-project-web-security-testing-guide/)

---

## Support

If you need help with deployment:
- Netlify Support: https://answers.netlify.com/
- Vercel Support: https://vercel.com/support
- Supabase Support: https://supabase.com/support

---

**Good luck with your deployment! 🚀**