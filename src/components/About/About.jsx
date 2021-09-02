import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import image from '../../assets/myimage.JPG';
import { useStyles } from './About_style.js'
import Html from '../Card_components/HTML_card';
import Css from '../Card_components/CSS_card';
import Javascript from '../Card_components/Javascript_card';
import ReactCard from '../Card_components/React_card';


export default function About() {
    const classes = useStyles();
    return (
        <Box className={classes.root} >
            <Grid className={classes.container} container >
                <Grid item sm={0} lg={3}>
                </Grid>
                <Grid className={classes.margin_top} item sm={12} lg={6}>
                    <CardMedia
                        className={classes.image}
                        image={image}
                        title="Kapil"
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
                        <Typography className={classes.tech_skills} component="h2">Major Technical Skills</Typography>
                    </Box>
                    <Grid container className={classes.root2}>
                        <Grid item sm={12} lg={6}>
                            <Grid container >
                                <Grid item xs={12} lg={6}>
                                    <Html/>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Css/>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Javascript/>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <ReactCard/>
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
