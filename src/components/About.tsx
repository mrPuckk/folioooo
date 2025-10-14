'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'

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
    // ——— EDUCATION ———
    {
        type: 'education',
        title: 'Bachelor of Engineering – Mechatronic',
        institution: 'Ho Chi Minh University of Technology',
        period: '2015',
        bullets: [
          'High Distinction in Advanced Mathematics I–II, Physics I–II, and core engineering.',
          'Built an autonomous Arduino-based drone: sensor fusion, control algorithms, basic navigation.'
        ]
    },
    {
        type: 'education',
        title: 'Bachelor of Engineering – Mechatronic (Honours)',
        institution: 'University of Technology Sydney (UTS)',
        period: '2020–2023',
        bullets: [
          'Focus: embedded systems, digital design, and real-time systems.',
          'Hands-on projects with FPGA/HDL, sensors, and modern C++ (concurrency, code quality).',
          'Delivered an end-to-end IoT gas-detection system with real-time dashboarding.'
        ]
    },

    // ——— TRAINING ———
    {
        type: 'training',
        title: 'Analog IC Design Trainee',
        institution: 'Mentor: Dr. Huy Binh (Senior Analog Engineer, Apple, UK)',
        period: 'Apr 2025 – Present',
        bullets: [
          'CMOS fundamentals: device physics, biasing, current mirrors',
          'Op-amp topologies: folded/telescopic cascode, Miller compensation',
          'Noise analysis: thermal/flicker noise, stability & phase margin',
          'Layout: matching, parasitic extraction, Monte Carlo simulation'
        ],
        tags: ['Analog IC', 'CMOS', 'Op-Amp', 'Noise Analysis', 'Stability', 'Layout', 'Spectre', 'Monte Carlo']
    },
    {
        type: 'training',
        title: 'RF Design Trainee',
        institution: 'Mentor: PM Doan Hung (Bosch Vietnam)',
        period: 'Jun 2024',
        bullets: [
          'RF fundamentals: transmission lines, Smith chart, S-parameters',
          'Matching networks: L-section, Pi/T-networks, broadband techniques',
          'PCB design: microstrip/stripline, impedance control, parasitics',
          'EMC/EMI: shielding, filtering, VNA calibration, measurement analysis'
        ],
        tags: ['RF Design', 'S-parameters', 'Matching', 'EMC/EMI', 'PCB Design', 'VNA', 'Smith Chart', 'Transmission Lines']
    },

    // ——— COURSES / PROGRAMS ———
    {
        type: 'course',
        title: 'AIDE (MLOps & Data) – 6-Month Program',
        institution: 'AIDE',
        period: '6 months',
        bullets: [
          'Data Engineering: ETL/ELT pipelines, streaming (Kafka/Spark), data quality',
          'MLOps: CI/CD for ML, Docker/Kubernetes, model versioning (MLflow)',
          'Experiment tracking: hyperparameter optimization, A/B testing',
          'Production: model deployment, monitoring, drift detection, retraining'
        ],
        tags: ['MLOps', 'Data Engineering', 'CI/CD', 'MLflow', 'Docker', 'Kubernetes', 'Data Governance', 'Model Monitoring']
    },
    {
        type: 'course',
        title: 'Neural Signal Processing & Time-Frequency Methods',
        institution: 'Specialized Program',
        period: '—',
        bullets: [
          'EEG/ECG processing: STFT/wavelets, artifact removal',
          'Spectral feature engineering and time-frequency analysis',
          'Real-time signal inference and validation protocols'
        ],
        tags: ['Signal Processing', 'EEG/ECG', 'Time-Frequency', 'STFT', 'Wavelet']
    },
    {
        type: 'course',
        title: 'AIO (ML/DL Training) – 1-Year Program',
        institution: 'AIO',
        period: '1 year',
        bullets: [
          'First principles: gradients/normal equations, Bayes/likelihood, bias-variance',
          'Classical ML: linear/logistic regression, SVM, trees/ensembles, regularization',
          'DL fundamentals: networks from scratch, activations, normalization, optimizers',
          'Advanced: Transformers, GNNs, RL agents, generative models (VAEs, flow-matching)'
        ],
        tags: ['ML/DL', 'Transformers', 'CV', 'NLP', 'Optimization', 'First Principles', 'GNNs', 'RL', 'Generative Models']
    },
    {
        type: 'course',
        title: 'Advanced Digital Hardware Design (FPGA/SoC & High-Speed PCB)',
        institution: 'Professional Track',
        period: '—',
        bullets: [
          'FPGA/SoC: Zynq UltraScale+, Versal ACAP, HLS/C++ synthesis',
          'RTL Design: SystemVerilog/UVM, timing closure, formal verification',
          'High-Speed Interfaces: DDR4/DDR5, PCIe Gen4/5, Ethernet 100G',
          'PCB Design: impedance control, signal integrity, mixed-signal integration'
        ],
        tags: ['FPGA', 'SoC', 'RTL', 'AXI', 'High-Speed PCB', 'Mixed-Signal', 'SystemVerilog', 'Signal Integrity', 'DDR', 'PCIe']
    }
  ]


  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Enhanced Background with Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      <AnimatedBackground />

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader title="About Me" />

          {/* Summary Paragraph with Enhanced Backdrop */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            variants={staggerItem}
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
            variants={staggerItem}
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
          <motion.div variants={staggerItem}>
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Education, Training & Courses
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
                              variant={item.type === 'education' ? 'default' : item.type === 'training' ? 'secondary' : 'outline'}
                              className="text-xs font-medium"
                            >
                              {item.type === 'education' ? '🎓 Education' : 
                               item.type === 'training' ? '🔧 Training' : 
                               item.type === 'course' ? '📚 Course' : '💼 Experience'}
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
                          {item.bullets ? (
                            <ul className="text-sm text-muted-foreground leading-relaxed space-y-1">
                              {item.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className="flex items-start">
                                  <span className="text-primary mr-2 mt-1">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              No additional details available.
                            </p>
                          )}
                          {item.tags && (
                            <div className="mt-3 flex flex-wrap gap-1">
                              {item.tags.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="outline"
                                  className="text-xs bg-primary/10 border-primary/20 text-primary"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
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
