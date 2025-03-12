import Hero from '@/components/home/Hero'
import Projects from '@/components/projects/Projects'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
} 