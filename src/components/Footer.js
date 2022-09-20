import React from 'react'
import '../css/Homepage.css';
// import '../css/Phonehomepage.css';

export default function Footer() {
  return (
    <footer>
    <div id="contact" className="contact">
        <div className="ct">
        <h4>Contact me</h4>
            <p><b>Get in touch with me - <a className="hv" href="https://mail.google.com/">ishasaini0404@gmail.com</a></b></p>
            <p>or find me on:</p>
        </div>
        <div className="profile">
             {/* <a href="https://www.linkedin.com/in/isha-saini-0404/">LinkedIn</a> */}
            {/* <a href="https://www.codechef.com/users/isha_0401">Codechef</a> */}
            {/* <a href="https://www.instagram.com/_ishaa_04/">Instagram</a>  */}
            <a href="https://www.linkedin.com/in/isha-saini-0404/" className="fa fa-linkedin"></a>
            <a href="https://www.codechef.com/users/isha_0401" className="fa fa-codechef">Codechef
                {/* <!-- <img src="img/codechef-removebg-preview.png"> --> */}
            </a>
            <a href="https://www.hackerrank.com/ishasaini0404" className="fa fa-hackerrank">Hackerrank</a>
            <a href="https://www.instagram.com/_ishaa_04/" className="fa fa-instagram"></a>

        </div>
    </div>
</footer>
  )
}
