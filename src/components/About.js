import React from 'react'
import '../css/Homepage.css';
import avatar from '../img/avatar.png'
// import '../css/Phonehomepage.css';
export default function About() {
  return (
    <div id="long" className="long">
    <h2>About Me</h2>
    <div className="im">
    <img src={avatar} alt="ishuuu"/>
</div>
    <div className="para">
        I am pursuing Computer Science and Engineering at University Institue of Engineering and Technology , Kurukshetra University , Kurukshetra.
            <br/>
            I really enjoy solving problems as well as making things pretty and easy to use.
            <br/>
        I can't stop learning new things;the more;the better. 
    </div>
{/* <skills> */}
    <div className="myskills">
        <h2>My Skills</h2>
    </div>
    <div className="whole">
    <p>HTML</p>
<div className="cont">
  <div className="skills html">90%</div>
</div>

<p>CSS</p>
<div className="cont">
  <div className="skills css">87%</div>
</div>

<p>C/C++</p>
<div className="cont">
  <div className="skills cpp">85%</div>
</div>

<p>Graphics Designing-canva</p>
<div className="cont">
  <div className="skills graphics">90%</div>
</div>

<p>Problem Solving</p>
<div className="cont">
  <div className="skills ps">80%</div>
</div>

<p>Ethical Hacking</p>
<div className="cont">
  <div className="skills eh">70%</div>
</div>

<p>Python</p>
<div className="cont">
  <div className=" skills python">75%</div>
</div>

<p>Bootstrap</p>
<div className="cont">
  <div className="skills bs">85%</div>
</div>
<a href="https://github.com/Ishasaini123" target="_blank">Check out my Work</a>
<p><i className="arrow down"></i></p>
</div>
{/* </skills> */}
</div>


  )
}
