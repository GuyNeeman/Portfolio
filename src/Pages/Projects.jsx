import Project from "../Components/Projects.jsx";

export default function Projects() {

    return(
        <>
            <section className="home-section">
                <h3>Projects</h3>
                <p>
                    Here is a showcase of some of the Projects that I have done:
                </p>
            </section>
            <Project/>

            <section className="home-section">
                <p>
                    This is just a few of my projects. You can find more on my GitHub.
                </p>
            </section>
        </>
    )
}