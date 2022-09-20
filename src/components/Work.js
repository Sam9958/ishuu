import React from 'react'
import '../css/Homepage.css';
import logo from '../img/logo.png'
import logo1 from '../img/Logo_of_THDCIL.png'
import logo2 from '../img/MILAAP new white.png'
// import '../css/Phonehomepage.css';
export default function Work() {
  return (
    <div className="work">
        <h1>Experience</h1>
        <div className="thdc su" data-aos="fade-up"  data-aos-duration="3000" >
            <div className="i va">
                <img src={logo1} alt="logo"/>
            </div>
            <div className="w">THDC India Limited, is under the ownership of National Thermal Power Corporation Limited, Ministry of Power, Government of India.
                <br/> It was incorporated in July’88 to develop, operate and maintain the Tehri Hydro Power Complex and other Hydro Projects. 
                <br/>THDC India Limited is a Mini Ratna Category-I Enterprise.</div>
           
        </div>
        <div className="milaap su" data-aos="fade-up"  data-aos-duration="3000">
            <div className="i va">
                <img src={logo2} alt="logo"/>
            </div>
            <div className="w" >Milaap-Alumni Meet conducted by UIET.
                <br/>
                I worked under Graphics and Media team as a co-ordinator . I designed the Id Cards for this event. <br/>
                It was a very skill enhancing event ,got to know many things and skills.
            </div>
        </div>
        <div className="excelsior su" data-aos="fade-up"  data-aos-duration="3000">
            <div className="i va">
                <img src={logo} alt="logo"/>
            </div>
            <div className="w">Excelsior-One of the biggest fest of UIET. 
                <br/>A fest where i worked as a graphic designer and it was really a good experience.<br/>
                A journey from making posters to making flex.</div>
        </div>
    </div>
  )
}
