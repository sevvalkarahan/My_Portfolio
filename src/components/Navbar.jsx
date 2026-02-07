import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const { dark, setDark } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-[var(--card)] border-b border-[var(--border)] px-6 py-4 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <h1 className="font-bold text-xl text-white">Şevval Karahan</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-[--muted]">
                    <a className="hover:text-[var(--primary)] transition" href="/">Home</a>
                    <a className="hover:text-[var(--primary)] transition" href="#about">About</a>
                    <a className="hover:text-[var(--primary)] transition" href="#projects">Projects</a>
                    <a className="hover:text-[var(--primary)] transition" href="#contact">Contact</a>

                    <button
                        onClick={() => setDark(!dark)}
                        className="text-[--primary] hover:text-[--accent] transition"
                    >
                        {dark ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-xl"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[--card] border-t border-white/10 mt-4 p-6 flex flex-col gap-4 text-[--muted]">
                    <a onClick={() => setOpen(false)} href="/">Home</a>
                    <a onClick={() => setOpen(false)} href="#about">About</a>
                    <a onClick={() => setOpen(false)} href="#projects">Projects</a>
                    <a onClick={() => setOpen(false)} href="#contact">Contact</a>

                    <button
                        onClick={() => setDark(!dark)}
                        className="flex items-center gap-2 text-[--primary]"
                    >
                        {dark ? <FaSun /> : <FaMoon />} Theme
                    </button>
                </div>
            )}
        </nav>
    );
}
