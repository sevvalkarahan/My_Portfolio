const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Tailwind", level: 95 },
    { name: "HTML/CSS", level: 100 },
    { name: "SQL", level: 60 },
    { name: "Power BI", level: 70 },
];

export default function SkillsProgress() {
    return (
        <section className="py-32 px-10">
            <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

            <div className="max-w-2xl mx-auto space-y-6">
                {skills.map((s) => (
                    <div key={s.name}>
                        <p className="mb-1 font-semibold">{s.name}</p>
                        <div className="w-full bg-white/10 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                                style={{ width: `${s.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
