import { useState } from 'react';
import { Navigate } from 'react-router';
// import useNavigate from 'react-router-dom';

import './homepage.css';
import myData from './myData.json';
import img1 from "../assets/TravelAI.png"
import img2 from "../assets/Webium.png"
import img3 from "../assets/Battlesheep.png"
import img4 from "../assets/DinoTimer.png"
import img5 from "../assets/CoolPeopleClub.png"
import nicksPicture from "../assets/nicks_picture.jpg"

function homepage() {
    const [section, setSection] = useState("PROJECTS");
    const imgs = [img1, img2, img3, img4, img5];
    const [navigating, setNavigating] = useState(null);
    const [goToSite, setGoToSite] = useState("");
    // const navigate = useNavigate();

    function handleChangeSection(e, newSection) {
        e.preventDefault();
        // console.log("click!");
        setSection(newSection);
    }
    function checkData(e) {
        e.preventDefault();
        console.log(myData);
    }
    function handleClickProject(e, link) {
        // e.preventDefault();

        // setNavigating(true);
        // setGoToSite(link);
    }
    // if (navigating !== null) {
    //     return <Navigate to={goToSite} replace={true} />
    // }
    return (
        <>
            <div className="topbar">
                <div className="holder1">
                    <p className="titleText">Nick Cioffi</p>
                </div>
                <div className="holder2">
                    {section === "ABOUT" ? (
                        <>
                            <p onClick={(e) => handleChangeSection(e, "ABOUT")} className="titleText2A">About</p>
                            <p onClick={(e) => handleChangeSection(e, "PROJECTS")} className="titleText2B">Projects</p>
                        </>
                    ) : (
                        <>
                            <p onClick={(e) => handleChangeSection(e, "ABOUT")} className="titleText2B">About</p>
                            <p onClick={(e) => handleChangeSection(e, "PROJECTS")}className="titleText2A">Projects</p>
                        </>
                    )}
                </div>
            </div>
            <div className="pad1"></div>
            <div className="holderL">
                <div className="line1"></div>
            </div>
            {section === "ABOUT" ? (
                <>
                    <div className="holder3">
                        <img className="img1" src={nicksPicture} />                            
                    </div>
                    <div className="pad2C"></div>
                    <div className="holder3">
                        <div className="holderB">
                            <p className="bodyText2">
                                Hello!  I'm Nick, a software developer based in NYC.
                                I spend my free time making cool stuff on the internet.
                                I recommend clicking the projects tab to see stuff I've made.
                                Thanks for checking out my page!  
                            </p>
                        </div>
                    </div>
                    <div className="pad2C"></div>
                </>
            ) : (
                <>
                    {/* <div className="pad2"></div> */}
                    <div className="pad2"></div>
                    {/* <button className="myButton" onClick={(e) => checkData(e)}>Check Data</button> */}
                    {myData !== null && myData !== undefined ? (
                        <>
                            {myData.Projects.map(project => 
                                <>
                                    <div className="holder3B" href={project.Link}>
                                            <a className="holderP" href={project.Link}>
                                                <img src={imgs[project.ID - 1]} className="img2"></img>
                                                <div className="holderP2">
                                                    <div className="holderP3">
                                                        {project.Team === "SOLO" ? (
                                                            <p className="pTag1" id="tag1A">{project.Team}</p>
                                                        ) : (
                                                            <p className="pTag1" id="tag1B">{project.Team}</p>
                                                        )}
                                                        <div className="pEmpty"></div>
                                                        {project.Type === "APP" ? (
                                                             <p className="pTag1" id="tag2A">{project.Type}</p>
                                                        ) : (
                                                            <p className="pTag1" id="tag2B">{project.Type}</p>
                                                        )}
                                                    </div>
                                                    <p className="pText1">{project.Name}</p>
                                                    <p className="pText2">{project.Description}</p>
                                                </div>
                                            </a>
                                        {/* </a> */}
                                    </div>
                                    <div className="pad2B"></div>
                                </> 
                            )}
                        </>
                    ) : (
                        <>
                        </>
                    )}
                    
                </>
            )}
            
        </>
        
    )
}

export default homepage;