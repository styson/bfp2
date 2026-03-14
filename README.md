# Bounding Fire Productions E-Commerce Site

A modern e-commerce platform for Bounding Fire Productions, built with React, TypeScript, Vite, and Supabase.

## 🚀 Deployment

This site is configured for **automatic deployment to AWS Amplify** via GitHub integration.

**Every push to `main` triggers automatic deployment.**

### Quick Deploy

1. Add environment variables in AWS Amplify Console
2. Push changes to GitHub
3. Amplify automatically builds and deploys

See [AWS-AMPLIFY-DEPLOYMENT.md](./AWS-AMPLIFY-DEPLOYMENT.md) for complete setup instructions.

## 📚 Documentation

- **[AWS-AMPLIFY-DEPLOYMENT.md](./AWS-AMPLIFY-DEPLOYMENT.md)** - Complete AWS Amplify deployment guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Comprehensive production deployment guide
- **[QUICK-START-DEPLOYMENT.md](./QUICK-START-DEPLOYMENT.md)** - Quick reference for deployment

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript, Vite
- **UI Framework:** Material-UI (MUI), Tailwind CSS
- **State Management:** Zustand
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **Payment Processing:** PayPal
- **Hosting:** AWS Amplify with CloudFront CDN

## 🏃 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run linter
npm run lint
```

## ⚙️ Environment Variables

Required for both local development and production:

```env
VITE_SUPABASE_URL = <url>
VITE_SUPABASE_ANON_KEY = <key>
VITE_PAYPAL_CLIENT_ID = <paypal_client_id>
```

**Note:** PayPal Client ID is required for checkout functionality.

Optional:
```env
VITE_GA_TRACKING_ID=your_google_analytics_id
VITE_SENTRY_DSN=your_sentry_dsn
```

**Note:** Never commit `.env.local` to version control.

## 📦 Project Structure

```
├── src/
│   ├── components/      # React components
│   ├── data/           # Static data and product info
│   ├── hooks/          # Custom React hooks
│   ├── store/          # Zustand state management
│   ├── utils/          # Utility functions
│   └── types/          # TypeScript type definitions
├── public/
│   ├── files/          # Downloadable content (PDFs, ZIPs)
│   └── images/         # Product images and assets
├── supabase/
│   └── migrations/     # Database migrations
└── amplify.yml         # AWS Amplify build configuration
```

## 🔐 Security Features

- Row Level Security (RLS) policies on all database tables
- Secure authentication via Supabase Auth
- HTTPS enforced (automatic with Amplify)
- Security headers configured (CSP, CORS, etc.)
- Environment variables for sensitive data

## 🚨 Before First Deployment

**Critical:** Move large files from `src/files/` to `public/files/` for optimal performance:

```bash
move src\files\* public\files\
```

See deployment guides for complete checklist.

## 📊 Performance

- Bundle size: ~586 KB (160 KB gzipped)
- Code splitting enabled for vendor libraries
- CDN distribution via CloudFront
- Aggressive caching for static assets
- Optimized build configuration

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 🤝 Contributing

This is a private production application. Contact the repository owner for contribution guidelines.

## 📄 License

Proprietary - All rights reserved by Bounding Fire Productions

## 🆘 Support

For deployment issues, see:
- [AWS-AMPLIFY-DEPLOYMENT.md](./AWS-AMPLIFY-DEPLOYMENT.md) - Amplify-specific help
- [DEPLOYMENT.md](./DEPLOYMENT.md) - General deployment troubleshooting
