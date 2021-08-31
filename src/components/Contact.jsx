import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import './Contact.css';
import image from '../assets/Devi_Ahilya_Vishwavidyalaya_Logo.png';


export default function Contact() {
    return (
        <Typography component='div' className='contact_page'>

            <Typography component='div' class="col-sm-6 col-md-4 text-center footer-navigation">
                <Typography component='p'><img src={image} style={{}} alt="" /></Typography>
                <Typography component='p' class="links">Master of Computer Applications (MCA) </Typography>
                <Typography component='p' class="links">International Institute Of Professional Studies</Typography>
                <Typography component='p' class="links">Devi Ahilya Vishwavidyalaya, Indore</Typography>
                <Typography component='p' class="company-name">2014 - 2020</Typography>
            </Typography>
            <Typography component='div'>
                <Typography component='div'>
                    <Typography component='p'><span class="">Gulab Bagh Colony,</span> Indore,&nbsp;Madhya Pradesh,India-452010</Typography>
                </Typography>

            </Typography>
            <Typography component='div' class="social-links">
                <h4 style={{ fontSize: 25 }}>Connect</h4>
                <Typography component='div'>

                    <Link href="https://www.linkedin.com/in/kapil-chandrawal-b2a9241ba/" target="_blank">
                        LinkedIN
                    </Link>

                </Typography>
                <Typography component='div'>

                    <Link href="https://github.com/kapilchandrawal" target="_blank">
                        GitHub
                    </Link>
                </Typography>

            </Typography>
            <Typography component='div' class="social-links">
                <h4 style={{ fontSize: 25 }}>Mail me here:</h4>
                <Typography component='div'>
                    
                    <Link href="mailto:kapilchandrawal001@gmail.com" target="_blank">
                        kapilchandrawal001@gmail.com
                    </Link>
                </Typography>
            </Typography>
        </Typography>
    )
}
