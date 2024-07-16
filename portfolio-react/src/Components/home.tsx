import hoverprofilepic from '../Assests/eren-yeager.webp';
import { useState } from 'react';
import profilepic from '../Assests/eren-yeager.webp';
import { Visitors } from './visitors';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { MdDownload } from "react-icons/md";

export function Home() {
    const [hoverd, setHoverd] = useState(profilepic);

    function isHovering() {
        setHoverd(hoverprofilepic);
    };

    function isNotHovering() {
        setHoverd(profilepic);
    };

    return (
        <>
            <Visitors />
            <div className="App">
                <div className="profile-pic-container">
                    <img
                        className="portfolio"
                        src={hoverd}
                        alt="profile-pic"
                        onMouseEnter={isHovering}
                        onMouseLeave={isNotHovering}
                    />
                </div>

                <div className='home-icon-container'>
                    <div className='home-icons'>
                        <a href="https://www.linkedin.com/in/mishrarohit10/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={50} />
                        </a>
                    </div>

                    <div className='home-icons'>
                        <a href="https://x.com/mishrajeeee" target="_blank" rel="noopener noreferrer">
                            <FaSquareXTwitter size={50} />
                        </a>
                    </div>

                    <div className='home-icons'>
                        <a href="https://github.com/mishrarohit10/" target="_blank" rel="noopener noreferrer">
                            <IoLogoGithub size={50} />
                        </a>
                    </div>

                    <div className="download-btn">
                        <a href="/Rohit-Mishra-Resume.pdf" download="Rohit-Resume.pdf">
                            <p>
                                <MdDownload size={40} />
                                <span>Resume</span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}