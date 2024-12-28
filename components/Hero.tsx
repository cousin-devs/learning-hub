'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 text-green-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Bilal Learning Hub
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Connecting Muslims for knowledge sharing and growth
        </motion.p>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Our platform is dedicated to fostering a community of learning and mentorship among Muslims.
          Here, you can connect with experienced mentors, share your knowledge, and grow together in faith and profession.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <a href="#mentors">Explore Mentors</a>
          </Button>
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-500 rounded-full opacity-20"
              style={{
                width: Math.random() * 40 + 10,
                height: Math.random() * 40 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5],
                opacity: [0.12, 0.2, 0.12],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

