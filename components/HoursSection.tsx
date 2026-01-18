"use client"

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock } from "lucide-react";

const HoursSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hours = [
    { day: "Lundi", hours: "Closed" },
    { day: "Mardi - Jeudi", hours: "5:30 PM - 10:00 PM" },
    { day: "Vendredi - Samedi", hours: "5:30 PM - 11:00 PM" },
    { day: "Dimanche", hours: "5:00 PM - 9:00 PM" },
  ];

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Clock className="h-5 w-5 text-yellow-800" />
          <p className="text-sm tracking-[0.3em] uppercase text-yellow-800">
            Opening Hours
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl mb-16 font-cormorant"
        >
            Instants à <span className="italic text-yellow-800">Savourer</span>
        </motion.h2>

        <div className="space-y-6">
          {hours.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex justify-between items-center py-4 border-b border-border"
            >
              <span className="text-yellow-800 tracking-wide">
                {item.day}
              </span>
              <span className={`tracking-wide ${item.hours === "Fermé" ? "text-yellow-950/60" : "text-yellow-950"}`}>
                {item.hours}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-sm text-yellow-950/60"
        >
          Les réservations sont recommandées en week-end
        </motion.p>
      </div>
    </section>
  );
};

export default HoursSection;
