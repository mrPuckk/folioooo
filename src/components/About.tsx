'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export function About() {
  const skills = [
    { name: 'C/C++', category: 'Programming', level: 'Expert' },
    { name: 'Python', category: 'Programming', level: 'Expert' },
    { name: 'Verilog', category: 'Hardware', level: 'Advanced' },
    { name: 'ROS2', category: 'Robotics', level: 'Advanced' },
    { name: 'Cadence', category: 'EDA', level: 'Expert' },
    { name: 'FPGA', category: 'Hardware', level: 'Advanced' },
    { name: 'TensorFlow', category: 'AI/ML', level: 'Advanced' },
    { name: 'STM32', category: 'Embedded', level: 'Advanced' }
  ]

  const timeline = [
    {
      type: 'education',
      title: 'Bachelor of Engineering',
      institution: 'Ho Chi Minh University of Technology',
      period: '2015',
      description:
        'High Distinction in core maths/physics and engineering courses',
        'Built an autonomous drone (Arduino): sensor fusion, control algorithms, basic navigation'
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering',
      institution: 'University of Technology',
      period: '2020 - 2024',
      description: 'Specialized in Electrical Engineering with focus on embedded systems and digital design.'
    },
    {
      type: 'experience',
      title: 'MIT',
      institution: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Developing IoT solutions and embedded firmware for industrial applications.'
    },
    {
      type: 'experience',
      title: 'Embedded Systems Engineer',
      institution: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Developing IoT solutions and embedded firmware for industrial applications.'
    },
    {
      type: 'education',
      title: 'AI & Machine Learning Certification',
      institution: 'Online Platform',
      period: '2022 - 2023',
      description: 'Completed advanced courses in computer vision and neural network implementation.'
    },
    {
      type: 'experience',
      title: 'Research Assistant',
      institution: 'University Lab',
      period: '2022 - 2023',
      description: 'Conducted research on FPGA-based signal processing and real-time systems.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Enhanced Background with Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-80 h-80 bg-primary/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.4, 0.2, 0.4],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Additional depth elements */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.h2
            className="text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          {/* Summary Paragraph with Enhanced Backdrop */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-background/70 backdrop-blur-md rounded-2xl -m-6 p-6 border border-border/20 shadow-xl" />
              <div className="relative">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  I&apos;m a passionate engineer specializing in embedded systems and artificial intelligence.
                  With expertise in hardware design, firmware development, and machine learning, I create
                  innovative solutions that bridge the gap between software and hardware. My work focuses
                  on developing intelligent systems for IoT applications, computer vision implementations,
                  and real-time embedded solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills & Technologies with Enhanced Styling */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-background/90 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20"
                      >
                        {skill.level}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {skill.category}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline with Enhanced Styling */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Education & Experience
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Enhanced Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2 shadow-lg" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative mb-8 ${
                      index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Enhanced Timeline Dot */}
                    <div className={`absolute top-4 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg ${
                      index % 2 === 0 ? 'left-2 md:left-auto md:right-[-8px]' : 'left-2 md:left-[-8px]'
                    }`} />

                    {/* Content */}
                    <div className={`ml-8 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-background/90 backdrop-blur-sm shadow-lg">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge
                              variant={item.type === 'education' ? 'default' : 'secondary'}
                              className="text-xs font-medium"
                            >
                              {item.type === 'education' ? '🎓 Education' : '💼 Experience'}
                            </Badge>
                            <span className="text-xs text-muted-foreground font-medium">
                              {item.period}
                            </span>
                          </div>
                          <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                            {item.title}
                          </CardTitle>
                          <p className="text-sm font-medium text-muted-foreground">
                            {item.institution}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
