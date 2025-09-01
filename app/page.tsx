"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowRight, Code, Database, Cloud } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-32 h-32 mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              SRS
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent"
            >
              Shibu Raj Singh
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium"
            >
              Java Backend & Full Stack Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Building scalable backends and modern web applications with expertise in Java, Spring Boot, Python, and React.
            </motion.p>
          </div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center space-x-8 py-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs text-slate-600 dark:text-slate-400">Frontend</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-xs text-slate-600 dark:text-slate-400">Backend</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Cloud className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-xs text-slate-600 dark:text-slate-400">DevOps</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects">
              <Button 
                size="lg" 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3 border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <motion.a
              href="https://github.com/shiburajsingh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full transition-colors"
            >
              <Github className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/shibu-rajsingh/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 rounded-full transition-colors"
            >
              <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </motion.a>
            
            <motion.a
              href="mailto:shibu.raj.singh@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 rounded-full transition-colors"
            >
              <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}