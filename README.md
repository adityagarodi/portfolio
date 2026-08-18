# Portfolio Website

A modern, animated portfolio website for Aditya Prakash Garodi - Computer Engineering Student | Data Analyst Intern | AI Enthusiast.

Built with React, Tailwind CSS, Framer Motion, and lucide-react.

## Features

- Dark theme with electric blue/violet gradient accents
- Smooth scroll-triggered animations
- Animated typing effect in hero section
- Particle background animation
- Fully responsive design
- Interactive components with hover effects
- Contact form (frontend only)

## Deployment Instructions

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top-right corner
3. Select **New repository**
4. Name it `portfolio` (or any name you prefer)
5. Make sure it's **Public**
6. Click **Create repository**

### Step 2: Connect Local Repository to GitHub

Run these commands in your terminal (in the Portfolio directory):

```bash
git remote add origin https://github.com/adityagarodi/portfolio.git
```

*Note: Replace `adityagarodi` with your GitHub username if different*

### Step 3: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build the project
- Create a `gh-pages` branch
- Deploy to GitHub Pages

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **gh-pages** branch
5. Click **Save**

Your site will be live at: `https://adityagarodi.github.io/portfolio`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── LanguagesSoftSkills.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **lucide-react** - Icons

## License

This project is open source and available for personal and commercial use.
