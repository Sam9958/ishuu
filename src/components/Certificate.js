import React from 'react'
import ethical from '../img/Ethical Hacking Training - Certificate of Completion (1)_page-0001.jpg'
import isha from '../img/ISHA SAINI_page-0001.jpg'
import snack from '../img/isha_0401-SNCK1A21_page-0001.jpg'
import '../css/certicate.css';
export default function Certificate() {
  return (
    <>
    <h1>Certificates</h1>
    <div class="gallery" id="gallery">
        <div class="gallery-item">
            <div class="content"><img src={ethical} alt=""/></div>
        </div>
        <div class="gallery-item">
            <div class="content"><img src={isha} alt=""/></div>
        </div>
        <div class="gallery-item">
            <div class="content"><img src={snack} alt=""/></div>
        </div>
        <div class="gallery-item">
            <div class="content"><img src={ethical} alt=""/></div>
        </div>
    </div>
    </>
  )
}
