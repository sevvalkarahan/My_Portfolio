import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 20);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 20);

        return () => clearInterval(timer);
    }, [target]);

    return <span>{count}</span>;
}

export default function Stats() {
    return (
        <section className="py-24 px-10 text-center">
            <div className="max-w-4xl mx-auto flex gap-10 justify-center">


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
                >
                    <h3 className="text-5xl font-bold text-[var(--primary)]">
                        <Counter target={10} />+
                    </h3>
                    <p className="mt-2 text-lg">Projects Completed</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
                >
                    <h3 className="text-5xl font-bold text-[var(--secondary)]">
                        <Counter target={8} />+
                    </h3>
                    <p className="mt-2 text-lg">Technologies Used</p>
                </motion.div>

            </div>
        </section>
    );
}
