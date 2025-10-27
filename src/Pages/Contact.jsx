export default function Contact() {
    return (
        <div className="home-container">

            <section className="home-section">
                <h2>Get in Touch</h2>
                <p>
                    I’m always happy to connect. Whether you have a question, an idea or want to collaborate.
                </p>
            </section>

            <section className="home-section">
                <h3>Contact Information</h3>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:guyneeman@outlook.com" className="home-link">guyneeman@outlook.com</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/guy-neeman-55017b257/" target="_blank" rel="noopener noreferrer" className="home-link">linkedin.com/in/guy-neeman</a></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/GuyNeeman" target="_blank" rel="noopener noreferrer" className="home-link">github.com/GuyNeeman</a></li>
                </ul>
            </section>

            <section className="home-section">
                <h3>Send a Message</h3>
                <p>
                   You can reach out directly by email, or connect with me on LinkedIn or GitHub.
                </p>
                <p>
                    I usually respond within a day.
                </p>
            </section>

        </div>
    );
}
