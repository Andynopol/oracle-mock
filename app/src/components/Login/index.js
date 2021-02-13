import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative'
    },
    glass: {
        minHeight: '80vh',
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), rgba(255,255,255,0.5))',
        borderRadius: '16px',
        padding: '20px'
    },
    img: {
        position: 'absolute',
        top: '80px',
        left: '-209px',
        width: '-250px',
        height: '250px',
        zIndex: 3,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },

    },
    logo: {
        backgroundColor: 'transparent',
        height: '100px',
        width: '100%',
        fontFamily: 'Agreement',
        color: 'white',
        fontSize: '60px',
        fontWeight: '700',
        userSelect: 'none',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        transform: 'rotate(-10deg)',
        marginBottom: '100px',
    },
    innerSection: {
        height: '100px',
        height: '300px',
        backgroundColor: 'red',
    },
    fields: {
        justifyContent: 'space-between'
    },
    wrapper: {
        minHeight: '100%',
    }
}));

export default function Login(props) {
    const { panther } = props;
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={1} md={4} />
            <Grid item xs={10} md={4}>

                <Grid container className={classes.root}>
                    <img className={classes.img} src={panther} alt="ceva" />
                    <Grid item xs={12} className={classes.glass}>
                        <Grid container direction="column" alignItems="center" className={classes.wrapper}>
                            <Grid item className={classes.logo}>
                                To do app
                            </Grid>
                            <Grid item>
                                <Grid container direction="column" spacing={2} className={classes.fields}>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="ligin-user"
                                            label="Username"
                                            type="text"
                                            autoComplete="current-password"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>

                                        <TextField
                                            id="login-password"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} md={4} />
        </Grid>
    );
}
