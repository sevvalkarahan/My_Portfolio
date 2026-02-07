const projects = [
    {
        title: "CV Builder App",
        tech: "Next.js + html2pdf.js",
        link: "https://github.com/sevvalkarahan/CV_creation_page_with_next.js"
    },
    {
        title: "Basitleştirilmiş E-Ticaret Uygulması",
        tech: "React + Redux Toolkit",
        link: "https://github.com/sevvalkarahan/E-ticaret"
    },
    {
        title: "Desserts Menu",
        tech: "React ",
        link: "https://github.com/sevvalkarahan/desserts_menu"
    },
    {
        title: "todo List",
        tech: "React + API",
        link: "https://github.com/sevvalkarahan/Todo_List_React"
    },
    {
        title: "Weather App",
        tech: "React + Recharts + GoogleMap",
        link: "https://github.com/sevvalkarahan/weather_app"
    },
    {
        title: "Currency App",
        tech: "React + API",
        link: "https://github.com/sevvalkarahan/currency-app"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-10">
            <h2 className="text-4xl font-bold mb-10">Projects</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <div
                        key={index}
                        className="backdrop-blur-xl p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:scale-105 transition"
                    >
                        <h3 className="text-xl font-bold">{p.title}</h3>
                        <p className="mt-2 text-white/70">{p.tech}</p>
                        <button className="py-3 px-2 mt-3 rounded-2xl bg-[var(--primary)] shadow-2xl hover:scale-90 transition">
                            <a href={p.link}>Projeye git</a>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
