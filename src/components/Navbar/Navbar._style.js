import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    navImg: {
        maxHeight: '50px',
        float: 'left',
        fontSize: '1.5em',
        fontWeight: 300,
        marginBottom: '30px',
        color: 'white',
        
    },
    headerBar: {
        backgroundColor: '#0c263d',
        height: '55px',
        maxHeight: '70px',
        padding: '10px 5%',
        width: '90%',
        position: 'fixed',
        zIndex: '10'

    }
    ,
    navbarA: {
        textDecoration: 'none',
        margin: '10px',
        fontSize: '20px',
        color: 'white'
    },

    navbar: {
        float: 'right',
        padding: '15px',
        
    },

    my_name: {
        position: 'relative',
        bottom: '10px',
        fontWeight: 800
    },
});
export { useStyles };