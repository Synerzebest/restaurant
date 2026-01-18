"use client"

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-stone-100/80" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-yellow-800 mb-6">
            Notre histoire
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl mb-12 font-cormorant"
        >
          Une Maison de <span className="italic text-yellow-800">Goût</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 text-yellow-950/60 leading-relaxed text-lg"
        >
          <p>
            Fondé en 1987 par le Chef Laurent Dubois, La Maison est né comme un bistrot
            intimiste, porté par une vision simple : créer des instants de table qui
            nourrissent le corps et apaisent l’esprit. Ce qui n’était au départ qu’un
            lieu de douze couverts est devenu, au fil des années, une adresse
            incontournable de la ville.
          </p>

          <p>
            Aujourd’hui, sous la direction du Chef Marie Dubois, fille de Laurent, nous
            perpétuons les techniques françaises avec exigence, tout en laissant place à
            la créativité. Chaque assiette raconte une histoire : celle des producteurs
            qui cultivent nos ingrédients, celle des saisons qui inspirent nos menus, et
            celle des gestes transmis et affinés génération après génération.
          </p>

          <p>
            À La Maison, nous pensons qu’un grand repas ne se résume pas à ce qui se
            trouve dans l’assiette, mais aux moments partagés autour de la table.
            Bienvenue chez nous.
          </p>
        </motion.div>

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

export default StorySection;
