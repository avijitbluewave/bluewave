# 🚀 Deploying Blue Wave to Cloudflare Pages

## Quick Deployment Steps

### Method 1: Cloudflare Dashboard (Recommended)

1. **Build the project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"
   - Choose "Upload assets"
   - Upload the entire `dist/` folder
   - Set project name: `blue-wave-purifiers`

3. **Configure custom domain (optional):**
   - In your Pages project settings
   - Go to "Custom domains"
   - Add your domain (e.g., `bluewave.com`)

### Method 2: Git Integration

1. **Push to GitHub/GitLab:**
   ```bash
   git init
   git add .
   git commit -m "Initial Blue Wave website"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - In Cloudflare Dashboard → Pages
   - Click "Connect to Git"
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Node.js version:** 18 or later

### Method 3: Wrangler CLI

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login and deploy:**
   ```bash
   wrangler login
   npm run build
   wrangler pages deploy dist --project-name=blue-wave-purifiers
   ```

## Build Configuration

The project is pre-configured for Cloudflare Pages with:

- ✅ Static site generation (SSG)
- ✅ Optimized assets
- ✅ Security headers
- ✅ Cache configuration
- ✅ SEO optimization

## Environment Variables

No environment variables are required for basic deployment.

## Custom Domain Setup

1. In Cloudflare Pages dashboard
2. Go to your project → Custom domains
3. Add your domain
4. Update DNS records as instructed
5. SSL certificate will be automatically provisioned

## Performance Optimizations

The site includes:
- Image optimization (WebP format)
- CSS/JS minification
- Gzip compression
- Browser caching headers
- CDN distribution

## Troubleshooting

**Build fails?**
- Ensure Node.js version 18+
- Run `npm install` first
- Check for any TypeScript errors

**Images not loading?**
- Verify all image files are in the `public/` directory
- Check file paths in components

**Styling issues?**
- Ensure Tailwind CSS is properly configured
- Check DaisyUI theme settings

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form (add backend if needed)
- [ ] Check mobile responsiveness
- [ ] Test page loading speed
- [ ] Verify SEO meta tags
- [ ] Set up analytics (optional)

Your Blue Wave website will be live at: `https://blue-wave-purifiers.pages.dev`

## Support

For deployment issues, check:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)