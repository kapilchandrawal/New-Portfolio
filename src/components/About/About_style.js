import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1

    },
    tech_image: {
        width: 150 + "px",
        height: 150
    },
    root2: {
        display: 'flex',
        justifyContent: 'center',
        background: 'none',
        margin: '0 auto',


    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image: {
        maxWidth: 250,
        borderRadius: 50 + "%",

        boxShadow: '0 2px 10px rgba(0,0,0,.95)!important',
        height: 250,
        margin: '0 auto !important'

    }, text: {
        color: 'white',
        fontSize: 1.5 + "em",
        fontWeight: 300,
        marginBottom: 30 + "px",
        background: '#0c263d',
        opacity: 0.6,
        padding: '20px',
        borderRadius: '40px',
        marginTop: '20px'
    },
    media: {
        height: 250,
    },
    container: {
        margin: '0 auto'
    },
    tech_skills: {
        fontSize: 'revert',
        marginBottom: '20px'
    },
    margin_top:{
        marginTop: '100px'
    },
    card:{
        background: 'none'
    }
}));
export { useStyles };