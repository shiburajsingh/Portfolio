"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Dr. C.V. Raman University",
      period: "2020 - 2024",
      grade: "CGPA: 8.06/10",
      description: "Comprehensive computer science education with focus on software engineering, algorithms, data structures, and system design.",
      achievements: [
        "Ranked top 5% in batch",
        "Strong foundation in programming",
        "System design expertise",
        "Software engineering principles"
      ]
    },
    {
      degree: "Senior Secondary Education",
      institution: "N.K.S.M College",
      period: "2017 - 2019",
      grade: "78.6%",
      description: "Completed higher secondary education with science stream, building strong analytical and mathematical foundations.",
      achievements: [
        "Science stream specialization",
        "Strong mathematical foundation",
        "Physics and Chemistry expertise",
        "Analytical problem solving"
      ]
    },
    {
      degree: "Secondary Education",
      institution: "Ambika Bhawani Public School",
      period: "2016",
      grade: "CGPA: 9.4/10",
      description: "Excellent academic performance in secondary education with well-rounded development in various subjects.",
      achievements: [
        "Outstanding academic performance",
        "Well-rounded education",
        "Strong foundational knowledge",
        "Excellent communication skills"
      ]
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
            Education
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My academic journey and educational background that laid the foundation for my technical expertise.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-none shadow-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl text-slate-900 dark:text-white mb-2">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-slate-600 dark:text-slate-300 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <Award className="w-3 h-3 mr-1" />
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Highlights:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-slate-600 dark:text-slate-400">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
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