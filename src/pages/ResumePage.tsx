import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0d1117] h-dvh pt-16"
    >
      <iframe
        src="https://otaviozanonresume.vercel.app"
        title="Resume"
        className="w-full h-[calc(100dvh-4rem)] border-none block"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </motion.main>
  );
}
