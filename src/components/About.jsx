import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import image from '../assets/myimage.JPG'
import html_img from '../assets/html.png'
import css_img from '../assets/css.png'
import js_img from '../assets/javascript.png'
import bootstrap_img from '../assets/bootstrap.png'
import react_img from '../assets/react.png'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1

    },
    tech_image: {
        maxWidth: 150 + "px"
    },
    root2: {
        display: 'flex',
        justifyContent: 'space-around',
        background: 'none',
        margin: 10 + "%",
        // padding: '30px',
        // boxShadow: '4px 4px grey, -5px -7px green',

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image: {
        maxWidth: 250,
        borderRadius: 50 + "%",
        margin: 25 + "px",
        boxShadow: '0 2px 10px rgba(0,0,0,.95)!important'

    },
    text: {
        color: 'white',
        fontSize: 1.5 + "em",
        fontWeight: 300,
        marginBottom: 30 + "px"
    }
}));

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid container >
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <div>
                        <img className={classes.image} src={image} alt="Kapil_Chandrawal'sImage"></img>
                    </div>
                    <div className={classes.text}>
                        <strong>
                            <span>
                                <h2>A Little About Me:</h2>
                            </span>
                        </strong><br></br>
                        <p>
                            Hello and welcome to my website. My name is Kapil Chandrawal and I am a post graduate
                            student of Master of Computer Application at International Institute of Professional Studies.
                            This website has all the relevant information.
                        </p>
                        <p>As a computer science student, I&#39;ve worked on several projects both academic as well as for
                            self-learning. These projects cover certain aspects of multiple technologies such as web
                            development and database. This portfolio is one of my
                            projects that was designed as a part of self learning.</p>

                        <p>I am currently seeking full time opportunities after my post graduation
                            in 2020 and would love to connect with you. <br></br>
                        </p>
                    </div><br></br>
                    <div>
                        <h2>Major Technical Skills</h2>
                    </div>
                    <Grid container className={classes.root2}>
                        <Grid item xs={1} >

                        </Grid>

                        <Grid item xs={10}>

                            <Grid container xs={10} lg={8}>
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                <img src={html_img} className={classes.tech_image} alt=''></img>

                                            </Typography>

                                        </CardContent>
                                        <CardActions>

                                        </CardActions>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                <img src={css_img} className={classes.tech_image} alt=''></img>

                                            </Typography>

                                        </CardContent>
                                        <CardActions>

                                        </CardActions>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                <img src={bootstrap_img} className={classes.tech_image} alt=''></img>

                                            </Typography>

                                        </CardContent>
                                        <CardActions>

                                        </CardActions>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                <img src={js_img} className={classes.tech_image} alt=''></img>

                                            </Typography>

                                        </CardContent>
                                        <CardActions>

                                        </CardActions>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                <img src={react_img} className={classes.tech_image} alt=''></img>

                                            </Typography>

                                        </CardContent>
                                        <CardActions>

                                        </CardActions>
                                    </Card>

                                </Grid>
                            </Grid>


                        </Grid>

                    </Grid></Grid>
                <Grid item xs={1} >

                </Grid>

            </Grid>
        </div>
    )
}
