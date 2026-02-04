import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Timeline from "../components/Timeline";
import Stats from "../components/Stats";
import SkillsChart from "../components/SkillChart";




export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Timeline />
            <Stats />
            <SkillsChart />
            <Projects />
            <Contact />
        </>
    );
}
