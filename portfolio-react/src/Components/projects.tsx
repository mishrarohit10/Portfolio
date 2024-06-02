import project1 from '../Assests/Eren-motivationwebp.webp';
import project2 from '../Assests/eren-yeager.webp';

export function Projects() {
    return (
        <div className="projects">
            <h1>Our Projects</h1>
            <div className="project-list">
                <div className="project">
                    <h2>Project 1</h2>
                    <img src={project2} alt="Project 1" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="project">
                    <h2>Project 2</h2>
                    <img src={project1} alt="Project 2" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    );
}