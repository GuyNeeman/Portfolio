import react from "../assets/react.svg";
import wordguess from "../assets/wordguess.png";
import blackjack from "../assets/blackjack.png"
import snake from "../assets/snake.png"

export default function Project() {
    const projects = [
        {
            title: "WordGuess",
            description: "Word guessing game made with React.",
            image: wordguess,
            link: "https://github.com/GuyNeeman/WordGuess",
        },
        {
            title: "Blackjack",
            description: "Blackjack game made with React.",
            image: blackjack,
            link: "https://github.com/GuyNeeman/Blackjack",
        },
        {
            title: "Snake",
            description: "Snake game made with React.",
            image: snake,
            link: "https://github.com/GuyNeeman/Snake",
        },
    ];

    return (
        <div className="grid-container">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src={project.image} alt={project.title} />
                    <div className="project-card-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project →
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
