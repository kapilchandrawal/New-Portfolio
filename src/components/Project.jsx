import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Results from './Results';
import './Repocard.css';


export default function Project() {
    

    const [repos, setRepos] = useState([]);
    const [link, setLink] = useState('https://api.github.com/users/kapilchandrawal/repos');

    useEffect(() => setLink('https://api.github.com/users/kapilchandrawal/repos'), [])
    const handleClick = async () => {

        setLink('https://api.github.com/users/kapilchandrawal/repos');
        try {
            axios.get(link)
                .then(res => {
                    const result = res.data;
                    setRepos(result);
                    console.log(result);

                })
        }
        catch (err) {
            console.log(err)
        }
        console.log(repos)
    }

    return (
        <div>

            <div>
                <Grid container >
                    <Grid item xs={1} lg={2}>
                    </Grid>
                    <Grid item xs={10} lg={8}>
                        <Results repos={repos} />
                        <div>
                            <button className="btn" onClick={handleClick}>Show repo</button>
                        </div>
                    </Grid>
                    <Grid item xs={1} lg={2}>
                    </Grid>
                </Grid>
            </div>

        </div>

    );
}