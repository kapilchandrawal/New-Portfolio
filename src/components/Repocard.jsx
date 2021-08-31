import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Repocard.css';
import { useStyles } from './Repocard_style.js'




export default function Repocard(props) {
    const classes = useStyles();
    console.log(props)
    return (

        <Typography component='div'>

            <Grid container xs={12} lg={6}>

                <Card className={classes.root}>
                    <CardContent className={classes.card}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h3>{props.data.name}</h3>

                            <Typography component='p' className="project-desc">{props.data.description}</Typography>

                        </Typography>

                    </CardContent>
                    <CardActions className="btn_class">
                        <Button className="btn" size="small" href={props.data.url} target="_blank">Github</Button>
                        <Button className="btn" size="small" href={props.data.clone_url} target="_blank">Clone</Button>
                        <Button className="btn" size="small" href={props.data.forks_url} target="_blank">Fork</Button>
                        <Button className="btn" size="small" href={props.data.contributors_url} target="_blank">Contributors</Button>

                    </CardActions>
                </Card>
            </Grid>
        </Typography>
    )
}
