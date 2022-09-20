import React from "react";
import '../css/Homepage.css';
// import Aos from "aos";
// import { useEffect } from "react";
// import "aos/dist/aos.css";

export default function Navbar() {

    // // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    
return (
        <>
            <div className="container">
                <div className="name">ISHA</div>
                <div className="info">
                    <div className="about io">
                        <a href="#long">About</a>
                    </div>
                    {/* <div className="portfolio io">
                        <a href="certificatepage.html" target="_blank">Certificates</a>
                    </div> */}
                    <div className="cntct io">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
            <div className="hi" >
                <h1 data-aos="fade-up" data-aos-duration="3000" >Hi,I'm Isha</h1>
                <p data-aos="fade-up" data-aos-duration="3000" >A Web Developer</p>
            </div>
        </>
    )
}
