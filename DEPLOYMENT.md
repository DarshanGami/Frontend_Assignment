# Quiz App - Deployment Guide

## Quick Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [vercel.com](https://vercel.com)

3. Click "Import Project"

4. Select your repository

5. Vercel will auto-detect Next.js and configure everything

6. Click "Deploy"

Your app will be live in ~2 minutes!

## Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

No environment variables are required for this project (frontend only).

## Build Configuration

- **Framework**: Next.js 14
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Dev Command**: `npm run dev`

## Custom Domain

After deploying to Vercel, you can add a custom domain:

1. Go to your project settings
2. Navigate to "Domains"
3. Add your domain
4. Follow DNS configuration instructions
