import { motion } from "motion/react";

export function Footer() {
  return (
    <footer id="contact" className="py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <p className="text-xs text-gray-500">
            © 2026 Mohammed Aslam K
          </p>

          <div className="flex justify-center gap-6 text-xs text-gray-600">
            <a
              href="https://www.linkedin.com/in/mohammed-aslam-k-918a33227/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Email
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
