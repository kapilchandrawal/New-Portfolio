import React from 'react';
import './Contact.css';
import image from '../assets/Devi_Ahilya_Vishwavidyalaya_Logo.png';


export default function Contact() {
    return (
        <div className='contact_page'>

            <div class="col-sm-6 col-md-4 text-center footer-navigation">
                <p><img src={image} style={{}} alt="" /></p>
                <p class="links">Master of Computer Applications (MCA) </p>
                <p class="links">International Institute Of Professional Studies</p>
                <p class="links">Devi Ahilya Vishwavidyalaya, Indore</p>
                <p class="company-name">2014 - 2020</p>
            </div>
            <div class="">
                <div>
                    <p><span class="">Gulab Bagh Colony,</span> Indore,&nbsp;Madhya Pradesh,India-452010</p>
                </div>

            </div>
            <div class="social-links">
                <h4 style={{ fontSize: 25 }}>Connect</h4>
                <div>
                    <a
                        style={{}} href="https://www.linkedin.com/in/kapil-chandrawal-b2a9241ba/"
                        target="_blank" rel="noreferrer" >LinkedIN
                    </a>
                </div>
                <div>
                    <a
                        style={{}} href="https://github.com/kapilchandrawal"
                        target="_blank" rel="noreferrer">GitHub
                    </a>
                </div>

            </div >
            <div class="social-links">
                <h4 style={{ fontSize: 25 }}>Mail me here:</h4>
                <div>
                    <a href="mailto:kapilchandrawal001@gmail.com" target="_blank" rel="noreferrer">kapilchandrawal001@gmail.com</a>
                </div>
            </div>
        </div >
    )
}
