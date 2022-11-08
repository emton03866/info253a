import { useEffect, useState } from "react";
import "./Home.css"; 
import {useContext} from "react";
import { ItemContext } from "../App";
// import {Navigate, useNavigate} from "react-router-dom";


const Home = () => {
    // const navigate = useNavigate();
    // const contactNav= () => {
    //     navigate("/contact");
    // }
    // const {item, setItem} = useContext(ItemContext);
    return (
        <>
        
            <article id="main">
            <form>
                <section id="heading">
                    <div className="quickfind">
                        <i className="material-icons">menu</i>
                        <input type="search" className = "quick-find" placeholder= "Quick Find" />
                    </div>
                </section>
            </form>

            <section id="heading2">
                <div className ="thirtyfive">
                    <p><i className="material-icons">check_circle</i> <span style={{color:"#ffffff"}}>30/5</span></p>
                </div>
            </section>

            {/* left navigation */}
            <section id="leftnavi">
                <div className="inbox">
                    <i className="material-icons">inbox</i><strong><span className="listText"> Inbox<span style={{color:"#7e7d79"}}>  5</span></span></strong>
                </div>
                <div className ="today">
                    <i className="material-icons">today</i> <span className="listText">Today<span style={{color:"#7e7d79"}}>  5</span></span>
                </div>
                <div className ="upcoming">
                    <i className="material-icons">calendar_month</i> <span className="listText"> Upcoming</span>
                </div>
                <div className ="projects">
                    <strong><i className="material-icons">expand_more</i><span className="listText"/> Projects</strong>
                </div>
                
                <label for="check" class="work"><i className="material-icons">expand_more fiber_manual_record</i> <span style={{color:"#000000"}}>Work</span></label>
                <p> </p>
                <input type="checkbox" className="togCheck" id="check" />
                <div className="togContent">
                    <div className ="newbrand">
                        <i className="material-icons">fiber_manual_record</i> <span style={{color:"#000000"}}>New Brand</span><span style={{color:"#7e7d79"}}>  9</span>
                    </div>
                    <div className ="webupdate">
                        <i className="material-icons">person</i> <span style={{color:"#000000"}}>Website Update</span><span style={{color:"#7e7d79"}}> 11</span>
                    </div>
                    <div className ="roadmap">
                        <i className="material-icons">person</i> <span style={{color:"#000000"}}>Product Roadmap</span><span style={{color:"#7e7d79"}}>  11</span>
                    </div>
                    <div className ="agenda">
                        <i className="material-icons">person</i> <span style={{color:"#000000"}}>Meeting Agenda</span><span style={{color:"#7e7d79"}}>  6</span>
                    </div> 
                </div>
                <div className ="personal">
                    <i className="material-icons">chevron_right fiber_manual_record</i> <span style={{color:"#000000"}}>Personal</span><span style={{color:"#7e7d79"}}>   28</span>
                </div>
                <div className="addproject">
                    <i className="material-icons">add</i> <span style={{color:"#7e7d79"}}>Add Project</span>
                </div>
            </section>

            {/* main tasks displayed */}
            <section id="mainnavi">
                <h1>Inbox</h1>
                <div className="call_mom">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Call Mom</label><br /> 
                </div>
                <div className="scientific">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Buy the new issue of Scientific American</label><br />
                </div>

                <div className="josie">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Return the textbook to Josie</label><br /> 
                </div>

                <div className="rake">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Buy the new album by Rake</label><br /> 
                </div>
                <div className="dad">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Buy a gift card for Dad</label><br /> 
                </div>
                <div className="addtask1">
                        <i className="material-icons">add</i> <span style={{color:"#7e7d79"}}>Add task</span>
                </div>
            </section>
        </article>

        </>
    );
};

export default Home;