# 🚀 Portfolio Website - Amjad Ali

**🌐 Live Site:** [https://mrxamjad.com](https://mrxamjad.com)

<div align="center">

**A modern, responsive portfolio website showcasing my journey as a Mobile Developer and Software Engineer**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://mrxamjad.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[View Live Site](https://mrxamjad.com) • [Report Bug](https://github.com/mrxdevs/portfolio/issues) • [Request Feature](https://github.com/mrxdevs/portfolio/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

---

## 🌟 Overview

This is my personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. It showcases my skills, projects, experience, and provides multiple ways to connect with me. The website features a modern, glassmorphic design with smooth animations and a fully responsive layout.

**🔗 Live Website:** [https://mrxamjad.com](https://mrxamjad.com)

---

## ✨ Features

### 🎨 Design & UI
- **Modern Glassmorphic Design** - Beautiful glass-effect cards with backdrop blur
- **Purple Gradient Theme** - Consistent purple accent colors throughout
- **Smooth Animations** - Fade-in, slide, and scale animations for enhanced UX
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Dark Mode** - Elegant dark theme with high contrast

### 🧭 Navigation
- **Pill-Style Navbar** - Floating navigation bar with active state indicators
- **Smooth Scrolling** - Seamless page transitions
- **Mobile-Friendly Menu** - Optimized navigation for smaller screens

### 📄 Pages & Sections
- **Home** - Hero section with introduction and quick links
- **About** - Detailed information about skills, education, and achievements
- **Projects** - Interactive carousel showcasing portfolio projects
- **Experience** - Timeline view of professional experience
- **Services** - Overview of services offered
- **Technologies** - Tech stack and tools I work with
- **Contact** - Contact form with email integration

### 🔗 Coding Platform Integration
- **GitHub Activity** - Live contribution graph
- **LeetCode Stats** - Problem-solving statistics and heatmap
- **Coding Ninjas** - Profile link with activity overview
- **TakeUForward** - DSA learning journey on TUF+

### 📧 Contact Features
- **Email Integration** - Functional contact form using Resend API
- **Social Links** - Direct links to GitHub, LinkedIn, Twitter, and more
- **Downloadable Resume** - Easy access to CV/Resume

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://react.dev/)** - UI library

### Backend & APIs
- **[Resend](https://resend.com/)** - Email API for contact form
- **Next.js API Routes** - Serverless API endpoints

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **Git** - Version control

### Deployment
- **[Vercel](https://vercel.com/)** - Hosting and deployment platform
- **Custom Domain** - [mrxamjad.com](https://mrxamjad.com)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrxdevs/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── public/                      # Static assets
│   ├── favicon.ico             # Favicon
│   └── ...                     # Project images and icons
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/              # About page
│   │   ├── api/                # API routes
│   │   │   └── send/           # Email sending endpoint
│   │   ├── contact/            # Contact page
│   │   ├── experience/         # Experience page
│   │   ├── projects/           # Projects page
│   │   ├── services/           # Services page
│   │   ├── techs/              # Technologies page
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   └── not-found.tsx       # 404 page
│   ├── components/             # React components
│   │   ├── CTASection.tsx      # Call-to-action component
│   │   └── ...                 # Other components
│   ├── data/                   # Data files
│   │   └── profile.ts          # Profile information
│   ├── email-template/         # Email templates
│   │   └── ContactFormEmail.tsx
│   └── services/               # Service utilities
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

---

## 📄 Pages

### 🏠 Home (`/`)
- Hero section with animated greeting
- Quick introduction
- Call-to-action buttons
- Featured projects carousel

### 👤 About (`/about`)
- Personal introduction
- Skills categorized by domain
  - Mobile Development
  - UI/UX Design
  - Backend & DevOps
- GitHub contribution graph
- LeetCode statistics
- Coding Ninjas profile
- TakeUForward activity
- Education details
- Achievements list

### 💼 Projects (`/projects`)
- Interactive project carousel
- Project details with:
  - Description
  - Key features
  - Technologies used
  - Live demo and GitHub links

### 💻 Experience (`/experience`)
- Timeline view of work experience
- Company details
- Role and responsibilities
- Duration and location

### 🛠️ Services (`/services`)
- Services offered
- Process workflow
- Call-to-action

### 🔧 Technologies (`/techs`)
- Tech stack overview
- Tools and frameworks
- Skill levels

### 📧 Contact (`/contact`)
- Contact form with validation
- Email integration via Resend API
- Social media links
- Direct contact information

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** with a custom domain.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mrxdevs/portfolio)

### Manual Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Custom Domain**
   - Add your custom domain in Vercel settings
   - Update DNS records with your domain provider

---

## 📬 Contact

**Amjad Ali** - Mobile Developer & Software Engineer

- 🌐 Website: [mrxamjad.com](https://mrxamjad.com)
- 💼 LinkedIn: [linkedin.com/in/mrxamjad](https://linkedin.com/in/mrxamjad)
- 🐙 GitHub: [@mrxdevs](https://github.com/mrxdevs)
- 🐦 Twitter: [@mrxamjad](https://twitter.com/mrxamjad)
- 📧 Email: [contact@mrxamjad.com](mailto:contact@mrxamjad.com)

### Coding Profiles
- 💻 LeetCode: [@mrxamjad](https://leetcode.com/mrxamjad)
- 🥷 Coding Ninjas: [@mrxamjad](https://www.naukri.com/code360/profile/mrxamjad)
- 📚 TakeUForward: [@mrxamjad](https://takeuforward.org/plus/profile/mrxamjad)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For seamless deployment
- **Tailwind CSS** - For the utility-first CSS framework
- **Resend** - For email API integration
- **GitHub** - For contribution graph API
- **LeetCode** - For stats card API

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/mrxdevs/portfolio/issues).

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on [GitHub](https://github.com/mrxdevs/portfolio)!

---

<div align="center">

**Made with ❤️ by [Amjad Ali](https://mrxamjad.com)**

© 2024 Amjad Ali. All rights reserved.

</div>
