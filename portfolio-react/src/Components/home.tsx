import hoverprofilepic from '../Assests/pexels-hristo-fidanov-1252873.jpg';
import { useState } from 'react';
import profilepic from '../Assests/eren-yeager.webp';
import { Visitors } from './visitors';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

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
                        <FaLinkedin />
                        <FaSquareXTwitter />
                        <IoLogoGithub />
                    </div>
                </div>
            </div>
        </>
    )
}