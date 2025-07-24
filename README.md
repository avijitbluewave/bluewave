# Blue Wave Water Purifiers

A modern, responsive product showcase website for Blue Wave water purifiers built with Astro, Svelte, DaisyUI, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with DaisyUI components
- ⚡ Fast performance with Astro's static site generation
- 🔧 Interactive Svelte components
- 📱 Mobile-first responsive design
- 🎯 SEO optimized
- 🚀 Ready for Cloudflare Pages deployment

## Tech Stack

- **Astro** - Static site generator
- **Svelte** - Interactive components
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **TypeScript** - Type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to Cloudflare Pages

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory
3. Deploy to Cloudflare Pages using the Cloudflare dashboard or CLI

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.svelte
│   │   ├── Hero.svelte
│   │   ├── Products.svelte
│   │   ├── ProductCard.svelte
│   │   ├── About.svelte
│   │   ├── Contact.svelte
│   │   └── Footer.svelte
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Customization

- Update product information in `src/components/Products.svelte`
- Modify company details in various components
- Customize colors in `tailwind.config.mjs`
- Add more pages in the `src/pages/` directory

## License

MIT License - feel free to use this template for your projects.