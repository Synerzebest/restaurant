"use client"

import { motion ,useInView } from "framer-motion";
import { useRef } from "react";
import { Utensils } from "lucide-react";
import Link from "next/link";

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Utensils className="h-5 w-5 text-yellow-800" />
          <p className="text-sm tracking-[0.3em] uppercase text-yellow-800">
            Notre Menu
          </p>
        </motion.div>

        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 font-cormorant text-gray-800"
        >
            Un Voyage au Fil des <span className="italic text-yellow-800">Saisons</span>
        </motion.h2>

        <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto text-yellow-950/60"
        >
            Notre menu évolue au rythme des saisons et met à l’honneur des ingrédients
            sélectionnés à leur pleine maturité. Des légumes fraîchement récoltés aux
            produits de la mer issus de sources durables, chaque assiette reflète notre
            exigence de qualité et notre attachement au savoir faire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full flex justify-center"
        >
          <Link
            href="/menu"
            className="bg-yellow-800/90 hover:bg-yellow-800 px-10 py-4 tracking-widest uppercase transition-all duration-300 flex items-center justify-center text-stone-100 rounded-lg cursor-pointer"
          >
            Voir le menu
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-sm italic text-yellow-950/60"
        >
          Dégustation disponible sur demande
        </motion.p>
      </div>
    </section>
  );
};

export default MenuSection;
