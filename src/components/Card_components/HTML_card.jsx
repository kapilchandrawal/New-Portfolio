import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from '../About/About_style.js';
import html_img from '../../assets/html.png'


export default function HTML_card() {
    const classes = useStyles();
    return (
        <div>

            <Card className={classes.root2}>
                <CardContent className={classes.card}>
                    <CardMedia
                        className={classes.tech_image}
                        image={html_img}
                        title="Html"
                    />
                </CardContent>
            </Card>
        </div>
    )
}
