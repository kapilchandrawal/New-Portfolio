import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    root: {
        minWidth: 275,
        background: '#0e2943',
        margin: 10 + "%",
        padding: '30px',
        boxShadow: '4px 4px grey, -5px -7px #567385'

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
    btn: {
        backgroundColor: 'rgb(120, 173, 110)!important',
        justifyContent: 'center',
        
    },
    btn_class: {
        justifyContent: 'center',
    },
    tags: {
        color: 'white'
    },
    
    projectDesc: {
        fontFamily: 'sans-serif',
        lineHeight: '1.5em',
        fontSize: 'larger',
        color: 'rgb(120, 173, 110)'
    }


});
export { useStyles };