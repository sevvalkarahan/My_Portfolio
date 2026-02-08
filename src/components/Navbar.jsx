import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const { dark, setDark } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/10 border-b border-white/10 z-50">
            <div className="flex justify-between items-center px-6 py-4">
                <h1 className="font-bold text-xl">Şevval Karahan</h1>

                <div className="hidden md:flex items-center gap-6">
                    <a href="/" className="hover:text-[var(--primary)] ">Home</a>
                    <a href="#about" className="hover:text-[var(--primary)]">About</a>
                    <a href="#projects" className="hover:text-[var(--primary)]">Projects</a>
                    <a href="#contact" className="hover:text-[var(--primary)]">Contact</a>

                    <button onClick={() => setDark(!dark)}>
                        {dark ? <FaSun /> : <FaMoon />}
                    </button>
                </div>


                <button
                    className="md:hidden text-xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {open && (
                <div className="md:hidden flex flex-col bg-black/80 backdrop-blur-xl px-6 py-4 space-y-4">
                    <a onClick={() => setOpen(false)} href="/" className="hover:text-[var(--primary)]">Home</a>
                    <a onClick={() => setOpen(false)} href="#about" className="hover:text-[var(--primary)]">About</a>
                    <a onClick={() => setOpen(false)} href="#projects" className="hover:text-[var(--primary)]">Projects</a>
                    <a onClick={() => setOpen(false)} href="#contact" className="hover:text-[var(--primary)]">Contact</a>

                    <button onClick={() => setDark(!dark)} className="flex items-center gap-2">
                        {dark ? <FaSun /> : <FaMoon />}
                        Theme
                    </button>
                </div>
            )}
        </nav>
    );
}