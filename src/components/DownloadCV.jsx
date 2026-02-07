import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function DownloadCV() {
    return (
        <motion.a
            href="/Şevval_Karahan_Frontend_Developer_CV.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--button)] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition"
        >
            <FaDownload />
            Download CV
        </motion.a>
    );
}
