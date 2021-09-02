import React from 'react';
import { useStyles } from './Repocard_style.js';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';



export default function Buttons(props) {
    const classes = useStyles();

    return (
        <Typography component='div'>

            <Button className={classes.btn} size={props.size} href={props.data} target="_blank">{props.name}</Button>

        </Typography>
    )
}
