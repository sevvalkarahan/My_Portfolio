import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
    const { dark, setDark } = useTheme();

    return (
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/10 border-b border-white/10 flex justify-between px-10 py-4 z-50">
            <h1 className="font-bold text-xl">Şevval Karahan</h1>

            <div className="flex items-center gap-6">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

                <button onClick={() => setDark(!dark)}>
                    {dark ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </nav>
    );
}
