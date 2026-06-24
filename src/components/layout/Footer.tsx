import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-t border-slate-200 bg-[#e8e8e8] py-6 px-8"
    >
      <div className="max-w-6xl mx-auto text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Mohammed Aslam Konnengal. All rights reserved.
      </div>
    </motion.footer>
  );
}
