import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import image from '../../assets/myimage.JPG';
import { useStyles } from './About_style.js'
import Cards from '../Card_components/Card';
import html_img from '../../assets/html.png';
import css_img from '../../assets/css.png';
import js_img from '../../assets/javascript.png';
import react_img from '../../assets/react.png';


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
                                    <Cards image={html_img} title={'HTML'} />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Cards image={css_img} title={'CSS'} />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Cards image={js_img} title={'Javascript'} />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Cards image={react_img} title={'React'} />
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
