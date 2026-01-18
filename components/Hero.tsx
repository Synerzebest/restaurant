"use client"

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from 'next/link';


const restaurantInterior = "/images/bg.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={restaurantInterior}
          alt="La Maison restaurant interior with elegant candlelit tables"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-black/30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-amber-200 mb-6"
        >
          Experience gastronomique
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl text-amber-50 font-noto font-light tracking-wide mb-8"
        >
          La Maison
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Là où l&apos;art culinaire rencontre l&apos;élégance intemporelle
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full flex justify-center"
        >
            <Link
              href="/menu"
              className="group bg-white/10 text-amber-50 px-8 py-4 rounded-lg tracking-widest uppercase flex items-center
              border border-white/60 transition hover:bg-amber-200/10 hover:border-amber-200 cursor-pointer"
            >
              <FileText className="mr-3 h-5 w-5 opacity-90 group-hover:opacity-100 transition" />
              Découvrez notre menu
            </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-amber-400/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
