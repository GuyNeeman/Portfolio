import wordguess from "../assets/wordguess.png";
import blackjack from "../assets/blackjack.png";
import snake from "../assets/snake.png";
import slotmachine from "../assets/slotmachine.png";
import TicTacToeExtended from "../assets/tictactoeextended.png";
import tictactoe from "../assets/tictactoe.png"

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
        {
            title: "Slot Machine",
            description: "Slot Machine game made with React.",
            image: slotmachine,
            link: "https://github.com/GuyNeeman/Slot-Machine",
        },
        {
            title: "TicTacToe Extended",
            description: "TicTacToe Extended version game made with React",
            image: TicTacToeExtended,
            link: "https://github.com/GuyNeeman/TicTacToeReactExtended"
        },
        {
            title: "TicTacToe",
            description: "TicTacToe game made with React.",
            image: tictactoe,
            link: "https://github.com/GuyNeeman/TicTacToeReact"
        }

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
