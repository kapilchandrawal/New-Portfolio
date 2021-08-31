import React from 'react';
import Repocard from './Repocard';


const Results = (props) => {
    const { repos } = props;
    console.log(repos.data);

    const listRepos =
        repos.length !== 0 ? (
            repos.map((item) => <Repocard data={item} />)
        ) : (
            <h2>Please try to refetch repositories..</h2>
        );


    return (

        <div>
            {listRepos}
        </div>
    )
}
export default Results;