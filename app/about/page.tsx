"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code2, Users, Lightbulb, Target, ArrowRight } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Expertise in Java, Spring Boot, Python, and modern web technologies"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in agile environments"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical mindset with ability to break down complex challenges"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on delivering scalable solutions that meet business objectives"
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
            About Me
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="" 
                  alt="Shibu Raj Singh"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="border-none shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Professional Summary
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Computer Science graduate with hands-on experience in full-stack development using Java, Spring Boot, Python, FastAPI, REST APIs, SQL/PostgreSQL, and React. Skilled in designing scalable backend systems, integrating secure APIs, and building responsive web applications. Experienced with CI/CD pipelines, AWS/Docker-based cloud services, and database migrations.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Full Stack Development
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Backend Architecture
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Cloud Technologies
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                    Database Design
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-none shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Ready to discuss your next project?
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}