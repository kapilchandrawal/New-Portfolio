import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useStyles } from './Repocard_style.js';

export default function Repocard(props) {
    const classes = useStyles();
    console.log(props)
    return (

        <Grid style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} container xs={12} lg={12}>
            <Card className={classes.root}>
                <CardContent className={classes.card}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <Link href={props.data.html_url} target="_blank">
                            {props.data.name}
                        </Link>
                        <Typography component='p' className={classes.projectDesc}>{props.data.description}</Typography>
                    </Typography>
                </CardContent>
                
            </Card>
        </Grid>

    )
}
