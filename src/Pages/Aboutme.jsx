import {Link} from "react-router-dom";

export default function Aboutme() {
    return (
        <div className="home-container">

            <section className="home-section">
                <h2>Who am I?</h2>
                <p>
                    Hi, I’m <strong>Guy Neeman</strong>. I currently go to an Informatics School in Winterthur, Switzerland.
                    I'm 17 years old and I started my coding journey a few years ago. I am currently studying
                    <strong> Software Development</strong>.
                    I enjoy turning ideas into functional applications.
                </p>
                <p>
                    My journey in programming started with curiosity about how websites and minecraft servers work.
                    Since then, I’ve learned a lot about programming in multiple languages and I'm constantly learning more.
                </p>
            </section>

            <section className="home-section">
                <h3>What I Work With</h3>
                <p>
                    My skills range a bit. I can do Frontend, Backend and Databases/SQL.
                    Here is a quick overview of my skills:
                </p>
                <ul>
                    <li>💻 <strong>Frontend:</strong> React.js, HTML, CSS, JavaScript</li>
                    <li>⚙️ <strong>Backend:</strong> Java</li>
                    <li>🗄️ <strong>Databases:</strong> MySQL </li>
                    <li>🧠 <strong>Other Skills:</strong> REST APIs, Python, Git/GitHub, problem-solving, and debugging</li>
                </ul>
            </section>

            <section className="home-section">
                <h3>Always Learning</h3>
                <p>
                    I’m constantly trying to improve my skills, and learn new languages like
                    <strong> Rust</strong> and <strong> React Native</strong>,
                    and working on personal projects to get a better understanding of these languages.
                </p>
            </section>

            <section className="home-section">
                <h3>Outside Of Code</h3>
                <p>
                    Outside of coding, I enjoy playing guitar, gaming, lifting and playing tennis.
                </p>
            </section>

            <section className="home-section">
                <h3>Let’s Work Together</h3>
                <p>
                    I’m always open to new opportunities, collaborations, and projects. Whether it's Websites,
                    Backends/API or just basic Minecraft Plugins. Feel free to contact me.
                </p>
                <Link to="/contact" className="home-link">→ Get in touch</Link>
            </section>

        </div>
    );
}
