import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function TypoP(props) {
    return (

        <div>
            <Typography component={props.component} className={props.className}>
                {props.content}
            </Typography>
            
        </div>
    )
}
