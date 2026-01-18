"use client"

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-stone-100/80" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <MapPin className="h-5 w-5 text-yellow-800" />
            <p className="text-sm tracking-[0.3em] uppercase text-yellow-800">
              Où nous trouver
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl mg:text-6xl font-light font-cormorant"
          >
            Venez à <span className="italic text-yellow-800">La Maison</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="w-12 h-12 rounded-full border border-yellow-800/30 flex items-center justify-center mx-auto">
              <MapPin className="h-5 w-5 text-yellow-800" />
            </div>
            <h3 className="text-lg font-light tracking-wide font-noto">Adresse</h3>
            <p className="text-yellow-950/60 leading-relaxed">
              14 Rue au beurre<br />
              1000 Bruxelles
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="w-12 h-12 rounded-full border border-yellow-800/30 flex items-center justify-center mx-auto">
              <Phone className="h-5 w-5 text-yellow-800" />
            </div>
            <h3 className="text-lg font-light tracking-wide font-noto">Réservations</h3>
            <p className="text-yellow-950/60">
              <a 
                href="tel:+12125551234" 
                className="hover:text-yellow-800"
              >
                +32 24 54 87 78
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            <div className="w-12 h-12 rounded-full border border-yellow-800/30 flex items-center justify-center mx-auto">
              <Mail className="h-5 w-5 text-yellow-800" />
            </div>
            <h3 className="text-lg font-light tracking-wide font-noto">Email</h3>
            <p className="text-yellow-950/60">
              <a 
                href="mailto:reservations@lamaison.com" 
                className="hover:text-yellow-800"
              >
                reservations@lamaison.be
              </a>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 h-px w-32 mx-auto bg-yellow-950/60"
        />
      </div>
    </section>
  );
};

export default LocationSection;
