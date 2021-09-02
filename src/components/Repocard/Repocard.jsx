import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { useStyles } from './Repocard_style.js';
import TypoP from '../shared/TypoP.jsx';

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
                    <TypoP className={classes.title} color="textSecondary" gutterBottom content={<span>
                        <Link href={props.data.html_url} target="_blank">
                            {props.data.name}
                        </Link>
                        <TypoP component='p' className={classes.projectDesc} content={props.data.description}></TypoP>
                    </span>} />
                </CardContent>

            </Card>
        </Grid>

    )
}
