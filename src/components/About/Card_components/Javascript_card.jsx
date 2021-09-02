import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './About_style.js.js';
import js_img from '../../assets/javascript.png'


export default function CSS_card() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root2}>
                <CardContent className={classes.card}>
                    <CardMedia
                        className={classes.tech_image}
                        image={js_img}
                        title="Javascript"
                    />
                </CardContent>
            </Card>
        </div>
    )
}
