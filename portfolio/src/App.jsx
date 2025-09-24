import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {useState, useEffect} from "react";
import './App.css';
import Home from "./Pages/Home.jsx";
import Aboutme from "./Pages/Aboutme.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [menuOpen, setMenuOpen] = useState(false);

    // Apply dark mode class to body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div style={{padding: "20px", fontFamily: "Arial, sans-serif"}}>
            <h1>My Portfolio</h1>
            <BrowserRouter>

                <nav className="navbar">
                    <div className="nav-left">
                        <button
                            className={`burger ${menuOpen ? "active" : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            ☰
                        </button>
                        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link to="/aboutme" onClick={() => setMenuOpen(false)}>About Me</Link>
                            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </div>
                    </div>

                    <div className="nav-right">
                        {/* Language switch */}
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={language === "DE"}
                                onChange={() => setLanguage(language === "EN" ? "DE" : "EN")}
                            />
                            <span className="slider round">{language}</span>
                        </label>

                        {/* Dark mode switch */}
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                            />
                            <span className="slider round">{darkMode ? "🌙" : "🌞"}</span>
                        </label>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/aboutme" element={<Aboutme/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
