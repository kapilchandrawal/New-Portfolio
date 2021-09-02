import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Repocard from '../Repocard/Repocard';
import TypoP from '../shared/TypoP';

export default function Project() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('https://api.github.com/users/kapilchandrawal/repos');
                const result = res.data;
                console.log("result", result)
                setRepos(result)
            }
            catch (err) {
                console.log(err)
            }

        }
        fetchData();
    }, [])
    console.log(repos.data);
    const listRepos =
        repos.length !== 0 ? (
            repos.map((item) => <Repocard data={item} />)
        ) : (
            <TypoP component='h2' content='Loading...'/>
        );
    return (

        <Grid container >
            <Grid item xs={1} lg={2}>
            </Grid>
            <Grid className="text_btn" style={{ marginTop: '100px' }} item xs={10} lg={8}>


                <TypoP component='div' content={listRepos}
                    
                />


            </Grid>
            <Grid item xs={1} lg={2}>
            </Grid>
        </Grid>


    );
}