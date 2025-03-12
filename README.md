# UX/UI Designer Portfolio

A modern, responsive portfolio website for UX/UI designers built with Next.js and Tailwind CSS.

## Features

- Responsive design that looks great on all devices
- Modern UI with smooth animations
- Sections for showcasing projects, skills, and contact information
- Filterable projects gallery
- Contact form with validation
- SEO-friendly structure

## Tech Stack

- **Next.js** - React framework for server-rendered applications
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - For smooth animations
- **React Icons** - For beautiful icons
- **Heroicons** - For additional icon options

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Navigate to the project directory
```bash
cd portfolio
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable UI components
  - `/home` - Components for the home page
  - `/projects` - Components for the projects section
  - `/contact` - Components for the contact section
  - `/layout` - Layout components like Navbar and Footer
- `/public` - Static assets like images

## Customization

- Update the content in each component to reflect your personal information and projects
- Replace placeholder images with your own project screenshots
- Customize colors in the `tailwind.config.js` file
- Add additional sections as needed

## Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

For the easiest deployment experience, use Vercel:

```bash
npm install -g vercel
vercel
```

## License

This project is open source and available under the [MIT License](LICENSE).