import { motion } from "framer-motion";
import DownloadCV from "./DownloadCV";


const timelineData = [
    {
        year: "2021 - 2025",
        title: "Bilgisayar Mühendisliği",
        place: "Sivas Cumhuriyet Universitesi",
        desc: "Bilgisayar Mühendisliği okuyorum ve ön uç geliştirme, veri bilimi ve yazılım mühendisliği projelerine odaklanıyorum.",
    },
    {
        year: "2023",
        title: "Frontend Developer Stajyeri",
        place: "Habertürk",
        desc: "HTML, CSS, JavaScript ve React kullanarak ön uç odaklı projelerde çalıştım.",
    },
    {
        year: "2025",
        title: "Frontend Developer Stajyeri",
        place: "Koç Holding Amerikan Hastanesi",
        desc: "React kullanarak ön uç odaklı projelerde çalıştım.",
    },
    {
        year: "2025 - Present",
        title: "Personal Projects & Portfolio",
        place: "",
        desc: "Kişisel Projeler ve Portföy Kendi Kendini Yöneten Modern web teknolojilerini kullanarak iş ilanı platformları, özgeçmiş oluşturma uygulamaları, kontrol panelleri ve portföy web siteleri geliştiriyorum.",
    },
];

export default function Timeline() {
    return (
        <section className="py-32 px-10">


            <h2 className="text-4xl font-bold mb-16 text-center">Journey</h2>
            <div className="absolute inset-0 timeline-glow blur-3xl"></div>

            <div className="max-w-4xl mx-auto relative border-l border-white/20">
                <div className="absolute inset-0 timeline-glow blur-3xl"></div>
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="mb-12 ml-6"
                    >

                        <span className="absolute -left-3 w-6 h-6 bg-purple-500 rounded-full"></span>

                        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10">
                            <p className="text-sm text-purple-400">{item.year}</p>
                            <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                            <p className="text-white/70">{item.place}</p>
                            <p className="mt-3 text-white/80">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="absolute inset-0 cv-glow blur-3xl"></div>

            <div className="text-center mt-16">
                <DownloadCV />
            </div>
        </section>
    );
}
