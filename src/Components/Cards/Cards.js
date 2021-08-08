import React, { useContext } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cs from 'classnames';

import styles from './Cards.module.css';
import { GlobalState } from '../../ContextApi';

const Cards = () => {
    const {status: {active, deaths, recovered, updated} } = useContext(GlobalState);


     const date = new Date(updated).toDateString();
    return (
        <div className="container">
           <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cs(styles.infected,styles.card)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={active} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{date}</Typography>
                    <Typography variant="body2">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cs(styles.recovered,styles.card)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={recovered} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{date}</Typography>
                    <Typography variant="body2">Number of Recovered Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cs(styles.deaths,styles.card)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{date}</Typography>
                    <Typography variant="body2">Deaths Causes by COVID-19</Typography>
                    </CardContent>
                </Grid>

           </Grid>
        </div>
    )
}

export default Cards;
