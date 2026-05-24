import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-8 py-6"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-sm">
          <span className="font-medium">Aslam</span>
          <span className="text-gray-400 mx-2">|</span>
          <span className="text-gray-600">Design Lead</span>
        </div>
      </div>
    </motion.nav>
  );
}
