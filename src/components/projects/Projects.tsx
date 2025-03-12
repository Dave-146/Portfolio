'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Mobile Banking App',
    category: 'Mobile App',
    description: 'A modern banking application designed to provide users with a seamless financial management experience.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['UX Research', 'UI Design', 'Prototyping']
  },
  {
    id: 2,
    title: 'E-commerce Website Redesign',
    category: 'Web Design',
    description: 'A complete overhaul of an e-commerce platform focusing on improving user experience and conversion rates.',
    image: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['Web Design', 'User Testing', 'Wireframing']
  },
  {
    id: 3,
    title: 'Health & Fitness Dashboard',
    category: 'Dashboard',
    description: 'An intuitive dashboard for tracking health metrics and fitness goals with data visualization.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['Dashboard Design', 'Data Visualization', 'UX Design']
  },
  {
    id: 4,
    title: 'Smart Home Control App',
    category: 'Mobile App',
    description: 'A mobile application for controlling smart home devices with an emphasis on accessibility.',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['Mobile Design', 'Accessibility', 'IoT']
  }
]

// Filter categories
const categories = ['All', 'Mobile App', 'Web Design', 'Dashboard']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my recent design work showcasing my approach to solving complex UX/UI challenges.
          </p>
        </motion.div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-6 text-primary font-medium flex items-center hover:underline">
                  View Project Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
} 