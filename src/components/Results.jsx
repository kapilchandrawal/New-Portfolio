import React from 'react';
import Repocard from './Repocard';
import Typography from '@material-ui/core/Typography';


const Results = (props) => {
    const { repos } = props;
    console.log(repos.data);

    const listRepos =
        repos.length !== 0 ? (
            repos.map((item) => <Repocard data={item} />)
        ) : (
            <Typography component='h2'>Please try to refetch repositories..</Typography>
        );


    return (

        <Typography component='div'>
            {listRepos}
        </Typography>
    )
}
export default Results;