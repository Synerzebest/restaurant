"use client"

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-light mb-4 text-yellow-800 font-cormorant"
        >
          La Maison
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-yellow-950/60 text-sm tracking-wide mb-8"
        >
          Expérience gastronomique depuis 1987
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8 text-sm text-yellow-950/60"
        >
          <a href="#menu" className="hover:text-yellow-800 transition-colors duration-300">
            Menu
          </a>
          <a href="tel:+32 24 54 87 78" className="hover:text-yellow-800 transition-colors duration-300">
            Réservations
          </a>
          <a href="mailto:reservations@lamaison.be" className="hover:text-yellow-800 transition-colors duration-300">
            Contact
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-xs text-yellow-950/45"
        >
          © {new Date().getFullYear()} La Maison. Tous droits réservés.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
