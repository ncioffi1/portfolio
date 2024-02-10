import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { Navigate } from 'react-router';
// import useNavigate from 'react-router-dom';

import './homepage.css';
import myData from './myData.json';
import img1 from "../assets/TravelAI.png"
import img2 from "../assets/Webium.png"
import img3 from "../assets/Battlesheep.png"
import img3B from "../assets/BattlesheepV7.png"
// import img3C from "../assets/BattlesheepV2.png"
import img4 from "../assets/DinoTimer.png"
import img5 from "../assets/CoolPeopleClub.png"
import nicksPicture from "../assets/nicks_picture.jpg"
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

function homepage() {
    const [section, setSection] = useState("ABOUT");
    const imgs = [img1, img2, img3, img4, img5];
    const [navigating, setNavigating] = useState(null);
    const [goToSite, setGoToSite] = useState("");
    const app = useRef<HTMLDivElement>(null);
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    
    function handleChangeSection(e, newSection) {
        e.preventDefault();
        console.log("click!");
        if (newSection === "HOME") {
            gsap.to(window, { duration: 1, scrollTo: {x: 0, y: 0 }});
            // window.scrollTo(0, 0);
        } else if (newSection === "ABOUT") {
            gsap.to(window, { duration: 1, scrollTo: {x: 0, y: 200 }});
            // window.scrollTo(0, 200);
        } else if (newSection === "PROJECTS") {
            gsap.to(window, { duration: 1, scrollTo: {x: 0, y: 350 }});
            // window.scrollTo(0, 0);
        }
        // setSection(newSection);
    }
    function checkData(e) {
        e.preventDefault();
        console.log(myData);
    }

    useEffect(() => {
        if (section === "ABOUT") {
            let tl = gsap.timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                    // scroller: ".container",
                  trigger: ".holder1R",
                  pin: false, // pin the trigger element while active
                    start: "top top", // start when top of trigger hits top of viewport
                    end: "+=100%", // end when bottom of trigger hits top of viewport
                    scrub: true, // smooth scrubbing effect
                    // markers: true
                    pinSpacing: false,
                    // preventOverlaps: true,
                    // snap: {y: {values: [2000]}}
                    // snap: {
                    //     // snapTo: [0, 0.24, 0.27, 0.45, 0.62, 0.74, 1],
                    //     snapTo: [0, 0.24, 0.27, 0.45, 0.52, 0.66, 1],
                    //     duration: 0, 
                    //     delay: 0 
                    //     // ease: "power1.out"
                        
                    // }
                    // snap: {
                    //     snapTo: 0.5,
                    //     duration: 0.02,
                    //     ease: "power1.inOut"
                    // }
                },
                // scrollTrigger: {
                //     trigger: ".holder1R2",
                //     pin: true, // pin the trigger element while active
                //     start: "top top", // start when top of trigger hits top of viewport
                //     end: "+=100%", // end when bottom of trigger hits top of viewport
                //     scrub: true, // smooth scrubbing effect
                //     // markers: true
                // },
                // scrollTrigger: {
                //     trigger: ".holder1R3",
                //     pin: true, // pin the trigger element while active
                //     start: "top top", // start when top of trigger hits top of viewport
                //     end: "+=100%", // end when bottom of trigger hits top of viewport
                //     scrub: true, // smooth scrubbing effect
                //     // markers: true
                //     },
              });
            // let tl2 = gsap.timeline({
            //     // yes, we can add it to an entire timeline!
            //     scrollTrigger: {
            //       trigger: ".holder1R2",
            //       pin: true, // pin the trigger element while active
            //         start: "top top", // start when top of trigger hits top of viewport
            //         end: "+=100%", // end when bottom of trigger hits top of viewport
            //         scrub: true, // smooth scrubbing effect
            //         // markers: true
            //         pinSpacing: false
            //     },
            //   });
            // let tl3 = gsap.timeline({
            //     // yes, we can add it to an entire timeline!
            //     scrollTrigger: {
            //         trigger: ".holder1R3",
            //         pin: true, // pin the trigger element while active
            //           start: "top top", // start when top of trigger hits top of viewport
            //           end: "+=100%", // end when bottom of trigger hits top of viewport
            //           scrub: true, // smooth scrubbing effect
            //           // markers: true
            //       },
            // })
            tl.from(".holder1R", { delay: 0.2, y: 0, opacity: 1, duration: .4, ease: "power1"})
              .to(".holder1R", {delay: 0.2, y: -20, opacity: 0, duration: .4, ease: "power1"})
            tl.from(".holder1R2", { delay: 0.2, y: 20, opacity: 0, autoAlpha: 0, duration: .4, ease: "power1"})
              .to("#bgColorID", {backgroundColor: "#feeafa", duration: 0.4, ease: "power1"}, "<")
              .to(".holder1R2", {delay: 0.2, y: -0, opacity: 1, autoAlpha: 1, duration: .4, ease: "power1"})
              
              .to(".holder1R2", {delay: 0.2, y: -20, opacity: 0, autoAlpha: 0, duration: .4, ease: "power1"})
            tl.from(".holder1R3", { delay: 0.2, y: 20, opacity: 0, autoAlpha: 0, duration: .4, ease: "power1"})
              .to("#bgColorID", {backgroundColor: "#dee2ff", duration: 0.4, ease: "power1"}, "<")
              .to(".holder1R3", {delay: 0.2, y: -0, opacity: 1, autoAlpha: 1, duration: .4, ease: "power1"})
              .to(".holder1R3", {delay: 0.2, y: -800, opacity: 1, autoAlpha: 1, duration: 5, ease: "none"});
            gsap.to(".textHome2", { delay: 0.2, y: -20, opacity: 1, duration: 1, ease: "power1" });
            gsap.to(".textHome3", { delay: 0.7, y: -20, opacity: 1, duration: 1, ease: "power1" });
            gsap.to(".textHome4", { delay: 1.2, y: -20, opacity: 1, duration: 1, ease: "power1" });
            gsap.to(".tqIcons", { delay: 1.2, y: -20, opacity: 1, duration: 1, ease: "power1" });
            
        }
      }, [section])

    document.onclick = (e) => {
        console.log(e.target.className)
    }

    return (
        <> 
        <div className="myRoot">
            <div className="topbarC">
                <div className="topbar">
                    
                    <div className="holder1">
                        <p onClick={(e) => handleChangeSection(e, "HOME")} className="titleText">nick cioffi</p>
                    </div>
                    <div className="holder2">
                        {section === "ABOUT" ? (
                            <>
                                <p onClick={(e) => handleChangeSection(e, "ABOUT")} className="titleText2A">about</p>
                                <p onClick={(e) => handleChangeSection(e, "PROJECTS")} className="titleText2B">projects</p>
                            </>
                        ) : (
                            <>
                                <p onClick={(e) => handleChangeSection(e, "ABOUT")} className="titleText2B">about</p>
                                <p onClick={(e) => handleChangeSection(e, "PROJECTS")}className="titleText2A">projects</p>
                            </>
                        )}
                    </div>
                </div>
                <div className='holderLTop'>
                    <div className="line1Top"></div>
                </div>
                <div className="bgColor" id="bgColorID"></div>
                
            </div>
            
            <div className="scroll" id="bgColorID">

            {section === "ABOUT" ? (
                <>
                    <section className="holder1R">
                        <div className="holder1Q">
                            {/* <p className="tq1">Hey!  My name is</p> */}
                            <div className="tqPad"></div>
                            <div className="tqPadTop"></div>
                            {/* <p className="tq1">welcome to my page!  my name is</p> */}
                            <p className="textHome2">nick cioffi</p>
                            <p className="textHome3">full stack developer</p>
                            <p className="textHome4">I’m a software engineer that makes applications & games.  I love taking projects over the finish line, and I always enjoy a good challenge.  </p>
                            <div className="tqIcons">
                                <a href="https://www.linkedin.com/in/nicholas-cioffi-373913139/">
                                    <i class="fa-brands fa-linkedin" id="tIcon1"></i>
                                </a>
                                <a href="https://github.com/ncioffi1">
                                    <i class="fa-brands fa-github" id="tIcon2"></i>
                                </a>
                                <a href="https://docs.google.com/document/d/1Z3Q-wDLu397jQ2ojGUZAOS7Jg-DBot2-xx5L-3GTYd4/edit?usp=sharing">
                                    <i class="fa-solid fa-file-pdf" id="tIcon2"></i>
                                </a>
                            </div>
                            
                            {/* <img className="img1" src={nicksPicture} />                             */}
                        </div>
                        <div className="holder1Q">
                            <div className="tqPadTop"></div>
                            <div className="shelfEmpty" />
                            <div className="holder1C">
                                <div className="holderX">
                                    <img className="img3A" src={img1} /> 
                                    <img className="img3A" src={img2} /> 
                                    
                                </div>
                                <div className="holderX">
                                    <img className="img3B" src={img3B} /> 
                                    <img className="img3A" src={img4} /> 
                                    <img className="img3A" src={img5} /> 
                                </div>
                          
                                <div className="holderL">
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="holder1R2">
                        <div className="tqPadAbout"></div>
                        <div className="holder1Rx">
                            <div className="holder1Q">
                                <p className="textHome2B">about me</p>
                                <div className="tqPadAbout2"></div>
                                <p className="textHome3B">As a full-stack developer, I’m fueled by an unending hunger to innovate, and to see projects through to the end.  This often involves tough choices, learning on the fly, and taking ownership of a project’s quality.  </p>
                                <div className="tqPadAbout3"></div>
                                <p className="textHome3B">I’ve made a number of different projects so far, some with teams, some on my own.  To each project, I bring the same creative mindset, and the same work ethic, and I always look forward to bringing those qualities to each role.</p>
                            </div>
                            <div className="holder1Q">
                                <div className="imgHolder">
                                    <img className="imgPortrait" src={nicksPicture} /> 
                                    <p className="imgText">this is me</p>
                                </div>
                                
                                
                            </div>
                        </div>
                    </section>
                    <section className="holder1R3">
                        <div className="tqPadAbout"></div>
                        <div className="holder1RxC">
                            <p className="textHome2C">my projects</p>
                        </div>
                        <div className="tqPad3"></div>
                        {myData !== null && myData !== undefined ? (
                        <>
                            {myData.Projects.map(project => 
                                <>
                                    <div className="holder3B" href={project.Link}>
                                            <a className="holderP" href={project.Link}>
                                                <img src={imgs[project.ID - 1]} className="img2"></img>
                                                <div className="holderP2">
                                                    <div className="holderP2B">
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
                                                    <div className="holderP3B">
                                                        {project.Resources.map(resource => (resource === project.Resources[project.Resources.length - 1]) ? (
                                                            <>
                                                                <p className="pR2">{resource}&nbsp;&nbsp;</p>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <p className="pR1">{resource}&nbsp;•&nbsp;</p>
                                                            </>
                                                        ))}
                                                    </div>
                                                    </div>
                                                    <p className="pText1">{project.Name}</p>
                                                    <p className="pText2">{project.Description}</p>
                                                </div>
                                            </a>
                                       
                                    </div>
                                    <div className="pad2B"></div>
                                    
                                </> 
                            )}
                            <div className="myFooter">
                                                            

                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                        
                    </section>
                    
                    {/* <div className="pad2C"></div>
                    <div className="pad2C"></div>

                 
                    <div className="tqPad2"></div>
                    <div className="holderL">
                     
                    </div>
                    <div className="tqPad2B"></div> */}
                   
                    
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
                                                    <div className="holderP2B">
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
                                                    <div className="holderP3B">
                                                        {project.Resources.map(resource => (resource === project.Resources[project.Resources.length - 1]) ? (
                                                            <>
                                                                <p className="pR2">{resource}&nbsp;&nbsp;</p>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <p className="pR1">{resource}&nbsp;•&nbsp;</p>
                                                            </>
                                                        ))}
                                                    </div>
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
            </div>
        </div>    
        </>
        
    )
}

export default homepage;