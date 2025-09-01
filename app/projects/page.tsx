"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Server, Shield, Database } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "University Management Portal",
      description: "Comprehensive university management system with secure role-based authentication, automated fee payment processing, and dynamic form generation. Features student/admin dashboards with real-time notifications and document management.",
      techStack: ["Java", "Spring Boot", "Spring Security", "React", "PostgreSQL", "REST APIs"],
      features: [
        "Role-based access control",
        "Automated fee payments",
        "Dynamic forms",
        "Real-time notifications"
      ],
      githubLink: "https://github.com/shiburajsingh/university-portal",
      liveLink: "https://university-managment-portal.vercel.app/",
      icon: Shield
    },
    {
      title: "Full Stack CRM System",
      description: "Enterprise-grade Customer Relationship Management system built with layered architecture. Includes secure user authentication, contact management, sales pipeline tracking, and comprehensive reporting features.",
      techStack: ["Spring Boot", "Hibernate", "React", "TypeScript", "MySQL", "Docker"],
      features: [
        "Layered backend architecture",
        "Secure user management",
        "Sales pipeline tracking",
        "Advanced reporting"
      ],
      githubLink: "https://github.com/shiburajsingh/crm-system",
      liveLink: null,
      icon: Server
    },
    {
      title: "Book Review Backend API",
      description: "Robust RESTful API for book review platform with comprehensive CRUD operations, Redis caching for performance optimization, database migrations, and extensive unit testing coverage.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "pytest"],
      features: [
        "RESTful API design",
        "Redis caching",
        "Database migrations",
        "Comprehensive testing"
      ],
      githubLink: "https://github.com/shiburajsingh/book-review-api",
      liveLink: null,
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work demonstrating expertise in full-stack development, backend architecture, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-none shadow-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-2xl text-slate-900 dark:text-white">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    
                    {project.liveLink && (
                      <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}