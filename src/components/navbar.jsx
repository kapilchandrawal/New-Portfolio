import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import profile from '../assets/profile.png'
import './Navbar.css'


export default function Navbar() {
    return (
        <Typography component='div'>


            <Router>
                <Typography component='div' className="header_bar">
                    <Typography component='div' className="nav-img" >
                        <img src={profile} alt="test"  height="50px" /><span className="my_name">Kapil Chandrawal</span>
                    </Typography>
                    <Typography component='div' className="navbar">
                        <Link to='/'>About Me</Link>
                        <Link to='/projects'>My Projects</Link>

                        <Link to='/contact'>Contact Me</Link>
                    </Typography>
                </Typography>
                <Typography component='div' className="page">
                    <Switch>
                        <Route exact path='/' component={About}></Route>

                        <Route exact path='/projects' component={Project}></Route>
                        
                        <Route exact path='/contact' component={Contact}></Route>
                    </Switch>
                </Typography>
            </Router>
        </Typography>
    )
}
