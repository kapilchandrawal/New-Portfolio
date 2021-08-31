import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './Repocard.css';


const useStyles = makeStyles({

    root: {
        minWidth: 275,
        background: 'none',
        margin: 10 + "%",
        padding: '30px',
        boxShadow: '4px 4px grey, -5px -7px green'

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },

});

export default function Repocard(props) {
    const classes = useStyles();
    console.log(props)
    return (

        <div>
            
                <Grid container xs={12} lg={6}>

                    <Card className={classes.root}>
                        <CardContent className={classes.card}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                <h3>{props.data.name}</h3>

                                <p className="project-desc">{props.data.description}</p>

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
        </div>
                )
}
