"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Server, Database, Cloud, Globe, Smartphone } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Angular", level: 70 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Spring Security", level: 85 },
        { name: "Hibernate", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "Node.js", level: 70 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 70 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 }
      ]
    }
  ];

  const additionalSkills = [
    "REST APIs", "Microservices", "Unit Testing", "Integration Testing",
    "Agile/Scrum", "Problem Solving", "System Design", "Code Review",
    "Performance Optimization", "Security Best Practices"
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
            Skills & Expertise
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and frameworks.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-none shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="border-none shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-slate-900 dark:text-white">
                Additional Skills & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {additionalSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 dark:bg-slate-700 dark:hover:bg-blue-900 dark:text-slate-300 dark:hover:text-blue-300 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}