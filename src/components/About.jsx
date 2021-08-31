import React from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import image from '../assets/myimage.JPG'
import html_img from '../assets/html.png'
import css_img from '../assets/css.png'
import js_img from '../assets/javascript.png'
import bootstrap_img from '../assets/bootstrap.png'
import react_img from '../assets/react.png'
import {useStyles} from './About_style.js'


export default function About() {
    const classes = useStyles();
    return (
        <Box className={classes.root} >
            <Grid container >
                <Grid item sm={0} lg={3}>

                </Grid>
                <Grid item sm={12} lg={6}>
                    <Box>
                        <img className={classes.image} src={image} alt="Kapil_Chandrawal'sImage"></img>
                    </Box>
                    <CardMedia
                        className={classes.image}
                        image={image}
                        title="Contemplative Reptile"
                    />
                    <Box className={classes.text}>
                        <Typography component='div'>
                            <Box>
                                A Little About Me:
                            </Box>
                        </Typography><br></br>
                        <Typography component='p'>
                            Hello and welcome to my website. My name is Kapil Chandrawal and I am a post graduate
                            student of Master of Computer Application at International Institute of Professional Studies.
                            This website has all the relevant information.
                        </Typography>
                        <Typography component='p'>As a computer science student, I&#39;ve worked on several projects both academic as well as for
                            self-learning. These projects cover certain aspects of multiple technologies such as web
                            development and database. This portfolio is one of my
                            projects that was designed as a part of self learning.</Typography>

                        <Typography component='p'>I am currently seeking full time opportunities after my post graduation
                            in 2020 and would love to connect with you. <br></br>
                        </Typography>
                    </Box><br></br>
                    <Box>
                        <Typography component="h2">Major Technical Skills</Typography>
                    </Box>
                    <Grid container className={classes.root2}>
                        <Grid item sm={0} lg={3} >

                        </Grid>

                        <Grid item sm={12} lg={6}>

                            <Grid container >
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <CardMedia
                                                className={classes.tech_image}
                                                image={html_img}
                                                title="Contemplative Reptile"
                                            />
                                        </CardContent>

                                    </Card>

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <CardMedia
                                                className={classes.tech_image}
                                                image={css_img}
                                                title="Contemplative Reptile"
                                            />
                                        </CardContent>

                                    </Card>

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <CardMedia
                                                className={classes.tech_image}
                                                image={bootstrap_img}
                                                title="Contemplative Reptile"
                                            />
                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <CardMedia
                                                className={classes.tech_image}
                                                image={js_img}
                                                title="Contemplative Reptile"
                                            />
                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Card className={classes.root2}>
                                        <CardContent className={classes.card}>
                                            <CardMedia
                                                className={classes.tech_image}
                                                image={react_img}
                                                title="Contemplative Reptile"
                                            />
                                        </CardContent>

                                    </Card>

                                </Grid>
                            </Grid>


                        </Grid>

                    </Grid>
                    <Grid item sm={0} lg={3} >

                    </Grid>
                </Grid>
                <Grid item sm={0} lg={3}>

                </Grid>

            </Grid>
        </Box>
    )
}
