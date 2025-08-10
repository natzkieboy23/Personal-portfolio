# Developer Portfolio

A modern, responsive developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive Layout**: Mobile-first design that works on all devices
- **Static Data**: No database required - all content managed through TypeScript files
- **SEO Optimized**: Built-in SEO with meta tags, Open Graph, and Twitter Cards
- **Fast Performance**: Static site generation with Next.js App Router
- **Accessible**: ARIA compliant with keyboard navigation support
- **Type Safe**: Full TypeScript support throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── (site)/                    # Grouped routes
│   │   ├── page.tsx              # Home page
│   │   ├── about/page.tsx        # About page
│   │   ├── skills/
│   │   │   ├── page.tsx          # Skills overview
│   │   │   └── [category]/page.tsx # Skill category details
│   │   ├── experience/
│   │   │   ├── page.tsx          # Experience timeline
│   │   │   └── [year]/page.tsx   # Experience by year
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects overview
│   │   │   └── [id]/page.tsx     # Project details
│   │   └── contact/page.tsx      # Contact form
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── navigation.tsx            # Main navigation
│   └── footer.tsx               # Site footer
├── data/
│   ├── personalInfo.ts          # Personal information
│   ├── skills.ts               # Skills and categories
│   ├── experience.ts           # Work experience
│   └── projects.ts             # Project portfolio
├── lib/
│   └── utils.ts               # Utility functions
└── public/
    └── images/               # Static images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Edit `data/personalInfo.ts` to update:
- Name and title
- Contact information
- Social media links
- About section content
- Career highlights

### Skills

Update `data/skills.ts` to:
- Add/remove skill categories
- Update skill proficiency levels
- Modify years of experience

### Experience

Modify `data/experience.ts` to:
- Add work experience entries
- Update job descriptions and achievements
- Include technologies used

### Projects

Edit `data/projects.ts` to:
- Showcase your projects
- Add project descriptions and details
- Include screenshots and demo links

### Images

Add your images to `public/images/`:
- `profile-hero.jpg` - Hero section profile image
- `profile-about.jpg` - About page profile image
- `og-image.jpg` - Open Graph image for social sharing
- `projects/` - Project screenshots and hero images

## 🎨 Styling

The project uses Tailwind CSS with shadcn/ui components. To customize:

1. **Colors**: Modify the color scheme in `tailwind.config.js`
2. **Typography**: Update font settings in `app/layout.tsx`
3. **Components**: Customize shadcn/ui components in `components/ui/`

## 📱 Responsive Design

The portfolio is built mobile-first and includes:
- Responsive navigation with mobile menu
- Flexible grid layouts
- Optimized images with Next.js Image component
- Touch-friendly interactions

## 🔧 Development

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

### Adding New Pages

1. Create a new page in `app/(site)/`
2. Add navigation links in `components/navigation.tsx`
3. Update the footer links in `components/footer.tsx`

### Adding New Components

Use shadcn/ui CLI to add components:
```bash
bunx shadcn@latest add [component-name]
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!