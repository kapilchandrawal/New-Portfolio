import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import profile from '../assets/profile.png'
import { useStyles } from './Navbar._style.js'


export default function Navbar() {
    const classes = useStyles();
    return (
        <Typography component='div'>


            <Router>
                <Typography component='div' className={classes.headerBar}>
                    <Typography component='div' className={classes.navImg} >
                        <img src={profile} alt="test" height="50px" /><span className={classes.my_name}>Kapil Chandrawal</span>
                    </Typography>
                    <Typography component='div' className={classes.navbar}>
                        <Link className={classes.navbarA} to='/'>About Me</Link>
                        <Link className={classes.navbarA} to='/projects'>My Projects</Link>

                        <Link className={classes.navbarA} to='/contact'>Contact Me</Link>
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
