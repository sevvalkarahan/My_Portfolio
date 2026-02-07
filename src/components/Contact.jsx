import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_273e4yb",
            "template_lqjtbgh",
            form,
            "kupylAfBIW3TXAMeG"
        ).then(
            () => setStatus("Message sent successfully!"),
            () => setStatus("Failed to send message.")
        );

        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-32 px-10">
            <div className="absolute inset-0 contact-glow blur-3xl"></div>

            <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

                {/* FORM */}
                <form
                    onSubmit={sendEmail}
                    className=" backdrop-blur-xl p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4"
                >
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-3  border bg-[#020617] border-[var(--border)] rounded"
                        required
                    />

                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-3  border bg-[#020617] border-[var(--border)] rounded"
                        required
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-3  border bg-[#020617] border-[var(--border)] rounded"
                        required
                    />

                    <button className="w-full bg-[var(--primary)] p-3 rounded-xl font-bold">
                        Send Message
                    </button>

                    {status && <p className="text-green-400">{status}</p>}
                </form>

                {/* INFO */}
                <div className="flex flex-col justify-center space-y-6">


                    <p>📍 Istanbul, Türkiye</p>
                    <p>📧 sevvalkarhn@gmail.com</p>

                    <div className="flex gap-4 text-2xl">
                        <a href="https://github.com/sevvalkarahan" target="_blank"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/%C5%9Fevval-karahan-429b58221/" target="_blank"><FaLinkedin /></a>

                    </div>
                </div>

            </div>
        </section>
    );
}
