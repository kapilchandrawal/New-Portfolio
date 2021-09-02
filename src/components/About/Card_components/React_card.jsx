import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './About_style.js.js';
import react_img from '../../assets/react.png'


export default function CSS_card() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root2}>
                <CardContent className={classes.card}>
                    <CardMedia
                        className={classes.tech_image}
                        image={react_img}
                        title="React"
                    />
                </CardContent>
            </Card>
        </div>
    )
}
