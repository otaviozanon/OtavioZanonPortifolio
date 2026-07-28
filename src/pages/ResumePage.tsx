import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0d1117]"
      style={{ height: "calc(100vh - 4rem)", marginTop: "4rem" }}
    >
      <iframe
        src="https://otaviozanonresume.vercel.app"
        title="Resume"
        className="w-full h-full border-none block"
        sandbox="allow-scripts allow-same-origin"
      />
    </motion.main>
  );
}
