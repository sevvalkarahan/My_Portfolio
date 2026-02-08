"use client"
import DownloadCV from "./DownloadCV";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {

    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center px-10 relative top-16 ">
            <div className="absolute top-0 left-0 w-full h-full object-cover opacity-40 ">
                <img
                    src="https://media.istockphoto.com/id/1510696458/vector/vector-digital-green-background-of-streaming-binary-code-matrix-background-with-numbers-1-0.jpg?s=612x612&w=0&k=20&c=TTkG2rwjYzXCTVzLDcX59UjPjKD0AJSWE2BnPh7s8X4="
                    alt="Background"
                    className="w-full"
                />
            </div>

            {/* TEXT */}
            <div className="z-10 max-w-xl bg-gray-500/20 p-10 rounded-2xl shadow-2xl">
                <h1 className="text-6xl font-extrabold text-white/90">
                    Şevval Karahan
                </h1>
                <h2 className="text-xl mt-3 text-white/80 h-10">
                    <Typewriter
                        words={["Frontend Developer", "Computer Engineer", "React & Next.js"]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                    />
                </h2>

                <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <motion.a
                        href="#projects"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition"
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition"
                    >
                        contact
                    </motion.a>

                    <DownloadCV />
                </div>
            </div>

        </section >
    );
}