"use client"
import Hero3D from "./Hero3D";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-between px-10 relative top-16">

            {/* TEXT */}
            <div className="z-10 max-w-xl">
                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Şevval Karahan
                </h1>
                <h2 className="text-xl mt-3 text-purple-300">
                    <Typewriter
                        words={["Frontend Developer", "Computer Engineer", "React & Next.js"]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                    />
                </h2>

                <div className="mt-8 flex gap-4">
                    <button className="px-6 py-3 bg-white text-black rounded-xl font-bold">
                        <a href="#projects">View Projects</a>
                    </button>
                    <button className="px-6 py-3 border border-white/30 rounded-xl">
                        <a href="#contact">Contact</a>
                    </button>
                </div>
            </div>

            {/* 3D OBJECT */}
            <div className="w-full md:w-1/2 h-[400px]">
                <Hero3D />
            </div>

        </section>
    );
}
