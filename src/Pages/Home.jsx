import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">

            <section className="home-section">
                <h2>Welcome to my page!</h2>
                <p>
                    Hi, I’m <strong>Guy Neeman</strong> a passionate developer and creative
                    problem solver. I currently go to an informatics school in Winterthur, Switzerland.
                    I love bringing ideas to life using my skills in Java and ReactJS.
                </p>
                <p>
                    I enjoy developing ideas and turning them into fully functioning Websites
                    or Applications.
                </p>
            </section>

            <section className="home-section">
                <h3>About Me</h3>
                <p>
                    I started my coding journey a few years ago and have been learning nonstop
                    ever since. My current focus is on <strong>React.js</strong> and <strong>Java</strong>,
                    but I also experiment a bit with <strong>Python</strong> and <strong>SQL</strong>.
                </p>
                <Link to="/aboutme" className="home-link">→ Learn more about me</Link>
            </section>

            <section className="home-section">
                <h3>What I Do</h3>
                <ul>
                    <li><strong>Web Development</strong> — building responsive, interactive websites
                        using React.js or Vanilla JavaScript and HTML.
                    </li>
                    <li><strong>Spring Boot</strong> — developing backend systems with REST APIs and
                        Java-based frameworks.
                    </li>
                    <li><strong>SQL & Databases</strong> — designing efficient database schemas and writing optimized
                        queries.
                    </li>
                </ul>
            </section>

            <section className="home-section">
                <h3>Featured Projects</h3>
                <p>
                    Here are a few of my favorite projects that I made:
                </p>
                <ul>
                    <li>🔹 <strong>Portfolio Website</strong> — the website you are currently on.</li>
                    <li>🔹 <strong>Multiple Games</strong> — plenty of games made with ReactJS.</li>
                    <li>🔹 <strong>Minecraft Plugin</strong> — custom Minecraft plugins for Servers.
                    </li>
                </ul>
                <Link to="/projects" className="home-link">→ See all projects</Link>
            </section>

            <section className="home-section">
                <h3>Let’s Connect</h3>
                <p>
                    Do you have an idea, a question or want to collaborate?
                </p>
                <Link to="/contact" className="home-link">→ Get in touch</Link>
            </section>

        </div>
    );
}
