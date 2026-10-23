# ⚡ Harsh Awasthi — Personal Portfolio v2.0

A high-performance, retro Neo-Brutalist personal portfolio website built with **React 19**, **Vite**, and **Tailwind CSS**. Designed with high-contrast borders, bold typography, pastel palettes, micro-interactions, and playful developer easter eggs.

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 🌟 Live Demo

- **Portfolio URL**: [harsh-awasthi.vercel.app](https://github.com/HarshAwasth-i/Portfolio) *(or your deployed domain)*
- **GitHub Repository**: [github.com/HarshAwasth-i/Portfolio](https://github.com/HarshAwasth-i/Portfolio)

---

## ✨ Features & Highlights

- **🎨 Neo-Brutalist Aesthetics**: Distinctive retro design language featuring heavy 4px black borders, vibrant color blocking, hard offset drop shadows (`shadow-neo`), and expressive typography ([Shrikhand](https://fonts.google.com/specimen/Shrikhand) & [Inter](https://fonts.google.com/specimen/Inter)).
- **💻 Interactive CLI Terminal**: Functional Unix-style terminal embedded in the hero section supporting commands like `whoami`, `skills`, `projects`, `experience`, `education`, `leetcode`, `contact`, and built-in mini-games (`guess`, `rps`).
- **🖍️ Interactive Chalk Doodle Board**: An interactive canvas-based blackboard in the Education section where visitors can doodle with realistic chalk textures, switch colors, and clear the canvas.
- **🚀 Featured Projects Showcase**:
  - **DevSync**: Full-stack Kanban project management platform (React, Node.js, Express, MySQL, JWT, 22 REST APIs).
  - **Instagram Wrapped**: Client-side privacy-first Instagram export analytics engine with animated story recap and Recharts.
  - **Job Portal**: End-to-end recruiter & candidate workflow platform (React, Node.js, Express, TiDB Cloud, JWT).
- **💼 Verified Experience & Certifications**:
  - **ClusterCode Technology Sdn. Bhd.**: Software Development Intern (AI-assisted UI test automation using LLMs).
  - **SAP Certified Associate – Backend Developer**: SAP Cloud Application Programming Model (CAP).
  - **LeetCode Milestones**: 300+ DSA & 100+ SQL queries solved.
  - **Coursera**: Ethical Decision Making.
- **⚡ Micro-Interactions & Easter Eggs**:
  - Custom branded cursor with hover enlargement.
  - Top scroll progress bar.
  - Live digital clock in the floating header.
  - Infinite angled marquee ticker.
  - Retro pixel-style loading screen.
  - Modal & embedded contact forms with 1-click clipboard email copy.

---

## 🛠️ Tech Stack

| Category | Technologies & Tools |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [Vite](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/), Custom Neo-Brutalist design tokens |
| **Icons & Typography** | [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, SimpleIcons), Google Fonts (*Shrikhand*, *Inter*) |
| **Animations & Canvas** | HTML5 Canvas API (Blackboard doodle engine), Framer Motion, CSS Keyframes |
| **Deployment & CI/CD** | Vercel / Render |

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── certificates/          # Credential previews & docs
│   ├── favicon.svg            # Custom SVG favicon
│   ├── profile.jpeg           # Hero ID profile photo
│   └── resume.pdf             # Downloadable resume
├── src/
│   ├── assets/
│   │   └── images/            # Project showcase screenshots & previews
│   │       ├── devsync.png
│   │       ├── instagramwrapped.png
│   │       └── jobportal.png
│   ├── components/
│   │   ├── Blackboard.jsx     # Interactive chalk doodle canvas
│   │   ├── Certifications.jsx # Certificates & achievement cards
│   │   ├── Contact.jsx        # Contact section & direct message form
│   │   ├── ContactModal.jsx   # Pop-up contact modal window
│   │   ├── CustomCursor.jsx   # Neo-brutalist interactive custom cursor
│   │   ├── Education.jsx      # Academic history & timeline
│   │   ├── Experience.jsx     # Internship & software engineering timeline
│   │   ├── Footer.jsx         # Footer with quick links & back-to-top
│   │   ├── Hero.jsx           # ID badge card & introductory summary
│   │   ├── LoadingScreen.jsx  # Retro boot-up loading animation
│   │   ├── Marquee.jsx        # Infinite angled scrolling banner
│   │   ├── Navbar.jsx         # Floating pill navbar with live digital clock
│   │   ├── Projects.jsx       # Featured projects grid & external links
│   │   ├── ScrollProgress.jsx # Top scroll reading indicator
│   │   ├── Skills.jsx         # Categorized technical skill pills
│   │   └── Terminal.jsx       # Interactive Unix CLI emulator
│   ├── App.jsx                # Core application layout
│   ├── index.css              # Global styles, fonts, and Tailwind directives
│   └── main.jsx               # React DOM root entry point
├── index.html                 # HTML shell, SEO metadata, OpenGraph tags
├── package.json               # Dependencies and scripts
└── vite.config.js             # Vite configuration with React plugin
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18.0 or higher recommended) and `npm` installed.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HarshAwasth-i/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

---

## 📦 Available Scripts

In the project root, you can run:

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and bundles production-ready assets into the `dist/` directory.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to identify code quality and style issues.

---

## ⚙️ Configuration & Customization

- **Updating Projects**: Modify the `projectsList` array in [`src/components/Projects.jsx`](src/components/Projects.jsx).
- **Updating Skills**: Update categories and tags inside [`src/components/Skills.jsx`](src/components/Skills.jsx).
- **Updating Work Experience**: Edit the `experiences` array in [`src/components/Experience.jsx`](src/components/Experience.jsx).
- **Updating Education**: Edit the `educationData` array in [`src/components/Education.jsx`](src/components/Education.jsx).
- **Updating Credentials**: Edit the `certsList` array in [`src/components/Certifications.jsx`](src/components/Certifications.jsx).
- **Terminal Commands**: Add or adjust custom CLI commands in [`src/components/Terminal.jsx`](src/components/Terminal.jsx).
- **Resume PDF**: Replace `public/resume.pdf` with your updated resume file.

---

## 📬 Contact & Connect

- **Author**: Harsh Awasthi
- **Email**: [harshawasthi2023@gmail.com](mailto:harshawasthi2023@gmail.com)
- **LinkedIn**: [linkedin.com/in/harsh-awasthi-181761331](https://linkedin.com/in/harsh-awasthi-181761331)
- **GitHub**: [@HarshAwasth-i](https://github.com/HarshAwasth-i)
- **LeetCode**: [@Harsh_Awasthii](https://leetcode.com/u/Harsh_Awasthii/)

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE). Feel free to star ⭐️ the repository if you found it inspiring!
