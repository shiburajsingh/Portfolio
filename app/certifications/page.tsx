"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Star, Medal } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Full Stack Web Development Certification",
      issuer: "TAP Academy",
      date: "2024",
      description: "Comprehensive certification covering modern web development technologies including frontend frameworks, backend development, database design, and deployment strategies.",
      skills: ["HTML/CSS", "JavaScript", "Bootstrap", "Java", "Python", "Spring", "Hibernate", "MySQL"],
      icon: Award
    }
  ];

  const achievements = [
    {
      title: "Top 5% Academic Performance",
      description: "Ranked in the top 5% of B.Tech Computer Science Engineering batch (2020-2024)",
      period: "2020 - 2024",
      institution: "Dr. C.V. Raman University",
      icon: Trophy
    },
    {
      title: "Excellence in Programming",
      description: "Demonstrated exceptional skills in Java programming and software development",
      period: "2022 - 2024",
      institution: "Academic Projects",
      icon: Star
    },
    {
      title: "Outstanding Project Work",
      description: "Recognized for innovative approach in developing scalable web applications",
      period: "2023 - 2024",
      institution: "University Projects",
      icon: Medal
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Certifications & Achievements
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Professional certifications and academic achievements that validate my technical expertise and commitment to excellence.
          </p>
        </motion.div>

        {/* Certifications Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center"
          >
            <Award className="w-6 h-6 mr-3 text-blue-600" />
            Professional Certifications
          </motion.h2>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-none shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <cert.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-slate-900 dark:text-white">
                            {cert.title}
                          </CardTitle>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center"
          >
            <Trophy className="w-6 h-6 mr-3 text-blue-600" />
            Academic Achievements
          </motion.h2>
          
          <div className="grid md:grid-cols-1 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Card className="border-none shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mt-1">
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-3">
                          {achievement.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge variant="outline" className="border-blue-200 text-blue-600 dark:border-blue-800 dark:text-blue-400">
                            {achievement.institution}
                          </Badge>
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                            {achievement.period}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}