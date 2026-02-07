"use client"
import Hero3D from "./Hero3D";
import DownloadCV from "./DownloadCV";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-between px-10 relative top-16">

            {/* TEXT */}
            <div className="z-10 max-w-xl">
                <h1 className="text-6xl font-extrabold text-[var(--text)]">
                    Şevval Karahan
                </h1>
                <h2 className="text-xl mt-3 text-[var(--muted)]">
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
                    <button className="px-6 py-3 bg-[var(--button)] text-white rounded-xl font-bold">
                        <a href="#projects">View Projects</a>
                    </button>
                    <button className="px-6 py-3  bg-[var(--button)] rounded-xl">
                        <a href="#contact">Contact</a>
                    </button>
                    <DownloadCV />


                </div>
            </div>

            {/* 3D OBJECT */}
            <div className="w-full md:w-1/2 h-[400px]">
                <Hero3D />
            </div>

        </section>
    );
}
